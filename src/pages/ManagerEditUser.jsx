import React, { useState } from "react";
import "./ManagerEditUser.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ManagerEditUser = () => {
  // הגדרת state לכל שדה קלט
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  const navigate = useNavigate();
  const { id ,type } = useParams(); // קבלת ה-ID מה-URL

  const handleUpdate = async (e) => {
    e.preventDefault();
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
    <div className="manager-edit-profile">
      <div className="manager-edit-profile-child" />
      <div className="parent25">
        <div className="div96">עריכת פרטי משתמש</div>      </div>
      <div className="group-parent16">
        <button className="vector-wrapper32"  onClick={handleUpdate}>
          <img className="vector-icon40" alt="" src="/vector20.svg" />
        </button>
        <input
          className="group-child69"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
        <div className="div98">הגדר סיסמא חדשה</div>
        <input
          className="group-child70"
          placeholder="כתוב כאן סיסמא חדשה"
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />
      
        <input
          className="group-child72"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <input
          className="group-child73"
          placeholder="עיר"
          type="text"
          value={city}
          onChange={handleCityChange}
          required
        />
      </div>
   
     
    </div>
  );
};

export default ManagerEditUser;
