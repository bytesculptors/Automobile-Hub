import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { useNavigate } from "react-router-dom";

const CarItem = (props) => {
  const { imgUrl, seatType, carName, automatic, speed, price } = props.item;
  const navigate = useNavigate()
  return (
    <Col
      lg="3"
      md="3"
      sm="4"
      className="mb-5"
      onClick={() => {
        navigate(`/cars/${carName}`);
        console.log("card");
      }}
    >
      <div className="car__item shadow-md relative hover:border-blue-500 hover:cursor-pointer hover:transform hover:-translate-y-2">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h6 className="section__title text-center">{carName}</h6>
          <div className="rent__price text-center">
            {price.toLocaleString("vi-VN")}.000 VNĐ
          </div>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-wheelchair-line"></i> {seatType}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;