import PropTypes from "prop-types";
import "./WorkerOptionMobile.css";

const WorkerOptionMobile = ({ className = "", nameW }) => {
  return (
    <div className={`workeroptionmobile ${className}`}>
      <div className="group-parent46">
        <div className="rectangle-parent103">
          <div className="group-child200" />
          <div className="div292">משתמש</div>
          <div className="div293">שם מלא</div>
          <div className="div294">סניפים</div>
          <div className="group-child201" />
          <div className="group-child202" />
          <div className="group-child203" />
          <div className="group-child204" />
          <div className="div295">עובד</div>
          <div className="div296">{nameW}</div>
          <div className="div297">---------------</div>
        </div>
        <div className="group-parent47">
          <button className="rectangle-parent104">
            <div className="group-child205" />
            <b className="b120">עריכה</b>
          </button>
          <button className="rectangle-parent105">
            <div className="group-child206" />
            <b className="b120">עבודות</b>
          </button>
        </div>
      </div>
    </div>
  );
};

WorkerOptionMobile.propTypes = {
  className: PropTypes.string,
  nameW: PropTypes.string,
};

export default WorkerOptionMobile;
