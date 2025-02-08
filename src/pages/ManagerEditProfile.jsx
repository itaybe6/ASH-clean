import React, { useState } from "react";
import "./ManagerEditProfile.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ManagerEditProfile = () => {
  // הגדרת state לכל שדה קלט
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;


  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

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

  const handleUpdate = async (e) => {
    e.preventDefault();

  
    const token = parseJwt(localStorage.getItem("token"));
    if(token.role != "Manager"){
      alert("אתה לא מנהל , אנא פנה למנהלי האתר")
      return
    }
    try {
      const response = await axios.put(
        `${apiUrl}/manager/update`,
        { fullName, phoneNumber, city, newPassword },
        { headers: { Authorization: `Bearer ${token.id}` } } // שליחת ה-Token
      );

      alert(response.data.message);
      navigate("/manager-jobs");

    } catch (error) {
      console.error("Error updating manager:", error);
      alert("שגיאה בעדכון הפרטים");
    }
  };


  const jobs = () => {
    navigate(`/manager-jobs`)
  }
  const users = () => {
    navigate(`/manager-display-users`)
  }

  return (
    <div className="manager-edit-profile">
      <div className="manager-edit-profile-child" />
      
      <div className="group-parent167">
        <button className="vector-wrapper32"  onClick={handleUpdate}>
          <img className="vector-icon407" alt="" src="/vector20.svg" />
        </button>
        <input
          className="group-child697"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
        <div className="div98">הגדר סיסמא חדשה</div>
        <input
          className="group-child707"
          placeholder="כתוב כאן סיסמא חדשה"
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />
      
        <input
          className="group-child727"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <input
          className="group-child737"
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

export default ManagerEditProfile;
