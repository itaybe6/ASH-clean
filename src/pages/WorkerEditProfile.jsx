import React, { useState } from "react";
import "./WorkerEditProfile.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const WorkerEditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();


  //func to Encryption the token
  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1]; // החלק האמצעי של ה-JWT
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64)); // פענוח Base64 ל-JSON
    } catch (error) {
      return null;
    }
  };

  const handleUpdate = async () => {
    if (newPassword !== confirmNewPassword) {
      alert("הסיסמאות אינן תואמות.");
      return;
    }

    try {
      const token = parseJwt(localStorage.getItem("token")); 
      const employeeId = token.id; 

      const res = await axios.put(`http://localhost:5000/worker/updateDetails/${employeeId}`, {
        fullName,
        newPassword,
        phoneNumber,
        city
      }, {
        headers: {
          Authorization: `Bearer ${token}` // שליחת התוקן לצורך אימות
        }
      });

      if (res.status === 200) {
        alert("הפרופיל עודכן בהצלחה!");
        navigate("/worker-future-jobs");
      }
    } catch (error) {
      console.error("שגיאה בעדכון הפרופיל:", error);
      alert("אירעה שגיאה בעדכון הפרופיל. נסה שוב מאוחר יותר.");
    }
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
