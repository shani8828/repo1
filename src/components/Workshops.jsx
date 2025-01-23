import { workshops } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import ComingSoon from "./design/ComingSoon";

const Workshops = () => {
  return (
    <Section id="workshops">
      <div className="container relative z-2 min-h-screen">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Workshops"
        />

        <ComingSoon/>
      </div>
    </Section>
  );
};

export default Workshops;
