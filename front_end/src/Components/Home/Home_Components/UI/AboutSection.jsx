import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Về chúng tôi</h4>
              <h2 className="section__title">
                Chào mừng đến với dịch vụ cung cấp ô tô
              </h2>
              <p className="section__description">
                <h5 className="greeting fw-bold mt-3">
                  Kính gửi Quý khách hàng!
                </h5>
                Lời đầu tiên, cho phép Automobile Hub xin trân trọng gửi tới Quý
                khách hàng lời chúc sức khỏe và thành đạt trong cuộc sống. Cửa
                hàng luôn có sự phát triển, điều đó có được là nhờ Quý khách
                hàng đã tin cậy, lựa chọn chúng tôi làm bạn đồng hành cùng Quý
                khách trên mọi nẻo đường. Chúng tôi luôn mang đến giá thành thấp
                nhất, chất lượng cao nhất.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Luôn lấy chất
                    lượng là yếu tố hàng đầu. Chúng tôi cam kết sẽ cung cấp sản
                    phẩm và dịch vụ chất lượng cao nhất.
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Luôn
                    sẵn lòng thay đổi và cải thiện để nâng cao chất lượng dịch
                    vụ và sản phẩm của mình.
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Không ngừng đầu
                    tư trang thiết bị, phương tiện phục vụ chất lượng.
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Luôn
                    đặt đối tác làm trung tâm của mọi quyết định và hành động.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;