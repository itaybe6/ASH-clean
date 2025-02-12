import PropTypes from "prop-types";
import "./GroupComponent11.css";
import newImage from '../imges/126.jpg';

const GroupComponent11 = ({ className = "" }) => {
  return (
    <div className={`mask-group-container ${className}`}>
      <img className="mask-group-icon5" alt="" src={newImage} />
      <div className="group-child190" />
      <div className="div261">
        <p className="p57">
          <b>{`ריקי בי פארם `}</b>
        </p>
        <p className="p58">מנהלת מכירות ותפעול ארצי</p>
      </div>
      <div className="div262">
      שירות ברמה הגבוהה ביותר! צוות הניקיון עשה עבודה יסודית על חלונות הסניפים והחזיר להם ברק אמיתי. מאז, הלקוחות מגיבים בצורה חיובית יותר, והצוות שלנו נהנה מסביבה נעימה ונקייה. בהחלט שווה כל שקל!
      </div>
      <img className="group-child19136" alt="" src="/group-365.svg" />
    </div>
  );
};

GroupComponent11.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent11;
