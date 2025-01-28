import PropTypes from "prop-types";
import "./FutureJobClient.css";

const FutureJobClient = ({ className = "", namew, date, done, time }) => {
  return (
    <div className={`futurejobclient ${className}`}>
      <div className="futurejobclient-inner">
        <div className="group-child222" />
      </div>
      <div className="div343">{namew}</div>
      <div className="div344">{done}</div>
      <div className="div345">{time}</div>
      <div className="div346">{date}</div>
    </div>
  );
};

FutureJobClient.propTypes = {
  className: PropTypes.string,
  namew: PropTypes.string,
  date: PropTypes.string,
  done: PropTypes.string,
  time: PropTypes.string,
};

export default FutureJobClient;
