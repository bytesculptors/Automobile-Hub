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
      <section className="mt-5">
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    {singleCarItem.price.toLocaleString("vi-VN")}.000 VNĐ 
                  </h6>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div className="mt-3">
                  <table>
                    <tbody>
                      <tr>
                        <td className="pr-8">
                          <i
                            className="ri-settings-2-line mr-2"
                            style={{ color: "#f9a826" }}
                          ></i>
                          {singleCarItem.automatic}
                        </td>
                        <td className="pr-8">
                          <i
                            className="ri-timer-flash-line mr-2"
                            style={{ color: "#f9a826" }}
                          ></i>
                          {singleCarItem.speed}
                        </td>
                        <td className="pr-8">
                          <i
                            className="ri-gas-station-fill mr-2"
                            style={{ color: "#f9a826" }}
                          ></i>
                          {singleCarItem.fuel}
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-8">
                          <i
                            className="ri-wheelchair-line mr-2"
                            style={{ color: "#f9a826" }}
                          ></i>
                          {singleCarItem.seatType}
                        </td>
                        <td className="pr-8">
                          <i
                            className="ri-building-2-line mr-2"
                            style={{ color: "#f9a826" }}
                          ></i>
                          {singleCarItem.brand}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-3">
                  <Button color="primary" onClick={toggleModal}>
                    Xem chi tiết thông số
                  </Button>
                </div>

                <Modal isOpen={modalOpen} toggle={toggleModal}>
                  <ModalHeader toggle={toggleModal}>
                    Chi tiết thông số
                  </ModalHeader>
                  <ModalBody>
                    <table className="w-full border-collapse border border-gray-300">
                      <tbody>
                        <tr className="border border-gray-300">
                          <td className="px-4 py-2 font-bold border border-gray-300">
                            Đặc điểm
                          </td>
                          <td className="px-4 py-2 font-bold border border-gray-300">
                            Thông số chi tiết
                          </td>
                        </tr>
                        <tr className="border border-gray-300">
                          <td className="px-4 py-2 border border-gray-300">
                            Hộp số
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            <i className="ri-settings-2-line mr-2 text-yellow-600"></i>
                            {singleCarItem.automatic}
                          </td>
                        </tr>
                        <tr className="border border-gray-300">
                          <td className="px-4 py-2 border border-gray-300">
                            Tốc độ
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            <i className="ri-timer-flash-line mr-2 text-yellow-600"></i>
                            {singleCarItem.speed}
                          </td>
                        </tr>
                        <tr className="border border-gray-300">
                          <td className="px-4 py-2 border border-gray-300">
                            Nhiên liệu
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            <i className="ri-gas-station-fill mr-2 text-yellow-600"></i>
                            {singleCarItem.fuel}
                          </td>
                        </tr>
                        <tr className="border border-gray-300">
                          <td className="px-4 py-2 border border-gray-300">
                            Số ghế
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            <i className="ri-wheelchair-line mr-2 text-yellow-600"></i>
                            {singleCarItem.seatType}
                          </td>
                        </tr>
                        <tr className="border border-gray-300">
                          <td className="px-4 py-2 border border-gray-300">
                            Hãng xe
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            <i className="ri-building-2-line mr-2 text-yellow-600"></i>
                            {singleCarItem.brand}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>
                      Đóng
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>

              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Thông tin đặt hàng</h5>
                <BookingForm
                  item={{
                    car_id: singleCarItem.car_id,
                    price: singleCarItem.price,
                  }}
                />
              </div>
            </Col>

            {/* <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Thông tin đặt hàng</h5>
                <BookingForm />
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;