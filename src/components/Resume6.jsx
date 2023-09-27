import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import resume1 from "../assets/images/webp/resume1.webp"
import job_after from "../assets/images/webp/job_after_line.webp";
import { Orange_Tick } from './Icons';
const Resume6 = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={6} className="order-md-first order-last py-3 py-md-5">
            <div>
              <img className="w-100" src={resume1} alt="resume1" />
            </div>
          </Col>
          <Col md={5} className="order-first order-md-last py-3 py-md-5 px-3 px-md-0">
            <h2 className="ff-primary fc_black fs_40 fw-medium mb-0 resume_text1 max_525 position-relative">
              Resume trailoring based on the
              <img
                className="position-absolute job_after d-none d-md-block"
                src={job_after}
                alt="job_after"
              />
              <span className="fc_orange "> job you’re applying </span>
              for
            </h2>

            <p className="ff-primary fc_black fs_16 fw-normal  my-4 opacity_08">
              Quickly ensure that your resume covers key skills and experience
              by pasting the job ad you’re applying for
            </p>
            <div className="d-flex align-items-center gap-2 mb-3">
              <Orange_Tick />
              <h2 className="ff-primary fs_16 fc_black fw-normal opacity_08 mb-0">
                Skills and experience analysis
              </h2>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <Orange_Tick />
              <h2 className="ff-primary fs_16 fc_black fw-normal opacity_08 mb-0">
                Actionable Checklist of what else to add to your resume
              </h2>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Orange_Tick />
              <h2 className="ff-primary fs_16 fc_black fw-normal opacity_08 mb-0">
                Instant comparison between your resume and the job posting
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume6
