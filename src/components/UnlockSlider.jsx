import React from "react";
import { Container } from "react-bootstrap";
import unlock1 from "../assets/images/svg/unlock_slider1.svg";
import Slider from "react-slick";

const UnlockSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplayspeed: 0,
    speed: 1000,
    slidesToShow: 1,
    pauseOnHover: false,
    cssEase: "linear",
    slidesToScroll: 1,
  };
  return (
    <Container className="d-sm-none py-5 py-sm-0 px-4">
      <Slider {...settings}>
        <div>
          <img className="w-100" src={unlock1} alt="unlock1" />
        </div>
        <div>
          <img className="w-100" src={unlock1} alt="unlock1" />
        </div>
        <div>
          <img className="w-100" src={unlock1} alt="unlock1" />
        </div>
        <div>
          <img className="w-100" src={unlock1} alt="unlock1" />
        </div>
      </Slider>
    </Container>
  );
};

export default UnlockSlider;
