import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import MobileMenuWorker from "./MobileMenuWorker";
import "./WorkerEditProfileMobile.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const WorkerEditProfileMobile = () => {
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [displayMenu, setDisplayMenu] = useState(false)
  const apiUrl = import.meta.env.VITE_API_URL;
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
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
          Authorization: `Bearer ${token}` // שליחת התוקן לצורך אימות
        }
      });
      if (res.status === 200) {
        alert("הפרופיל עודכן בהצלחה!");
        navigate("/login");
      }
    } catch (error) {
      console.error("שגיאה בעדכון הפרופיל:", error);
      alert("אירעה שגיאה בעדכון הפרופיל. נסה שוב מאוחר יותר.");
    }
  };
  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };


  return (
    <div className="worker-edit-profile-mobile">
      {displayMenu ? <MobileMenuWorker isOpen={displayMenu} closeMenu={closeMenu} /> : null}
      <div className="worker-edit-profile-mobile-child" />
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
      <button className="vector-wrapper45" onClick={menu} >
        <img className="vector-icon54" alt="" src="/vector10.svg" />
      </button>
    </div>
  );
};

export default WorkerEditProfileMobile;
