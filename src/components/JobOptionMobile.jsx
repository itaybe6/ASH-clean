import PropTypes from "prop-types";
import "./JobOptionMobile.css";

const JobOptionMobile = ({
  className = "",
  branch,
  worker,
  bussiness,
  date,
  done,
}) => {
  return (
    <div className={`joboptionmobile ${className}`}>
      <div className="joboptionmobile-child" />
      <div className="div269">{branch}</div>
      <div className="div270">{worker}</div>
      <div className="div271">{done}</div>
      <button className="rectangle-parent96">
        <div className="group-child193" />
        <div className="div272">צפייה בתמונה</div>
      </button>
      <div className="div273">{bussiness}</div>
      <div className="div274">{date}</div>
      <div className="div275">תאריך</div>
      <div className="div276">עסק</div>
      <div className="div277">סניף</div>
      <div className="div278">עובד מבצע</div>
      <div className="div279">סטטוס</div>
      <div className="joboptionmobile-item" />
      <div className="joboptionmobile-inner" />
      <div className="joboptionmobile-child1" />
      <div className="joboptionmobile-child2" />
      <div className="joboptionmobile-child3" />
      <div className="joboptionmobile-child4" />
    </div>
  );
};

JobOptionMobile.propTypes = {
  className: PropTypes.string,
  branch: PropTypes.string,
  worker: PropTypes.string,
  bussiness: PropTypes.string,
  date: PropTypes.string,
  done: PropTypes.string,
};

export default JobOptionMobile;
