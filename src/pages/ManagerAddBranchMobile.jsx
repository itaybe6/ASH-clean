import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./ManagerAddBranchMobile.css";
import MobileMenuManager from "./MobileMenuManager";

const ManagerAddBranchMobile = () => {
  const [branchName, setBranchName] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayMenu, setDisplayMenu] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const handleBranchNameChange = (e) => setBranchName(e.target.value);
  const handleBranchAddressChange = (e) => setBranchAddress(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
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

  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };

  return (
    <div className="manager-add-branch-mobile">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}

      <div className="manager-add-branch-mobile-child" />
      
      <div className="rectangle-parent83">
        <input
          className="group-child183"
          placeholder="שם סניף"
          type="text"
          value={branchName}
          onChange={handleBranchNameChange}
          required
        />
        <input
          className="group-child184"
          placeholder="כתובת סניף"
          type="text"
          value={branchAddress}
          onChange={handleBranchAddressChange}
          required
        />
        <input
          className="group-child185"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
      </div>
      <button className="rectangle-parent84" onClick={handleAddBranch}>
        <div className="group-child186" />
        <b className="b89">הוספה</b>
      </button>
      <img className="icon55" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper84">
        <img className="vector-icon93" alt="" src="/vector10.svg" />
      </button>
      <div className="parent53">
        <div className="div223">אנא מלא את הפרטים למטה כדי להוסיף סניף</div>
        <b className="b90">הוספת סניף</b>

      </div>
    </div>
  );
};

export default ManagerAddBranchMobile;
