import React from "react";
import footer_logo from "../assets/images/svg/footer_logo.svg";
import { Facebook, Instagram, Twitter } from "./Icons";
import { Link } from "react-router-dom";
import { Row,Col, Container } from "react-bootstrap";
const Footer = () => {
  return (
    <section className="pt-md-5 py-3 bg-black">
      <Container className=" py-md-5 mt-md-5">
        <Row className="align-items-center justify-content-between">
          <Col lg={4} className="py-3">
            <div>
              <img src={footer_logo} alt="footer_logo" />
              <p className="ff-primary fc_white fs_16 fw-normal footer_para1 mb-4">
                Sit urna ornare sed quam molestie sit placerat convallis. Ac
                condimentum mollis malesuada placerat in placerat id facilisis.
              </p>
              <div className="d-none d-sm-block">
                <div className="d-flex align-items-center gap-4 pt-2 ">
                  <Link>
                    <Twitter />
                  </Link>
                  <Link>
                    <Facebook />
                  </Link>
                  <Link>
                    <Instagram />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="py-3">
            {/* <Row>
              <Col sm={4} md={4} className="py-3">
                <ul className="ps-0 mb-0 d-flex flex-column gap-4">
                  <li className="ff-primary fc_white fs_16 fw-normal">
                    Quick Links
                  </li>
                  <li>
                    <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                      We’ll help you
                    </Link>
                  </li>
                  <li>
                    <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col sm={4} md={4} className="py-3">
                <ul className="ps-0 mb-0 d-flex flex-column gap-4">
                  <li className="ff-primary fc_white fs_16 fw-normal">
                    Support
                  </li>
                  <li>
                    <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                      +012 345 67890
                    </Link>
                  </li>
                  <li>
                    <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                      Cvhawk@gmail.com
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col sm={4} md={4} className="py-3">
                <ul className="ps-0 mb-0 d-flex flex-column gap-4">
                  <li className="ff-primary fc_white fs_16 fw-normal">Legal</li>
                  <li>
                    <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                      Terms & conditions
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row> */}
            <div className="d-flex flex-wrap justify-content-between gap-4">
              <ul className="ps-0 mb-0 d-flex flex-column gap-4">
                <li className="ff-primary fc_white fs_16 fw-normal">
                  Quick Links
                </li>
                <li>
                  <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                    We’ll help you
                  </Link>
                </li>
                <li>
                  <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                    Testimonials
                  </Link>
                </li>
              </ul>
              <ul className="ps-0 mb-0 d-flex flex-column gap-4">
                <li className="ff-primary fc_white fs_16 fw-normal">Support</li>
                <li>
                  <ul className="ps-0 mb-0 d-flex flex-column gap-4">
                    <li className="ff-primary fc_white fs_16 fw-normal">
                      Legal
                    </li>
                    <li>
                      <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                        Terms & conditions
                      </Link>
                    </li>
                  </ul>
                  <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                    +012 345 67890
                  </Link>
                </li>
                <li>
                  <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                    Cvhawk@gmail.com
                  </Link>
                </li>
              </ul>
              <ul className="ps-0 mb-0 d-flex flex-column gap-4">
                <li className="ff-primary fc_white fs_16 fw-normal">Legal</li>
                <li>
                  <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="ff-primary fc_white fs_16 fw-normal  d-inline-block opacity_08 footer_text    ">
                    Terms & conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-sm-none">
              <div className="d-flex align-items-center gap-4 mt-3 ">
                <Link>
                  <Twitter />
                </Link>
                <Link>
                  <Facebook />
                </Link>
                <Link>
                  <Instagram />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer_border"></div>
      <h2 className="ff-primary fs_16 fw-medium fc_white  text-center pt-3">
        Copyright@CVhawk2023
      </h2>
    </section>
  );
};

export default Footer;
