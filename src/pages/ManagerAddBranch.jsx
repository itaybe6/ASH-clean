import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "./ManagerAddBranch.css";

const ManagerAddBranch = () => {
  const [branchName, setBranchName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const handleBranchNameChange = (e) => setBranchName(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleBranchAddressChange = (e) => setBranchAddress(e.target.value);
  const { id } = useParams(); 
  
  const handleAddBranch = async () => {
    try {
      const response = await axios.post(`${apiUrl}/manager/addBranch/${id}`, {
        name: branchName,
        phone: phoneNumber,
        address: branchAddress,
      });

      if (response.status === 201) {
        alert("Branch added successfully!");
        navigate(-1);

      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      alert("Server error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="manager-add-branch">
      <div className="manager-add-branch-child" />
      <img className="manager-add-branch-item" alt="" src="/line-21.svg" />
      <div className="rectangle-parent80">
        <input
          className="group-child178"
          placeholder="שם סניף"
          type="text"
          value={branchName}
          onChange={handleBranchNameChange}
          required
        />
        <input
          className="group-child179"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <input
          className="group-child180"
          placeholder="כתובת סניף"
          type="text"
          value={branchAddress}
          onChange={handleBranchAddressChange}
          required
        />
      </div>
      <button className="rectangle-parent81" onClick={handleAddBranch}>
        <div className="group-child181" />
        <b className="b86">הוספה</b>
      </button>
      <div className="parent51">
        <div className="div220">אנא מלא את הפרטים למטה כדי להוסיף סניף</div>
        <b className="b87">הוספת סניף</b>

      </div>
    
    </div>
  );
};

export default ManagerAddBranch;
