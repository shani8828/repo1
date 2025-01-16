import React from "react";
import "../components/OptimaCss/Team.css";
import Card from "../components/ShaniCard.jsx";
import { Executives, CoreHeads } from "../constants/Team.js";
const Team = () => {
  return (
    <div
      class="optima-shani-team-container max-w-[1280px] mx-auto p-8 text-center selection:text-custom-purple"
      id="team"
    >
      <div class="optima-shani-executives">
        <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-white">
          Executives
        </h1>
        <div class="optima-shani-team-members">
          {Executives.map((profile) => (
            <Card key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
      <div class="optima-shani-core-heads">
        <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-white text-center">
          Core Heads
        </h1>
        <div class="optima-shani-team-members">
          {CoreHeads.map((profile) => (
            <Card key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
