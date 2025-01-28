import PropTypes from "prop-types";
import "./FetureJobWorkerMobile.css";

const FetureJobWorkerMobile = ({ className = "", nameb, address }) => {
  return (
    <div className={`feturejobworkermobile ${className}`}>
      <div className="rectangle-parent109">
        <div className="component-child9" />
        <div className="parent73">
          <b className="b122">פעיל</b>
          <div className="group-child215" />
        </div>
        <div className="group-parent48">
          <div className="group-wrapper9">
            <div className="parent74">
              <b className="b123">{nameb}</b>
              <div className="div325">{address}</div>
            </div>
          </div>
          <div className="group-wrapper10">
            <div className="parent74">
              <div className="div326">יום ה’ בשעה 14:30</div>
            </div>
          </div>
        </div>
        <button className="rectangle-parent110">
          <div className="group-child216" />
          <b className="b124">ביצוע</b>
        </button>
      </div>
    </div>
  );
};

FetureJobWorkerMobile.propTypes = {
  className: PropTypes.string,
  nameb: PropTypes.string,
  address: PropTypes.string,
};

export default FetureJobWorkerMobile;
