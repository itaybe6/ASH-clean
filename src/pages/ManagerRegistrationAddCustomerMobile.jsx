import React, { useState } from "react";
import "./ManagerRegistrationAddCustomerMobile.css";

const ManagerRegistrationAddCustomerMobile = () => {
  // הגדרת state לכל שדה קלט
  const [businessName, setBusinessName] = useState("");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // פונקציות לטיפול בשינוי ערכים בשדות הקלט
  const handleBusinessNameChange = (e) => setBusinessName(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // פונקציה לטיפול בלחיצת כפתור "המשך לסניפים"
  const handleContinue = () => {
    // כאן ניתן להוסיף לוגיקה למשלוח הנתונים לשרת או ניווט לדף אחר
    console.log({
      businessName,
      fullName,
      city,
      address,
      phoneNumber,
      password,
      confirmPassword,
    });

    // אופציונלי: איפוס השדות לאחר השליחה
    // setBusinessName("");
    // setFullName("");
    // setCity("");
    // setAddress("");
    // setPhoneNumber("");
    // setPassword("");
    // setConfirmPassword("");
  };

  return (
    <div className="manager-registration-add-c1">
      <div className="manager-registration-add-c-child1" />
      <div className="div91">שלום (שם מנהל)</div>
      <div className="div92">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="manager-registration-add-c-inner1">
        <div className="parent24">
          <b className="b44">הוספת משתמש - לקוח</b>
          <div className="div93">אנא מלא את הפרטים למטה כדי להוסיף עובד</div>
          <img className="group-child60" alt="" src="/group-404.svg" />
        </div>
      </div>
      <img className="icon21" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper31">
        <img className="vector-icon39" alt="" src="/vector10.svg" />
      </button>
      <div className="group-parent14">
        <div className="rectangle-parent35">
          <input
            className="group-child61"
            placeholder="שם העסק"
            type="text"
            value={businessName}
            onChange={handleBusinessNameChange}
            required
          />
          <input
            className="group-child62"
            placeholder="שם מלא"
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
          <input
            className="group-child63"
            placeholder="עיר"
            type="text"
            value={city}
            onChange={handleCityChange}
            required
          />
          <input
            className="group-child64"
            placeholder="כתובת"
            type="text"
            value={address}
            onChange={handleAddressChange}
            required
          />
          <input
            className="group-child65"
            placeholder="מספר פלאפון"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </div>
        <button
          className="rectangle-parent36"
          onClick={handleContinue}
        >
          <div className="group-child66" />
          <b className="b45">המשך לסניפים</b>
        </button>
      </div>
      <div className="group-parent15">
        <input
          className="group-child67"
          placeholder="סיסמא"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <input
          className="group-child68"
          placeholder="אמת סיסמא"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>
    </div>
  );
};

export default ManagerRegistrationAddCustomerMobile;
