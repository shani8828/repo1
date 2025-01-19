import React from "react";
import "../components/OptimaCss/Team.css";
import Card from "../components/ShaniCard.jsx";

const Team = () => {
  return (
    <div class="optima-shani-team-container max-w-[1280px] mx-auto p-8 text-center selection:text-custom-purple"id="team">
      <div class="optima-shani-executives">
        <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-white">
          Executives
        </h1>
        <div class="optima-shani-team-members">
          <Card/>
          <Card/>
        </div>
      </div>
      <div class="optima-shani-core-heads">
        <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-white text-center">
          Core Heads
        </h1>
        <div class="optima-shani-team-members">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Team;
