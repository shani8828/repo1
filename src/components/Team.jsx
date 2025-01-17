import React from "react";
import "../components/OptimaCss/Team.css";
import Card from "../components/Card.jsx";
import { Executives, CoreHeads } from "../constants/Team.js";
const Team = () => {
  return (
    <div
      className="optima-team-container max-w-[1280px] mx-auto p-8 text-center selection:text-custom-purple"
      id="team"
    >
      <div className="optima-team-executives">
        <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-white">
          Executives
        </h1>
        <div className="optima-team-members">
          {Executives.map((profile) => (
            <Card key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
      <div className="optima-team-core-heads">
        <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-white text-center">
          Core Heads
        </h1>
        <div className="optima-team-members">
          {CoreHeads.map((profile) => (
            <Card key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
