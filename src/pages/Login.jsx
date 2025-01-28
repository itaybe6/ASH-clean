import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    // אם לא מדובר בטופס (form), אפשר לוותר על preventDefault
    e.preventDefault?.();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        phone,
        password,
      });
      localStorage.setItem("token", res.data.token);
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
  return (
    <div className="login">
      <button className="vector-wrapper65">
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

export default Login;
