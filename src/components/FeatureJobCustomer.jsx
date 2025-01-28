import PropTypes from "prop-types";
import "./FeatureJobCustomer.css";

const FeatureJobCustomer = ({ className = "", namew, done, time, date }) => {
  return (
    <div className={`featurejobcustomer ${className}`}>
      <div className="featurejobcustomer-child" />
      <div className="div312">{namew}</div>
      <div className="div313">{done}</div>
      <div className="div314">{time}</div>
      <div className="div315">{date}</div>
    </div>
  );
};

FeatureJobCustomer.propTypes = {
  className: PropTypes.string,
  namew: PropTypes.string,
  done: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
};

export default FeatureJobCustomer;
