import { Switch, FormControlLabel } from "@mui/material";
import CustomerOption from "../components/CustomerOption";
import "./ManagerDisplayCustomers.css";

const ManagerDisplayCustomers = () => {
  return (
    <div className="manager-display-customers">
      <div className="manager-display-customers-inner">
        <div className="frame-child2" />
      </div>
      <img
        className="manager-display-customers-child"
        alt=""
        src="/line-21.svg"
      />
      <div className="div29">שלום (שם מנהל)</div>
      <div className="div30">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <input
        className="manager-display-customers-item"
        placeholder="חיפוש משתמש..."
        type="text"
      />
      <FormControlLabel
        className="group-formcontrollabel"
        control={<Switch color="primary" />}
      />
      <button className="rectangle-parent11">
        <div className="group-child19" />
        <b className="b20">+</b>
      </button>
      <div className="customeroption-wrapper">
        <CustomerOption nameCus="אורן משי" numBranch="8" />
      </div>
      <div className="parent9">
        <div className="div31">משתמש</div>
        <div className="div32">שם מלא</div>
        <div className="div33">כמות סניפים</div>
        <div className="div34">עבודות</div>
      </div>
      <div className="rectangle-parent12">
        <div className="group-child20" />
        <button className="vector-wrapper5">
          <img className="vector-icon8" alt="" src="/vector8.svg" />
        </button>
        <img className="icon9" alt="" src="/-02-13@2x.png" />
        <div className="group-parent5">
          <button className="vector-wrapper6">
            <img className="vector-icon9" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper7">
            <img className="vector-icon10" alt="" src="/vector9.svg" />
          </button>
          <button className="parent10">
            <div className="div35">משתמשים</div>
            <img
              className="icbaseline-people-alt-icon1"
              alt=""
              src="/icbaselinepeoplealt.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerDisplayCustomers;
