import React, { useState } from "react";
import "./ManagerEditBranch.css";

const ManagerEditBranch = () => {
  // הגדרת state לכל שדה קלט
  const [branchName, setBranchName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [branchAddress, setBranchAddress] = useState("");

  // פונקציות לטיפול בשינוי ערכים בשדות הקלט
  const handleBranchNameChange = (e) => setBranchName(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleBranchAddressChange = (e) => setBranchAddress(e.target.value);

  // פונקציה לטיפול בלחיצת כפתור עדכון פרטים
  const handleUpdateDetails = () => {
    // כאן ניתן להוסיף לוגיקה למשלוח הנתונים לשרת
    console.log({
      branchName,
      phoneNumber,
      branchAddress,
    });

    // אופציונלי: איפוס השדות לאחר השליחה
    // setBranchName("");
    // setPhoneNumber("");
    // setBranchAddress("");
  };

  // פונקציה לטיפול בלחיצת כפתור חזרה
  const handleBack = () => {
    // כאן ניתן להוסיף לוגיקה לחזרה לדף קודם, למשל ניווט
    console.log("חזרה לדף הקודם");
  };

  return (
    <div className="manager-edit-branch">
      <div className="manager-edit-branch-child" />
      <img className="manager-edit-branch-item" alt="" src="/line-21.svg" />
      <div className="div72">שלום (שם מנהל)</div>
      <div className="div73">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="div74">ערוך את הפרטים של הסניף</div>
      <b className="b34">עריכת פרטי סניף</b>
      <div className="rectangle-parent24">
        <input
          className="group-child36"
          placeholder="שם סניף"
          type="text"
          value={branchName}
          onChange={handleBranchNameChange}
        />
        <input
          className="group-child37"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <input
          className="group-child38"
          placeholder="כתובת סניף"
          type="text"
          value={branchAddress}
          onChange={handleBranchAddressChange}
        />
      </div>

      <button className="rectangle-parent25" onClick={handleUpdateDetails}>
        <div className="group-child39" />
        <b className="b35">עדכן פרטים</b>
      </button>
      <button className="rectangle-parent26" onClick={handleBack}>
        <div className="group-child40" />
        <b className="b36">חזרה</b>
      </button>
      <button className="vector-wrapper21">
        <img className="vector-icon28" alt="" src="/vector17.svg" />
      </button>
      <div className="rectangle-parent27">
        <div className="group-child41" />
        <button className="vector-wrapper22">
          <img className="vector-icon29" alt="" src="/vector8.svg" />
        </button>
        <img className="icon17" alt="" src="/-02-13@2x.png" />
        <div className="group-parent11">
          <button className="vector-wrapper23">
            <img className="vector-icon30" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper24">
            <img className="vector-icon31" alt="" src="/vector9.svg" />
          </button>
          <button className="parent21">
            <div className="div78">משתמשים</div>
            <img
              className="icbaseline-people-alt-icon5"
              alt=""
              src="/icbaselinepeoplealt.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerEditBranch;
