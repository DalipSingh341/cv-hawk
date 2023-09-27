import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/svg/hawk_logo.svg";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import { Button, Container } from "react-bootstrap";

const HawkNav = () => {
  const [nav, setNav] = useState(true);

  function shownav() {
    setNav(false);
    document.body.classList.add("overflow-hidden");
  }
  function hidenav() {
    setNav(true);
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul
          className={`${
            nav
              ? "ps-0 d-flex nav_bar mb-0 p-0 align-items-center gap-5"
              : "ps-0 d-flex nav_bar align-items-center show mb-0 gap-5"
          }`}
        >
          <li className="d-sm-none">
            <img src={logo} alt="logo" />
          </li>
          <li>
            <Link
              onClick={() => setNav(true)}
              className="ff-primary fs_16 fc_black fw-normal  d-inline-block mb-0 nav_text position-relative"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(true)}
              className="ff-primary fs_16 fc_black fw-normal  d-inline-block mb-0 nav_text position-relative"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(true)}
              className="ff-primary fs_16 fc_black fw-normal  d-inline-block mb-0 nav_text position-relative"
            >
              We’ll help you
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(true)}
              className="ff-primary fs_16 fc_black fw-normal  d-inline-block mb-0 nav_text position-relative"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(true)}
              className="d-inline-block ff-primary fs_16  fc_white fw-semibold GetBtn mb-0 d-sm-none"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
        <div className="d-flex justify-content-end">
          <Link
            onClick={() => setNav(true)}
            className="d-inline-block ff-primary fs_16  fc_white fw-semibold GetBtn mb-0 d-none  d-lg-block"
          >
            Get in Touch
          </Link>
        </div>
        <div className="d-flex gap-md-4 align-items-center d-lg-none">
          <Link
            onClick={() => setNav(true)}
            className="d-inline-block ff-primary fs_16  fc_white fw-semibold GetBtn mb-0 d-none  d-sm-block d-lg-none"
          >
            Get in Touch
          </Link>
          <Button
            className="position-relative z-3  cross_btn"
            onClick={nav ? shownav : hidenav}
          >
            {" "}
            {nav ? (
              <Icon className="cross" icon={menu} size={40} />
            ) : (
              <Icon className="cross2" icon={x} size={40} />
            )}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HawkNav;
