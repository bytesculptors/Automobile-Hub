import React from "react";

import CommonSection from "../Home_Components/UI/CommonSection";
import Helmet from "../Home_Components/Helmet/Helmet";
import AboutSection from "../Home_Components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../Home_Components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="Về chúng tôi" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section mt-5 mb-5">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Chúng tôi cam kết cung cấp các giải pháp lái xe an toàn
                </h2>

                <p className="section__description">
                  Theo thống kê, hằng năm có hơn 10000 vụ tai nạn giao thông. Bên cạnh những lý do chủ quan thì những đặc điểm không hợp lý của xe cũng đóng góp cho con số ấy.
                </p>

                <p className="section__description">
                Lái xe an toàn là nghĩa vụ của mỗi người tham gia giao thông. 6466 Shop luôn cung cấp những chiếc xe hiện đại, thiết kế thân thiện với người dùng, có đủ trang thiết bị để chuyến đi được an toàn nhất.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Bạn cần giúp đỡ?</h6>
                    <h4>+84 384103659</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Đội ngũ</h6>
              <h2 className="section__title">Các thành viên</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;