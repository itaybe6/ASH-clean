import { Switch, FormControlLabel } from "@mui/material";
import WorkerOption from "../components/WorkerOption";
import "./ManagerDisplayWorkers.css";
import CustomToggleButton from "../components/CustomToggleButton.jsx";
import { useState } from "react";

const ManagerDisplayWorkers = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="manager-display-workers">
      <div className="manager-display-workers-inner">
        <div className="frame-child3" />
      </div>
      <img
        className="manager-display-workers-child"
        alt=""
        src="/line-21.svg"
      />
      <div className="div36">שלום (שם מנהל)</div>
      <div className="div37">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <input
        className="manager-display-workers-item"
        placeholder="חיפוש משתמש..."
        type="text"
      />
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"50vh"} name1="עובדים" name2="לקוחות" />;

      <button className="rectangle-parent13">
        <div className="group-child21" />
        <b className="b21">+</b>
      </button>

      <div className="workeroption-wrapper">
        <WorkerOption nameW="ליאור שם טוב" />
      </div>
      <div className="rectangle-parent14">
        <div className="group-child22" />
        <button className="vector-wrapper8">
          <img className="vector-icon11" alt="" src="/vector1.svg" />
        </button>
        <img className="icon10" alt="" src="/-02-13@2x.png" />
        <div className="group-parent6">
          <button className="vector-wrapper9">
            <img className="vector-icon12" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper10">
            <img className="vector-icon13" alt="" src="/vector9.svg" />
          </button>
          <button className="parent12">
            <div className="div42">משתמשים</div>
            <img
              className="icbaseline-people-alt-icon2"
              alt=""
              src="/icbaselinepeoplealt.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerDisplayWorkers;
