import { workshops } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { motion } from "framer-motion";
import { Gradient } from "./design/Services";
import { BackgroundCircles } from './design/Hero';

const Workshops = () => {
  document.title = "Workshops | Optima 2025";

  // Animation variants for the cards
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: -50,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <Section id="workshops">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Workshops"
        />
        <BackgroundCircles/>

        <div className="flex flex-col gap-10 mt-10">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              className="flex flex-col md:flex-row items-center gap-8 p-6 bg-n-8 border border-n-6 rounded-2xl"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              {/* Left Side: Workshop Card (Photo) */}
              <div className="flex-shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Workshop Content (Heading, Description, etc.) */}
              <div className="flex-1 w-full md:w-2/3 text-center md:text-left">
                <h3 className="h3 mb-4">{workshop.title}</h3>
                <p className="body-2 text-n-4 mb-4">{workshop.text}</p>

                {/* Additional Fields (if any) */}
                {/* <div className="flex flex-wrap gap-4">
                  {workshop.borderUrl && (
                    <div className="flex items-center gap-2">
                      <span className="text-n-4">Border:</span>
                      <img
                        src={workshop.borderUrl}
                        alt="Border"
                        className="w-8 h-8"
                      />
                    </div>
                  )}
                  {workshop.iconUrl && (
                    <div className="flex items-center gap-2">
                      <span className="text-n-4">Icon:</span>
                      <img
                        src={workshop.iconUrl}
                        alt="Icon"
                        className="w-8 h-8"
                      />
                    </div>
                  )}
                  {workshop.backgroundUrl && (
                    <div className="flex items-center gap-2">
                      <span className="text-n-4">Background:</span>
                      <img
                        src={workshop.backgroundUrl}
                        alt="Background"
                        className="w-8 h-8"
                      />
                    </div>
                  )}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Gradient />
    </Section>
  );
};

export default Workshops;