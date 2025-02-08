import React, { useState , useEffect } from "react";
import "./ManagerRegistrationAddCustomer.css";
import { useNavigate } from 'react-router-dom';

const ManagerRegistrationAddCustomer = () => {
  // הגדרת state לכל שדה קלט
  const [businessName, setBusinessName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // פונקציות לטיפול בשינוי ערכים בשדות הקלט
  const handleBusinessNameChange = (e) => setBusinessName(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleContinue = (e) => {
    e.preventDefault();
    const userData = {
      businessName,
      fullName,
      phoneNumber,
      city,
      address,
      password,
      confirmPassword
    };
    sessionStorage.setItem("userData", JSON.stringify(userData));
    navigate("/manager-registration-add-branches");
  
  };


  useEffect(() => {
    const savedData = sessionStorage.getItem("userData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setBusinessName(parsedData.businessName || "");
      setFullName(parsedData.fullName || "");
      setPhoneNumber(parsedData.phoneNumber || "");
      setCity(parsedData.city || "");
      setAddress(parsedData.address || "");
      setPassword(parsedData.password || "");
      setConfirmPassword(parsedData.confirmPassword || "");
    }
  }, []); // רץ פעם אחת כשהקומפוננט נטען


  return (
    <div className="manager-registration-add-c">
      <div className="manager-registration-add-c-child" />
    
      <div className="manager-registration-add-c-inner">
        <div className="vector-group">
          <img className="vector-icon34" alt="" src="/vector19.svg" />
          <b className="b40">הוספת משתמש - לקוח</b>
          <div className="div86">אנא מלא את הפרטים למטה כדי להוסיף סניף</div>
        </div>
      </div>
      <div className="group-parent12">
        <input
          className="group-child46"
          placeholder="שם העסק"
          type="text"
          value={businessName}
          onChange={handleBusinessNameChange}
          required
        />
        <input
          className="group-child47"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
        <input
          className="group-child48"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <input
          className="group-child49"
          placeholder="עיר"
          type="text"
          value={city}
          onChange={handleCityChange}
          required
        />
        <input
          className="group-child50"
          placeholder="כתובת"
          type="text"
          value={address}
          onChange={handleAddressChange}
          required
        />
        <button
          className="rectangle-parent30"
          onClick={handleContinue}
        >
          <div className="group-child51" />
          <b className="b41">המשך לסניפים</b>
        </button>
      </div>
    
      <div className="rectangle-parent32">
        <input
          className="group-child54"
          placeholder="סיסמא"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <input
          className="group-child5599"
          placeholder="אימות סיסמא"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>
    </div>
  );
};

export default ManagerRegistrationAddCustomer;
