import React from "react";
import { grid } from "../assets";
import Heading from "./Heading";
import Section from "./Section";
import { Gradient } from "./design/Roadmap";



const About = () => {
  return (
    <Section className="overflow-hidden" id="about">
      <div className="container md:pb-10">
        <Heading
          tag="Welcome to Optima"
          title="IIT Kharagpur's Techno-Optimization Fest"
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          <div className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient">
            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div className="absolute top-0 left-0 max-w-full">
                <img
                  className="w-full"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </div>
              <div className="relative z-1">
                <div className="mb-10 -my-10 -mx-15 p-10">
                  <img
                    className="w-[80%] mx-auto"
                    src="/assets/optima.png"
                    width={428}
                    height={326}
                    alt={"gdg"}
                  />
                </div>
                <h4 className="h4 mb-4">
                  Optima - IIT Kharagpur's Techno-Optimization Fest
                </h4>
                <p className="body-2 text-n-4">
                  A nexus of innovation, problem-solving, and interdisciplinary
                  collaboration, Optima is orchestrated by the esteemed
                  Department of Industrial and Systems Engineering. With a focal
                  point on technology-optimization synergy, Optima addresses
                  real-world challenges across sectors like supply chain
                  management, production line optimization, and more. The event,
                  from 6th - 8th October 2023, offers a rich mix of
                  competitions, workshops, seminars, and interactive sessions,
                  driving sustainable advancements, efficiencies, and
                  productivity.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient">
            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div className="absolute top-0 left-0 max-w-full">
                <img
                  className="w-full"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </div>
              <div className="relative z-1">
                <div className="mb-10 -my-10 -mx-15 p-10">
                  <img
                    className="w-[80%] mx-auto"
                    src="/assets/ise.png"
                    width={628}
                    height={426}
                    alt={"gdg"}
                  />
                </div>
                <h4 className="h4 mb-4">
                  Department of Industrial and Systems Engineering - IIT
                  Kharagpur
                </h4>
                <p className="body-2 text-n-4">
                  With its inception in 1973, the Department of Industrial and
                  Systems Engineering at IIT Kharagpur embarked on a remarkable
                  journey that has left an indelible mark on the landscape of
                  engineering education and research.
                  <br />
                  The Department caters to a broad spectrum of domains,
                  showcasing its versatility and applicability in fields like:
                  Data Analytics, Quality Engineering and Process
                  Transformations, Information Systems and E-Business, Logistics
                  and Supply Chain Management, System Thinking and Policy
                  Planning, Human Factors Engineering and Ergonomics, Operations
                  Research and Optimization, Safety Analytics and Virtual
                  Reality
                </p>
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default About;
