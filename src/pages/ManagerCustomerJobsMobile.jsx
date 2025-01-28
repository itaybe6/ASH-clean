import { Switch, FormControlLabel } from "@mui/material";
import FeatureJobCustomerMobile from "../components/FeatureJobCustomerMobile";
import "./ManagerCustomerJobsMobile.css";

const ManagerCustomerJobsMobile = () => {
  return (
    <div className="manager-customer-jobs-mobile">
      <div className="manager-customer-jobs-mobile-child" />
      <div className="manager-customer-jobs-mobile-item" />
      <b className="b32">שלום (שם מנהל)</b>
      <div className="div69">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img
        className="manager-customer-jobs-mobile-inner"
        alt=""
        src="/group-247.svg"
      />
      <img className="icon16" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper20">
        <img className="vector-icon27" alt="" src="/vector10.svg" />
      </button>
      <div className="parent20">
        <div className="div70">לוח ניקיונות (שם סניף)</div>
        <div className="div71">
          כל הניקיונות האחרונים של הסניף שלך נרשמו כאן
        </div>
      </div>
      <FormControlLabel
        className="manager-customer-jobs-mobile-child1"
        control={<Switch color="primary" />}
      />
      <button className="rectangle-parent23">
        <div className="group-child35" />
        <b className="b33">בחירת סניף</b>
      </button>
      <FeatureJobCustomerMobile
        namew="ליאור שם טוב"
        time="14:53"
        date="24/05/2025"
        prop="done"
      />
    </div>
  );
};

export default ManagerCustomerJobsMobile;
