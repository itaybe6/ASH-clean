import React from "react";
import "./FetureJobWorkerMobile.css";

const FetureJobWorkerMobile = ({ nameb, address, time }) => {
  return (
    <div className="feturejobworkermobile">
      {/* כפתור ביצוע בפינה */}
      <button className="exec-button">ביצוע</button>
      
      {/* אזור הטקסטים בכרטיס */}
      <div className="title">{nameb}</div>
      <div className="address">{address}</div>
      <div className="time">{time}</div>
    </div>
  );
};

export default FetureJobWorkerMobile;
