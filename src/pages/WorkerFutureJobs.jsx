import FetureJobWorker from "../components/FetureJobWorker";
import "./WorkerFutureJobs.css";
import CustomToggleButton from "../components/CustomToggleButton.jsx";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import CustomDatePicker from "../components/CustomDatePicker.jsx";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/he";

const WorkerFutureJobs = () => {
  const [active, setActive] = useState(true);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [cleanings, setCleanings] = useState([]);
  const [filteredCleanings, setFilteredCleanings] = useState([]);
  const { id } = useParams();

  const setting = () => {
    navigate("/worker-edit-profile");
  };

  useEffect(() => {
    const fetchCleanings = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/manager/${id}/WorkerCleanings`);
        setCleanings(response.data);
        setFilteredCleanings(response.data)
        console.log(cleanings)
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
    <div className="worker-future-jobs">
      <div className="worker-future-jobs-child" />
      <img className="worker-future-jobs-item" alt="" src="/line-21.svg" />
      <div className="div116">שלום (שם עובד)</div>
      <div className="div117">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="worker-future-jobs-inner" />
      <button className="vector-wrapper42">
        <img className="vector-icon51" alt="" src="/vector1.svg" />
      </button>
      <img className="icon27" alt="" src="/-02-13@2x.png" />
      <div className="date-picker-container8">
        <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
      {/* כאן נציב את רשימת הרכיבים */}
      <div className="jobs-list-container2">
        {filteredCleanings.map((job) => (
          <FetureJobWorker
            key={job.id}
            nameb={job.branch.name}
            address={job.branch.address}
            time={dayjs(job.dateTime).format("DD MMMM YYYY")}

          />
        ))}
      </div>
     
      <div className="group-parent21">
        <button className="vector-wrapper43" onClick={setting}>
          <img className="vector-icon52" alt="" src="/vector2.svg" />
        </button>
        <button className="vector-wrapper44">
          <img className="vector-icon53" alt="" src="/vector22.svg" />
        </button>
      </div>

      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"57vh"} name2="עבודות עתידיות" name1="עבודות" left="50%" />;


    </div>
  );
};

export default WorkerFutureJobs;
