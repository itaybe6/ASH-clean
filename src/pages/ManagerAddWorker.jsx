import React, { useState } from "react";
import "./ManagerAddWorker.css";

const ManagerAddWorker = () => {
  // State variables
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerification, setPasswordVerification] = useState("");

  const handleSubmit = () => {
    // Add logic to handle form submission
    console.log({
      fullName,
      phoneNumber,
      city,
      password,
      passwordVerification,
    });
    alert("משתמש נוסף בהצלחה!");
  };

  return (
    <div className="manager-add-worker">
      <section className="manager-add-worker-child" />
      <img className="manager-add-worker-item" alt="" src="/line-21.svg" />
      <div className="div25">שלום (שם מנהל)</div>
      <div className="div26">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="manager-add-worker-inner">
        <div className="vector-parent">
          <img className="vector-icon4" alt="" src="/vector4.svg" />
          <b className="b18">הוספת משתמש - עובד</b>
          <div className="div27">אנא מלא את הפרטים למטה כדי להוסיף סניף</div>
        </div>
      </div>
      <div className="manager-add-worker-inner1">
        <div className="group-frame">
          <div className="group-frame">
            <input
              className="group-input"
              placeholder="שם מלא"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="group-child12"
              placeholder="מספר פלאפון"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              className="group-child13"
              placeholder="עיר"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="rectangle-parent8">
        <input
          className="group-child14"
          name="password"
          placeholder="סיסמא"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="group-child15"
          name="verification"
          placeholder="אימות סיסמא"
          type="password"
          value={passwordVerification}
          onChange={(e) => setPasswordVerification(e.target.value)}
        />
      </div>
      <button className="rectangle-parent9" onClick={handleSubmit}>
        <div className="group-child16" />
        <b className="b19">הוספת משתמש</b>
      </button>
      <div className="rectangle-parent10">
        <div className="group-child17" />
        <button className="vector-wrapper2">
          <img className="vector-icon5" alt="" src="/vector5.svg" />
        </button>
        <img className="icon8" alt="" src="/-02-12@2x.png" />
        <div className="group-parent4">
          <button className="vector-wrapper3">
            <img className="vector-icon6" alt="" src="/vector6.svg" />
          </button>
          <button className="vector-wrapper4">
            <img className="vector-icon7" alt="" src="/vector7.svg" />
          </button>
          <div className="group-wrapper1">
            <button className="parent8">
              <div className="div28">משתמשים</div>
              <img className="group-child18" alt="" src="/group-390.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerAddWorker;
