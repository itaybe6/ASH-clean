import React, { useState, useEffect } from "react";
import "./ManagerRegistrationAddCustomerMobile.css";
import { useNavigate } from 'react-router-dom';
import MobileMenuManager from "./MobileMenuManager";

const ManagerRegistrationAddCustomerMobile = () => {
  const [businessName, setBusinessName] = useState("");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [displayMenu, setDisplayMenu] = useState(false)
  const navigate = useNavigate();

  const handleBusinessNameChange = (e) => setBusinessName(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleContinue = (e) => {
    e.preventDefault();
    const userData = {
      businessName,
      fullName,
      phoneNumber,
      city,
      address,
      password,
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
    }
  }, []); // רץ פעם אחת כשהקומפוננט נטען

  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };
  return (
    <div className="manager-registration-add-c1">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}

      <div className="manager-registration-add-c-child1" />

      <div className="manager-registration-add-c-inner1">
        <div className="parent24">
          <b className="b44">הוספת משתמש - לקוח</b>
          <div className="div9333">אנא מלא את הפרטים למטה כדי להוסיף עובד</div>
          <img className="group-child60" alt="" src="/group-404.svg" />
        </div>
      </div>
      <img className="icon21" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper31" onClick={menu}>
        <img className="vector-icon39" alt="" src="/vector10.svg" />
      </button>
      <div className="group-parent15">
        <input className="group-child61" placeholder="שם העסק" type="text" value={businessName} onChange={handleBusinessNameChange} required />
        <input className="group-child62" placeholder="שם מלא" type="text" value={fullName} onChange={handleFullNameChange} required />
        <input className="group-child63" placeholder="עיר" type="text" value={city} onChange={handleCityChange} required />
        <input className="group-child64" placeholder="כתובת" type="text" value={address} onChange={handleAddressChange} required />
        <input className="group-child65" placeholder="מספר פלאפון" type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} required />
        <input className="group-child67" placeholder="סיסמא" type="password" value={password} onChange={handlePasswordChange} required />
      </div>
      <div className="group-parent14">
        <button className="rectangle-parent36" onClick={handleContinue}>
          <div className="group-child66" />
          <b className="b45">המשך לסניפים</b>
        </button>
      </div>
     
    </div>
  );
};

export default ManagerRegistrationAddCustomerMobile;
