import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setRole } = useContext(AuthContext);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

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
      const user = parseJwt(res.data.token);
      setToken(user);  
      setRole(user.role || "customer");
      
      localStorage.setItem("token", res.data.token);
      if(user.role == "Manager"){
        navigate("/manager-display-users");
      }
      else if (user.role == "Regular"){
        navigate("/worker-edit-profile"); 
      }
      else {
        navigate(`/clientJobs/${user.id}/`);
      }
    
      alert("ההתחברות הושלמה בהצלחה")

    } catch (err) {
      if (err.response?.status === 401) {
        alert( "שם משתמש או סיסמה לא נכונים");
      } else {
        alert("שגיאה כללית בכניסה למערכת. נסה שנית מאוחר יותר.");
      }
      console.error(err);
  
    }
  };

  const back = () => {navigate(`/homepage`);}
  return (
    <div className="login">
      <button className="vector-wrapper65" onClick={back}>
        <img className="vector-icon74" alt="" src="/vector24.svg" />
      </button>
      <div className="wrapper13">
        <img className="icon37" alt="" src="/-02-13@2x.png" />
      </div>
      <div className="frame-parent6">
        <div className="wrapper14">
          <div className="div178">כניסה לאזור האישי</div>
        </div>
        <div className="wrapper15">
          <div className="div179">אנא הכנס מספר פלאפון וסיסמא כדי להתחבר</div>
        </div>
      </div>
      <input
          className="login-child"
          placeholder="מספר פלאפון"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
         <input
          className="login-item"
          placeholder="סיסמא"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button className="login-inner"  onClick={handleLogin} > 
        <div className="vector-wrapper66">
          <img className="vector-icon75" alt="" src="/vector25.svg" />
        </div>
      </button>
    </div>
  );
};

export default Login;