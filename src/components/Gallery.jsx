import { events } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import CustomPaging from "./design/CustomPaging";
import '../css/Gallery.css'

const Gallery = () => {
  return (
    <Section id="gallery" className="gallery-section py-10">
      <div className="container mx-auto px-4">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mb-6"
          title="Explore Our Stunning Gallery"
        />
        <div className="custom-slider-wrapper bg-gray-100 p-6 rounded-lg shadow-md">
          <CustomPaging />
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
