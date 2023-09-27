import React from "react";
import { Link } from "react-router-dom";
import unlock1 from "../assets/images/svg/unlock1.svg";
import unlock2 from "../assets/images/svg/unlock2.svg";
import unlock3 from "../assets/images/svg/unlock3.svg";
import unlock4 from "../assets/images/svg/unlock4.svg";
import unlock_circle from "../assets/images/webp/unlock_circle.webp";
import unlock_magnet from "../assets/images/webp/unlock_magnet1.webp";
import unlock_medicine from "../assets/images/webp/unclock_medicine.webp";
import unlock_box from "../assets/images/webp/unlock_box.webp";
import unlock_blur1 from "../assets/images/webp/unlock_blur1.webp";
import { Container } from "react-bootstrap";

const Unlock1 = () => {
  return (
    <section className="py-3 py-md-5 my-md-5 position-relative ">
      <img
        className=" position-absolute d-none d-md-block unlock_1"
        src={unlock1}
        alt="unlock1"
      />
      <img
        className=" position-absolute d-none d-md-block unlock_2"
        src={unlock2}
        alt="unlock2"
      />
      <img
        className=" position-absolute d-none d-md-block unlock_3"
        src={unlock3}
        alt="unlock3"
      />
      <img
        className=" position-absolute d-none d-md-block unlock_4"
        src={unlock4}
        alt="unlock4"
      />
      <img
        className=" position-absolute  unlock_circle"
        src={unlock_circle}
        alt="unlock_circle"
      />
      <img
        className=" position-absolute d-none d-md-block unlock_magnet"
        src={unlock_magnet}
        alt="unlock_magnet"
      />
      <img
        className=" position-absolute d-none d-md-block unlock_medicine"
        src={unlock_medicine}
        alt="unlock_medicine"
      />
      <img
        className=" position-absolute d-none d-md-block unlock_box"
        src={unlock_box}
        alt="unlock_box"
      />

      <Container className=" py-3 py-md-5 my-3 my-md-5 position-relative">
        <img
          className=" position-absolute d-none d-md-block unlock_blur1"
          src={unlock_blur1}
          alt="unlock_blur1"
        />
        <h2 className="ff-primary fs_40 fw-semibold fc_black mb-3 text-center position-relative z-5">
          Unlock Your Potential with a
          <span className="d-md-block Cv_Builder">
            {" "}
            Professional CV Builder
          </span>
        </h2>
        <p className="ff-primary fs_16 fw-normal text-center opacity_07 mb-5 position-relative z-5">
          Our user-friendly platform guides you through the process, allowing
          you to
          <span className="d-md-block">
            customize every section to align with your unique career goals.
          </span>
        </p>
        <div className="d-flex gap-3 justify-content-center position-relative z-5">
          <Link className="d-inline-block ff-primary fs_16  fc_white fw-semibold GetBtn mb-0 ">
            Get Started
          </Link>
          <Link className="d-inline-block ff-primary fs_16  fc_white fw-semibold watchBtn mb-0 ">
            Watch Demo
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Unlock1;
