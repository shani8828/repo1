import React from "react";
import logo from "../assets/optima2025-logo.png";
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
      <footer>
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
          </div>
          <div className="quick-links-contact-us">
            <div className="optima-footer-quick-links">
              <h3 className="text-3xl mb-3 font-semibold">QUICK LINKS</h3>
              <div className="flex">
                <ul className="text-gray-300 w-1/2">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/workshops">Workshops</a>
                  </li>
                  <li>
                    <a href="/competitions">Competitions</a>
                  </li>
                </ul>
                <ul className="text-gray-300 w-1/2">
                  <li>
                    <a href="/guest-lectures">Guest Lectures</a>
                  </li>
                  <li>
                    <a href="/sponsors">Sponsors</a>
                  </li>
                  <li>
                    <a href="/team">Team</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="optima-footer-contact-us">
              <h3 className="text-3xl mb-3 font-semibold">CONTACT US</h3>
              <div>
                <div className="optima-footer-location">
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
                    <span className="pl-2">+91 6370708967</span>
                  </a>
                  <a
                    className="optima-footer-hovered"
                    href={`tel:+916370708967`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faPhone} shake />
                    <span className="pl-2">+91 6370708967</span>
                  </a>
                </div>
                <div className="optima-footer-mail1">
                  <a
                    className="optima-footer-normal"
                    href={`mailto:sumanta@optima.org.in`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} /> sumanta@optima.org.in
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
                {/* <div className="optima-footer-mail2">
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
                </div> */}
              </div>
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
          </div>
        </section>
        <div className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-400 text-center">
          &copy; Optima 2025 | All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
