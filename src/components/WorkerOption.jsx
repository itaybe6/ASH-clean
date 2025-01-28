import PropTypes from "prop-types";
import "./WorkerOption.css";

const WorkerOption = ({ className = "", nameW }) => {
  return (
    <div className={`workeroption ${className}`}>
      <div className="workeroption-child" />
      <div className="div283">{nameW}</div>
      <div className="div284">עובד</div>
      <div className="div285">----------------</div>
      <button className="rectangle-parent99">
        <div className="group-child196" />
        <b className="b116">עריכה</b>
      </button>
      <button className="rectangle-parent100">
        <div className="group-child197" />
        <b className="b116">עבודות</b>
      </button>
    </div>
  );
};

WorkerOption.propTypes = {
  className: PropTypes.string,
  nameW: PropTypes.string,
};

export default WorkerOption;
