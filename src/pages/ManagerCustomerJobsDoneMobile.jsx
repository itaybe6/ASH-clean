import { Switch, FormControlLabel } from "@mui/material";
import DoneJobCustomerMobile from "../components/DoneJobCustomerMobile";
import "./ManagerCustomerJobsDoneMobile.css";

const ManagerCustomerJobsDoneMobile = () => {
  return (
    <div className="manager-customer-jobs-done-m">
      <div className="manager-customer-jobs-done-m-child" />
      <div className="manager-customer-jobs-done-m-item" />
      <b className="b28">שלום (שם מנהל)</b>
      <div className="div56">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img
        className="manager-customer-jobs-done-m-inner"
        alt=""
        src="/group-247.svg"
      />
      <img className="icon14" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper16">
        <img className="vector-icon21" alt="" src="/vector10.svg" />
      </button>
      <DoneJobCustomerMobile
        date="24/05/2025"
        time="14:53"
        namew="ליאור שם טוב"
        done="נעשה"
      />
      <div className="parent16">
        <div className="div57">לוח ניקיונות (שם סניף)</div>
        <div className="div58">
          כל הניקיונות האחרונים של הסניף שלך נרשמו כאן
        </div>
      </div>
      <FormControlLabel
        className="manager-customer-jobs-done-m-child1"
        control={<Switch color="primary" />}
      />
      <button className="rectangle-parent19">
        <div className="group-child30" />
        <b className="b29">בחירת סניף</b>
      </button>
      <button className="group2">
        <img className="vector-icon22" alt="" src="/vector13.svg" />
        <img className="vector-icon23" alt="" src="/vector14.svg" />
      </button>
      <button className="rectangle-parent20">
        <div className="group-child31" />
        <b className="b30">+</b>
      </button>
    </div>
  );
};

export default ManagerCustomerJobsDoneMobile;
