import PropTypes from "prop-types";
import "./FetureJobWorker.css";

const FetureJobWorker = ({ className = "", nameb, address }) => {
  return (
    <div className={`feturejobworker ${className}`}>
      <div className="rectangle-parent111">
        <div className="frame-child36" />
        <div className="parent75">
          <b className="b125">פעיל</b>
          <div className="group-child217" />
        </div>
        <div className="group-parent49">
          <div className="group-wrapper11">
            <div className="rectangle-parent111">
              <b className="b126">{nameb}</b>
              <div className="div327">{address}</div>
            </div>
          </div>
          <div className="group-wrapper12">
            <div className="rectangle-parent111">
              <div className="div328">יום ה’ בשעה 14:30</div>
            </div>
          </div>
        </div>
        <button className="rectangle-parent112">
          <div className="group-child218" />
          <b className="b127">ביצוע</b>
        </button>
      </div>
    </div>
  );
};

FetureJobWorker.propTypes = {
  className: PropTypes.string,
  nameb: PropTypes.string,
  address: PropTypes.string,
};

export default FetureJobWorker;
