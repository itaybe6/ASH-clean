import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "./ManagerAddBranch.css";

const ManagerAddBranch = () => {
  const [branchName, setBranchName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const navigate = useNavigate();
  const handleBranchNameChange = (e) => setBranchName(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleBranchAddressChange = (e) => setBranchAddress(e.target.value);
  const { id } = useParams(); 
  
  const handleAddBranch = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/manager/addBranch/${id}`, {
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
      <div className="div218">שלום (שם מנהל)</div>
      <div className="div219">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
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
      <div className="rectangle-parent82">
        <div className="group-child182" />
        <button className="vector-wrapper81">
          <img className="vector-icon90" alt="" src="/vector1.svg" />
        </button>
        <img className="icon54" alt="" src="/-02-13@2x.png" />
        <div className="group-parent44">
          <button className="vector-wrapper82">
            <img className="vector-icon91" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper83">
            <img className="vector-icon92" alt="" src="/vector9.svg" />
          </button>
          <button className="parent52">
            <div className="div221">משתמשים</div>
            <img
              className="icbaseline-people-alt-icon8"
              alt=""
              src="/icbaselinepeoplealt.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerAddBranch;
