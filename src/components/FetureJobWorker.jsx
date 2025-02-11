import React, { useState } from "react";
import "./FetureJobWorker.css";
import WorkerJobSuc from "../pages/WorkerJobSuc";
import ImageModal from "./ImageModal";
import axios from "axios";

const FetureJobWorker = ({ nameb, address, time, id, done ,workerId , address2}) => {
  const [ok, setOk] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [imageData, setImageData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleCancelCleaning = async () => {
    try {
      const confirmDelete = window.confirm("האם אתה בטוח שברצונך לבטל את העבודה ?");
      if (!confirmDelete) return;

      const response = await axios.put(`${apiUrl}/worker/cleanings/${id}/cancel`);

      if (response.status === 200) {
        alert("ניקיון עבר למצב - לא נעשה");
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
    <div className="feture-job-worker-card">
      {ok && <WorkerJobSuc nameb={nameb} address={address} time={time} id={id} setOk={setOk} workerId={workerId}/>}

      <div className="feture-job-worker-details">
        <b className="feture-job-worker-title">{nameb}</b>
        <div className="feture-job-worker-address">{address}</div>
        <div className="feture-job-worker-address">{address2}</div>
        <div className="feture-job-worker-time"> {time}</div>
      </div>
      {showModal && (
        <ImageModal
          image={imageData}
          onClose={() => setShowModal(false)}
        />
      )}
      {done ? (
        <div>
          <button className="feture-job-worker-button" onClick={handleCancelCleaning} >ביטול</button>
          <button className="feture-job-worker-button" onClick={handleViewImage}>הצג תמונה</button>
        </div>
      ) : (
        <button className="feture-job-worker-button" onClick={() => { setOk(true) }} >ביצוע</button>
      )}




    </div>
  );
};

export default FetureJobWorker;
