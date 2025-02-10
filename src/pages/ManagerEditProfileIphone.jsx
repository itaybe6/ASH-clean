import React, { useState } from "react";
import "./ManagerEditProfileIphone.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import MobileMenuManager from "./MobileMenuManager";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const ManagerEditProfileIphone = () => {
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [displayMenu, setDisplayMenu] = useState(false)
  const { token } = useContext(AuthContext);

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const navigate = useNavigate();


  const handleUpdateDetails = async () => {
    try {
      const response = await axios.put(
        `${apiUrl}/manager/update`,
        { fullName, phoneNumber, city, newPassword },
        { headers: { Authorization: `Bearer ${token.id}` } }

      );
      alert("הפרטים עודכנו בהצלחה");
      navigate("/login");
    } catch (error) {
      console.error("Error updating manager:", error);
      alert("שגיאה בעדכון הפרטים");
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
    <div className="manager-edit-profile-mobil">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}

      <div className="manager-edit-profile-mobil-child" />
      <div className="div106">הגדרות</div>
      <div className="div107">לפתיחת סניפים נוספים יש לפנות למנהל האתר</div>
      <div className="component-parent">
        <button className="rectangle-parent416" onClick={handleUpdateDetails}>
          <div className="component-child18" />
          <b className="b50">עדכן פרטים</b>
        </button>
        <input
          className="group-child82"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
        <input
          className="group-child83"
          placeholder="בחר כאן סיסמא חדשה"
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />
       
        <input
          className="group-child85"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <input
          className="group-child86"
          placeholder="עיר"
          type="text"
          value={city}
          onChange={handleCityChange}
          required
        />
        <div className="div108">הגדר סיסמא חדשה</div>
      </div>
      <button className="vector-wrapper39" onClick={menu}>
        <img className="vector-icon48" alt="" src="/vector10.svg" />
      </button>
      <img className="icon24" alt="" src="/-02-11@2x.png" />
    </div>
  );
};

export default ManagerEditProfileIphone;
