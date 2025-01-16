import React from "react";
import "../components/OptimaCss/ShaniCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Card = ({ profile }) => {
  return (
    <div class="optima-shani-card">
      <div class="optima-card-front text-white">
        <img src={profile.imageUrl} alt={`${profile.name}'s Image`} />
        <h2 className="text-3xl font-semibold">{profile.name}</h2>
        <h3>{profile.positionName}</h3>
      </div>
      <div class="optima-card-back text-white">
        <h2 className="text-3xl lg:text-4xl font-semibold">{profile.name}</h2>
        <h3 className="text-2xl lg:text-3xl">{profile.positionName}</h3>
        <p class="optima-card-back-contact">
          <a href={profile.socialLinks.facebook}>
            <FontAwesomeIcon
              className="text-4xl lg:text-5xl"
              icon={faSquareFacebook}
            />
          </a>
          <a href={profile.socialLinks.linkedin}>
            <FontAwesomeIcon
              className="text-4xl lg:text-5xl"
              icon={faLinkedin}
            />
          </a>
          <a href={profile.socialLinks.instagram}>
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
