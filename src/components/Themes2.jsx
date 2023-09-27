import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import themesbig from "../assets/images/svg/Themes_big1.svg";
import Slider from "react-slick";
import themes_image1 from "../assets/images/svg/themes_card1.svg";
import themes_image2 from "../assets/images/svg/themes_card2.svg";
import themes_image3 from "../assets/images/svg/themes_card3.svg";

const Themes2 = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplayspeed: 0,
    speed: 500,
    arrows:false,
    slidesToShow: 3,
    pauseOnHover: false,
    cssEase: "linear",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-lg-5 my-lg-5">
      <Container className="py-lg-5 py-3 my-lg  -5">
        <Row>
          <Col lg={6}>
            <img className="w-100" src={themesbig} alt="themesbig" />
          </Col>
          <Col lg={6}>
            <div className="ms-md-5">
              <Slider {...settings}>
                <div >
                  <div className="theme_card d-flex flex-column justify-content-center align-items-center cp ">
                    <img src={themes_image1} alt="" />
                    <h3 className="ff-primary fs_22 fw-medium fc_black theme_text mb-0   pt-3">
                      Themes
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="theme_card d-flex flex-column justify-content-center align-items-center cp ">
                    <img src={themes_image2} alt="" />
                    <h3 className="ff-primary fs_22 fw-medium fc_black theme_text mb-0   pt-3">
                      Customize
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="theme_card d-flex flex-column justify-content-center align-items-center cp ">
                    <img src={themes_image3} alt="" />
                    <h3 className="ff-primary fs_22 fw-medium fc_black theme_text mb-0   pt-3">
                      Make copies
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="theme_card d-flex flex-column justify-content-center align-items-center cp ">
                    <img src={themes_image1} alt="" />
                    <h3 className="ff-primary fs_22 fw-medium fc_black theme_text mb-0   pt-3">
                      Themes
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="theme_card d-flex flex-column justify-content-center align-items-center cp ">
                    <img src={themes_image2} alt="" />
                    <h3 className="ff-primary fs_22 fw-medium fc_black theme_text mb-0   pt-3">
                      Customize
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="theme_card d-flex flex-column justify-content-center align-items-center cp ">
                    <img src={themes_image3} alt="" />
                    <h3 className="ff-primary fs_22 fw-medium fc_black theme_text mb-0   pt-3">
                      Make copies
                    </h3>
                  </div>
                </div>
              </Slider>
              <p className="ff-primary fs_16 fw-normal fc_black opacity_08  mb-0 mt-5 max_457b">
                Theme's robust features allow you to showcase your skills,
                accomplishments, and experiences in a captivating way. From
                customizing the layout to selecting the perfect color scheme,
                every detail can be tailored to match your style and industry.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Themes2;
