import Heading from "./Heading";
import Section from "./Section";
import "../components/OptimaCss/Team.css";
import Card from "../components/Card.jsx";
import { Executives, CoreHeads } from "../constants/Team.js";

const NewTeam = () => {
  return (
    <Section id="events">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Our Team"
        />
        <div className="optima-team-container max-w-[1280px] mx-auto p-8 text-center selection:text-custom-purple">
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
      </div>
    </Section>
  );
};

export default NewTeam;
