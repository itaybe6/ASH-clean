import React, { useState } from "react";
import "./ClientEditProfile.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ClientEditProfile = () => {
  // הגדרת state לכל שדה קלט
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const { id } = useParams(); 

  // פונקציות לטיפול בשינוי ערכים בשדות הקלט
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  const navigate = useNavigate();
  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1]; // החלק האמצעי של ה-JWT
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64)); // פענוח Base64 ל-JSON
    } catch (error) {
      return null;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = parseJwt(localStorage.getItem("token"));
    if (token.role !== "customer") {
        alert("אינך לקוח, אינך רשאי לבצע פעולה זו!");
        return;
    }

    try {
        const response = await axios.put(
            `http://localhost:5000/customer/${token.id}/edit`, 
            { fullName, phoneNumber, city, newPassword },
            { headers: { Authorization: `Bearer ${token.id}` } }
        );

        alert( "פרטייך עודכנו בהצלחה");
        navigate("/client-jobs"); // ניתוב לדף הלקוח לאחר עדכון
    } catch (error) {
        console.error("Error updating customer:", error);
        alert("שגיאה בעדכון הפרטים");
    }
  };

  const Conatct = () => {
    navigate(`/client-contact-us/${id}/`);
  }
  const Jobs = () => {
    navigate(`/clientJobs/${id}/`);
  }
  return (
    <div className="client-edit-profile">
      <div className="group-parent27">
        <div className="rectangle-parent53">
          <div className="group-child113" />
          <button className="vector-wrapper54">
            <img className="vector-icon63" alt="" src="/vector8.svg" />
          </button>
          <img className="icon32" alt="" src="/-02-13@2x.png" />
          <div className="group-parent28">
            <button className="vector-wrapper55">
              <img className="vector-icon64" alt="" src="/vector23.svg" />
            </button>
            <button className="vector-wrapper56">
              <img className="vector-icon65" onClick={Jobs} alt="" src="/vector9.svg" />
            </button>
            <button className="parent34">
              <div className="div144" onClick={Conatct}>צור קשר</div>
              <img
                className="icbaseline-contact-mail-icon1"
                alt=""
                src="/icbaselinecontactmail.svg"
              />
            </button>
          </div>
        </div>
        <div className="group-child114" />
        <img className="group-child115" alt="" src="/line-21.svg" />
        <div className="div145">שלום שרגא</div>
        <div className="div146">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
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
            <input
              className="group-child116"
              placeholder="שם מלא"
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
            <input
              className="group-child117"
              placeholder="כתוב סיסמא חדשה"
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            <input
              className="group-child119"
              placeholder="מספר פלאפון"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
            <input
              className="group-child120"
              placeholder="עיר"
              type="text"
              value={city}
              onChange={handleCityChange}
              required
            />
          </div>
        </div>
        <img className="group-child121" alt="" src="/group-345.svg" />
      </div>
    </div>
  );
};

export default ClientEditProfile;
