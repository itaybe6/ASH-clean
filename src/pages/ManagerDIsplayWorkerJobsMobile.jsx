import { Switch, FormControlLabel } from "@mui/material";
import ManagerJobWorkerMobile from "../components/ManagerJobWorkerMobile";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import heLocale from "date-fns/locale/he";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import "dayjs/locale/he";
import axios from "axios";
import CustomToggleButton from "../components/CustomToggleButton";
import CustomDatePicker from "../components/CustomDatePicker";
import MobileMenuManager from "./MobileMenuManager";

import "./ManagerDIsplayWorkerJobsMobile.css";

const ManagerDIsplayWorkerJobsMobile = () => {
  const [active, setActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [cleanings, setCleanings] = useState([]);
  const [filteredCleanings, setFilteredCleanings] = useState([]);
  const [displayMenu, setDisplayMenu] = useState(false)

  const navigate = useNavigate();


  const { id } = useParams();
  dayjs.locale("he");

  useEffect(() => {
    const fetchCleanings = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/manager/${id}/WorkerCleanings`);
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


  const addJob = () => {
    console.log(23)
    navigate(`/manager-add-job-to-worker/${id}`);
  }
  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };
  return (
    <div className="manager-display-worker-jobs">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}

      <div className="manager-display-worker-jobs-child" />
      <div className="div52">שלום (שם עובד)</div>
      <div className="div53">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="icon10" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper17" onClick={menu}>
        <img className="vector-icon24" alt="" src="/vector10.svg" />
      </button>
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"60vh"} name1="עבודות" name2="עבודות עתידיות" left="180px" />;
      <button className="rectangle-parent212" onClick={addJob}>
        <div className="group-child302" />
        <b className="b232">+</b>
      </button>
      <div className="date-picker-container2">
        <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
      <div className="jobs-list-container9">
        {filteredCleanings.map((job, index) => (
          <ManagerJobWorkerMobile
            key={job._id}
            nameb={job.branch.name}
            address={job.branch.address}
            dateTime={dayjs(job.dateTime).format("DD MMMM YYYY")}
          />
        ))}
      </div>

    </div>
  );
};

export default ManagerDIsplayWorkerJobsMobile;
