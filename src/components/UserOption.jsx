import PropTypes from "prop-types";
import "./UserOption.css";
import { useNavigate } from 'react-router-dom';

const UserOption = ({ className = "", nameCus, numBranch, type, id }) => {
  const navigate = useNavigate();  
  console.log(type)
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

  return (
    <div className={`customeroption ${className}`}>
      {/* כפתורים מצד שמאל */}
      <div className="customer-actions">
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
