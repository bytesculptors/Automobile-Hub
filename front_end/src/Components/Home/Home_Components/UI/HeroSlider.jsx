import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/hero-slider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">6466 Shop Xin Chào Mừng Quý Khách</h4>
            <h1 className="text-light mb-4">Đặt xe ngay để tận hưởng chuyến đi với mức giá hấp dẫn!</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Đặt xe ngay</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">6466 Shop Xin Chào Mừng Quý Khách</h4>
            <h1 className="text-light mb-4">Đặt xe ngay để tận hưởng chuyến đi với mức giá hấp dẫn!</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Đặt xe ngay</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">6466 Shop Xin Chào Mừng Quý Khách</h4>
            <h1 className="text-light mb-4">Đặt xe ngay để tận hưởng chuyến đi với mức giá hấp dẫn!</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Đặt xe ngay</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;