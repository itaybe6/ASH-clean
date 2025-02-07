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
      
    </div>
  );
};

export default ManagerEditBranch;
