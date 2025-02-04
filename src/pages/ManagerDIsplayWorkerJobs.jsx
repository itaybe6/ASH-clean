import { Switch, FormControlLabel } from "@mui/material";
import FetureJobWorker2 from "../components/FetureJobWorker2";
import CustomToggleButton from "../components/CustomToggleButton";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import heLocale from "date-fns/locale/he";
import TextField from "@mui/material/TextField";
import "./ManagerDIsplayWorkerJobs.css";

const ManagerDIsplayWorkerJobs = () => {
  const [active, setActive] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { id } = useParams();
  const managerJobs = [
    { id: 1, name: "אורן משי - שכונת הפארק", address: "באר שבע, נחל פרת 9", time: "14:30" },
    { id: 2, name: "חיים לוי - מרכז העיר", address: "רח' הרצל 12, באר שבע", time: "15:00" },
    { id: 3, name: "נורית כהן - צפון חדש", address: "שדרות רגר 101, באר שבע", time: "16:15" },
  ];

  return (
    <div className="manager-display-worker-jobs1">
      <div className="manager-display-worker-jobs-child1" />
      <img className="line-icon" alt="" src="/line-21.svg" />
      <div className="div62">שלום (שם עובד)</div>
      <div className="div63">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
       <div className="date-picker-container">
                 <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={heLocale}>
                   <MobileDatePicker
                     sx={{ width: "100px", left: "1050px", borderRadius: "30px" , top : "0px"}}
                     label="בחר תאריך"
                     value={selectedDate}
                     onChange={(date) => setSelectedDate(date)}
                     renderInput={(params) => (
                       <TextField
                         {...params}
                         className="mui-date-input"
                         sx={{
                           width: "10px",
                           backgroundColor: "#FF7F50",
                           borderRadius: "30px",
                           "& .MuiInputBase-input": {
                             color: "white",
                             fontWeight: "bold",
                             textAlign: "center",
                           },
                           "& .MuiOutlinedInput-root": {
                             "& fieldset": { border: "none" },
                           },
                         }}
                       />
                     )}
                   />
                 </LocalizationProvider>
               </div>

      <div className="jobs-list-container8">
        {managerJobs.map((job) => (
          <FetureJobWorker2
            key={job.id}
            nameb={job.name}
            address={job.address}
            dateTime={job.time}
          />
        ))}
      </div>
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"50vh"} name1="עבודות" name2="עבודות עתידיות" left="900px" />;

      <button className="rectangle-parent21">
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
          <button className="vector-wrapper23">
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
