import { Switch, FormControlLabel } from "@mui/material";
import FetureJobWorker from "../components/FetureJobWorker";
import "./WorkerFutureJobs.css";

const WorkerFutureJobs = () => {
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
      <button className="rectangle-parent44">
        <div className="group-child92" />
        <b className="b54">בחירת תאריך</b>
      </button>
      <FetureJobWorker
        nameb="אורן משי - שכונת הפארק"
        address="באר שבע, נחל פרת 9"
      />
      <div className="group-parent21">
        <button className="vector-wrapper43">
          <img className="vector-icon52" alt="" src="/vector2.svg" />
        </button>
        <button className="vector-wrapper44">
          <img className="vector-icon53" alt="" src="/vector22.svg" />
        </button>
      </div>
      <FormControlLabel
        className="worker-future-jobs-child1"
        control={<Switch color="primary" />}
      />
    </div>
  );
};

export default WorkerFutureJobs;
