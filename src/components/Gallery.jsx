
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import TopCaraousal from "./design/TopCaraousal";
import GallerySlot1 from "./design/GallerySlot1";
import GallerySlot2 from "./design/GallerySlot2";
import GuestLec from "./design/GuestLec";

const Gallery = () => {
  return (
    <Section>
      <section id="gallery" className="gallery-section">
        <div className="container mx-auto px-4">
          <Heading
            className="md:max-w-md lg:max-w-2xl text-center mb-6"
            title="Glimpses of Optima"
          />
          <div className="custom-slider-wrapper">
            <TopCaraousal />
          </div>
          <div className="mt-15">
            <h1 className="flex items-center justify-center text-xl md:text-3xl lg:text-4xl my-5">
              Guest Lecture
            </h1>
            <GuestLec />
          </div>
          <div className="mt-15">
            <h1 className="flex items-center justify-center text-xl md:text-3xl lg:text-4xl my-5">
              Workshop
            </h1>
            <GallerySlot1 />
          </div>
          <div className="mt-15">
            <h1 className="flex items-center justify-center text-xl md:text-3xl lg:text-4xl my-5">
              Competitions
            </h1>
            <GallerySlot2 />
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Gallery;
