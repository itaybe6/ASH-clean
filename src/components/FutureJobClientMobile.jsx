import dayjs from "dayjs";
import React, { useState } from "react";
import axios from "axios";
import ImageModal from "./ImageModal"; // מייבאים את הרכיב המודאל
import "./FutureJobClientMobile.css";

const FutureJobClientMobile = ({namew = "",date = "",done = "",active = false, id}) => {
  const formattedDate = dayjs(date).format("DD/MM/YYYY");
  const [imageData, setImageData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleViewImage = async () => {
    try {
      // נניח שהנתיב בשרת: GET /worker/cleanings/:id/image
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
  return (
    <div className="futurejobclientmobile">
      <div className="futurejobclientmobile-card">

        {/* שורה 1 */}
        <div className="fjc-row">
          <div className="fjc-left2">{formattedDate}</div>
          <div className="fjc-right2">תאריך</div>
        </div>


        {/* שורה 3 */}
        <div className="fjc-row">
          <div className="fjc-left">{namew}</div>
          <div className="fjc-right">עובד מבצע</div>
        </div>

        {/* שורה 4 */}
        <div className="fjc-row">
          <div className="fjc-left">{done ?"נעשה" : "לא נעשה"}</div>
          <div className="fjc-right">סטטוס</div>
        </div>

        {/* הצגת כפתור - רק אם active === true */}
        {active && (
          <button className="fjc-button" onClick={handleViewImage}>צפייה בתמונה</button>
        )}
        
      {showModal && (
        <ImageModal
          image={imageData}
          onClose={() => setShowModal(false)}
        />
      )}
      </div>
    </div>
  );
};

export default FutureJobClientMobile;
