import "./FrameComponent.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const FrameComponent = ({ className = "" }) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const login = () => {
    if (!token) {
      navigate("/login")
    }
    if (token.role == "Manager") {
      navigate("/manager-display-users");
    }
    else if (token.role == "Regular") {
      navigate("/worker-edit-profile");
    }
    else {
      navigate(`/clientJobs/${token.id}/`);
    }
  }

  return (
    <button className={`homepage-mobile-inner2 ${className}`} onClick={login}>
      <div className="parent71">
        <div className="div253">אזור אישי</div>
        <img className="mdiaccount-icon1" alt="" src="/mdiaccount.svg" />
      </div>
    </button>
  );
};

export default FrameComponent;
