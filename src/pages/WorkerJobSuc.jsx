import React, { useState } from 'react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
import "./WorkerJobSuc.css";

const WorkerJobSuc = ({ nameb, address,time,id}) => {
  const [selectedFile, setSelectedFile] = useState(null);

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
      await axios.put(`http://localhost:5000/worker/cleanings/${id}`, formData);
      alert('התמונה עודכנה בהצלחה!');
    } catch (err) {
      console.error('שגיאה בשליחה:', err);
    }
  };
  return (
    <div className="worker-job-suc">
      <img className="worker-job-suc-child" alt="" src="/line-21.svg" />
      <div className="worker-job-suc-inner">
        <div className="group-wrapper5">
          <div className="group-wrapper5">
            <div className="group-child102" />
            <div className="parent30">
              <div className="div128">{nameb}</div>
              <div className="div129">{address}</div>
              <div className="div130">{time}</div>
              <button className="rectangle-parent47" onClick={handleUpload} >
                <div className="group-child103" />
                <b className="b57">בוצע</b>
              </button>
              <div className="group-parent24">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
                id="file-input"
              />
                <button className="rectangle-parent48" onClick={() => document.getElementById('file-input').click()}>
                  <button className="rectangle-button" />
                  <b className="b57">תמונה</b>
                </button>
                <img className="group-child104" alt="" src="/group-351.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerJobSuc;
