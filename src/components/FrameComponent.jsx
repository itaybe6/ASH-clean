import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <button className={`homepage-mobile-inner2 ${className}`}>
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
