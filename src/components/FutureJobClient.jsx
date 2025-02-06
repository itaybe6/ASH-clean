import React from "react";
import "./FutureJobClient.css";
import dayjs from "dayjs";

const FutureJobClient = ({ namew, done, time, date, active = false }) => {
  const formattedDate = dayjs(date).format("DD/MM/YYYY");
  const columns = active
    ? "auto 1fr 1fr 1fr 1fr" // אם יש כפתור, 5 עמודות (הראשונה לכפתור)
    : "1fr 1fr 1fr 1fr";     // אם אין כפתור, 4 עמודות בלבד
  return (
    <div
      className="futurejobclient3"
      style={{ gridTemplateColumns: columns }}
    >
      {active && (
        <button className="image-button">צפייה בתמונה</button>
      )}
      {/* עמודות הטקסט הרגילות */}
      <div className="div346">{formattedDate}</div>
      <div className="div345">{time}</div>
      <div className="div343">{namew}</div>
      <div className="div344">{done ? "נעשה" : "לא נעשה"}</div>
    </div>
  );
};

export default FutureJobClient;
