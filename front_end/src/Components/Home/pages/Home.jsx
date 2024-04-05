import React from "react";

import HeroSlider from "../Home_Components/UI/HeroSlider";
import Helmet from "../Home_Components/Helmet/Helmet";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import AboutSection from "../Home_Components/UI/AboutSection";
import ServicesList from "../Home_Components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../Home_Components/UI/CarItem";
import SeeMoreCard from "../Home_Components/UI/SeeMoreCard";
import BlogList from "../Home_Components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section mb-5">
        <HeroSlider />
      </section>
      <section>
        <Container className="mt-5">
          <Col lg="12" className="text-center mb-5">
            <h1>Khám phá những sản phẩm</h1>
            <h5 className="h text-gray-600">đến từ các nhà cung cấp của chúng tôi</h5>
          </Col>
          <Row>
            <Col lg="12" className="text-left">
              <h2>Toyota</h2>
            </Col>
            {carData.slice(0, 7).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
            <SeeMoreCard />
          </Row>
          <Row>
            <Col lg="12" className="text-left">
              <h2>Mazda</h2>
            </Col>
            {carData.slice(0, 7).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
            <SeeMoreCard />
          </Row>
          <Row>
            <Col lg="12" className="text-left">
              <h2>KIA</h2>
            </Col>
            {carData.slice(0, 7).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
            <SeeMoreCard />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      
    </Helmet>
  );
};

export default Home;