import React from "react";
import logo from "../assets/Footer/logo-optima.png";
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
import "../components/OptimaCss/Footer.css";

import { GradientLight } from "./design/Benefits";

const Footer = () => {
  return (
    <div className="relative z-5">
      <footer className="selection:text-custom-purple">
        <section id="optima-footer">
          <div className="optima-footer-about-portion">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
            <p className="p-0 opacity-80">
              Optima, IIT Kharagpur's Techno-Optimization Fest, fosters
              innovation, problem-solving, and collaborations, organized by the
              Department of Industrial and Systems Engineering.
            </p>
            <div className="optima-footer-social-handles">
              <div className="optima-footer-fb">
                <a
                  className="optima-footer-normal"
                  href="https://www.facebook.com/optima.iitkharagpur"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </a>
                <a
                  className="optima-footer-hovered"
                  href="https://www.facebook.com/optima.iitkharagpur"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </a>
              </div>
              <div className="optima-footer-ig">
                <a
                  className="optima-footer-normal"
                  href="https://www.instagram.com/optima.iitkgp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </a>
                <a
                  className="optima-footer-hovered"
                  href="https://www.instagram.com/optima.iitkgp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </a>
              </div>
              <div className="optima-footer-in">
                <a
                  className="optima-footer-normal"
                  href="https://www.linkedin.com/company/optima-iitkgp/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  className="optima-footer-hovered"
                  href="https://www.linkedin.com/company/optima-iitkgp/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className="quick-ways-reach-us">
            <div className="optima-footer-quick-ways">
              <h3 className="text-3xl mb-3 font-semibold">QUICK WAYS</h3>
              <ul className="text-gray-300">
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
            <div className="optima-footer-reach-us">
              <h3 className="text-3xl mb-3 font-semibold">REACH US</h3>
              <div>
                <div className="optima-footer-location ">
                  <a
                    className="optima-footer-normal"
                    href="https://maps.app.goo.gl/7t9fs2Z4KE2Dqjnb6"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLocationDot} /> Department of
                    Industrial and Systems Engineering, IIT Kharagpur - 721302
                  </a>
                  <a
                    className="optima-footer-hovered"
                    href="https://maps.app.goo.gl/7t9fs2Z4KE2Dqjnb6"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLocationDot} bounce /> Department
                    of Industrial and Systems Engineering, IIT Kharagpur -
                    721302
                  </a>
                </div>
                <div className="optima-footer-call">
                  <a
                    className="optima-footer-normal"
                    href={`tel:+916370708967`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    +91 6370708967
                  </a>
                  <a
                    className="optima-footer-hovered"
                    href={`tel:+916370708967`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faPhone} shake />
                    +91 6370708967
                  </a>
                </div>
                <div className="optima-footer-mail1">
                  <a
                    className="optima-footer-normal"
                    href={`mailto:sumanta@optima.org.in`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    sumanta@optima.org.in
                  </a>
                  <a
                    className="optima-footer-hovered"
                    href={`mailto:sumanta@optima.org.in`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} beat />{" "}
                    sumanta@optima.org.in
                  </a>
                </div>
                <div className="optima-footer-mail2">
                  <a
                    className="optima-footer-normal"
                    href={`mailto:suranjan.karmakar.iitkgp@gmail.com`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    suranjan.karmakar.iitkgp@gmail.com
                  </a>
                  <a
                    className="optima-footer-hovered"
                    href={`mailto:suranjan.karmakar.iitkgp@gmail.com`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} beat />{" "}
                    suranjan.karmakar.iitkgp@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="optima-footer-copyright-claim text-center">
          &copy; Optima 2025 | All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
