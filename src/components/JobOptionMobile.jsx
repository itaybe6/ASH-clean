import React, { useState } from "react";
import axios from "axios";
import ImageModal from "./ImageModal"; // מייבאים את הרכיב המודאל
import "./JobOptionMobile.css";

const JobOptionMobile = ({ branch, worker, bussiness, date, status, id}) => {
  const [imageData, setImageData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewImage = async () => {
    try {
      // נניח שהנתיב בשרת: GET /worker/cleanings/:id/image
      const response = await axios.get(`http://localhost:5000/manager/cleanings/${id}/image`);
      if (response.data.image) {
        setImageData(response.data.image);
        setShowModal(true);
      } else {
        alert("לא נמצאה תמונה לניקיון זה");
      }
    } catch (error) {
      console.error("שגיאה בשליפת התמונה:", error);
      alert("שגיאה בשליפת התמונה");
    }
  };


  return (
    <div className="joboptionmobile">
      <div>תאריך</div>
      <div>{date}</div>

      <div>עסק</div>
      <div>{bussiness}</div>

      <div>סניף</div>
      <div>{branch}</div>

      <div>עובד מבצע</div>
      <div>{worker}</div>

      <div>סטטוס</div>
      <div>{status ? "נעשה" : "לא נעשה"}</div>

      {/* כפתור */}
      <button className="full-span" onClick={handleViewImage}>צפייה בתמונה</button>

      {showModal && (
        <ImageModal
          image={imageData}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );

};



export default JobOptionMobile;
