import PropTypes from "prop-types";
import "./DoneJobCustomerMobile.css";

const DoneJobCustomerMobile = ({ className = "", date, time, namew, done }) => {
  return (
    <div className={`donejobcustomer-mobile ${className}`}>
      <div className="donejobcustomer-mobile-child" />
      <div className="div303">{namew}</div>
      <div className="div304">{done}</div>
      <button className="donejobcustomer-mobile-inner">
        <div className="rectangle-parent107">
          <div className="group-child208" />
          <div className="div305">צפייה בתמונה</div>
        </div>
      </button>
      <div className="div306">{time}</div>
      <div className="div307">{date}</div>
      <div className="div308">תאריך</div>
      <div className="div309">שעה</div>
      <div className="div310">עובד מבצע</div>
      <div className="div311">סטטוס</div>
      <div className="donejobcustomer-mobile-item" />
      <div className="donejobcustomer-mobile-child1" />
      <div className="donejobcustomer-mobile-child2" />
      <div className="donejobcustomer-mobile-child3" />
      <div className="donejobcustomer-mobile-child4" />
    </div>
  );
};

DoneJobCustomerMobile.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  namew: PropTypes.string,
  done: PropTypes.string,
};

export default DoneJobCustomerMobile;
