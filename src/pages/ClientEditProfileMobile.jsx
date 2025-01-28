import React, { useState } from "react";
import "./ClientEditProfileMobile.css";

const ClientEditProfileMobile = () => {
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
    <div className="client-edit-profile-mobile">
      <div className="client-edit-profile-mobile-child" />
      <div className="div139">שלום (שם לקוח)</div>
      <div className="div140">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
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
      <button className="vector-wrapper53" onClick={handleSubmit}>
        <img className="vector-icon62" alt="" src="/vector10.svg" />
      </button>
    </div>
  );
};

export default ClientEditProfileMobile;
