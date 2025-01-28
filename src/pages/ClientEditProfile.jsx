import React, { useState } from "react";
import "./ClientEditProfile.css";

const ClientEditProfile = () => {
  // הגדרת state לכל שדה קלט
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");

  // פונקציות לטיפול בשינוי ערכים בשדות הקלט
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  // פונקציה לטיפול בשליחת הטופס
  const handleSubmit = (e) => {
    e.preventDefault(); // מניעת רענון הדף
    // כאן ניתן להוסיף לוגיקה למשלוח הנתונים לשרת
    console.log({
      fullName,
      newPassword,
      phoneNumber,
      city,
    });

    // אופציונלי: איפוס השדות לאחר השליחה
    // setFullName("");
    // setNewPassword("");
    // setPhoneNumber("");
    // setCity("");
  };

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
              <img className="vector-icon65" alt="" src="/vector9.svg" />
            </button>
            <button className="parent34">
              <div className="div144">צור קשר</div>
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
        <div className="div145">שלום (שם לקוח)</div>
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
