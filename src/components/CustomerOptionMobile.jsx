import PropTypes from "prop-types";
import "./CustomerOptionMobile.css";

const CustomerOptionMobile = ({ className = "", bname, numbranch }) => {
  return (
    <div className={`customeroptionmobile ${className}`}>
      <div className="customeroptionmobile-child" />
      <div className="div286">משתמש</div>
      <div className="div287">שם מלא</div>
      <div className="div288">סניפים</div>
      <div className="customeroptionmobile-item" />
      <div className="customeroptionmobile-inner" />
      <div className="customeroptionmobile-child1" />
      <div className="customeroptionmobile-child2" />
      <div className="div289">לקוח</div>
      <div className="div290">{bname}</div>
      <div className="div291">{numbranch}</div>
      <div className="group-parent45">
        <button className="rectangle-parent101">
          <div className="group-child198" />
          <b className="b118">עריכה</b>
        </button>
        <button className="rectangle-parent102">
          <div className="group-child199" />
          <b className="b118">עבודות</b>
        </button>
      </div>
    </div>
  );
};

CustomerOptionMobile.propTypes = {
  className: PropTypes.string,
  bname: PropTypes.string,
  numbranch: PropTypes.string,
};

export default CustomerOptionMobile;
