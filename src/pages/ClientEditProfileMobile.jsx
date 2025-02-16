import React, { useState } from "react";
import "./ClientEditProfileMobile.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import MobileMenuClient from "./MobileMenuClient";
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ClientEditProfileMobile = () => {
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [displayMenu, setDisplayMenu] = useState(false)
  const { id } = useParams();
  const { token } = useContext(AuthContext);


  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const apiUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (token.role !== "customer") {
      alert("אינך לקוח, אינך רשאי לבצע פעולה זו!");
      return;
    }
    try {
      const response = await axios.put(
        `${apiUrl}/costumer/${token.id}/edit`,
        { fullName, phoneNumber, city, newPassword },
        { headers: { Authorization: `Bearer ${token.id}` } }
      );

      alert("פרטייך עודכנו בהצלחה");
      navigate("/login");
    } catch (error) {
      console.error("Error updating customer:", error);
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
    <div className="client-edit-profile-mobile">
      {displayMenu ? <MobileMenuClient isOpen={displayMenu} closeMenu={closeMenu} id={id} /> : null}

      <div className="client-edit-profile-mobile-child" />
      <div className="div141">הגדרות</div>
      <div className="div142">
        לפתיחת סניפים נוספים יש לפנות למנהל האתר
      </div>

      {/* עטיפת השדות והכפתור בטופס */}
      <form className="group-parent26" onSubmit={handleSubmit}>
        {/* כפתור עדכון פרטים */}
        <button type="submit" className="component-wrapper">
          <div className="rectangle-parent52">
            <div className="component-child3" />
            <b className="b61">עדכן פרטים</b>
          </div>
        </button>

        {/* שדות קלט */}
        <input
          className="group-child109"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
        <input
          className="group-child110"
          placeholder="כתוב כאן סיסמא חדשה"
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
        <input
          className="group-child111"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <input
          className="group-child112"
          placeholder="עיר"
          type="text"
          value={city}
          onChange={handleCityChange}
          required
        />
        <div className="div143">הגדר סיסמא חדשה</div>
      </form>

      <img className="icon31" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper53" onClick={menu} >
        <img className="vector-icon62" alt="" src="/vector10.svg" />
      </button>
    </div>
  );
};

export default ClientEditProfileMobile;
