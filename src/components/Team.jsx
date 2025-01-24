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
        <Heading className="md:max-w-md lg:max-w-2xl text-center" title="Heads" />
        <BackgroundCircles />
        <div className="optima-team-container max-w-[1280px] mx-auto selection:text-custom-purple mt-0">
          {/* <div className="optima-team-executives mb-24">
            <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white/60 to-white">
              Executives
            </h2>
            <div className="optima-team-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {Executives.map((profile) => (
                <Card key={profile.id} profile={profile} />
              ))}
            </div>
          </div> */}

          <div className="optima-team-core-heads">
            {/* <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white/60 to-white">
              Core Heads
            </h2> */}
            <div className="optima-team-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
