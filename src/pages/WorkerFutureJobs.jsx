import FetureJobWorker from "../components/FetureJobWorker";
import "./WorkerFutureJobs.css";
import CustomToggleButton from "../components/CustomToggleButton.jsx";
import { useState, useEffect } from "react";
import {  useParams } from 'react-router-dom';
import CustomDatePicker from "../components/CustomDatePicker.jsx";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/he";

const WorkerFutureJobs = () => {
  const [active, setActive] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [cleanings, setCleanings] = useState([]);
  const [filteredCleanings, setFilteredCleanings] = useState([]);
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;



  useEffect(() => {
    const fetchCleanings = async () => {
      try {
        const response = await axios.get(`${apiUrl}/manager/${id}/WorkerCleanings`);
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


      <div className="date-picker-container8">
        <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
      {/* כאן נציב את רשימת הרכיבים */}
      <div className="jobs-list-container2">
        {filteredCleanings.map((job) => (
          <FetureJobWorker
            key={job._id}
            nameb={job.branch.name}
            address={job.branch.address}
            time={dayjs(job.dateTime).format("DD/MM/YYYY")}
            id={job._id}
            done = {job.done}
          />
        ))}
      </div>


      <div className="CustomToggleButton1707">
        <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"52vh"} name2="עבודות עתידיות" name1="עבודות" left="40%" />
      </div>


    </div>
  );
};

export default WorkerFutureJobs;
