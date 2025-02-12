import React, { useState } from "react";
import ImageModal from "./ImageModal";
import WorkerJobSucMobile from "../pages/WorkerJobSucMobile";
import axios from "axios";
import "./FetureJobWorkerMobile.css";
import Swal from 'sweetalert2';

const FetureJobWorkerMobile = ({ nameb, address, time, id, done, workerId, address2 }) => {
  const [ok, setOk] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleCancelCleaning = async () => {
    try {
      const confirmDelete = window.confirm("האם אתה בטוח שברצונך לבטל את העבודה ?");
      if (!confirmDelete) return;

      const response = await axios.put(`${apiUrl}/worker/cleanings/${id}/cancel`);

      if (response.status === 200) {
        Swal.fire({
          title: ' ניקיון בוטל',
          text: 'הניקיון עבר למצב - לא נעשה',
          icon: 'success',
          position: 'top',
          confirmButtonText: 'מעולה!',
          confirmButtonColor: '#28a745',
          showClass: {
            popup: 'animate__animated animate__zoomIn animate__slow'
          },
          hideClass: {
            popup: 'animate__animated animate__zoomOut animate__slow'
          }
        });

        window.location.reload();
      } else {
        alert("שגיאה בשינוי סטטוס של ניקיון");
      }
    } catch (error) {
      console.error("שגיאה במחיקת ניקיון:", error);
      alert("שגיאה במחיקת ניקיון");
    }
  };

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
  return (
    <div className="feturejobworkermobile">
      {ok && <WorkerJobSucMobile nameb={nameb} address={address} time={time} id={id} setOk={setOk} workerId={workerId} />}

      {done ? (
        <>
          <button className="exec-button1" onClick={handleCancelCleaning}>ביטול</button>
          <button className="exec-button2" onClick={handleViewImage}>הצג תמונה</button>
        </>
      ) : (
        <button className="exec-button" onClick={() => setOk(true)}>ביצוע</button>
      )}

      <div className="title">{nameb}</div>
      <div className="address">{address}</div>
      <div className="address">{address2}</div>
      <div className="time">{time}</div>
      {showModal && (
        <ImageModal
          image={imageData}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default FetureJobWorkerMobile;
