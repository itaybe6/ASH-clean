import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserOptionMobile.css";

const UserOptionMobile = ({ bname, numbranch, id, type }) => {
  const navigate = useNavigate();
  const text = type === "לקוח" ? "הוספת סניף" : "הוספת עבודה";
  const handleEditClick = () => {
    navigate(`/manager-edit-user/${id}/${type}`);
  };

  const nevigateJobs = () => {

    if (type == 'לקוח') {
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

        <div className="customeroptionmobile-actions">
          <button className="edit-btn" onClick={handleAddClick}>{text}</button>
          <button className="work-btn" onClick={nevigateJobs}>עבודות</button>
          <button className="edit-btn" onClick={handleEditClick}>עריכה</button>
        </div>
      </div>
    </div>
  );
};

export default UserOptionMobile;
