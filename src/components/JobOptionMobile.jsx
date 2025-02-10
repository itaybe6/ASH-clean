import React, { useState } from "react";
import axios from "axios";
import ImageModal from "./ImageModal"; // מייבאים את הרכיב המודאל
import "./JobOptionMobile.css";

const JobOptionMobile = ({ branch, worker, bussiness, date, status, id}) => {
  const [imageData, setImageData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleViewImage = async () => {
    try {
      const response = await axios.get(`${apiUrl}/manager/cleanings/${id}/image`);
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

  const handleDeleteCleaning = async () => {
    try {
        const confirmDelete = window.confirm("האם אתה בטוח שברצונך למחוק את הניקיון?");
        if (!confirmDelete) return;

        const response = await axios.delete(`${apiUrl}/manager/delete-cleaning/${id}`);

        if (response.status === 200) {
            alert("הניקיון נמחק בהצלחה!");
        } else {
            alert("שגיאה במחיקת ניקיון");
        }
    } catch (error) {
        console.error("שגיאה במחיקת ניקיון:", error);
        alert("שגיאה במחיקת ניקיון");
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
      <button className="full-span" onClick={handleDeleteCleaning}>מחיקת עבודה</button>

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
