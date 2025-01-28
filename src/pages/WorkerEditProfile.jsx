import React, { useState } from "react";
import "./WorkerEditProfile.css";

const WorkerEditProfile = () => {
  // הגדרת state לכל שדה קלט
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");

  // פונקציה לטיפול בעדכון הפרטים
  const handleUpdate = () => {
    // בדיקת התאמת סיסמאות
    if (newPassword !== confirmNewPassword) {
      alert("הסיסמאות אינן תואמות.");
      return;
    }

    // כאן ניתן להוסיף את הלוגיקה לעדכון הפרטים, כמו שליחה לשרת
    console.log({
      fullName,
      newPassword,
      phoneNumber,
      city,
    });

    // לדוגמה: שליחה לשרת באמצעות fetch
    /*
    fetch('/api/updateProfile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, newPassword, phoneNumber, city }),
    })
      .then(response => response.json())
      .then(data => {
        // טיפול בתגובה מהשרת
      })
      .catch(error => {
        console.error('Error:', error);
      });
    */
  };

  return (
    <div className="worker-edit-profile">
      <div className="worker-edit-profile-child" />
      <img className="worker-edit-profile-item" alt="" src="/line-21.svg" />
      <div className="div123">שלום (שם עובד)</div>
      <div className="div124">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="worker-edit-profile-inner" />
      <button className="vector-wrapper46">
        <img className="vector-icon55" alt="" src="/vector8.svg" />
      </button>
      <img className="icon29" alt="" src="/-02-13@2x.png" />
      <div className="group-parent23">
        <button className="vector-wrapper47">
          <img className="vector-icon56" alt="" src="/vector23.svg" />
        </button>
        <button className="vector-wrapper48">
          <img className="vector-icon57" alt="" src="/vector9.svg" />
        </button>
      </div>
      <div className="frame-container">
        <div className="parent29">
          <div className="div125">הגדרות</div>
          <div className="div126">לפתיחת סניפים נוספים יש לפנות למנהל האתר</div>
        </div>
        <div className="div127">הגדר סיסמא חדשה</div>
        <button className="frame-button" onClick={handleUpdate}>
          <div className="frame-child4" />
          <b className="b56">עדכן פרטים</b>
        </button>
        <input
          className="frame-input"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="group-child98"
          placeholder="כתוב כאן סיסמא חדשה"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          className="group-child99"
          placeholder="אמת סיסמא חדשה"
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <input
          className="group-child100"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          className="group-child101"
          placeholder="עיר"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
    </div>
  );
};

export default WorkerEditProfile;
