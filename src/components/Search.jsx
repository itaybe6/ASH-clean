import React, { useState } from "react";
import axios from "axios";
import ImageModal from "./ImageModal"; // מייבאים את הרכיב המודאל
import "./Search.css";

const Search = ({className = "",worker,status,branch,date,bussiness,id,}) => {
  const [imageData, setImageData] = useState(null);
  const [showModal, setShowModal] = useState(false);
console.log(worker)
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
  const handleDeleteCleaning = async () => {
    try {
        const confirmDelete = window.confirm("האם אתה בטוח שברצונך למחוק את הניקיון?");
        if (!confirmDelete) return;

        const response = await axios.delete(`http://localhost:5000/manager/delete-cleaning/${id}`);

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
    <div className={`search ${className}`}>
      <div className="date">{date}</div>
      <div className="business">{bussiness}</div>
      <div className="branch">{branch}</div>
      <div className="worker">{worker}</div>
      <div className="status">
        {status ? "נעשה" : "לא נעשה"}
      </div>
      
      <button className="img-btn" onClick={handleViewImage}>
        צפייה בתמונה
      </button>
      <button className="img-btn" onClick={handleDeleteCleaning} >
        ביטול עבודה
      </button>

      {/* מציגים את ImageModal רק אם showModal=true */}
      {showModal && (
        <ImageModal
          image={imageData} 
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Search;
