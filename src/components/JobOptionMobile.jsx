import PropTypes from "prop-types";
import "./JobOptionMobile.css";

const JobOptionMobile = ({
  branch,
  worker,
  bussiness,
  date,
  status,
}) => {
  return (
    <div className="joboptionmobile">
      {/* שורה 1: הכותרת תאריך (מימין) והערך (משמאל) */}
      <div>תאריך</div>
      <div>{date}</div>
      
      {/* שורה 2: הכותרת עסק, אחר כך הערך */}
      <div>עסק</div>
      <div>{bussiness}</div>
  
      {/* שורה 3: הכותרת סניף, הערך */}
      <div>סניף</div>
      <div>{branch}</div>
  
      {/* שורה 4: הכותרת עובד מבצע, הערך */}
      <div>עובד מבצע</div>
      <div>{worker}</div>
  
      {/* שורה 5: הכותרת סטטוס, הערך */}
      <div>סטטוס</div>
      <div>{status ? "נעשה" : "לא נעשה"}</div>
  
      {/* כפתור */}
      <button className="full-span">צפייה בתמונה</button>
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
