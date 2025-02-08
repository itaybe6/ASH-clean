import React, { useState } from "react";
import "./ManagerRegistrationAddBranchesMobile.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import MobileMenuManager from "./MobileMenuManager";

const ManagerRegistrationAddBranchesMobile = () => {
  const [branchName, setBranchName] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleBranchNameChange = (e) => setBranchName(e.target.value);
  const handleBranchAddressChange = (e) => setBranchAddress(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const [branches, setBranches] = useState([]);
  const navigate = useNavigate();
  const [displayMenu, setDisplayMenu] = useState(false)
  const handleAddUser = async () => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    console.log(userData);
    try {
      const userDataToSend = {
        fullName: userData.fullName,
        phoneNumber: userData.phoneNumber,
        password: userData.password,
        businessName: userData.businessName,
        address: userData.address,
        city: userData.city,
        branches: branches,
      };
      console.log(userDataToSend);

      const response = await axios.post(`${apiUrl}/manager/add-customer`, userDataToSend);

      console.log("Success Add Customer");
      alert("לקוח נוסף בהצלחה")
    } catch (error) {
      console.error("Error Add Customer", error.response ? error.response.data : error.message);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };
  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };
  const handleAddBranch = () => {
    const newBranch = {
      branchName,
      phoneNumber,
      branchAddress,
    };
    setBranches([...branches, newBranch]);
    setBranchName("");
    setPhoneNumber("");
    setBranchAddress("");
  };

  return (
    <div className="manager-registration-add-b1">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}
      <div className="manager-registration-add-b-child1" />
      <div className="div109">שלום (שם מנהל)</div>
      <div className="div110">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <b className="b51">הוספת משתמש - לקוח</b>
      <div className="div111">אנא מלא את הפרטים למטה כדי להוסיף עובד</div>
      <img
        className="icbaseline-person-icon1"
        alt=""
        src="/icbaselineperson.svg"
      />
      <img className="icon25" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper40" onClick={menu}>
        <img className="vector-icon49" alt="" src="/vector10.svg" />
      </button>
      <div className="manager-registration-add-b-inner1">
        <div className="group-wrapper4">
          <div className="group-wrapper4">
            <input
              className="group-child87"
              placeholder="שם סניף"
              type="text"
              value={branchName}
              onChange={handleBranchNameChange}
              required
            />
            <input
              className="group-child88"
              placeholder="כתובת סניף"
              type="text"
              value={branchAddress}
              onChange={handleBranchAddressChange}
              required
            />
            <input
              className="group-child89"
              placeholder="מספר פלאפון"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
            <button className="div113" onClick={handleAddBranch}>{`+ הוספת סניף נוסף `}</button>

          </div>
        </div>
      </div>
      <button
        className="rectangle-parent42"
        onClick={handleAddUser}
      >
        <div className="group-child90" />
        <b className="b52">הוספת משתמש</b>
      </button>
      <button
        className="rectangle-parent4011"
        onClick={handleBack}
      >
        {branches.length > 0 && (
          <div className="branches-container">
            <h3 className="branches-title">📌 סניפים שנוספו:</h3>
            <ul className="branches-list">
              {branches.map((branch, index) => (
                <li key={index} className="branch-item">
                  <div className="branch-card">
                    <b>🛠 {branch.branchName}</b>
                    <p>📞 {branch.phoneNumber}</p>
                    <p>📍 {branch.branchAddress}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="group-child81" />
        <b className="b48">חזרה</b>
      </button>
    </div>
  );
};

export default ManagerRegistrationAddBranchesMobile;
