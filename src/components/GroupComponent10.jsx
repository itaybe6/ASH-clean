import PropTypes from "prop-types";
import "./GroupComponent10.css";

const GroupComponent10 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent94 ${className}`}>
      <div className="group-child187" />
      <div className="group-child188" />
      <div className="div258">“</div>
      <div className="div259">
        <p className="p53">
          לקוחותינו מעידים על שירות מקצועי, איכותי ואמין שעושה הבדל אמיתי.
          חלונות ושלטים נוצצים, עמידה בלוחות זמנים ותוצאות מבריקות הם רק חלק
          מהדברים שהופכים אותנו לבחירה המובילה.
        </p>
        <p className="p53">
          <b>הצטרפו גם אתם לעסקים המרוצים ותנו לנו לדאוג לניקיון שלכם!</b>
        </p>
      </div>
      <div className="div260">
        <p className="p53">{`מה הלקוחות שלנו `}</p>
        <p className="p53">אומרים עלינו</p>
      </div>
      <div className="group-child189" />
    </div>
  );
};

GroupComponent10.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent10;
