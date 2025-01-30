import FeatureJobCustomer from "../components/FeatureJobCustomer";
import "./ManagerCustomerJobs.css";
import CustomToggleButton from "../components/CustomToggleButton.jsx";
import { useState } from "react";

const ManagerCustomerJobs = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="manager-customer-jobs">
      <div className="manager-customer-jobs-child" />
      <img className="manager-customer-jobs-item" alt="" src="/line-21.svg" />
      <div className="parent17">
        <div className="div59">לוח ניקיונות (שם סניף)</div>
        <div className="div60">
          כל הניקיונות האחרונים של הסניף שלך נרשמו כאן
        </div>
      </div>
      <FeatureJobCustomer
        namew="ליאור שם טוב"
        done="עתידי"
        time="14:53"
        date="24/05/2025"
      />
      <div className="manager-customer-jobs-inner">
        <div className="group-child32" />
      </div>
      <div className="frame-group">
        <div className="wrapper5">
          <div className="div61">שלום (שם מנהל)</div>
        </div>
        <div className="wrapper6">
          <div className="div62">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        </div>
      </div>
      <button className="rectangle-parent21">
        <div className="group-child33" />
        <b className="b31">בחירת סניף</b>
      </button>
      <div className="rectangle-parent22">
        <div className="group-child32" />
        <button className="vector-wrapper17">
          <img className="vector-icon24" alt="" src="/vector3.svg" />
        </button>
        <img className="icon15" alt="" src="/-02-11@2x.png" />
        <div className="group-parent10">
          <button className="vector-wrapper18">
            <img className="vector-icon25" alt="" src="/vector15.svg" />
          </button>
          <button className="vector-wrapper19">
            <img className="vector-icon26" alt="" src="/vector16.svg" />
          </button>
          <button className="parent18">
            <div className="div63">משתמשים</div>
            <img
              className="icbaseline-people-alt-icon4"
              alt=""
              src="/icbaselinepeoplealt1.svg"
            />
          </button>
        </div>
      </div>
      <div className="parent19">
        <div className="div64">תאריך</div>
        <div className="div65">שעה</div>
        <div className="div66">עובד מבצע</div>
        <div className="div67">סטטוס</div>
        <div className="div68">אישור</div>
      </div>
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height = {"80vh"} />;

    </div>
  );
};

export default ManagerCustomerJobs;
