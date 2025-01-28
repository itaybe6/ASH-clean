import { useState } from "react";
import { TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import JobOptionMobile from "../components/JobOptionMobile";
import "./ManagerJobsMobile.css";

const ManagerJobsMobile = () => {
  const [groupDateTimePickerValue, setGroupDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="manager-jobs-mobile">
        <div className="manager-jobs-mobile-inner">
          <div className="frame-child1" />
        </div>
        <div className="div23">שלום (שם מנהל)</div>
        <div className="div24">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        <div className="wrapper2">
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
        <JobOptionMobile
          branch="שכונת הפארק, באר שבע"
          worker="ליאור שם טוב"
          bussiness="אורן משי"
          date="24/05/2025"
          done="נעשה"
        />
         <button className="vector-wrapper67">
        <img className="vector-icon76" alt="" src="/vector10.svg" />
      </button>
        <img className="icon7" alt="" src="/-02-11@2x.png" />
      </div>
    </LocalizationProvider>
  );
};

export default ManagerJobsMobile;
