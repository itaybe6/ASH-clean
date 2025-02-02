import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Search from "../components/Search";
import "./ManagerJobs.css";

const ManagerJobs = () => {
  const [groupDateTimePickerValue, setGroupDateTimePickerValue] = useState(null);
  const searchItems = [
    {
      worker: "ליאור שם טוב",
      status: "נעשה",
      branch: "שכונות, פארק, באר שבע",
      date: "24/05/2025",
      bussiness: "אורן משי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },{
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    // אפשר להוסיף כאן עוד אובייקטים כרצונך
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="manager-jobs">
        <div className="manager-jobs-child" />
        <div className="parent5">
          <div className="div14">שלום (שם מנהל)</div>
          <div className="div15">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        </div>
        <div className="search-list-container">
          {searchItems.map((item, index) => (
            <Search
              key={index}
              worker={item.worker}
              status={item.status}
              branch={item.branch}
              date={item.date}
              bussiness={item.bussiness}
            />
          ))}
        </div>
        <div className="wrapper1">
          <DatePicker
            value={groupDateTimePickerValue}
            onChange={(newValue) => {
              setGroupDateTimePickerValue(newValue);
            }}
            sx={{}}
            slotProps={{
              textField: {
                size: "medium",
                fullWidth: false,
                required: false,
                autoFocus: false,
                error: false,
                color: "primary",
              },
              openPickerIcon: {
                component: () => <></>,
              },
            }}
          />
        </div>
        <div className="rectangle-parent7">
          <div className="group-child11" />
          <button className="vector-wrapper">
            <img className="vector-icon" alt="" src="/vector1.svg" />
          </button>
          <img className="icon6" alt="" src="/-02-13@2x.png" />
          <div className="group-parent2">
            <button className="vector-container">
              <img className="vector-icon1" alt="" src="/vector2.svg" />
            </button>
           <button className="vector-wrapper4">
            
            <img className="vector-icon7" alt="" src="/vector7.svg" />
          </button>
            <button className="parent6">
              <div className="div16">משתמשים</div>
              <img
                className="icbaseline-people-alt-icon"
                alt=""
                src="/icbaselinepeoplealt.svg"
              />
            </button>
          </div>
        </div>
      
      </div>
    </LocalizationProvider>
  );
};

export default ManagerJobs;
