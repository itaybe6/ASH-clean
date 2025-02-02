import "./MobileMenuManager.css";
import React, { useState ,useEffect} from "react";

const MobileMenuManager = ({ closeMenu, isOpen }) => {
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
    <div
    className="mobile-menu-manager"
    style={menuStyle}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
      <div className="mobile-menu-manager-child" />
      <div className="group-parent42">
        <button className="vector-wrapper75">
          <img className="vector-icon84" alt="" src="/vector2.svg" />
        </button>
        <button className="vector-wrapper76">
          <img className="vector-icon85" alt="" src="/vector9.svg" />
        </button>
        <button className="parent49">
          <div className="div216">משתמשים</div>
          <img
            className="icbaseline-people-alt-icon7"
            alt=""
            src="/icbaselinepeoplealt.svg"
          />
        </button>
      </div>
      <button className="vector-wrapper77">
        <img className="vector-icon86" alt="" src="/vector8.svg" />
      </button>
      <img className="icon52" alt="" src="/-02-17@2x.png" />
    </div>
  );
};

export default MobileMenuManager;
