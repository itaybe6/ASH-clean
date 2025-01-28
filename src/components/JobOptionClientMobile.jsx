import PropTypes from "prop-types";
import "./JobOptionClientMobile.css";

const JobOptionClientMobile = ({ className = "", date, time, namew, done }) => {
  return (
    <div className={`joboptionclientmobile ${className}`}>
      <div className="joboptionclientmobile-child" />
      <div className="div334">{namew}</div>
      <div className="div335">{done}</div>
      <button className="rectangle-parent115">
        <div className="group-child221" />
        <div className="div336">צפייה בתמונה</div>
      </button>
      <div className="div337">{time}</div>
      <div className="div338">{date}</div>
      <div className="div339">תאריך</div>
      <div className="div340">שעה</div>
      <div className="div341">עובד מבצע</div>
      <div className="div342">סטטוס</div>
      <div className="joboptionclientmobile-item" />
      <div className="joboptionclientmobile-inner" />
      <div className="joboptionclientmobile-child1" />
      <div className="joboptionclientmobile-child2" />
      <div className="joboptionclientmobile-child3" />
    </div>
  );
};

JobOptionClientMobile.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  namew: PropTypes.string,
  done: PropTypes.string,
};

export default JobOptionClientMobile;
