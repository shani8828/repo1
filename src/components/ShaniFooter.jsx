import React from "react";
import logo from "../assets/ShaniFooter/logo-optima.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../components/OptimaCss/ShaniFooter.css";
import PageUpButton from "../components/PageUpButton.jsx";

const Footer = () => {
  return (
    <div className="relative z-5">
    <footer className="selection:text-custom-purple">
      <section id="optima-shani-footer">
        <div class="optima-shani-about-portion">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <p className="p-0">
            Optima, IIT Kharagpur's Techno-Optimization Fest, fosters
            innovation, problem-solving, and collaboration, organized by the
            Department of Industrial and Systems Engineering.
          </p>
          <div class="optima-shani-social-handles">
            <div class="optima-shani-faceb">
              <a
                class="optima-shani-normal"
                href="https://www.facebook.com/optima.iitkharagpur"
                target="_blank"
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a
                class="optima-shani-hovered"
                href="https://www.facebook.com/optima.iitkharagpur"
                target="_blank"
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
            </div>
            <div class="optima-shani-instag">
              <a
                class="optima-shani-normal"
                href="https://www.instagram.com/optima.iitkgp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a
                class="optima-shani-hovered"
                href="https://www.instagram.com/optima.iitkgp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
            </div>
            <div class="optima-shani-linkedi">
              <a
                class="optima-shani-normal"
                href="https://www.linkedin.com/company/optima-iitkgp/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                class="optima-shani-hovered"
                href="https://www.linkedin.com/company/optima-iitkgp/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div class="quick-ways-reach-us">
          <div class="optima-shani-quick-ways">
            <h3 className="text-3xl mb-3 font-semibold">QUICK WAYS</h3>
            <ul>
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/workshops">Workshops</a>
              </li>
              <li>
                <a href="/competitions">Competitons</a>
              </li>
              <li>
                <a href="/schedule">Schedule</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/guestlectures">Guest Lectures</a>
              </li>
              <li>
                <a href="/sponsors">Sponsors</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          <div class="optima-shani-reach-us">
            <h3 className="text-3xl mb-3 font-semibold">REACH US</h3>
            <div class="optima-shani-location">
              <a
                class="optima-shani-normal"
                href="https://maps.app.goo.gl/7t9fs2Z4KE2Dqjnb6"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLocationDot} /> Department of
                Industrial and Systems Engineering, IIT Kharagpur - 721302
              </a>
              <a
                class="optima-shani-hovered"
                href="https://maps.app.goo.gl/7t9fs2Z4KE2Dqjnb6"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLocationDot} bounce /> Department of
                Industrial and Systems Engineering, IIT Kharagpur - 721302
              </a>
            </div>
            <div class="optima-shani-call">
              <a
                class="optima-shani-normal"
                href={`tel:+917666381808`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faPhone} />
                +91 7666381808
              </a>
              <a
                class="optima-shani-hovered"
                href={`tel:+917666381808`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faPhone} shake />
                +91 7666381808
              </a>
            </div>
            <div class="optima-shani-mail1">
              <a
                class="optima-shani-normal"
                href={`mailto:pranav.bhadane.iitkgp@gmail.com`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                pranav.bhadane.iitkgp@gmail.com
              </a>
              <a
                class="optima-shani-hovered"
                href={`mailto:pranav.bhadane.iitkgp@gmail.com`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} beat />{" "}
                pranav.bhadane.iitkgp@gmail.com
              </a>
            </div>
            <div class="optima-shani-mail2">
              <a
                class="optima-shani-normal"
                href={`mailto:saharshagrawal.iitkgp@gmail.com`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                saharshagrawal.iitkgp@gmail.com
              </a>
              <a
                class="optima-shani-hovered"
                href={`mailto:saharshagrawal.iitkgp@gmail.com`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} beat />{" "}
                saharshagrawal.iitkgp@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <PageUpButton />
      <div className="optima-shani-copyright-claim text-center">
        &copy; Optima 2025 | All Rights Reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;
