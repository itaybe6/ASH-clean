import React from "react";
import "./FetureJobWorker2.css";

const FetureJobWorker2 = ({ nameb, dateTime, address }) => {
  return (
    <div className="managerjobworker-card3">
      {/* כפתור בצד אחד */}

      {/* אזור טקסט בצד השני */}
      <div className="job-details3">
        <b className="job-title3">{nameb}</b>
        <div className="job-address3">{address}</div>
        <div className="job-time3">{dateTime}</div>
      </div>
      <button className="approval-button">אישור</button>

    </div>
  );
};

export default FetureJobWorker2;
