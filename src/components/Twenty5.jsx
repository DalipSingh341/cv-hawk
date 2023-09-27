import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import twenty1 from "../assets/images/webp/twenty1.webp";
import { Orange_Tick } from "./Icons";
import { Link } from "react-router-dom";
const Twenty5 = () => {
  return (
    <div className="bg_gray">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="py-3">
            <h2 className="ff-primary fs_40 fw-medium fc_black mb-3">
              20+ <span className="fc_orange">Professionally designed </span>
              resume sections
            </h2>
            <p className="ff-primary fs_16 fw-normal fc_black opacity_08 mb-4">
              Express your professional history without limitations or worry
              about how <span className="d-md-block">your resume looks</span>
            </p>
            <div className="d-flex align-items-start gap-2 mb-3">
              <Orange_Tick />
              <h2 className="ff-primary fs_16 fc_black fw-normal opacity_08 mb-0">
                Professional sections like
                <span className="fw-semibold">
                  {" "}
                  Experience, Skills, Summary{" "}
                </span>
                and <span className="fw-semibold">Education</span>
              </h2>
            </div>
            <div className="d-flex align-items-start gap-2 mb-3">
              <Orange_Tick />
              <h2 className="ff-primary fs_16 fc_black fw-normal opacity_08 mb-0">
                Professional sections like
                <span className="fw-semibold">
                  {" "}
                  Strengths, Quotes, Books, Interests{" "}
                </span>
                and <span className="fw-semibold">My Time.</span>
              </h2>
            </div>
            <div className="d-flex align-items-start gap-2">
              <Orange_Tick />
              <h2 className="ff-primary fs_16 fc_black fw-normal opacity_08 mb-3">
                Other sections like{" "}
                <span className="fw-semibold">
                  {" "}
                  Certifications, Awards, Achievements, Language{" "}
                </span>
                and <span className="fw-semibold">Reference</span>
              </h2>
            </div>
            <div className="d-none d-md-block">
              <Link className="ff-primary fs_16 fw-semibold fc_white  d-inline-block GetBtn mt-4 ">
                Get Started
              </Link>
            </div>
          </Col>
          <Col md={6} className="py-3">
            <div>
              <img className="w-100" src={twenty1} alt="twenty1" />
            </div>
            <div className="d-md-none">
              <Link className="ff-primary fs_16 fw-semibold fc_white  d-inline-block Call_btn mt-4 ">
                Get Started
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Twenty5;
