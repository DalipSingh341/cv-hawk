import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Path9 = () => {
  return (
    <div> 
      <Container className="position-relative py-3 py-md-0">
        <div className="orange_box py-md-5  py-3 ">
          <h2 className="ff-primary fs_40 fw-medium  fc_white mb-3 text-center px-3 px-sm-0">
            Your Path to Success Starts Here:
            <span className="d-md-block">Build Your CV Today</span>
          </h2>
          <p className="ff-primary fs_16 fw-normal fc_white mb-4 text-center px-3">
            Our CV builder not only provides a user-friendly interface but also
            offers valuable{" "}
            <span className="d-md-block">guidance along the way.</span>
          </p>
          <div className="text-center">
            <Link className="ff-primary fs_16 fw-semibold fc_black  d-inline-block mt-3  getbtn2">
              Get Started
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Path9
