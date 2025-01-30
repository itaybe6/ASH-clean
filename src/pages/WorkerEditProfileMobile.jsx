import React, { useState } from "react";
import "./WorkerEditProfileMobile.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const WorkerEditProfileMobile = () => {
  // הגדרת state לכל שדה קלט
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

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
    <div className="worker-edit-profile-mobile">
      <div className="worker-edit-profile-mobile-child" />
      <div className="div118">שלום (שם עובד)</div>
      <div className="div119">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="div120">הגדרות</div>
      <div className="div121">לפתיחת סניפים נוספים יש לפנות למנהל האתר</div>
      <div className="group-parent22">
        <button className="rectangle-parent45" onClick={handleUpdate}>
          <div className="group-child93" />
          <b className="b55">עדכן פרטים</b>
        </button>
        <input
          className="group-child94"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="group-child95"
          placeholder="כתוב כאן סיסמא חדשה"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          className="group-child96"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          className="group-child97"
          placeholder="עיר"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="div122">הגדר סיסמא חדשה</div>
      </div>
      <img className="icon28" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper45">
        <img className="vector-icon54" alt="" src="/vector10.svg" />
      </button>
    </div>
  );
};

export default WorkerEditProfileMobile;
