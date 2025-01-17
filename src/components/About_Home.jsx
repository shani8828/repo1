import { check } from "../assets";
import { collabApps, collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/About_Home";

const About_home = () => {
  return (
    <Section crosses> {/* Set background color to white */}
      <div className="container mx-auto px-4 lg:flex flex-col lg:flex-row items-center">
        
        {/* Left Section */}
        <div className="w-full max-w-[25rem] text-center lg:text-left">
          <h2 className="h2 mb-4 md:mb-8">
            Optima 2025 , Industrial and Systems Engineering
          </h2>

          <ul className="max-w-[22rem] mb-4 md:mb-5 mx-auto lg:mx-0">
            {collabContent.map((item) => (
              <li className="mb-2 py-1" key={item.id}>
                <div className="flex items-center justify-center lg:justify-start">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-4">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>

          <Button>About Us</Button>
        </div>

        {/* Right Section */}
        <div className="relative lg:ml-auto xl:w-[38rem] mt-8 lg:mt-0">
          <div className="relative left-1/2 flex w-[12rem] sm:w-[14rem] md:w-[18rem] lg:w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 sm:scale-85 md:scale-90 lg:scale-100">
            <div className="flex w-[6rem] sm:w-[8rem] md:w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[3rem] sm:w-[4rem] md:w-[6rem] aspect-square m-auto p-[0.2rem] rounded-full">
                <div className="flex items-center justify-center w-full h-full  rounded-full"> {/* Image background color set to gray-200 */}
                  <img
                    src="/logo-optima.png"
                    width={70}
                    height={70}
                    alt="logo-optima"
                    className=" p-1"  // Added white background for logo
                  />
                </div>
              </div>
            </div>

            {/* Circles with Apps */}
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                  style={{ transform: `rotate(${index * 45}deg)` }}  // Added transform inline style for rotation
                >
                  <div
                    className="relative -top-[1.6rem] flex w-[2.4rem] sm:w-[2.8rem] md:w-[3.2rem] h-[2.4rem] sm:h-[2.8rem] md:h-[3.2rem]  rounded-xl"
                    style={{ transform: `rotate(-${index * 45}deg)` }}  // Added reverse rotation to keep content upright
                  >
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-full"> {/* Background color for image container */}
                      <img
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About_home;



