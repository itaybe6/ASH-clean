import PropTypes from "prop-types";
import "./GroupComponent9.css";
import { useNavigate } from 'react-router-dom';

const GroupComponent9 = ({ className = "" }) => {
  const navigate = useNavigate();
  const access = () => { navigate('/accessibility') }
  return (
    <button className={`homepage-mobile-inner3 ${className}`} onClick={access}>
      <div className="group-wrapper8">
        <div className="rectangle-parent93">
          <div className="group-child186" />
          <b className="b113">{`להצהרת נגישות `}</b>
        </div>
      </div>
    </button>
  );
};

GroupComponent9.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent9;
