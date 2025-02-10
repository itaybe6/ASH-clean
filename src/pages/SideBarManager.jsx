import "./SideBarManager.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const SideBarManager = ({ user }) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const jobs = () => {
    navigate(`/manager-jobs`)
  }
  const users = () => {
    navigate(`/manager-display-users`)
  }
  const edit = () => {
    navigate(`/manager-edit-profile`)
  }
  const handleLogout = () => {
    logout()
    navigate("/homepage"); 
  }
  const homepage = () => {
    navigate("/homepage"); 
  };
  return (
    <div className="side-bar-manager">
      <div className="side-bar-manager-child" />
      <div className="side-bar-manager-inner">
        <div className="side-bar-manager-child" />
      </div>
      <button className="vector-wrapper95" onClick={handleLogout}>
        <img className="vector-icon104" alt="" src="/vector1.svg" />
      </button>
      <img className="icon60" alt="" src="/-02-13@2x.png" onClick={homepage}/>
      <div className="group-parent49">
        <button className="vector-wrapper96" onClick={edit}>
          <img className="vector-icon105" alt="" src="/vector2.svg" />
        </button>
        <button className="vector-wrapper97" onClick={jobs}>
          <img className="vector-icon106" alt="" src="/vector9.svg" />
        </button>
        <button className="parent56" onClick={users}>
          <div className="div232">משתמשים</div>
          <img
            className="icbaseline-people-alt-icon10"
            alt=""
            src="/icbaselinepeoplealt.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default SideBarManager;
