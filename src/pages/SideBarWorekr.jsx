import "./SideBarWorekr.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const SideBarWorekr = ({ user }) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const setting = () => {
    navigate("/worker-edit-profile");
  };
  const jobs = () => {
    navigate(`/worker-future-jobs/${user.id}`);
  }

  const handleLogout = () => {
    logout();
    navigate("/homepage"); 
  };
  return (
    <div className="side-bar-worekr">
      <div className="rectangle-parent90">
        <div className="group-child192" />
        <button className="vector-wrapper92" onClick={handleLogout}>
          <img className="vector-icon101" alt="" src="/vector8.svg" />
        </button>
        <img className="icon59" alt="" src="/-02-13@2x.png" />
      </div>
      <div className="side-bar-worekr-inner">
        <div className="group-parent48">
          <button className="group-wrapper8">
            <button className="vector-wrapper93" onClick={setting}>
              <img className="vector-icon102" alt="" src="/vector2.svg" />
            </button>
          </button>
          <button className="vector-wrapper94" onClick={jobs}>
            <img className="vector-icon103" alt="" src="/vector9.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarWorekr;
