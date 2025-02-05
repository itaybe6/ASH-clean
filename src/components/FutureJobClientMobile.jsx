import React from "react";
import "./FutureJobClientMobile.css";
import dayjs from "dayjs";

const FutureJobClientMobile = ({
  namew = "",
  time = "",
  date = "",
  done = "",
  active = false, // ברירת מחדל: false
}) => {
  const formattedDate = dayjs(date).format("DD/MM/YYYY");

  return (
    <div className="futurejobclientmobile">
      <div className="futurejobclientmobile-card">

        {/* שורה 1 */}
        <div className="fjc-row">
          <div className="fjc-left">{formattedDate}</div>
          <div className="fjc-right">תאריך</div>
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
          <button className="fjc-button">צפייה בתמונה</button>
        )}
      </div>
    </div>
  );
};

export default FutureJobClientMobile;
