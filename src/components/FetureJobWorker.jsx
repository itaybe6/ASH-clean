import React from "react";
import "./FetureJobWorker.css";

const FetureJobWorker = ({ nameb, address }) => {
  return (
    <div className="feture-job-worker-card">
      <div className="feture-job-worker-details">
        <b className="feture-job-worker-title">{nameb}</b>
        <div className="feture-job-worker-address">{address}</div>
        <div className="feture-job-worker-time">יום ה' בשעה 14:30</div>
      </div>
      <button className="feture-job-worker-button">ביצוע</button>

    </div>
  );
};

export default FetureJobWorker;
