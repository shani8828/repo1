import { competitions } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";
import unstopIcon from "../assets/unstop-icon.png";
import ComingSoon from "./design/ComingSoon";
import { BackgroundCircles } from "./design/Hero";
import { Gradient } from "./design/Services";

const Competitions = () => {
  document.title = "Competitions | Optima 2025";
  return (
    <Section id="competitions">
      <div className="container relative z-2">
        {/* Section Heading */}
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Competitions"
        />
        <BackgroundCircles />

        {/* <div className="flex justify-center">
          <ComingSoon link="https://2023.optima.org.in/competitions"/>
        </div> */}
        {/* Competitions Cards */}
        <div className="flex flex-wrap gap-10 mb-10 items-center justify-center">
          {competitions.map((item) => (
            <div
              className="block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.borderUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2rem]">
                <div className="flex justify-center mb-2">
                  <img
                    src={item.photoUrl}
                    alt={`${item.title} Photo`}
                    className="rounded-lg text-white filter invert brightness-110"
                    style={{ maxWidth: "350px", maxHeight: "180px" }}
                  />
                </div>

                <h5 className="h4 mb-2.5 text-center font-semibold">
                  {item.title}
                </h5>

                {item.subTitle && (
                  <h6 className="text-sm text-center mb-4 h2">
                    {item.subTitle}
                  </h6>
                )}

                <p className="body-2 mb-6 text-n-3 text-center">{item.text}</p>

                <div className="flex items-center mt-auto gap-2 md:gap-3 justify-center">
                  <a
                    href={item.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-[110%] transition transition:translate duration-200"
                  >
                    <FaWhatsapp className="w-8 h-8 md:w-12 md:h-11" color="#25D366" />

                  </a>

                  <a
                    href={item.unstopLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-[108%] transition transition:translate duration-200"
                  >
                    <img
                      src={unstopIcon}
                      alt="unstopIcon"
                      className="w-8 md:w-12"
                    />
                  </a>

                  <button 
                  className="cursor-pointer hover:scale-[105%] max-w-[50%] border border-n-2 rounded-md p-1.5 md:p-2 flex items-center transition transition:translate duration-200"
                  onClick={() => window.open(item.driveLink, "_blank", "noopener,noreferrer")}>
                    <p className="ml-auto font-code text-xs font-bold text-n-2 uppercase cursor-pointer">
                      Problem Statement
                    </p>
                  </button>
                </div>
              </div>

              {item.light && <GradientLight />}

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
      <Gradient />
    </Section>
  );
};

export default Competitions;
