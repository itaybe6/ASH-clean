import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserOptionMobile.css";

const UserOptionMobile = ({ bname, numbranch, id, type }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    // מעבר לעמוד עריכה
    navigate(`/manager-edit-user/${id}/${type}`);
  };
  const nevigateJobs = () => {
    if (type == "לקוח") {
      navigate(`/manager-customer-jobs-done/${id}`);  
    }
    else {
      navigate(`/worker-future-jobs/${id}`);  
    }
  }
  return (
    <div className="customeroptionmobile">
      {/* מעטפת הכרטיס */}
      <div className="customeroptionmobile-child">
        {/* 3 שורות, בכל שורה 2 תאים */}
        <div className="customeroptionmobile-row">
          <div className="customeroptionmobile-cell left">{type}</div>
          <div className="customeroptionmobile-cell right">משתמש</div>
        </div>

        <div className="customeroptionmobile-row">
          <div className="customeroptionmobile-cell left">{bname}</div>
          <div className="customeroptionmobile-cell right">שם מלא</div>
        </div>

        <div className="customeroptionmobile-row">
          <div className="customeroptionmobile-cell left">{numbranch}</div>
          <div className="customeroptionmobile-cell right">סניפים</div>
        </div>

        {/* כפתורי עריכה/עבודות */}
        <div className="customeroptionmobile-actions">
          <button className="edit-btn" onClick={handleEditClick}>עריכה</button>
          <button className="work-btn" onclick ={nevigateJobs}>עבודות</button>
        </div>
      </div>
    </div>
  );
};

export default UserOptionMobile;
