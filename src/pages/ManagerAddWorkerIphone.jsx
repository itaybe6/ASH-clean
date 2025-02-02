import React, { useState } from "react";
import axios from "axios";
import "./ManagerAddWorkerIphone.css";
import MobileMenuManager from "./MobileMenuManager";

const ManagerAddWorkerIphone = () => {
  // הגדרת state לכל שדה קלט
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayMenu, setDisplayMenu] = useState(false)

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault(); // למנוע רענון דף

    // בדיקה אם הסיסמאות תואמות
    if (password !== confirmPassword) {
      alert("הסיסמאות אינן תואמות!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/manager/add-worker", {
        fullName,
        phone: phoneNumber,
        city,
        password
      });

      alert("המשתמש נוסף בהצלחה!");
      setFullName("");
      setPhoneNumber("");
      setCity("");
      setPassword("");
      setPasswordVerification("");
    } catch (error) {
      console.error("Error adding employee:", error);
      alert(`שגיאה בהוספת משתמש: ${error.response?.data?.message || "שגיאה לא ידועה"}`);
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
    <div className="manager-add-worker-iphone">

      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}


      <div className="manager-add-worker-iphone-child" />
      <div className="div88">שלום (שם מנהל)</div>
      <div className="div89">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <b className="b42">הוספת משתמש - עובד</b>
      <div className="div90">אנא מלא את הפרטים למטה כדי להוסיף עובד</div>
      <img
        className="icbaseline-person-icon"
        alt=""
        src="/icbaselineperson.svg"
      />
      <img className="icon20" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper30" onClick={menu}>
        <img className="vector-icon38" alt="" src="/vector10.svg" />
      </button>
      <div className="rectangle-parent33">
        <input
          className="group-child56"
          name="fullName"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
        />
        <input
          className="group-child57"
          placeholder="עיר"
          name="city"
          type="text"
          value={city}
          onChange={handleCityChange}
        />
        <input
          className="group-child58"
          placeholder="מספר פלאפון"
          name="phone"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <input
        className="manager-add-worker-iphone-item"
        placeholder="סיסמא"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        className="manager-add-worker-iphone-inner"
        placeholder="אימות סיסמא"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <button className="rectangle-parent34" onClick={handleSubmit}>
        <div className="group-child59" />
        <b className="b43">הוספת משתמש</b>
      </button>
    </div>
  );
};

export default ManagerAddWorkerIphone;
