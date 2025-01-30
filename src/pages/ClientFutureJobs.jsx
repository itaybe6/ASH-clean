import { Switch, FormControlLabel } from "@mui/material";
import FutureJobClient from "../components/FutureJobClient";
import "./ClientFutureJobs.css";
import { useNavigate } from 'react-router-dom';

const ClientFutureJobs = () => {
  const navigate = useNavigate();
  const Conatct = () => {
    navigate("/client-contact-us");
  }
  const Edit = () => {
    navigate("/client-edit-profile");
  }
  return (
    <div className="client-future-jobs">
      <div className="client-future-jobs-child" />
      <img className="client-future-jobs-item" alt="" src="/line-21.svg" />
      <div className="parent40">
        <div className="div168">לוח ניקיונות (שם סניף)</div>
        <div className="div169">
          כל הניקיונות האחרונים של הסניף שלך נרשמו כאן
        </div>
      </div>
      <div className="parent41">
        <div className="div170">תאריך</div>
        <div className="div171">שעה</div>
        <div className="div172">עובד מבצע</div>
        <div className="div173">סטטוס</div>
        <div className="div174">אישור</div>
      </div>
      <FutureJobClient
        namew="ליאור שם טוב"
        date="24/05/2025"
        done="עתידי"
        time="14:53"
      />
      <div className="rectangle-parent60">
        <div className="group-child128" />
        <button className="vector-wrapper62">
          <img className="vector-icon71" alt="" src="/vector8.svg" />
        </button>
        <img className="icon36" alt="" src="/-02-13@2x.png" />
        <div className="group-parent30">
          <button className="vector-wrapper63" onClick={Edit}>
            <img className="vector-icon72" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper64">
            <img className="vector-icon73" alt="" src="/vector22.svg" />
          </button>
          <button className="parent42" onClick={Conatct}>
            <div className="div175">צור קשר</div>
            <img
              className="icbaseline-contact-mail-icon3"
              alt=""
              src="/icbaselinecontactmail.svg"
            />
          </button>
        </div>
      </div>
      <div className="frame-parent5">
        <div className="wrapper11">
          <div className="div176">שלום (שם לקוח)</div>
        </div>
        <div className="wrapper12">
          <div className="div177">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        </div>
      </div>
      <button className="rectangle-parent61">
        <div className="group-child129" />
        <b className="b66">בחירת סניף</b>
      </button>
      <FormControlLabel
        className="client-future-jobs-inner"
        control={<Switch color="primary" />}
      />
    </div>
  );
};

export default ClientFutureJobs;
