import PropTypes from "prop-types";
import "./GroupComponent11.css";

const GroupComponent11 = ({ className = "" }) => {
  return (
    <div className={`mask-group-container ${className}`}>
      <img className="mask-group-icon5" alt="" src="/mask-group@2x.png" />
      <div className="group-child190" />
      <div className="div261">
        <p className="p57">
          <b>{`יוסי כהן, `}</b>
        </p>
        <p className="p58">בעל עסק בקניון</p>
      </div>
      <div className="div262">
        לא האמנתי כמה הבדל ניקיון מקצועי יכול לעשות! אחרי שניקו לי את חלונות
        הראווה והשלטים, הלקוחות התחילו לשים לב לעסק הרבה יותר. שירות מהיר, אמין
        ומדויק – ממליץ לכל אחד!
      </div>
      <img className="group-child19136" alt="" src="/group-365.svg" />
    </div>
  );
};

GroupComponent11.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent11;
