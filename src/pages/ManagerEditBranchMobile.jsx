import React, { useState } from "react";
import "./ManagerEditBranchMobile.css";
import MobileMenuManager from "./MobileMenuManager";
import { useNavigate  , useParams} from 'react-router-dom';
import axios from 'axios';

const ManagerEditBranchMobile = () => {
  // הגדרת state לכל שדה קלט
  const [branchName, setBranchName] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayMenu, setDisplayMenu] = useState(false)
 const {id} = useParams();
  const navigate = useNavigate();

  const handleBranchNameChange = (e) => setBranchName(e.target.value);
  const handleBranchAddressChange = (e) => setBranchAddress(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

  const handleUpdateDetails = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/manager/editBranch/${id}`, {
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

  const deleteBranch = async () => {
    try {

      const response = await axios.delete(`http://localhost:5000/manager/deleteBranch/${id}`);
      if (response.status === 200) {
        console.log('Branch deleted successfully!');
        navigate('/manager-display-users');
      }
    } catch (error) {
      console.error('Error deleting branch:', error);
    }
  }
  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };
  return (
    <div className="manager-edit-branch-mobile">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}

      <div className="manager-edit-branch-mobile-child" />
      <div className="parent22">
        <div className="div80">אנא מלא את הפרטים למטה כדי לערוך את הסניף</div>
        <b className="b38">עריכת פרטי סניף</b>
      </div>
      <div className="rectangle-parent28">
        <input
          className="group-child42"
          placeholder="שם סניף"
          type="text"
          value={branchName}
          onChange={handleBranchNameChange}
        />
        <input
          className="group-child43"
          placeholder="כתובת סניף"
          type="text"
          value={branchAddress}
          onChange={handleBranchAddressChange}
        />
        <input
          className="group-child44"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <button className="rectangle-parent29" onClick={handleUpdateDetails}>
        <div className="group-child45" />
        <b className="b39">עדכן פרטים</b>
      </button>
      <button className="vector-wrapper25" onClick={deleteBranch}>
        <img className="vector-icon32" alt="" src="/vector18.svg" />
      </button>
      <img className="icon18" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper26" onClick={menu}>
        <img className="vector-icon33" alt="" src="/vector10.svg" />
      </button>
    </div>
  );
};

export default ManagerEditBranchMobile;
