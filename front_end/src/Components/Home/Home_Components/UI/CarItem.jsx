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
      lg="4"
      md="4"
      sm="6"
      className="mb-5"
      onClick={() => {
        navigate(`/cars/${carName}`);
        console.log("card");
      }}
    >
      <div className="car__item shadow-md relative hover:border-blue-500 hover:cursor-pointer hover:transform hover:-translate-y-1">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            {price.toLocaleString("vi-VN")}.000 VNĐ
          </h6>

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