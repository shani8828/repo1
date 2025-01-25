import { workshops } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import ComingSoon from "./design/ComingSoon";
import { BackgroundCircles } from "./design/Hero";
import { Gradient } from "./design/Services";

const Workshops = () => {
  return (
    <Section id="workshops">
      <div className="container relative z-2 min-h-screen">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Workshops"
        />
        <BackgroundCircles/>

        <ComingSoon/>
      </div>
      <Gradient/>
      <div className="text-2xl text-center m-0">
        <span><a href="https://optima.org.in/workshops" className="bg-transparent border border-n-1/10 transition-all duration-300 hover:shadow-md hover:shadow-purple-500 p-2 rounded-md cursor-pointer" target="_blank">Visit</a></span>
        <span> our past edition.</span>
      </div>
    </Section>
  );
};

export default Workshops;
