import React, { useState } from "react";
import "./ManagerEditUser.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManagerEditUser = () => {
  // הגדרת state לכל שדה קלט
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const navigate = useNavigate();
  const { id, type } = useParams();



  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedData = {
      type,
      fullName,
      phoneNumber,
      city,
    };
    try {
      const response = await axios.put(`${apiUrl}/manager/editUser/${id}`, updatedData);
      if (response.status === 200) {
        alert('הפרטים עודכנו בהצלחה');
        console.log('Updated User:', response.data);
        navigate(`/manager-display-users`)
      } else {
        alert('שגיאה: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('שגיאה בעדכון הנתונים');
    }

  };

  const deleteCustomer = async () => {
    try {
      const response = await axios.delete(`${apiUrl}/manager/delete-customer/${id}`);
      Swal.fire({
        title: 'מחיקת לקוח הצליחה',
        text: 'הפעולה בוצעה בהצלחה',
        icon: 'success',
        position: 'top',
        confirmButtonText: 'מעולה!',
        confirmButtonColor: '#28a745',
        showClass: {
          popup: 'animate__animated animate__zoomIn animate__slow'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut animate__slow'
        }
      });
      navigate(`/manager-display-users`)
    } catch (error) {
      console.error('❌ שגיאה במחיקת הלקוח:', error.response?.data?.error || error.message);
      navigate(`/manager-display-users`)
    }
  };

  const deleteEmployee = async () => {
    try {
      const response = await axios.delete(`${apiUrl}/manager/delete-employee/${id}`);
      Swal.fire({
        title: 'מחיקת עובד הצליחה',
        text: 'הפעולה בוצעה בהצלחה',
        icon: 'success',
        position: 'top',
        confirmButtonText: 'מעולה!',
        confirmButtonColor: '#28a745',
        showClass: {
          popup: 'animate__animated animate__zoomIn animate__slow'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut animate__slow'
        }
      }); navigate(`/manager-display-users`)
    } catch (error) {
      console.error('❌ שגיאה במחיקת עובד:', error.response?.data?.error || error.message);
      navigate(`/manager-display-users`)
    }
  };

  const deleteUser = async () => {
    const isConfirmed = window.confirm('האם אתה בטוח שברצונך לבצע פעולה זו ?');
    if (isConfirmed) {
      if (type == 'לקוח') {
        deleteCustomer();
      }
      else {
        deleteEmployee();
      }
    }
  }
  return (
    <div className="manager-edit-profile">
      <div className="manager-edit-profile-child" />
      <div className="parent25">
        <div className="div96">עריכת פרטי משתמש</div>      </div>
      <div className="group-parent16">
        <button className="vector-wrapper32" onClick={handleUpdate}>
          <img className="vector-icon40" alt="" src="/vector20.svg" />
        </button>
        <input
          className="group-child69"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
        <div className="div98">הגדר סיסמא חדשה</div>
        <input
          className="group-child70"
          placeholder="כתוב כאן סיסמא חדשה"
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />

        <input
          className="group-child72"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <input
          className="group-child73"
          placeholder="עיר"
          type="text"
          value={city}
          onChange={handleCityChange}
          required
        />
      </div>

      <button className="vector-wrapper75" onClick={deleteUser}>
        <img className="vector-icon45" alt="" src="/vector17.svg" />
      </button>

    </div>
  );
};

export default ManagerEditUser;
