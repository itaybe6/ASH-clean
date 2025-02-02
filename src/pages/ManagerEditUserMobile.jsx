import React, { useState } from "react";
import "./ManagerEditUserMobile.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ManagerEditUserMobile = () => {
  // הגדרת state לכל שדה קלט
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmNewPasswordChange = (e) => setConfirmNewPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);


  const navigate = useNavigate();
  const { id, type } = useParams(); // קבלת ה-ID מה-URL

  const handleUpdateDetails = async (e) => {
    e.preventDefault();

    if (newPassword != confirmNewPassword) {
      alert("סיסמאות לא תואמות");
      setNewPassword("");
      setConfirmNewPassword("");
      return;
    }
    const updatedData = {
      type,
      fullName,
      phoneNumber,
      city,
    };
    try {
      const response = await axios.put(`http://localhost:5000/manager/editUser/${id}`, updatedData);

      if (response.status === 200) {
        alert('הפרטים עודכנו בהצלחה');
        console.log('Updated User:', response.data);
        navigate(`/manager-display-users`)
      } else {
        alert('שגיאה: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('שגיאה בעדכון הנתונים');
    }


  };

  return (
    <div className="manager-edit-profile-mobil">
      <div className="manager-edit-profile-mobil-child" />
      <b className="b49">שלום (שם מנהל)</b>
      <div className="div105">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="div106">עריכת פרטי משתמש</div>
      <div className="component-parent">
        <button className="rectangle-parent41" onClick={handleUpdateDetails}>
          <div className="component-child1" />
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
          className="group-child84"
          placeholder="אמת סיסמא חדשה"
          type="password"
          value={confirmNewPassword}
          onChange={handleConfirmNewPasswordChange}
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
      <button className="vector-wrapper39">
        <img className="vector-icon48" alt="" src="/vector10.svg" />
      </button>
      <img className="icon24" alt="" src="/-02-11@2x.png" />
    </div>
  );
};

export default ManagerEditUserMobile;
