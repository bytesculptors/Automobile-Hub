import React from "react";

import HeroSlider from "../Home_Components/UI/HeroSlider";
import Helmet from "../Home_Components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import AboutSection from "../Home_Components/UI/AboutSection";
import ServicesList from "../Home_Components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../Home_Components/UI/CarItem";

import BlogList from "../Home_Components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section mb-5">
        <HeroSlider />
      </section>
      {/* =========== about section ================ */}
      <AboutSection aboutClass="aboutPage" />
      {/* ========== services section ============ */}
      <section className="mt-5">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Khám phá</h6>
              <h2 className="section__title">Các dịch vụ phổ biến</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container className="mt-5">
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Đi kèm với</h6>
              <h2 className="section__title">Nhiều ưu đãi</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section className="mt-5">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Khám phá blog của chúng tôi</h6>
              <h2 className="section__title">Blog mới nhất</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;