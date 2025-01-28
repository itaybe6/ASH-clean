import { Switch, FormControlLabel } from "@mui/material";
import FetureJobWorkerMobile from "../components/FetureJobWorkerMobile";
import "./WorkerBranchSearchIphon.css";

const WorkerBranchSearchIphon = () => {
  return (
    <div className="worker-future-jobs-mobile">
      <div className="worker-future-jobs-mobile-child" />
      <div className="div114">שלום (שם עובד)</div>
      <div className="div115">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="icon26" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper41">
        <img className="vector-icon50" alt="" src="/vector10.svg" />
      </button>
      <button className="worker-future-jobs-mobile-inner">
        <div className="rectangle-parent43">
          <div className="group-child91" />
          <b className="b53">בחירת תאריך</b>
        </div>
      </button>
      <FetureJobWorkerMobile
        nameb="אורן משי - שכונת הפארק"
        address="באר שבע, נחל פרת 9"
      />
      <FormControlLabel
        className="worker-future-jobs-mobile-item"
        control={<Switch color="primary" />}
      />
    </div>
  );
};

export default WorkerBranchSearchIphon;
