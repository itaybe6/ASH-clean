import React, { useState, useEffect } from "react";
import FetureJobWorkerMobile from "../components/FetureJobWorkerMobile";
import MobileMenuWorker from "./MobileMenuWorker";
import MobileMenuManager from "./MobileMenuManager";
import CustomToggleButton from "../components/CustomToggleButton";
import CustomDatePicker from "../components/CustomDatePicker";
import "./WorkerFutureJobsMobile.css";
import dayjs from "dayjs";
import "dayjs/locale/he";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const WorkerFutureJobsMobile = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [active, setActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [cleanings, setCleanings] = useState([]);
  const [filteredCleanings, setFilteredCleanings] = useState([]);
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { token } = useContext(AuthContext);
  const userRole = token?.role;
  const menu = () => {
    setDisplayMenu(!displayMenu);
  };
  const closeMenu = () => {
    setDisplayMenu(false);
  };
  const menuComponent = userRole === "Manager" ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : <MobileMenuWorker isOpen={displayMenu} closeMenu={closeMenu} />;

  useEffect(() => {
    const fetchCleanings = async () => {
      try {
        const response = await axios.get(`${apiUrl}/manager/${id}/WorkerCleanings`);
        setCleanings(response.data);
        setFilteredCleanings(response.data)
      } catch (error) {
        console.error("שגיאה בשליפת ניקיונות:", error);
      }
    };
    fetchCleanings();

  }, [id]);

  useEffect(() => {
    const filterCleanings = () => {
      let filtered = [...cleanings];
      filtered = filtered.filter(cleaning => Boolean(cleaning.done) === Boolean(active));
      if (selectedDate) {
        const formattedSelectedDate = dayjs(selectedDate).format("YYYY-MM-DD");
        filtered = filtered.filter(cleaning =>
          dayjs(cleaning.dateTime).format("YYYY-MM-DD") === formattedSelectedDate
        );
      }
      setFilteredCleanings(filtered);
    };

    filterCleanings();
  }, [cleanings, active, selectedDate]);
  return (
    <div className="worker-future-jobs-mobile">
      {displayMenu && menuComponent}
      <div className="worker-future-jobs-mobile-child" />
      <img className="icon26" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper41" onClick={menu}>
        <img className="vector-icon50" alt="" src="/vector10.svg" />
      </button>

      <div className="date-picker-container6">
        <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>

      <div className="CustomToggleButton223">
        <CustomToggleButton
          active={active}
          onClick={() => setActive(!active)}
          Height={"50px"}
          name1="עבודות"
          name2="עבודות עתידיות"
          left="0%"
        />
      </div>

      <div className="jobs-list-container">
        {filteredCleanings.map((job) => (
          <FetureJobWorkerMobile
            key={job._id}
            nameb={job.branch.customer.businessName}
            address={job.branch.name}
            time={dayjs(job.dateTime).format("DD/MM/YYYY")}
            id={job._id}
            done={job.done}
            workerId={id}

          />
        ))}
      </div>


    </div>
  );
};

export default WorkerFutureJobsMobile;
