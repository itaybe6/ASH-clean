import React, { useState } from "react";
import "./ManagerEditBranchMobile.css";
import MobileMenuManager from "./MobileMenuManager";

const ManagerEditBranchMobile = () => {
  // הגדרת state לכל שדה קלט
  const [branchName, setBranchName] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayMenu, setDisplayMenu] = useState(false)

  // פונקציות לטיפול בשינוי ערכים בשדות הקלט
  const handleBranchNameChange = (e) => setBranchName(e.target.value);
  const handleBranchAddressChange = (e) => setBranchAddress(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

  // פונקציה לטיפול בלחיצת כפתור עדכון פרטים
  const handleUpdateDetails = () => {
    // כאן ניתן להוסיף לוגיקה למשלוח הנתונים לשרת
    console.log({
      branchName,
      branchAddress,
      phoneNumber,
    });

    // אופציונלי: איפוס השדות לאחר השליחה
    // setBranchName("");
    // setBranchAddress("");
    // setPhoneNumber("");
  };
  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };
  return (
    <div className="manager-edit-branch-mobile">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}

      <div className="manager-edit-branch-mobile-child" />
      <div className="parent22">
        <div className="div80">אנא מלא את הפרטים למטה כדי לערוך את הסניף</div>
        <b className="b38">עריכת פרטי סניף</b>
      </div>
      <div className="rectangle-parent28">
        <input
          className="group-child42"
          placeholder="שם סניף"
          type="text"
          value={branchName}
          onChange={handleBranchNameChange}
        />
        <input
          className="group-child43"
          placeholder="כתובת סניף"
          type="text"
          value={branchAddress}
          onChange={handleBranchAddressChange}
        />
        <input
          className="group-child44"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <button className="rectangle-parent29" onClick={handleUpdateDetails}>
        <div className="group-child45" />
        <b className="b39">עדכן פרטים</b>
      </button>
      <button className="vector-wrapper25">
        <img className="vector-icon32" alt="" src="/vector18.svg" />
      </button>
      <img className="icon18" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper26" onClick={menu}>
        <img className="vector-icon33" alt="" src="/vector10.svg" />
      </button>
    </div>
  );
};

export default ManagerEditBranchMobile;
