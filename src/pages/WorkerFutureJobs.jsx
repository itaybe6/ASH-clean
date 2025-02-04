import FetureJobWorker from "../components/FetureJobWorker";
import "./WorkerFutureJobs.css";
import CustomToggleButton from "../components/CustomToggleButton.jsx";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import heLocale from "date-fns/locale/he";
import TextField from "@mui/material/TextField";

const WorkerFutureJobs = () => {
  const [active, setActive] = useState(true);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const setting = () => {
    navigate("/worker-edit-profile");
  };

  // מערך עבודות לדוגמה, במקום קריאה מהשרת:
  const jobs = [
    {
      id: 1,
      nameb: "אורן משי - שכונת הפארק",
      address: "באר שבע, נחל פרת 9"
    },
    {
      id: 2,
      nameb: "חיים לוי - מרכז העיר",
      address: "רח' הרצל 12, באר שבע"
    },
    {
      id: 3,
      nameb: "נורית כהן - צפון חדש",
      address: "שדרות רגר 101, באר שבע"
    }
    ,
    {
      id:4,
      nameb: "נורית כהן - צפון חדש",
      address: "שדרות רגר 101, באר שבע"
    }
    ,
    {
      id:5,
      nameb: "נורית כהן - צפון חדש",
      address: "שדרות רגר 101, באר שבע"
    }
    // אפשר להוסיף עוד...
  ];

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
         <div className="date-picker-container">
           <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={heLocale}>
             <MobileDatePicker
               sx={{ width: "100px", left: "1000px", borderRadius: "30px" , top : "30px"}}
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
      {/* כאן נציב את רשימת הרכיבים */}
      <div className="jobs-list-container2">
        {jobs.map((job) => (
          <FetureJobWorker
            key={job.id}
            nameb={job.nameb}
            address={job.address}
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

      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height = {"57vh"} name2="עבודות עתידיות" name1="עבודות" left="50%" />;


    </div>
  );
};

export default WorkerFutureJobs;
