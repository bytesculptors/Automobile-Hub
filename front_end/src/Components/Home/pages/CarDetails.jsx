import React, { useEffect, useState } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Helmet from "../Home_Components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../Home_Components/UI/BookingForm";
import PaymentMethod from "../Home_Components/UI/PaymentMethod";

const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section className="pt-5">
        <Container>
          <Row>
            <Col lg="6" className="h-96 flex items-center justify-center">
              <img
                src={singleCarItem.imgUrl}
                alt=""
                className="h-full p-5 bg-white rounded-lg"
              />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-2 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    {singleCarItem.price.toLocaleString("vi-VN")} VNĐ
                  </h6>
                </div>

                <p className="section__description text-base font-normal leading-[27px] !text-gray-500">
                  {singleCarItem.description}
                </p>
              </div>

              <div className="booking-info mt-3">
                <h5 className="mb-4 fw-bold ">Thông tin đặt hàng</h5>
                <BookingForm
                  item={{
                    car_id: singleCarItem.car_id,
                    price: singleCarItem.price,
                    car_name: singleCarItem.carName,
                    car_img: singleCarItem.imgUrl,
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;