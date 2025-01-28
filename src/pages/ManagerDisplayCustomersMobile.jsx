import { Switch, FormControlLabel } from "@mui/material";
import CustomerOptionMobile from "../components/CustomerOptionMobile";
import "./ManagerDisplayCustomersMobile.css";

const ManagerDisplayCustomersMobile = () => {
  return (
    <div className="manager-display-customers-mo">
      <div className="manager-display-customers-mo-child" />
      <b className="b22">שלום (שם מנהל)</b>
      <div className="div43">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="icon11" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper11">
        <img className="vector-icon14" alt="" src="/vector10.svg" />
      </button>
      <div className="rectangle-parent15">
        <div className="group-child23" />
        <div className="div44">חיפוש משתמש...</div>
      </div>
      <div className="group-parent7">
        <img className="group-child24" alt="" src="/group-275.svg" />
        <b className="b23">+</b>
      </div>
      <CustomerOptionMobile bname="אורן משי" numbranch="8" />
      <FormControlLabel
        className="manager-display-customers-mo-item"
        control={<Switch color="primary" />}
      />
    </div>
  );
};

export default ManagerDisplayCustomersMobile;
