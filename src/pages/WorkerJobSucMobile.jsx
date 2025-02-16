import React, { useState } from 'react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
import { useNavigate } from 'react-router-dom';
import "./WorkerJobSucMobile.css";
import Swal from 'sweetalert2';

const WorkerJobSucMobile = ({ nameb, address, time, id , setOk}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();  
  const apiUrl = import.meta.env.VITE_API_URL;
  const handleFileSelect = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  const handleUpload = async () => {
    if (!selectedFile) return;
    try {
      const options = { maxSizeMB: 0.01, maxWidthOrHeight: 500, useWebWorker: true };
      const compressedFile = await imageCompression(selectedFile, options);
      const formData = new FormData();
      formData.append('image', compressedFile);
      await axios.put(`${apiUrl}/worker/cleanings/${id}`, formData);
       Swal.fire({
              title: 'עדכון עבודה הושלם',
              text: 'הפעולה בוצעה בהצלחה',
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

    } catch (err) {
      console.error('שגיאה בשליחה:', err);
    }
  };
  return (
    <div className="worker-job-suc-mobile">
      <button className="close-button" onClick={() => setOk(false)}>
        ✖
      </button>

      <div className="worker-job-suc-content">
        <h2 className="job-title">{nameb}</h2>
        <p className="job-address">{address}</p>
        <p className="job-time">{time}</p>

        <div className="button-container">
          <button className="upload-btn" onClick={() => document.getElementById("file-input").click()}>
            תמונה
          </button>
          <input type="file" accept="image/*" id="file-input" style={{ display: "none" }} onChange={handleFileSelect} />
          <button className="confirm-btn" onClick={handleUpload}>
            בוצע
          </button>
        </div>
      </div>
    </div>
  );
};




export default WorkerJobSucMobile;
