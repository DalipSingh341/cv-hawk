import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import help1 from "../assets/images/png/help1.png"
import { Link } from 'react-router-dom';
const Help4 = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={6} className="order-md-first order-last py-md-5 py-3">
            <div>
              <img className="w-100" src={help1} alt="help1" />
            </div>
          </Col>
          <Col lg={6} className="order-first order-md-last py-md-5 py-3">
            <h2 className="ff-primary fs_40 fw-medium fc_black mb-3">
              We’ll help you
            </h2>
            <p className="ff-primary fs_16 fw-normal fc_black mb-4 opacity_08">
              Once you've booked a session, a confirmation email will be sent to
              the provided email address, containing all the necessary details,
              including the date, time, and instructions for the session.
            </p>
            <Link className="ff-primary fs_16 fw-semibold fc_white  d-inline-block GetBtn">
              Book a Call
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Help4
