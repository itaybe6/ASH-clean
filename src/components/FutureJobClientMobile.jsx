import React from "react";
import "./FutureJobClientMobile.css";

const FutureJobClientMobile = ({
  namew = "",
  time = "",
  date = "",
  done = ""
}) => {
  return (
    <div className="futurejobclientmobile">
      <div className="futurejobclientmobile-card">
        {/* שורה 1 */}
        <div className="fjc-row">
          <div className="fjc-left">{date}</div>
          <div className="fjc-right">תאריך</div>
        </div>

        {/* שורה 2 */}
        <div className="fjc-row">
          <div className="fjc-left">{time}</div>
          <div className="fjc-right">שעה</div>
        </div>

        {/* שורה 3 */}
        <div className="fjc-row">
          <div className="fjc-left">{namew}</div>
          <div className="fjc-right">עובד מבצע</div>
        </div>

        {/* שורה 4 */}
        <div className="fjc-row">
          <div className="fjc-left">{done}</div>
          <div className="fjc-right"> סטטוס</div>
        </div>

      </div>
    </div>
  );
};

export default FutureJobClientMobile;
