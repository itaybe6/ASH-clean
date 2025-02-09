import PropTypes from "prop-types";
import "./FrameComponent.css";
import { useNavigate } from 'react-router-dom';

const FrameComponent = ({ className = "" }) => {
 const navigate = useNavigate();
 const login = () =>{navigate('/login')}
  return (
    <button className={`homepage-mobile-inner2 ${className}`} onClick={login}>
      <div className="parent71">
        <div className="div253">אזור אישי</div>
        <img className="mdiaccount-icon1" alt="" src="/mdiaccount.svg" />
      </div>
    </button>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
