import "./MobileMenuClient.css";
import React, { useState ,useEffect} from "react";

const MobileMenuClient = ({ closeMenu, isOpen }) => {
  const [translate, setTranslate] = useState(300); 
    
      const [touchStartX, setTouchStartX] = useState(null);
      const [isDragging, setIsDragging] = useState(false);
    
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
  return (
    <div className="mobile-menu-client" style={menuStyle} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div className="mobile-menu-client-child" />
      <button className="vector-wrapper78">
        <img className="vector-icon87" alt="" src="/vector8.svg" />
      </button>
      <img className="icon53" alt="" src="/-02-17@2x.png" />
      <div className="group-parent43">
        <button className="vector-wrapper79">
          <img className="vector-icon88" alt="" src="/vector2.svg" />
        </button>
        <button className="vector-wrapper80">
          <img className="vector-icon89" alt="" src="/vector9.svg" />
        </button>
        <button className="parent50">
          <div className="div217">צור קשר</div>
          <img
            className="icbaseline-contact-mail-icon4"
            alt=""
            src="/icbaselinecontactmail.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default MobileMenuClient;
