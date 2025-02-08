import React, { useState } from "react";
import "./WorkerEditProfile.css";
import axios from "axios";

const WorkerEditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;


  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1]; // החלק האמצעי של ה-JWT
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64)); // פענוח Base64 ל-JSON
    } catch (error) {
      return null;
    }
  };

  const token = parseJwt(localStorage.getItem("token")); 
  const handleUpdate = async () => {
    if (newPassword !== confirmNewPassword) {
      alert("הסיסמאות אינן תואמות.");
      return;
    }

    try {
      const employeeId = token.id; 

      const res = await axios.put(`${apiUrl}/worker/updateDetails/${employeeId}`, {
        fullName,
        newPassword,
        phoneNumber,
        city
      }, {
        headers: {
          Authorization: `Bearer ${token}` // שליחת התוקן לצורך אימות
        }
      });
      navigate(`/worker-future-jobs/${id}`);  

      if (res.status === 200) {
        alert("הפרופיל עודכן בהצלחה!");
        navigate(`/worker-future-jobs/${token.id}`);  
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
