import JobOptionClient from "../components/JobOptionClient";
import "./ClientJobs.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import CustomToggleButton from "../components/CustomToggleButton";

const ClientJobs = () => {
  const [active, setActive] = useState(true);
  const navigate = useNavigate();
  const Conatct = () => {
    navigate("/client-contact-us");
  }
  const Edit = () => {
    navigate("/client-edit-profile");
  }
  return (
    <div className="client-jobs">
      <div className="client-jobs-child" />
      <img className="client-jobs-item" alt="" src="/line-21.svg" />
      <div className="parent36">
        <div className="div154">לוח ניקיונות (שם סניף)</div>
        <div className="div155">
          כל הניקיונות האחרונים של הסניף שלך נרשמו כאן
        </div>
      </div>
      <div className="frame-parent4">
        <div className="wrapper9">
          <div className="div156">שלום (שם לקוח)</div>
        </div>
        <div className="wrapper10">
          <div className="div157">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        </div>
      </div>
      <button className="rectangle-parent57">
        <div className="group-child125" />
        <b className="b64">בחירת סניף</b>
      </button>
      <div className="parent37">
        <div className="div158">תאריך</div>
        <div className="div159">שעה</div>
        <div className="div160">עובד מבצע</div>
        <div className="div161">סטטוס</div>
        <div className="div162">אישור</div>
      </div>
      <JobOptionClient
        date="24/05/2025"
        time="14:53"
        namew="ליאור שם טוב"
        done="נעשה"
      />
    
      <div className="rectangle-parent58">
        <div className="group-child126" />
        <button className="vector-wrapper58">
          <img className="vector-icon67" alt="" src="/vector8.svg" />
        </button>
        <img className="icon34" alt="" src="/-02-13@2x.png" />
        <div className="group-parent29">
          <button className="vector-wrapper59" onClick={Edit}>
            <img className="vector-icon68" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper60">
            <img className="vector-icon69" alt="" src="/vector22.svg" />
          </button>
          <button className="parent38" onClick={Conatct}>
            <div className="div163">צור קשר</div>
            <img
              className="icbaseline-contact-mail-icon2"
              alt=""
              src="/icbaselinecontactmail.svg"
            />
          </button>
        </div>
      </div>
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height = {"80vh"}/>;
    </div>
  );
};

export default ClientJobs;
