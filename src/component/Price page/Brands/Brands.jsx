import React from "react";
import google from "../../../assets/google.svg";
import amazon from "../../../assets/amazon.svg";
import altassian from "../../../assets/atlassian.svg";
import Gillette from "../../../assets/Gillette.svg";
import intel from "../../../assets/intel.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./brands.css";

const Brands = () => {
  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);

  const images = [google, amazon, altassian, Gillette, intel]; // Array of image imports

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: slider2.current,
  };

  const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: slider1.current,
    dots: true,
    focusOnSelect: true,
  };

  const handleSlideClick = (slideNo) => {
    if (slider2 && slider2.current) {
      slider2.current.slickGoTo(slideNo - 1);
    }
  };

  return (
    <div className=" mt-14 ">
      <div className="flex justify-center items-center text-gray-500 text-2xl">
        <p>Leading brands trust Oval for Teamwork Software</p>
      </div>
      <div className="imgslider mt-5">
        {/* <Slider ref={slider1} {...settingsFor} className="slider slider-for">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Brand ${index}`} />
          </div>
        ))}
      </Slider> */}

        <Slider ref={slider2} {...settingsNav} className="slider slider-nav">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Brand ${index}`} />
            </div>
          ))}
        </Slider>

        {/* The "go to slide" links were commented out in your code, so I've left them commented here. */}
      </div>
    </div>
  );
};

export default Brands;
