import React, { useState } from "react";
import "./WorkerEditProfile.css";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const WorkerEditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate()
  const { token } = useContext(AuthContext);

  const handleUpdate = async () => {
  
    try {
      const employeeId = token.id; 
      const res = await axios.put(`${apiUrl}/worker/updateDetails/${employeeId}`, {
        fullName,
        newPassword,
        phoneNumber,
        city
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.status === 200) {
        alert("הפרופיל עודכן בהצלחה!");
        navigate(`/login`);  
      }
    } catch (error) {
      console.error("שגיאה בעדכון הפרופיל:", error);
      alert("אירעה שגיאה בעדכון הפרופיל. נסה שוב מאוחר יותר.");
    }
  };


  return (
    <div className="worker-edit-profile">

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
