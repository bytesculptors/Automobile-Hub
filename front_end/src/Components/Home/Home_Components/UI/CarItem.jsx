import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { useNavigate } from "react-router-dom";

const CarItem = (props) => {
  const { imgUrl, carName, price } = props.item;
  const navigate = useNavigate();

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
        <div className="car__img h-60 flex items-center justify-center">
          <img src={imgUrl} alt="" className="h-full" />
        </div>

        <div className="car__item-content mt-4">
          <h6 className="section__title text-center overflow-hidden whitespace-nowrap overflow-ellipsis">
            {carName}
          </h6>
          <div className="rent__price text-center text-sm">
            {price.toLocaleString("vi-VN")} VNĐ
          </div>
          <div className="flex justify-center mt-4">
            <Link
              to={`/cars/${carName}`}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 focus:outline-none focus:bg-blue-100 text-sm no-underline font-semibold"
            >
              Xem chi tiết sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
