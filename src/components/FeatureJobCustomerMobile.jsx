import PropTypes from "prop-types";
import "./FeatureJobCustomerMobile.css";

const FeatureJobCustomerMobile = ({
  className = "",
  namew,
  time,
  date,
  prop,
}) => {
  return (
    <div className={`featurejobcustomer-mobile ${className}`}>
      <div className="rectangle-parent108">
        <div className="group-child209" />
        <div className="div316">{namew}</div>
        <div className="div317">{prop}</div>
        <div className="div318">{time}</div>
        <div className="div319">{date}</div>
        <div className="div320">תאריך</div>
        <div className="div321">שעה</div>
        <div className="div322">עובד מבצע</div>
        <div className="div323">סטטוס</div>
        <div className="group-child210" />
        <div className="group-child211" />
        <div className="group-child212" />
        <div className="group-child213" />
        <div className="group-child214" />
      </div>
      <div className="div324">---------------</div>
    </div>
  );
};

FeatureJobCustomerMobile.propTypes = {
  className: PropTypes.string,
  namew: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  prop: PropTypes.string,
};

export default FeatureJobCustomerMobile;
