import React, { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import ImageModal from "./ImageModal";
import "./FutureJobClient.css";

const FutureJobClient = ({ namew, done, bname, date, active = false, id }) => {
    const formattedDate = dayjs(date).format("DD/MM/YYYY");
    const [imageData, setImageData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleViewImage = async () => {
        try {
            const response = await axios.get(`${apiUrl}/manager/cleanings/${id}/image`);
            if (response.data.image) {
                setImageData(response.data.image);
                setShowModal(true);
            } else {
                alert("לא נמצאה תמונה לניקיון זה");
            }
        } catch (error) {
            console.error("שגיאה בשליפת התמונה:", error);
            alert("שגיאה בשליפת התמונה");
        }
    };

    const columns = active
        ? "auto 1fr 1fr 1fr 1fr" // אם יש פתחון, 5 עמודות (האחת לתמונה)
        : "1fr 1fr 1fr 1fr"; // אם אין פתחון, 4 עמודות בלבד

    return (
        <div className="futurejobclient3" style={{ gridTemplateColumns: columns }}>
            {active && (
                <button className="image-button" onClick={handleViewImage}>
                    צפייה בתמונה
                </button>
            )}
            <div className="div346">{formattedDate}</div>
            <div className="div345">{bname}</div>
            <div className="div343">{namew}</div>
            <div className="div344">{done ? "נעשה" : "לא נעשה"}</div>

            {showModal && (
                <ImageModal
                    image={imageData}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default FutureJobClient;
