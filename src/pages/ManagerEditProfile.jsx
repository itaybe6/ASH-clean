import React, { useState } from "react";
import "./ManagerEditProfile.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import LogoCarousel from "../components/LogoCarousel";

const ManagerEditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;
  const { token } = useContext(AuthContext);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${apiUrl}/manager/update`,
        { fullName, phoneNumber, city, newPassword },
        { headers: { Authorization: `Bearer ${token.id}` } }
      );
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Error updating manager:", error);
      alert("שגיאה בעדכון הפרטים");
    }
  };


  const jobs = () => {
    navigate(`/manager-jobs`)
  }
  const users = () => {
    navigate(`/manager-display-users`)
  }

  return (
    <div className="manager-edit-profile14">
      <div className="group-parent167">
        <button className="vector-wrapper32" onClick={handleUpdate}>
          <img className="vector-icon407" alt="" src="/vector20.svg" />
        </button>
        <input
          className="group-child697"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
        <div className="div98">הגדר סיסמא חדשה</div>
        <input
          className="group-child707"
          placeholder="כתוב כאן סיסמא חדשה"
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />

        <input
          className="group-child727"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <input
          className="group-child737"
          placeholder="עיר"
          type="text"
          value={city}
          onChange={handleCityChange}
          required
        />
      </div>

      < LogoCarousel />


    </div>
  );
};

export default ManagerEditProfile;
