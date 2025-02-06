import React, { useState } from "react";
import ReactDOM from "react-dom"; // ייבוא של Portals
import "./FutureJobClient.css";
import dayjs from "dayjs";
import imageSrc from "./23.png"; // הנתיב לתמונה שהעלית

const FutureJobClient = ({ namew, done, time, date, active = false }) => {
    const [isImageOpen, setIsImageOpen] = useState(false);
    const formattedDate = dayjs(date).format("DD/MM/YYYY");

    const columns = active
        ? "auto 1fr 1fr 1fr 1fr" // אם יש פתחון, 5 עמודות (האחת לתמונה)
        : "1fr 1fr 1fr 1fr"; // אם אין פתחון, 4 עמודות בלבד

    return (
        <>
            <div className="futurejobclient3" style={{ gridTemplateColumns: columns }}>
                {active && (
                    <button className="image-button" onClick={() => setIsImageOpen(true)}>
                        צפייה בתמונה
                    </button>
                )}
                {/* עמודות הטקסט הרגילות */}
                <div className="div346">{formattedDate}</div>
                <div className="div345">{time}</div>
                <div className="div343">{namew}</div>
                <div className="div344">{done ? "נעשה" : "לא נעשה"}</div>
            </div>

            {/* שימוש ב-React Portal כדי להוציא את הפופאפ מחוץ להורה */}
            {isImageOpen &&
                ReactDOM.createPortal(
                    <div className="image-modal">
                        <div className="modal-content">
                            <button className="close-button" onClick={() => setIsImageOpen(false)}>×</button>
                            <img src={imageSrc} alt="תמונה" className="popup-image" />
                        </div>
                    </div>,
                    document.body // כאן אנחנו מציבים את זה מחוץ לכל המבנה
                )}
        </>
    );
};

export default FutureJobClient;
