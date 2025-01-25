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
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Workshops"
        />
        <BackgroundCircles/>

        <div className='flex justify-center'>
          <ComingSoon link="https://optima.org.in/workshops"/>
        </div>
      </div>
      <Gradient/>
    </Section>
  );
};

export default Workshops;
