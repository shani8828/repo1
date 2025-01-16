import React from "react";
import "../components/OptimaCss/ShaniCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Card = ({img, title, position, memberfb, memberlinked, memberinsta}) => {
  return (
    <div class="optima-shani-card">
      <div class="optima-card-front text-white">
        <img src={img} alt={title} />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <h3>{position}</h3>
      </div>
      <div class="optima-card-back text-white">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          {title}
        </h2>
        <h3 className="text-2xl lg:text-3xl">{position}</h3>
        <p class="optima-card-back-contact">
          <a href={memberfb}>
            <FontAwesomeIcon
              className="text-4xl lg:text-5xl"
              icon={faSquareFacebook}
            />
          </a>
          <a href={memberlinked}>
            <FontAwesomeIcon
              className="text-4xl lg:text-5xl"
              icon={faLinkedin}
            />
          </a>
          <a href={memberinsta}>
            <FontAwesomeIcon
              className="text-4xl lg:text-5xl"
              icon={faSquareInstagram}
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
