import { events } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import TopCaraousal from "./design/CustomPaging";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section py-10">
      <div className="container mx-auto px-4">
      <Heading
          className="md:max-w-md lg:max-w-2xl text-center mb-6"
          title="Explore Our Stunning Gallery"
        />
        <div className="custom-slider-wrapper">
          <TopCaraousal />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
