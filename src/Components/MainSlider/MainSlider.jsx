import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/images/slider-image-1.jpeg";
import slide2 from "../../assets/images/slider-image-2.jpeg";
import slide3 from "../../assets/images/slider-image-3.jpeg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function MainSlider() {
  return (
    <div className="container g-0">
      <div className="row g-0 py-4">
        <div className="col-md-9">
          <Slider {...settings}>
            <img className="w-100" height={400} src={slide1} alt="" />
            <img className="w-100" height={400} src={slide2} alt="" />
            <img className="w-100" height={400} src={slide3} alt="" />
          </Slider>
        </div>

        <div className="col-md-3">
          <img className="w-100" height={200} src={slide2} alt="" />
          <img className="w-100" height={200} src={slide3} alt="" />
        </div>
      </div>
    </div>
  );
}
