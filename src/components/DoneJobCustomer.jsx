import PropTypes from "prop-types";
import "./DoneJobCustomer.css";

const DoneJobCustomer = ({ className = "", workername, time, date, done }) => {
  return (
    <div className={`donejobcustomer ${className}`}>
      <div className="donejobcustomer-child" />
      <div className="div298">{workername}</div>
      <div className="div299">{done}</div>
      <div className="div300">{time}</div>
      <div className="div301">{date}</div>
      <button className="rectangle-parent106">
        <div className="group-child207" />
        <div className="div302">צפייה בתמונה</div>
      </button>
    </div>
  );
};

DoneJobCustomer.propTypes = {
  className: PropTypes.string,
  workername: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  done: PropTypes.string,
};

export default DoneJobCustomer;
