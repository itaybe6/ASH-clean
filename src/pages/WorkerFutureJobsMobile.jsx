import React, { useState } from "react";
import FetureJobWorkerMobile from "../components/FetureJobWorkerMobile";
import MobileMenuWorker from "./MobileMenuWorker";
import CustomToggleButton from "../components/CustomToggleButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import heLocale from "date-fns/locale/he";
import TextField from "@mui/material/TextField";
import "./WorkerFutureJobsMobile.css";

const WorkerFutureJobsMobile = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [active, setActive] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // מערך עבודות להדגמה:
  const jobs = [
    { id: 1, nameb: "אורן משי - שכונת הפארק", address: "באר שבע, נחל פרת 9" },
    { id: 2, nameb: "מאפיית לוי - מרכז העיר", address: "רח' הרצל 12, באר שבע" },
    { id: 4, nameb: "פיצוחי כהן - צפון חדש", address: "שד' רגר 101, באר שבע" },
    { id: 5, nameb: "פיצוחי כהן - צפון חדש", address: "שד' רגר 101, באר שבע" },
    { id: 6, nameb: "פיצוחי כהן - צפון חדש", address: "שד' רגר 101, באר שבע" },
    // ניתן להוסיף כמה שרוצים
  ];

  const menu = () => {
    setDisplayMenu(!displayMenu);
  };

  const closeMenu = () => {
    setDisplayMenu(false);
  };

  return (
    <div className="worker-future-jobs-mobile">
      {displayMenu && <MobileMenuWorker isOpen={displayMenu} closeMenu={closeMenu} />}

      <div className="worker-future-jobs-mobile-child" />
      <div className="div114">שלום (שם עובד)</div>
      <div className="div115">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="icon26" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper41" onClick={menu}>
        <img className="vector-icon50" alt="" src="/vector10.svg" />
      </button>

      <div className="date-picker-container">
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={heLocale}>
          <MobileDatePicker
            sx={{ width: "100px", left: "50px", borderRadius: "30px" }}
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
      <CustomToggleButton
        active={active}
        onClick={() => setActive(!active)}
        Height={"58vh"}
        name1="עבודות"
        name2="עבודות עתידיות"
        left="48%"
      />
      {/* כאן מפעילים את הרכיב עבור כל עבודה */}
      <div className="jobs-list-container">
        {jobs.map((job) => (
          <FetureJobWorkerMobile
            key={job.id}
            nameb={job.nameb}
            address={job.address}
          />
        ))}
      </div>

     
    </div>
  );
};

export default WorkerFutureJobsMobile;
