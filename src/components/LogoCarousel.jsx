import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoCarousel.css";

// ייבוא של כל התמונות
import img1 from '../imges/1.jpg';
import img2 from '../imges/2.jpg';
import img3 from '../imges/3.jpg';
import img4 from '../imges/4.jpg';
import img5 from '../imges/5.jpg';
import img6 from '../imges/6.jpg';
import img7 from '../imges/7.jpg';
import img8 from '../imges/8.jpg';
import img9 from '../imges/9.jpg';
import img10 from '../imges/10.jpg';
import img11 from '../imges/11.jpg';
import img12 from '../imges/12.jpg';
import img13 from '../imges/13.jpg';
import img14 from '../imges/14.jpg';
import img15 from '../imges/15.jpg';
import img16 from '../imges/16.jpg';

// רשימת הלוגואים
const logos = [
  { src: img1, alt: "Logo 1" },
  { src: img2, alt: "Logo 2" },
  { src: img3, alt: "Logo 3" },
  { src: img4, alt: "Logo 4" },
  { src: img5, alt: "Logo 5" },
  { src: img6, alt: "Logo 6" },
  { src: img7, alt: "Logo 7" },
  { src: img8, alt: "Logo 8" },
  { src: img9, alt: "Logo 9" },
  { src: img10, alt: "Logo 10" },
  { src: img11, alt: "Logo 11" },
  { src: img12, alt: "Logo 12" },
  { src: img13, alt: "Logo 13" },
  { src: img14, alt: "Logo 14" },
  { src: img15, alt: "Logo 15" },
  { src: img16, alt: "Logo 16" }
];

// הגדרות הקרוסלה
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // ניתן לשנות כדי להתאים את כמות הלוגואים הנראים
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true, // מאפשר גלילה ידנית
    touchMove: true, // מאפשר גלילה בטאץ'
    centerMode: false, // מבטל יישור למרכז
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
};

const LogoCarousel = () => {
  return (
    <div className="logo-carousel">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo.src} alt={logo.alt} className="logo-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
