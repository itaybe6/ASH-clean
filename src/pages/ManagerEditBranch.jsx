import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./ManagerEditBranch.css";
import axios from 'axios';

const ManagerEditBranch = () => {
  const [branchName, setBranchName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const navigate = useNavigate();

  const handleBranchNameChange = (e) => setBranchName(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleBranchAddressChange = (e) => setBranchAddress(e.target.value);

  const handleUpdateDetails = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/manager/editBranch/${branchId}`, {
        name: branchName,
        phone: phoneNumber,
        address: branchAddress,
      });

      if (response.status === 200) {
        alert("Branch updated successfully!");
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      alert("Server error: " + (error.response?.data?.message || error.message));
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="manager-edit-branch">
      <div className="manager-edit-branch-child" />
      <img className="manager-edit-branch-item" alt="" src="/line-21.svg" />
      <div className="div72">שלום (שם מנהל)</div>
      <div className="div73">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="div74">ערוך את הפרטים של הסניף</div>
      <b className="b34">עריכת פרטי סניף</b>
      <div className="rectangle-parent24">
        <input
          className="group-child36"
          placeholder="שם סניף"
          type="text"
          value={branchName}
          onChange={handleBranchNameChange}
        />
        <input
          className="group-child37"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <input
          className="group-child38"
          placeholder="כתובת סניף"
          type="text"
          value={branchAddress}
          onChange={handleBranchAddressChange}
        />
      </div>

      <button className="rectangle-parent25" onClick={handleUpdateDetails}>
        <div className="group-child39" />
        <b className="b35">עדכן פרטים</b>
      </button>
      <button className="rectangle-parent26" onClick={handleBack}>
        <div className="group-child40" />
        <b className="b36">חזרה</b>
      </button>
      <button className="vector-wrapper21">
        <img className="vector-icon28" alt="" src="/vector17.svg" />
      </button>
      <div className="rectangle-parent27">
        <div className="group-child41" />
        <button className="vector-wrapper22">
          <img className="vector-icon29" alt="" src="/vector8.svg" />
        </button>
        <img className="icon17" alt="" src="/-02-13@2x.png" />
        <div className="group-parent11">
          <button className="vector-wrapper23">
            <img className="vector-icon30" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper24">
            <img className="vector-icon31" alt="" src="/vector9.svg" />
          </button>
          <button className="parent21">
            <div className="div78">משתמשים</div>
            <img
              className="icbaseline-people-alt-icon5"
              alt=""
              src="/icbaselinepeoplealt.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerEditBranch;
