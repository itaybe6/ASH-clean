import { Switch, FormControlLabel } from "@mui/material";
import JobOptionClientMobile from "../components/JobOptionClientMobile";
import "./ClientBranchIphone.css";

const ClientBranchIphone = () => {
  return (
    <div className="client-branch-iphone">
      <div className="client-branch-iphone-child" />
      <div className="client-branch-iphone-item" />
      <div className="div164">שלום (שם לקוח)</div>
      <div className="div165">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="client-branch-iphone-inner" alt="" src="/group-247.svg" />
      <img className="icon35" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper61">
        <img className="vector-icon70" alt="" src="/vector10.svg" />
      </button>
      <JobOptionClientMobile
        date="24/05/2025"
        time="14:53"
        namew="ליאור שם טוב"
        done="נעשה"
      />
      <div className="parent39">
        <div className="div166">לוח ניקיונות (שם סניף)</div>
        <div className="div167">
          כל הניקיונות האחרונים של הסניף שלך נרשמו כאן
        </div>
      </div>
      <FormControlLabel
        className="client-branch-iphone-child1"
        control={<Switch color="primary" />}
      />
      <button className="rectangle-parent59">
        <div className="group-child127" />
        <b className="b65">בחירת סניף</b>
      </button>
    </div>
  );
};

export default ClientBranchIphone;
