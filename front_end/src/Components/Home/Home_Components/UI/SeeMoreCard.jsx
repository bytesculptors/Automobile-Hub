import React from "react";
import { Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/car-item.css";

const SeeMoreCard = () => {
  const navigate = useNavigate();
  return (
    <Col lg="2" md="2" sm="3" className="mb-5">
      <div className="flex car__item h-full items-center justify-center bg-gray-200 hover:cursor-pointer hover:transform hover:-translate-y-2"
        onClick={()=> {
        navigate("/cars")
      }}>
        <div className="text-md font-bold">
          Xem tất cả sản phẩm<i class="ri-arrow-right-line ml-1"></i>
        </div>
      </div>
    </Col>
  );
};

export default SeeMoreCard;
