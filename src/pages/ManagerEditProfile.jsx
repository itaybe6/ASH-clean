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

    if(newPassword != confirmNewPassword){
      alert("סיסמאות לא תואמות");
      setNewPassword("");
      setConfirmNewPassword("");
      return;
    }

    const token = parseJwt(localStorage.getItem("token"));
    if(token.role != "Manager"){
      alert("אתה לא מנהל , אנא פנה למנהלי האתר")
      return
    }
    try {
      const response = await axios.put(
        "http://localhost:5000/manager/update",
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
      <div className="div94">שלום (שם מנהל)</div>
      <div className="div95">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="parent25">
        <div className="div967">הגדרות</div>
        <div className="div97">לפתיחת סניפים נוספים יש לפנות למנהל האתר</div>
      </div>
      <div className="group-parent167">
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
      <div className="rectangle-parent37">
        <div className="group-child74" />
        <button className="vector-wrapper33">
          <img className="vector-icon41" alt="" src="/vector8.svg" />
        </button>
        <img className="icon22" alt="" src="/-02-13@2x.png" />
        <div className="group-parent17">
          <button className="vector-wrapper34" >
            <img className="vector-icon42" alt="" src="/vector21.svg"  />
          </button>
          <button className="vector-wrapper35" onClick={jobs} >
            <img className="vector-icon43" alt="" src="/vector9.svg"  />
          </button>
          <button className="parent26" onClick={users} >
            <div className="div99">משתמשים</div>
            <img
              className="icbaseline-people-alt-icon6"
              alt=""
              src="/icbaselinepeoplealt.svg"
            />
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default ManagerEditProfile;
