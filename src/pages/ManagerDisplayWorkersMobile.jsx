import { Switch, FormControlLabel } from "@mui/material";
import WorkerOptionMobile from "../components/WorkerOptionMobile";
import "./ManagerDisplayWorkersMobile.css";

const ManagerDisplayWorkersMobile = () => {
  return (
    <div className="manager-display-workers-mobi">
      <div className="manager-display-workers-mobi-child" />
      <b className="b24">שלום (שם מנהל)</b>
      <div className="div45">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="icon12" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper12">
        <img className="vector-icon15" alt="" src="/vector10.svg" />
      </button>
      <input className="manager-display-workers-mobi-item" type="text" />
      <button className="group-parent8">
        <img className="group-child25" alt="" src="/group-275.svg" />
        <b className="b25">+</b>
      </button>
      <WorkerOptionMobile nameW="ליאור שם טוב" />
      <FormControlLabel
        className="manager-display-workers-mobi-inner"
        control={<Switch color="primary" />}
      />
    </div>
  );
};

export default ManagerDisplayWorkersMobile;
