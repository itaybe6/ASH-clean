import React, { useState } from "react";
import "./ManagerRegistrationAddB.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ManagerRegistrationAddB = () => {
  // הגדרת state לכל שדה קלט
  const [branchName, setBranchName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [branches, setBranches] = useState([]); // שמירת רשימת הסניפים
  const handleBranchNameChange = (e) => setBranchName(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleBranchAddressChange = (e) => setBranchAddress(e.target.value);
  const navigate = useNavigate();


  const handleAddUser = async () => {
    const  userData =  JSON.parse(sessionStorage.getItem("userData"));
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

      const response = await axios.post("http://localhost:5000/manager/add-customer", userDataToSend);

      console.log("Success Add Customer");
      alert("לקוח נוסף בהצלחה")
    } catch (error) {
      console.error("Error Add Customer", error.response ? error.response.data : error.message);
    }
  };
  

  const handleBack = () => {
    navigate(-1);
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
    <div className="manager-registration-add-b">
      <div className="manager-registration-add-b-child" />
      <img
        className="manager-registration-add-b-item"
        alt=""
        src="/line-21.svg"
      />
      <div className="div100">שלום (שם מנהל)</div>
      <div className="div101">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="manager-registration-add-b-inner">
        <div className="vector-parent1">
          <img className="vector-icon44" alt="" src="/vector19.svg" />
          <b className="b46">הוספת משתמש - לקוח</b>
          <div className="div102">אנא מלא את הפרטים למטה כדי להוסיף סניף</div>
        </div>
      </div>
      <div className="rectangle-parent38">
        <div className="group-child75" />
        <button className="vector-wrapper36">
          <img className="vector-icon45" alt="" src="/vector8.svg" />
        </button>
        <img className="icon23" alt="" src="/-02-13@2x.png" />
        <button className="vector-wrapper37">
          <img className="vector-icon46" alt="" src="/vector2.svg" />
        </button>
        <button className="vector-wrapper38">
          <img className="vector-icon47" alt="" src="/vector9.svg" />
        </button>
        <button className="group-wrapper3">
            <div className="div103">משתמשים</div>
            <img className="group-child76" alt="" src="/group-401.svg" />
        </button>
      </div>
      <div className="group-parent18">
        <div className="group-parent19">
          <div className="group-parent20">
            <input
              className="group-child77"
              placeholder="שם סניף"
              type="text"
              value={branchName}
              onChange={handleBranchNameChange}
              required
            />
            <input
              className="group-child78"
              placeholder="מספר פלאפון"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
            <input
              className="group-child79"
              placeholder="כתובת"
              type="text"
              value={branchAddress}
              onChange={handleBranchAddressChange}
              required
            />
          </div>
          <button className="div104" onClick={handleAddBranch}>{`+ הוספת סניף נוסף `}</button>        </div>
        <button
          className="rectangle-parent39"
          onClick={handleAddUser}
        >

           {/* הצגת רשימת הסניפים שנוספו */}
          <div className="group-child80" />
          <b className="b47">הוספת משתמש</b>
        </button>

        <button
          className="rectangle-parent40"
          onClick={handleBack}
        >
          <div className="group-child81" />
          <b className="b48">חזרה</b>
        </button>
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
      </div>
    </div>
  );
};

export default ManagerRegistrationAddB;
