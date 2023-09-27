import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from "react-bootstrap/Accordion";
const Asked8 = () => {
  return (
    <div className="pb-md-5 py-4">
      <Container>
        <h2 className="ff-primary fs_40 fw-medium fc_black text-center py-md-5 py-3">
          Frequently Asked Questions
        </h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion defaultActiveKey="2" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h2 className="ff-primary fs_24 fw-normal fc_black  ">
                    {" "}
                    Q1. How does the CVhawk work??
                  </h2>
                </Accordion.Header>
                <Accordion.Body className="ff-primary fs_16 fw-normal fc_black opacity_08">
                  Absolutely! We understand that your CV is a dynamic document
                  that may require updates and modifications over time. Once
                  you've saved your CV using our CVhawk, you can easily edit and
                  make changes whenever needed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h2 className="ff-primary fs_24 fw-normal fc_black  ">
                    {" "}
                    Q2. Is the CVhawk completely free to use?
                  </h2>
                </Accordion.Header>
                <Accordion.Body className="ff-primary fs_16 fw-normal fc_black opacity_08">
                  Absolutely! We understand that your CV is a dynamic document
                  that may require updates and modifications over time. Once
                  you've saved your CV using our CVhawk, you can easily edit and
                  make changes whenever needed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h2 className="ff-primary fs_24 fw-normal fc_black  ">
                    Q3. Can I edit my CV after I've saved it?
                  </h2>
                </Accordion.Header>
                <Accordion.Body className="ff-primary fs_16 fw-normal fc_black opacity_08">
                  Absolutely! We understand that your CV is a dynamic document
                  that may require updates and modifications over time. Once
                  you've saved your CV using our CVhawk, you can easily edit and
                  make changes whenever needed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h2 className="ff-primary fs_24 fw-normal fc_black  ">
                    Q4. Can I import my existing CV into the builder?
                  </h2>
                </Accordion.Header>
                <Accordion.Body className="ff-primary fs_16 fw-normal fc_black opacity_08">
                  Absolutely! We understand that your CV is a dynamic document
                  that may require updates and modifications over time. Once
                  you've saved your CV using our CVhawk, you can easily edit and
                  make changes whenever needed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h2 className="ff-primary fs_24 fw-normal fc_black  ">
                    Q5. Is my personal information safe and secure?
                  </h2>
                </Accordion.Header>
                <Accordion.Body className="ff-primary fs_16 fw-normal fc_black opacity_08">
                  Absolutely! We understand that your CV is a dynamic document
                  that may require updates and modifications over time. Once
                  you've saved your CV using our CVhawk, you can easily edit and
                  make changes whenever needed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h2 className="ff-primary fs_24 fw-normal fc_black  ">
                    Q6. What kind of templates are available in the CV builder?
                  </h2>
                </Accordion.Header>
                <Accordion.Body className="ff-primary fs_16 fw-normal fc_black opacity_08">
                  Absolutely! We understand that your CV is a dynamic document
                  that may require updates and modifications over time. Once
                  you've saved your CV using our CVhawk, you can easily edit and
                  make changes whenever needed.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Asked8
