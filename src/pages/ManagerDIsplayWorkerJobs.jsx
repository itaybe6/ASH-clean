import CustomToggleButton from "../components/CustomToggleButton";
import CustomDatePicker from "../components/CustomDatePicker";
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
import "./ManagerDIsplayWorkerJobs.css";

const ManagerDIsplayWorkerJobs = () => {
  const [active, setActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [cleanings, setCleanings] = useState([]);
  const [filteredCleanings, setFilteredCleanings] = useState([]); // ניקיונות מסוננים

  const { id } = useParams();
  dayjs.locale("he");
  const navigate = useNavigate();

  const setting = () => {
    navigate('/manager-edit-profile')
  }

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
    navigate(`/manager-add-job-to-worker/${id}`);
  }

  return (
    <div className="manager-display-worker-jobs1">
      <div className="manager-display-worker-jobs-child1" />
      <img className="line-icon" alt="" src="/line-21.svg" />
      <div className="div62">שלום (שם עובד)</div>
      <div className="div63">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="date-picker-container">
        <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>

      <div className="jobs-list-container8">
        {filteredCleanings.map((job) => (
          <FetureJobWorker2
            key={job._id}
            nameb={job.branch.name}
            address={job.branch.address}
            dateTime={dayjs(job.dateTime).format("DD MMMM YYYY")}
          />
        ))}
      </div>
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"50vh"} name1="עבודות" name2="עבודות עתידיות" left="900px" />;

      <button className="rectangle-parent21" onClick={addJob}>
        <div className="group-child30" />
        <b className="b23">+</b>
      </button>
      <div className="rectangle-parent22">
        <div className="group-child31" />
        <button className="vector-wrapper22">
          <img className="vector-icon29" alt="" src="/vector1.svg" />
        </button>
        <img className="icon13" alt="" src="/-02-13@2x.png" />
        <div className="group-parent6">
          <button className="vector-wrapper23" onClick={setting}>
            <img className="vector-icon30" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper24">
            <img className="vector-icon31" alt="" src="/vector9.svg" />
          </button>
          <button className="parent13">
            <div className="div64">משתמשים</div>
            <img
              className="icbaseline-people-alt-icon5"
              alt=""
              src="/icbaselinepeoplealt.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerDIsplayWorkerJobs;
