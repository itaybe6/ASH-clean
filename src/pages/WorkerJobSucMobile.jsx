import PropTypes from "prop-types";
import "./WorkerJobSucMobile.css";

const WorkerJobSucMobile = ({ nameb, address, time }) => {
  return (
    <div className="worker-job-suc-mobile">
      <div className="worker-job-suc-mobile-inner">
        <div className="component-group">
          <div className="component-group">
            <div className="component-child2" />
          </div>
          <div className="div131">{nameb}</div>
          <div className="div132">{address}</div>
          <div className="div133">{time}</div>
          <div className="group-wrapper6">
            <div className="group-wrapper7">
              <button className="rectangle-parent49">
                <div className="group-child105" />
                <div className="parent31">
                  <b className="b59">תמונה</b>
                  <img className="group-child106" alt="" src="/group-351.svg" />
                </div>
              </button>
            </div>
          </div>
          <button className="rectangle-parent50">
            <div className="group-child107" />
            <b className="b60">בוצע</b>
          </button>
        </div>
      </div>
    </div>
  );
};

WorkerJobSucMobile.propTypes = {
  nameb: PropTypes.string,
  address: PropTypes.string,
  time: PropTypes.string,
};

export default WorkerJobSucMobile;
