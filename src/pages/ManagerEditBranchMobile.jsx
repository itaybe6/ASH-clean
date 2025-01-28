import React, { useState } from "react";
import "./ManagerEditBranchMobile.css";

const ManagerEditBranchMobile = () => {
  // הגדרת state לכל שדה קלט
  const [branchName, setBranchName] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  return (
    <div className="manager-edit-branch-mobile">
      <div className="manager-edit-branch-mobile-child" />
      <b className="b37">שלום (שם מנהל)</b>
      <div className="div79">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
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
      <button className="vector-wrapper26">
        <img className="vector-icon33" alt="" src="/vector10.svg" />
      </button>
    </div>
  );
};

export default ManagerEditBranchMobile;
