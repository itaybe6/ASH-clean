import { Switch, FormControlLabel } from "@mui/material";
import ManagerJobWorkerMobile from "../components/ManagerJobWorkerMobile";
import "./ManagerDIsplayWorkerJobsMobile.css";

const ManagerDIsplayWorkerJobsMobile = () => {
  return (
    <div className="manager-display-worker-jobs">
      <div className="manager-display-worker-jobs-child" />
      <div className="div52">שלום (שם עובד)</div>
      <div className="div53">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="icon10" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper17">
        <img className="vector-icon24" alt="" src="/vector10.svg" />
      </button>
      <button className="manager-display-worker-jobs-inner">
        <div className="rectangle-parent14">
          <div className="group-child19" />
          <b className="b18">בחירת תאריך</b>
        </div>
      </button>
      <ManagerJobWorkerMobile
        nameb="אורן משי - שכונת הפארק"
        address="באר שבע, נחל פרת 9"
        dateTIme="יום ה’ בשעה 14:30"
      />
      <FormControlLabel
        className="manager-display-worker-jobs-item"
        control={<Switch color="primary" />}
      />
    </div>
  );
};

export default ManagerDIsplayWorkerJobsMobile;
