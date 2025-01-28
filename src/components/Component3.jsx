import GroupComponent10 from "./GroupComponent10";
import GroupComponent11 from "./GroupComponent11";
import PropTypes from "prop-types";
import "./Component3.css";

const Component3 = ({ className = "" }) => {
  return (
    <div className={`component-2 ${className}`}>
      <GroupComponent10 />
      <div className="component-2-inner">
        <GroupComponent11 />
      </div>
    </div>
  );
};

Component3.propTypes = {
  className: PropTypes.string,
};

export default Component3;
