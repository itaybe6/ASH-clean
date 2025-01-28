import { Switch, FormControlLabel } from "@mui/material";
import FutureJobClientMobile from "../components/FutureJobClientMobile";
import "./ClientFutureJobsMobile.css";

const ClientFutureJobsMobile = () => {
  return (
    <div className="client-future-jobs-mobile">
      <div className="client-future-jobs-mobile-child" />
      <div className="div180">שלום (שם לקוח)</div>
      <div className="div181">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img
        className="client-future-jobs-mobile-item"
        alt=""
        src="/group-247.svg"
      />
      <img className="icon38" alt="" src="/-02-11@2x.png" />
      <div className="parent43">
        <div className="div182">לוח ניקיונות (שם סניף)</div>
        <div className="div183">
          כל הניקיונות האחרונים של הסניף שלך נרשמו כאן
        </div>
      </div>
      <FormControlLabel
        className="client-future-jobs-mobile-inner"
        control={<Switch color="primary" />}
      />
      <button className="rectangle-parent62">
        <div className="group-child130" />
        <b className="b67">בחירת סניף</b>
      </button>
      <FutureJobClientMobile
        namew="ליאור שם טוב"
        time="14:53"
        date="24/05/2025"
        done="נעשה"
      />
      <button className="vector-wrapper67">
        <img className="vector-icon76" alt="" src="/vector10.svg" />
      </button>
    </div>
  );
};

export default ClientFutureJobsMobile;
