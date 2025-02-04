import { Switch, FormControlLabel } from "@mui/material";
import FetureJobWorkerMobile from "../components/FetureJobWorkerMobile";
import "./WorkerFutureJobsMobile.css";
import MobileMenuWorker from "./MobileMenuWorker";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const WorkerFutureJobsMobile = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };

  return (
    <div className="worker-future-jobs-mobile">
      {displayMenu ? <MobileMenuWorker isOpen={displayMenu} closeMenu={closeMenu} /> : null}

      <div className="worker-future-jobs-mobile-child" />
      <div className="div114">שלום (שם עובד)</div>
      <div className="div115">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="icon26" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper41" onClick={menu}>
        <img className="vector-icon50" alt="" src="/vector10.svg" />
      </button>
      <button className="worker-future-jobs-mobile-inner">
        <div className="rectangle-parent43">
          <div className="group-child91" />
          <b className="b53">בחירת תאריך</b>
        </div>
      </button>
      <FetureJobWorkerMobile
        nameb="אורן משי - שכונת הפארק"
        address="באר שבע, נחל פרת 9"
      />
      <FormControlLabel
        className="worker-future-jobs-mobile-item"
        control={<Switch color="primary" />}
      />
    </div>
  );
};

export default WorkerFutureJobsMobile;
