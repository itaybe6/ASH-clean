import "./ManagerAddWorker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL; 

const ManagerAddWorker = () => {
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

  return (
    <div className="manager-add-worker">
      <section className="manager-add-worker-child" />
      <div className="manager-add-worker-inner">
        <div className="vector-parent96">
          <b className="b188">הוספת משתמש - עובד</b>
          <div className="div27">אנא מלא את הפרטים למטה כדי להוסיף סניף</div>
        </div>
      </div>
      <div className="manager-add-worker-inner1">
        <div className="group-frame">
          <div className="group-frame">
            <input className="group-input" placeholder="שם מלא" name="fullName" type="text"  value={formData.fullName} onChange={handleChange} required />
            <input className="group-child12" placeholder="מספר פלאפון" name="phone" type="tel" value={formData.phone} onChange={handleChange} required/>
            <input className="group-child13" placeholder="עיר" type="text" name="city" value={formData.city} onChange={handleChange} required />
          </div>
        </div>
      </div>
      <div className="rectangle-parent8">
        <input className="group-child14" name="password" placeholder="סיסמא"  type="password" value={formData.password} onChange={handleChange} required />
        <input className="group-child15" name="verification" placeholder="אימות סיסמא" type="password" value={formData.verification} onChange={handleChange} required/>
      </div>
      <button className="rectangle-parent9" onClick={handleSubmit} >
        <div className="group-child16" />
        <b className="b19">הוספת משתמש</b>
      </button>
    </div>
  );
};

export default ManagerAddWorker;
