import React, { useState } from 'react';
import axios from 'axios';
import "./WorkerJobSucMobile.css";
import imageCompression from 'browser-image-compression';

const WorkerJobSucMobile = ({ nameb, address, time, id }) => {
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
    <div className="worker-job-suc-mobile">
      <div className="worker-job-suc-mobile-inner">
        <div className="component-group">
          <div className="component-group">
            <div className="component-child2" />
          </div>
          <div className="div131">{nameb}</div>
          <div className="div132">{address}</div>
          <div className="div133">{time}</div>
          <div className="group-wrapper6">
            <div className="group-wrapper7">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
                id="file-input"
              />
              <button className="rectangle-parent49" onClick={() => document.getElementById('file-input').click()}>
                <div className="group-child105" />
                <div className="parent31">

                  <b className="b59">תמונה</b>
                  <img className="group-child106" alt="" src="/group-351.svg" />
                </div>
              </button>
            </div>
          </div>
          <button className="rectangle-parent50" onClick={handleUpload}>
            <div className="group-child107" />
            <b className="b60">בוצע</b>
          </button>
        </div>
      </div>
    </div>
  );
};


export default WorkerJobSucMobile;
