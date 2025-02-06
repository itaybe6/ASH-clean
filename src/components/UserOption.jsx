import PropTypes from "prop-types";
import "./UserOption.css";
import { useNavigate } from 'react-router-dom';

const UserOption = ({ className = "", nameCus, numBranch, type, id }) => {
  const text = type === "לקוח" ? "הוספת סניף" : "הוספת עבודה";
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`/manager-edit-user/${id}/${type}`);
  };

  const nevigateJobs = () => {
    if (type == "לקוח") {
      navigate(`/clientJobs/${id}`);
    }
    else {
      navigate(`/worker-future-jobs/${id}`);
    }
  }
  const handleAddClick = () => {
    if(type == "לקוח"){
      navigate(`/manager-customer-add-branch/${id}`);
    }
    else {
      navigate(`/manager-add-job-to-worker/${id}`);
    }
  };

  return (
    <div className={`customeroption ${className}`}>
      {/* כפתורים מצד שמאל */}
      <div className="customer-actions">
        <button className="btn-orange" onClick={handleAddClick} >{text}</button>
        <button className="btn-gray" onClick={nevigateJobs}>עבודות</button>
        <button className="btn-orange" onClick={handleEditClick} >עריכה</button>
      </div>

      {/* מבנה הטבלה */}
      <div className="customer-row">
        <div className="table-value">{numBranch ? `${numBranch} סניפים` : "--------------"}</div>
        <div className="table-value">{nameCus}</div>
        <div className="table-header">{type}</div>
      </div>
    </div>
  );
};

UserOption.propTypes = {
  className: PropTypes.string,
  nameCus: PropTypes.string,
  numBranch: PropTypes.string,
};

export default UserOption;
