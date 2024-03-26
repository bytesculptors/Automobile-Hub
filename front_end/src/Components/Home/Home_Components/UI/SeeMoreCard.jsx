import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const SeeMoreCard = () => {
  return (
    <Col lg="3" md="3" sm="4" className="mb-5">
      <div className="flex car__item h-full items-center justify-center bg-gray-200">
        <div className="text-xl font-bold">
          Xem thêm sản phẩm<i class="ri-arrow-right-line ml-1"></i>
        </div>
      </div>
    </Col>
  );
};

export default SeeMoreCard;
