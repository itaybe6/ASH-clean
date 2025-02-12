import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoCarousel.css"
import img2 from'../imges/2.jpg'
import img3 from'../imges/3.jpg'
import img4 from'../imges/4.jpg'
import img5 from'../imges/5.jpg'
import img6 from'../imges/6.jpg'
import img7 from'../imges/7.jpg'

const logos = [

  { src: img2, alt: "Logo 6" },
  { src: img3, alt: "Logo 7" },
  { src: img4, alt: "Logo 8" },
  { src: img5 , alt: "Logo 8" },
  { src: img6, alt: "Logo 9" },
  { src: img7, alt: "Logo 10" },

];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } }
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
