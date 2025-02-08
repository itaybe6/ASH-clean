import "./ManagerAddWorkerIphone.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import MobileMenuManager from "./MobileMenuManager";
const apiUrl = import.meta.env.VITE_API_URL;

const ManagerAddWorkerIphone = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    password: "",
    verification: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.verification) {
      alert("❌ הסיסמאות לא תואמות!");
      return;
    }
    const workerData = {
      fullName: formData.fullName,
      phone: formData.phone,
      city: formData.city,
      password: formData.password,
    };
    try {
      const response = await axios.post(`${apiUrl}/manager/add-worker`, workerData);

      if (response.status === 201) {
        alert("✅ עובד נוסף בהצלחה!");
        navigate("/manager-display-users");
      } else {
        alert("❌ שגיאה: " + response.data.message);
      }
    } catch (error) {
      console.error("❌ שגיאה בהוספת עובד:", error);
      alert("❌ שגיאה בהוספת עובד, נסה שוב.");
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
    <div className="manager-add-worker-iphone">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}
      <div className="manager-add-worker-iphone-child" />
      <b className="b48">הוספת משתמש - עובד</b>
      <div className="div103">אנא מלא את הפרטים למטה כדי להוסיף עובד</div>
      <img
        className="icbaseline-person-icon"
        alt=""
        src="/icbaselineperson.svg"
      />
      <img className="icon24" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper38" onClick={menu}>
        <img className="vector-icon46" alt="" src="/vector10.svg" />
      </button>
      <div className="rectangle-parent42">
        <input className="group-child69" placeholder="שם מלא" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required />
        <input className="group-child70" placeholder="עיר" type="text" name="city" value={formData.city} onChange={handleChange} required />
        <input className="group-child71" placeholder="מספר פלאפון" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
      </div>
      <input className="manager-add-worker-iphone-item" name="password" placeholder="סיסמא" type="password" value={formData.password} onChange={handleChange} required />
      <input className="manager-add-worker-iphone-inner" name="verification" placeholder="אימות סיסמא" type="password" value={formData.verification} onChange={handleChange} required />
      <button className="rectangle-parent43" onClick={handleSubmit}>
        <div className="group-child72" />
        <b className="b49">הוספת משתמש</b>
      </button>
    </div>
  );
};

export default ManagerAddWorkerIphone;
