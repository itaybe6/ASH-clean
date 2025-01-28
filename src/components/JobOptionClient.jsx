import PropTypes from "prop-types";
import "./JobOptionClient.css";

const JobOptionClient = ({ className = "", date, time, namew, done }) => {
  return (
    <div className={`joboptionclient ${className}`}>
      <div className="rectangle-parent113">
        <div className="group-child219" />
        <div className="div329">{namew}</div>
        <div className="div330">{done}</div>
        <div className="div331">{time}</div>
        <div className="div332">{date}</div>
      </div>
      <button className="rectangle-parent114">
        <div className="group-child220" />
        <div className="div333">צפייה בתמונה</div>
      </button>
    </div>
  );
};

JobOptionClient.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  namew: PropTypes.string,
  done: PropTypes.string,
};

export default JobOptionClient;
