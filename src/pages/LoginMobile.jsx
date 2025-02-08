import "./LoginMobile.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginMobile = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { setToken, setRole } = useContext(AuthContext);

  function b64DecodeUnicode(str) {
    return decodeURIComponent(
      atob(str)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
  }
  function parseJwt(token) {
    const base64Url = token.split('.')[1];
    // הופכים - ו_ לתווי Base64 רגילים
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = b64DecodeUnicode(base64);
    return JSON.parse(jsonPayload);
  }

  const handleLogin = async (e) => {
    e.preventDefault?.();
    try {
      const res = await axios.post(`${apiUrl}/auth/login`, {
        phone,
        password,
      });
      localStorage.setItem("token", res.data.token);
      const user = parseJwt(res.data.token);
      setToken(user);  
      setRole(user.role || "customer");
      if (user.role == "Manager") {
        navigate("/manager-display-users");
      }
      else if (user.role == "Regular") {
        navigate("/worker-edit-profile");
      }
      else {
        navigate(`/clientJobs/${user.id}/`);
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

  const back = () => {navigate(`/homepage`);}

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
      <button className="rectangle-parent63" onClick={back}>
        <div className="group-child131" />
        <div className="div186">חזרה לאתר</div>
      </button>
    </div>
  );
};

export default LoginMobile;
