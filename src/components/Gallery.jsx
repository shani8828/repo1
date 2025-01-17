import { events } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import TopCaraousal from "./design/CustomPaging";
import GallerySlot1 from "./design/GallerySlot1";
import GallerySlot2 from "./design/GallerySlot2";

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
        <div className="mt-15">
          <h1 className="flex items-center justify-center text-xl md:text-3xl lg:text-4xl my-5">Slot 1</h1>
          <GallerySlot1/>
        </div>
        <div className="mt-15">
          <h1 className="flex items-center justify-center text-xl md:text-3xl lg:text-4xl my-5">Slot 2</h1>
          <GallerySlot2/>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
