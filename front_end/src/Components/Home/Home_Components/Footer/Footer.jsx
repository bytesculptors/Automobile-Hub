import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/footer.css'

const quickLinks = [
  {
    path: "/about",
    display: "Giới thiệu",
  },
  {
    path: "/cars",
    display: "Sản phẩm",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Liên hệ",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Dịch vụ <br /> thuê ô tô
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Sứ mệnh của chúng tôi là chăm sóc bạn, tư vấn nhiệt tình, cung câp dịch vụ tốt nhất để đảm bảo an toàn cho chuyến đi của bạn và những người thân yêu!
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Lối tắt</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Địa chỉ liên hệ</h5>
              <p className="office__info">Cầu Giấy, Hà Nội, Việt Nam</p>
              <p className="office__info">Điện thoại: +84 384103659</p>

              <p className="office__info">Email: tuannghia200603@gmail.com</p>

              <p className="office__info">Thời gian: 9h - 20h</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Kết nối</h5>
              {/* <p className="section__description">Subscribe our newsletter</p> */}
              <div className="footer__social d-flex flex-column gap-3">
                <a href="" className="d-flex align-items-center gap-1">
                  <i class="ri-facebook-line"></i> Facebook
                </a>
                <a href="" className="d-flex align-items-center gap-1">
                  <i class="ri-instagram-line"></i> Instagram
                </a>
                <a href="" className="d-flex align-items-center gap-1">
                  <i class="ri-linkedin-line"></i> Linkedin
                </a>
                <a href="" className="d-flex align-items-center gap-1">
                  <i class="ri-twitter-line"></i> Twitter
                </a>
              </div>
            </div>
          </Col>

          {/* <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Muhibur Rahman. All rights reserved.
              </p>
            </div>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;