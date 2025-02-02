import PropTypes from "prop-types";
import "./UserOption.css";

const CustomerOption = ({ className = "", nameCus, numBranch, type }) => {

  return (
    <div className={`customeroption ${className}`}>
    {/* כפתורים מצד שמאל */}
    <div className="customer-actions">
      <button className="btn-gray">עבודות</button>
      <button className="btn-orange">עריכה</button>
    </div>

    {/* מבנה הטבלה */}
    <div className="customer-row">
      <div className="table-value">{numBranch ?  `${numBranch} סניפים` : "--------------"}</div>
      <div className="table-value">{nameCus}</div>
      <div className="table-header">{type}</div>
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
