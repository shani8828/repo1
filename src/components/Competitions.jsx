import { competitions } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";
import unstopIcon from "../assets/unstop-icon.png";

const Competitions = () => {
  return (
    <Section id="competitions">
      <div className="container relative z-2">
        {/* Section Heading */}
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Competitions"
        />

        {/* Competitions Cards */}
        <div className="flex flex-wrap gap-10 mb-10 items-center justify-center">
          {competitions.map((item) => (
            <div
              className="block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] hover:scale-[103%] transition-all duration-300"
              style={{
                backgroundImage: `url(${item.borderUrl})`,
              }}
              key={item.id}
            >
              {/* Card Content */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2rem]">
                {/* Display Photo */}
                <div className="flex justify-center mb-2">
                  <img
                    src={item.photoUrl}
                    alt={`${item.title} Photo`}
                    className="rounded-lg text-white filter invert brightness-110"
                    style={{ maxWidth: "350px", maxHeight: "180px" }}
                  />
                </div>

                {/* Title */}
                <h5 className="h4 mb-2.5 text-center font-semibold">
                  {item.title}
                </h5>

                {/* Subtitle */}
                {item.subTitle && (
                  <h6 className="text-sm text-center mb-4 h2">
                    {item.subTitle}
                  </h6>
                )}

                {/* Description */}
                <p className="body-2 mb-6 text-n-3 text-center">{item.text}</p>

                {/* Action Buttons */}
                <div className="flex items-center mt-auto gap-3 justify-between">
                  {/* WhatsApp Icon */}
                  <a
                    href={item.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaWhatsapp size={40} color="#25D366" />
                  </a>

                  {/* Unstop Icon */}
                  <a
                    href={item.unstopLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <img
                      src={unstopIcon}
                      alt="unstopIcon"
                      className="w-10 sm:w-10 md:w-10 lg:w-10"
                    />
                  </a>

                  {/* Problem Statement Button */}
                  <Button className="hover:cursor-pointer">
                    <p className="ml-auto font-code text-xs font-bold text-n-2 uppercase cursor-pointer">
                      Problem Statement
                    </p>
                  </Button>
                </div>
              </div>

              {/* Gradient Light Effect */}
              {item.light && <GradientLight />}

              {/* Hover Effect */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.backgroundUrl && (
                    <img
                      src={item.backgroundUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{ maxWidth: "300px", maxHeight: "250px" }}
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Competitions;