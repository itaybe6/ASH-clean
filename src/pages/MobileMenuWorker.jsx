import "./MobileMenuWorker.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const MobileMenuWorker = ({ closeMenu, isOpen }) => {
  const [translate, setTranslate] = useState(300);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1]; // החלק האמצעי של ה-JWT
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64)); // פענוח Base64 ל-JSON
    } catch (error) {
      return null;
    }
  };

  const token = parseJwt(localStorage.getItem("token")); 

  useEffect(() => {
    if (isOpen) {
      setTranslate(0);
    } else {
      setTranslate(300);
    }
  }, [isOpen]);

  const handleTouchStart = (e) => {
    if (!isOpen) return;

    setIsDragging(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isOpen || !isDragging || touchStartX === null) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - touchStartX;

    if (deltaX > 0) {
      const clampedValue = Math.min(deltaX, 300);
      setTranslate(clampedValue);
    }
  };

  // סיום מגע
  const handleTouchEnd = (e) => {
    if (!isOpen || !isDragging) return;

    setIsDragging(false);
    const currentX = e.changedTouches[0].clientX;
    const deltaX = currentX - (touchStartX ?? 0);

    if (deltaX > 30) {
      setTranslate(300);

      setTimeout(() => {
        closeMenu();
      }, 300);

    } else {
      setTranslate(0);
    }
    setTouchStartX(null);
  };


  const transitionStyle = isDragging
    ? 'none'
    : 'transform 0.3s ease';
  const menuStyle = {
    transform: `translateX(${translate}px)`,
    transition: transitionStyle,
  };

  const setting = () => {
    navigate('/worker-edit-profile')
  }
  const jobs = () => {
    navigate(`/worker-future-jobs/${token.id}`)
  }
  const handleLogout = () => {
    logout();
    navigate("/homepage"); 
  };
  return (
    <div className="mobile-menu-worker" style={menuStyle} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div className="mobile-menu-worker-child" />
      <button className="vector-wrapper72" onClick={handleLogout}>
        <img className="vector-icon81" alt="" src="/vector8.svg" />
      </button>
      <img className="icon51" alt="" src="/-02-17@2x.png" />
      <div className="group-parent41">
        <button className="vector-wrapper73" onClick={setting}>
          <img className="vector-icon82" alt="" src="/vector2.svg" />
        </button>
        <button className="vector-wrapper74" onClick={jobs}>
          <img className="vector-icon83" alt="" src="/vector9.svg" />
        </button>
      </div>
    </div>
  );
};

export default MobileMenuWorker;
