import React from "react";
import "./ImageModal.css"; 

function ImageModal({ image, onClose }) {
  if (!image) return null; 

  return (
    <div className="img2964">
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>X</button>
          <img className="modal-image" src={image} alt="תמונה" />
        </div>
      </div>
    </div>

  );
}

export default ImageModal;
