import Heading from "./Heading";
import Section from "./Section";
import "../components/OptimaCss/Team.css";
import Card from "../components/Card.jsx";
import { Executives, CoreHeads } from "../constants/Team.js";
import { BackgroundCircles } from "./design/Hero.jsx";
import { useRef } from "react";
import { Gradient } from "./design/Services.jsx";
("use client");

const Team = () => {
  const parallaxRef = useRef(null);
  return (
    <Section id="team">
      <div className="container relative z-2 rounded-3xl" ref={parallaxRef}>
        <Heading className="md:max-w-md lg:max-w-2xl" title="Our Team" />
        <BackgroundCircles />
        <div className="optima-team-container max-w-[1280px] mx-auto text-center selection:text-custom-purple mt-0 rounded-3xl">
          <div className="optima-team-executives mt-0">
            <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-white mt-0 border border-black">
              Executives
            </h1>
            <div className="optima-team-members">
              {Executives.map((profile) => (
                <Card key={profile.id} profile={profile} />
              ))}
            </div>
          </div>
          <div className="optima-team-core-heads">
            <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-white text-center border border-black">
              Core Heads
            </h1>
            <div className="optima-team-members">
              {CoreHeads.map((profile) => (
                <Card key={profile.id} profile={profile} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Gradient />
    </Section>
  );
};

export default Team;
