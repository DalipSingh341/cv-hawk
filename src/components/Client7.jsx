import React from 'react'
import $ from "jquery"
import  client1 from "../assets/images/webp/client1.webp"
import  client2 from "../assets/images/webp/client2.webp"
import  client3 from "../assets/images/webp/client3.webp"
import client4 from "../assets/images/webp/client4.webp"
import client5 from "../assets/images/webp/client5.webp"
import five_star from "../assets/images/webp/five_start.webp"
import triangle from "../assets/images/webp/text_triangle.webp"
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import { Left_arrow, Right_arrow } from './Icons'
const Client7 = () => {
   var settings = {
     dots: false,
     infinite: true,
     autoplay: false,
     autoplayspeed: 0,
     speed: 1500,
     arrows: false,
    //  prevArrow: $(".previous"),
    //  nextArrow: $(".Next_Btn"),
     slidesToShow: 1,
     pauseOnHover: false,
     cssEase: "linear",
     slidesToScroll: 1,
  };
   var settings2 = {
     dots: false,
     infinite: true,
     autoplay: false,
     autoplayspeed: 0,
     speed: 1500,
     arrows: false,
    //  prevArrow: $(".previous"),
    //  nextArrow: $(".Next_Btn"),
     slidesToShow: 1,
     pauseOnHover: false,
     cssEase: "linear",
     slidesToScroll: 1,
  };

  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);
  return (
    <div className="py-md-5 py-3 position-relative bg_gray">
      <h2 className="ff-primary fs_30 fw-medium fc_black text-center py-md-5 py-3">
        What our Clients Says
      </h2>
      <div
        onClick={() => slider1?.current?.slickPrev()}
        className="position-absolute left_arr  d-inline-block cp"
      >
        <div onClick={() => slider2?.current?.slickPrev()}>
          <Left_arrow />
        </div>
      </div>
      <div
        onClick={() => slider1?.current?.slickNext()}
        className="position-absolute Right_arr  d-inline-block cp"
      >
        <div onClick={() => slider2?.current?.slickNext()}>
          <Right_arrow />
        </div>
      </div>
      <Container>
        <Slider ref={slider1} {...settings} className="d-none d-md-block">
          <div className="px-5 d-none d-md-block">
            <div className="d-flex gap-5 justify-content-between">
              <div className="pt-4">
                <div className="client_text_box mb-3 position-relative">
                  <img
                    className="position-absolute triangle"
                    src={triangle}
                    alt="triangle"
                  />
                  <h2 className="ff-primary fs_16 fw-normal fc_black ">
                    Sit urna ornare sed quam molestie sit placerat convallis. Ac
                    condimentum mollis malesuada placerat in placerat
                  </h2>
                </div>
                <div className="d-flex align-items-start gap-3 mt-4 ms-4">
                  <img src={client1} alt="client1" />
                  <div>
                    <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                      Darrell Steward
                    </h2>
                    <img src={five_star} alt="five_star" />
                  </div>
                </div>
              </div>
              <div className="d-none d-lg-block">
                <div className="client_text_box mb-3 position-relative">
                  <img
                    className="position-absolute triangle"
                    src={triangle}
                    alt="triangle"
                  />
                  <h2 className="ff-primary fs_16 fw-normal fc_black ">
                    Magna ipsum erat magna nulla auctor. Phasellus consectetur
                    aliquam vel at non faucibus viverra.
                  </h2>
                </div>
                <div className="d-flex align-items-start gap-3 mt-4 ms-4">
                  <img src={client3} alt="client3" />
                  <div>
                    <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                      Savannah Nguyen
                    </h2>
                    <img src={five_star} alt="five_star" />
                  </div>
                </div>
              </div>
              <div className="pt-5 d-none d-md-block">
                <div className="client_text_box mb-3 position-relative">
                  <img
                    className="position-absolute triangle"
                    src={triangle}
                    alt="triangle"
                  />
                  <h2 className="ff-primary fs_16 fw-normal fc_black ">
                    Morbi leo ullamcorper in et viverra. Neque elit scelerisque
                    purus praesent nulla ut a id.
                  </h2>
                </div>
                <div className="d-flex align-items-start gap-3 mt-4 ms-4">
                  <img src={client5} alt="client5" />
                  <div>
                    <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                      Esther Howard
                    </h2>
                    <img src={five_star} alt="five_star" />
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="d-flex gap-5 justify-content-evenly">
              <div className="pt-4">
                <div className="client_text_box mb-3 position-relative">
                  <img
                    className="position-absolute triangle"
                    src={triangle}
                    alt="triangle"
                  />
                  <h2 className="ff-primary fs_16 fw-normal fc_black ">
                    Urna ac eu cras pellentesque scelerisque et. Vestibulum sed
                    felis leo leo massa elementum sit praesent eu.
                  </h2>
                </div>
                <div className="d-flex align-items-start gap-3 mt-4 ms-4">
                  <img src={client2} alt="client2" />
                  <div>
                    <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                      Jenny Wilson
                    </h2>
                    <img src={five_star} alt="five_star" />
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="client_text_box mb-3 position-relative">
                  <img
                    className="position-absolute triangle"
                    src={triangle}
                    alt="triangle"
                  />
                  <h2 className="ff-primary fs_16 fw-normal fc_black ">
                    Nibh in commodo faucibus tincidunt. Adipiscing lobortis est
                    elit neque sem scelerisque tellus magna urna.
                  </h2>
                </div>
                <div className="d-flex align-items-start gap-3 mt-4 ms-4">
                  <img src={client4} alt="client4" />
                  <div>
                    <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                      Wade Warren
                    </h2>
                    <img src={five_star} alt="five_star" />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="px-5 d-none d-md-block">
            <div className="d-flex gap-5 justify-content-between">
              <div className="pt-4">
                <div className="client_text_box mb-3 position-relative">
                  <img
                    className="position-absolute triangle"
                    src={triangle}
                    alt="triangle"
                  />
                  <h2 className="ff-primary fs_16 fw-normal fc_black ">
                    Sit urna ornare sed quam molestie sit placerat convallis. Ac
                    condimentum mollis malesuada placerat in placerat
                  </h2>
                </div>
                <div className="d-flex align-items-start gap-3 mt-4 ms-4">
                  <img src={client1} alt="client1" />
                  <div>
                    <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                      Darrell Steward
                    </h2>
                    <img src={five_star} alt="five_star" />
                  </div>
                </div>
              </div>
              <div className="d-none d-lg-block">
                <div className="client_text_box mb-3 position-relative">
                  <img
                    className="position-absolute triangle"
                    src={triangle}
                    alt="triangle"
                  />
                  <h2 className="ff-primary fs_16 fw-normal fc_black ">
                    Magna ipsum erat magna nulla auctor. Phasellus consectetur
                    aliquam vel at non faucibus viverra.
                  </h2>
                </div>
                <div className="d-flex align-items-start gap-3 mt-4 ms-4">
                  <img src={client3} alt="client3" />
                  <div>
                    <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                      Savannah Nguyen
                    </h2>
                    <img src={five_star} alt="five_star" />
                  </div>
                </div>
              </div>
              <div className="pt-5 d-none d-md-block">
                <div className="client_text_box mb-3 position-relative">
                  <img
                    className="position-absolute triangle"
                    src={triangle}
                    alt="triangle"
                  />
                  <h2 className="ff-primary fs_16 fw-normal fc_black ">
                    Morbi leo ullamcorper in et viverra. Neque elit scelerisque
                    purus praesent nulla ut a id.
                  </h2>
                </div>
                <div className="d-flex align-items-start gap-3 mt-4 ms-4">
                  <img src={client5} alt="client5" />
                  <div>
                    <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                      Esther Howard
                    </h2>
                    <img src={five_star} alt="five_star" />
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="d-flex gap-5 justify-content-evenly">
              <div className="pt-4">
                <div className="client_text_box mb-3 position-relative">
                  <img
                    className="position-absolute triangle"
                    src={triangle}
                    alt="triangle"
                  />
                  <h2 className="ff-primary fs_16 fw-normal fc_black ">
                    Urna ac eu cras pellentesque scelerisque et. Vestibulum sed
                    felis leo leo massa elementum sit praesent eu.
                  </h2>
                </div>
                <div className="d-flex align-items-start gap-3 mt-4 ms-4">
                  <img src={client2} alt="client2" />
                  <div>
                    <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                      Jenny Wilson
                    </h2>
                    <img src={five_star} alt="five_star" />
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="client_text_box mb-3 position-relative">
                  <img
                    className="position-absolute triangle"
                    src={triangle}
                    alt="triangle"
                  />
                  <h2 className="ff-primary fs_16 fw-normal fc_black ">
                    Nibh in commodo faucibus tincidunt. Adipiscing lobortis est
                    elit neque sem scelerisque tellus magna urna.
                  </h2>
                </div>
                <div className="d-flex align-items-start gap-3 mt-4 ms-4">
                  <img src={client4} alt="client4" />
                  <div>
                    <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                      Wade Warren
                    </h2>
                    <img src={five_star} alt="five_star" />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </Slider>
        <Slider ref={slider2} {...settings2} className="d-md-none">
          <div className="py-4 ps-5 ms-md-5">
            <div className="client_text_box mb-3 position-relative">
              <img
                className="position-absolute triangle"
                src={triangle}
                alt="triangle"
              />
              <h2 className="ff-primary fs_16 fw-normal fc_black ">
                Sit urna ornare sed quam molestie sit placerat convallis. Ac
                condimentum mollis malesuada placerat in placerat
              </h2>
            </div>
            <div className="d-flex align-items-start gap-3 mt-4 ms-4">
              <img src={client1} alt="client1" />
              <div>
                <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                  Darrell Steward
                </h2>
                <img src={five_star} alt="five_star" />
              </div>
            </div>
          </div>
          <div className="py-4 ps-5 ms-md-5">
            <div className="client_text_box mb-3 position-relative">
              <img
                className="position-absolute triangle"
                src={triangle}
                alt="triangle"
              />
              <h2 className="ff-primary fs_16 fw-normal fc_black ">
                Magna ipsum erat magna nulla auctor. Phasellus consectetur
                aliquam vel at non faucibus viverra.
              </h2>
            </div>
            <div className="d-flex align-items-start gap-3 mt-4 ms-4">
              <img src={client3} alt="client3" />
              <div>
                <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                  Savannah Nguyen
                </h2>
                <img src={five_star} alt="five_star" />
              </div>
            </div>
          </div>
          <div className="py-4 ps-5 ms-md-5">
            <div className="client_text_box mb-3 position-relative">
              <img
                className="position-absolute triangle"
                src={triangle}
                alt="triangle"
              />
              <h2 className="ff-primary fs_16 fw-normal fc_black ">
                Morbi leo ullamcorper in et viverra. Neque elit scelerisque
                purus praesent nulla ut a id.
              </h2>
            </div>
            <div className="d-flex align-items-start gap-3 mt-4 ms-4">
              <img src={client5} alt="client5" />
              <div>
                <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                  Esther Howard
                </h2>
                <img src={five_star} alt="five_star" />
              </div>
            </div>
          </div>
          <div className="py-4 ps-5 ms-md-5">
            <div className="client_text_box mb-3 position-relative">
              <img
                className="position-absolute triangle"
                src={triangle}
                alt="triangle"
              />
              <h2 className="ff-primary fs_16 fw-normal fc_black ">
                Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit
                neque sem scelerisque tellus magna urna.
              </h2>
            </div>
            <div className="d-flex align-items-start gap-3 mt-4 ms-4">
              <img src={client4} alt="client4" />
              <div>
                <h2 className="ff-primary fs_20 fw-normal fc_black mb-1">
                  Wade Warren
                </h2>
                <img src={five_star} alt="five_star" />
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default Client7
