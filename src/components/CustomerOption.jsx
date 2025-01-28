import PropTypes from "prop-types";
import "./CustomerOption.css";

const CustomerOption = ({ className = "", nameCus, numBranch }) => {
  return (
    <div className={`customeroption ${className}`}>
      <img className="customeroption-child" alt="" src="/rectangle-106.svg" />
      <div className="div280">{nameCus}</div>
      <div className="div281">לקוח</div>
      <div className="div282">{numBranch}</div>
      <div className="group-parent44">
        <button className="rectangle-parent97">
          <div className="group-child194" />
          <b className="b114">עריכה</b>
        </button>
        <button className="rectangle-parent98">
          <div className="group-child195" />
          <b className="b114">עבודות</b>
        </button>
      </div>
    </div>
  );
};

CustomerOption.propTypes = {
  className: PropTypes.string,
  nameCus: PropTypes.string,
  numBranch: PropTypes.string,
};

export default CustomerOption;
