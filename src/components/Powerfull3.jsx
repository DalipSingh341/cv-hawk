import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import powerfull1 from "../assets/images/png/Powerfull1.png"
import powerfull_after from "../assets/images/svg/powerfull_after.svg"
const Powerfull3 = () => {
  return (
    <div className="bg_gray">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="py-md-5 py-3">
            <h2 className="ff-primary fs_40 fw-medium fc_black mb-2 mb-md-4 max_525 position-relative">
              Powerful Tools to Create
              <img
                className="position-absolute powerfull_after d-none d-md-block"
                src={powerfull_after}
                alt="powerfull_after"
              />
              <span className="fc_orange "> Your Standout CV</span>
            </h2>
            <p className="ff-primary fs_16 fw-normal fc_black opacity_08 max_457">
              Customize your CV to reflect your
              <span className="fw-semibold">unique personality </span>
              and professional brand. Choose from a wide range of
              <span className="fw-semibold"> professionally designed </span>
              templates and layouts, allowing you to find the
              <span className="fw-semibold"> perfect style </span>
              that aligns with your industry and career goals.
            </p>
          </Col>
          <Col lg={6} className="py-md-5 py-3">
            <div>
              <img className="w-100" src={powerfull1} alt="powerfull1" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Powerfull3
