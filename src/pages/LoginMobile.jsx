import "./LoginMobile.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginMobile = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1]; // החלק האמצעי של ה-JWT
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64)); // פענוח Base64 ל-JSON
    } catch (error) {
      return null;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault?.();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        phone,
        password,
      });
      localStorage.setItem("token", res.data.token);
      const token = parseJwt(res.data.token)
      if (token.role == "Manager") {
        navigate("/manager-registration-add-customer");
      }
      else if (token.role == "Regular") {
        navigate("/worker-edit-profile");
      }
      else {
        navigate(`/clientJobs/${token.id}/`);
      }
      alert("ההתחברות הושלמה בהצלחה")
    } catch (err) {
      if (err.response?.status === 401) {
        alert("שם משתמש או סיסמה לא נכונים");
      } else {
        alert("שגיאה כללית בכניסה למערכת. נסה שנית מאוחר יותר.");
      }
      console.error(err);

    }
  };
  return (
    <div className="login-mobile">
      <img className="icon39" alt="" src="/-02-14@2x.png" />
      <div className="div184">כניסה לאזור האישי</div>
      <div className="div185">אנא הכנס מספר פלאפון וסיסמא כדי להתחבר</div>
      <input
        className="login-mobile-child"
        placeholder="מספר פלאפון"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="login-mobile-item"
        placeholder="סיסמא"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="vector-wrapper68" onClick={handleLogin}>
        <img className="vector-icon77" alt="" src="/vector26.svg" />
      </button>
      <button className="rectangle-parent63">
        <div className="group-child131" />
        <div className="div186">חזרה לאתר</div>
      </button>
    </div>
  );
};

export default LoginMobile;
