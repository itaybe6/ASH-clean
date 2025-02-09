import React, { useState } from "react";
import "./ClientEditProfile.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ClientEditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const { token } = useContext(AuthContext);

  const { id } = useParams(); 
  const apiUrl = import.meta.env.VITE_API_URL;
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
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
        alert( "פרטייך עודכנו בהצלחה");
        navigate("/login");
    } catch (error) {
        console.error("Error updating customer:", error);
        alert("שגיאה בעדכון הפרטים");
    }
  };
  return (
    <div className="client-edit-profile">
      <div className="group-parent27">
        <div className="group-child114" />
        <img className="group-child115" alt="" src="/line-21.svg" />
        <div className="frame-parent2">
          <div className="parent35">
            <div className="div147">הגדרות</div>
            <div className="div148">
              לפתיחת סניפים נוספים יש לפנות למנהל האתר
            </div>
          </div>
          <div className="div149">הגדר סיסמא חדשה</div>
          
          {/* כפתור עדכון פרטים עם טיפול באירוע לחיצה */}
          <button className="frame-wrapper" onClick={handleSubmit}>
            <div className="rectangle-parent54">
              <div className="frame-child5" />
              <b className="b62">עדכן פרטים</b>
            </div>
          </button>
          {/* שדות קלט */}
          <div className="frame-parent3">
            <input className="group-child116"  placeholder="שם מלא"  type="text"  value={fullName} name="fullName" onChange={handleFullNameChange} required />
            <input className="group-child117" placeholder="כתוב סיסמא חדשה" type="password" value={newPassword} onChange={handleNewPasswordChange}  />
            <input className="group-child119"  placeholder="מספר פלאפון"  type="tel"  value={phoneNumber}  onChange={handlePhoneNumberChange}  required />
            <input className="group-child120"  placeholder="עיר"  type="text"  value={city}  onChange={handleCityChange}  required  />
          </div>
        </div>
        <img className="group-child121" alt="" src="/group-345.svg" />
      </div>
    </div>
  );
};

export default ClientEditProfile;
