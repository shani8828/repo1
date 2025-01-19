import React, { useState } from "react";
import brackets from "../assets/svg/Brackets";

import { BackgroundCircles, BottomLine } from "./design/Hero";
import Heading from "./Heading";
import Section from "./Section";
import { Gradient } from "./design/Services.jsx";

// Separate data into a new file: src/data/sponsorsData.js
const SPONSORS_DATA = {
  2025: {
    title: "Optima 2025 Sponsors",
    categories: {
      titleSponsor: {
        name: "Title Sponsor",
        size: "lg",
        sponsors: ["OPTYM.jpg"],
      },
      majorSponsors: {
        name: "Major Sponsors",
        size: "md",
        sponsors: ["AirIndia.png", "FlexSim.jpg"],
      },
      strategicPartners: {
        name: "Strategic Partners",
        size: "sm",
        sponsors: ["RahulCommerce.jpg", "Vicon.png"],
      },
      eventsPartners: {
        name: "Event Partners",
        size: "sm",
        sponsors: [
          "ORMAE.jpeg",
          "DCVisionVR.jpg",
          "Blue_Yonder.png",
          "Delhivery_Logo.png",
          "GFG.png",
          "Sabre.png",
        ],
      },
      merchandisePartner: {
        name: "Merchandise Partner",
        size: "sm",
        sponsors: ["OwlPrints.png"],
      },
      mediaPartners: {
        name: "Media Partners",
        size: "sm",
        sponsors: ["CampusVarta.png", "WomansEra.png"],
      },
    },
  },
  2023: {
    title: "Optima 2023 Sponsors",
    categories: {
      titleSponsor: {
        name: "Title Sponsor",
        size: "lg",
        sponsors: ["OPTYM.jpg"],
      },
      majorSponsors: {
        name: "Major Sponsors",
        size: "md",
        sponsors: ["AirIndia.png", "FlexSim.jpg"],
      },
      strategicPartners: {
        name: "Strategic Partners",
        size: "sm",
        sponsors: ["RahulCommerce.jpg", "Vicon.png"],
      },
      eventsPartners: {
        name: "Event Partners",
        size: "sm",
        sponsors: [
          "ORMAE.jpeg",
          "DCVisionVR.jpg",
          "Blue_Yonder.png",
          "Delhivery_Logo.png",
          "GFG.png",
          "Sabre.png",
        ],
      },
      merchandisePartner: {
        name: "Merchandise Partner",
        size: "sm",
        sponsors: ["OwlPrints.png"],
      },
      mediaPartners: {
        name: "Media Partners",
        size: "sm",
        sponsors: ["CampusVarta.png", "WomansEra.png"],
      },
    },
  },
  previous: {
    title: "Previous Sponsors",
    sponsors: [
      "ACC.png",
      "AIBH.png",
      "Allied_publishers.png",
      "GE_HealthCare.png",
      "RP_Industrial_Consultant.png",
      "Springer.png",
      "SR_Srinivasan.jpg",
      "TATA.png",
      "Total_Library_Solution.png",
    ],
  },
};

const imgToUrl = {
  "ACC.png": "https://www.acclimited.com/",
  "AIBH.png": "https://www.aibh.in/",
  "Allied_publishers.png": "https://www.alliedpublishers.com/",
  "GE_HealthCare.png": "https://www.gehealthcare.com/",
  "RP_Industrial_Consultant.png": "https://www.rpic.in/",
  "Springer.png": "https://www.springer.com/",
  "SR_Srinivasan.jpg": "https://www.srsrinivasan.com/",
  "TATA.png": "https://www.tata.com/",
  "Total_Library_Solution.png": "https://tlsgroup.co.in/",
  "OPTYM.jpg": "https://www.optym.com/",
  "AirIndia.png": "https://www.airindia.in/",
  "FlexSim.jpg": "https://www.flexsim.com/",
  "RahulCommerce.jpg": "http://rahulcom.com/",
  "Vicon.png": "https://www.vicon.com/",
  "ORMAE.jpeg": "https://www.ormae.com/",
  "DCVisionVR.jpg": "https://dcvision.in/",
  "Blue_Yonder.png": "https://www.blueyonder.com/",
  "Delhivery_Logo.png": "https://www.delhivery.com/",
  "GFG.png": "https://www.geeksforgeeks.org/",
  "Sabre.png": "https://www.sabre.com/",
  "OwlPrints.png": "https://www.owlprints.in/",
  "CampusVarta.png": "https://www.campusvarta.com/",
  "WomansEra.png": "https://www.womansera.com/",
};

// Component for sponsor category section
const SponsorCategory = ({ name, sponsors, size = "sm" }) => {
  const sizeClasses = {
    sm: "max-w-[18rem] p-4",
    md: "max-w-[32rem] p-6",
    lg: "max-w-[56rem] p-4",
  };

  return (
    <div className="mb-10">
      <h2
        className={`font-bold mb-6 text-center ${
          size === "lg" ? "text-4xl mt-12" : "text-2xl"
        }`}
      >
        {name}
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {sponsors.map((spons) => (
          <a
            key={spons}
            href={imgToUrl[spons]}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={`relative rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300 ${sizeClasses[size]} group`}
            >
              <SponsCard
                imageUrl={`/assets/spons/spons-23/${spons}`}
                size={size}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

// Updated SponsCard component
const SponsCard = ({ imageUrl, size = "sm" }) => {
  const heightClasses = {
    sm: "h-40",
    md: "h-56 md:h-72",
    lg: "h-[300px] md:h-[500px]",
  };

  return (
    <div
      className={`${heightClasses[size]} w-full bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden relative z-10`}
    >
      <img
        src={imageUrl}
        alt="Sponsor"
        className="h-full w-auto object-contain p-4"
      />
    </div>
  );
};

// Main Spons component
const Spons = () => {
  const [activeTab, setActiveTab] = useState("2025");
  const tabs = [
    { id: "previous", label: "Previous Sponsors" },
    { id: "2023", label: "Optima 2023 Sponsors" },
    { id: "2025", label: "Optima 2025 Sponsors" },
  ];

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddingss
      id="spons"
    >
      <div className="relative z-10">
        <BackgroundCircles />
      </div>
      <div className="container mx-auto relative z-20">
        <Heading tag="" title="Our Esteemed Sponsors" />

        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              label={tab.label}
            />
          ))}
        </div>

        {activeTab === "previous" ? (
          <div className="flex flex-wrap gap-10 mb-10 items-center justify-center">
            {SPONSORS_DATA.previous.sponsors.map((spons) => (
              <div
                key={spons}
                className="relative p-4 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300 md:max-w-[18rem] group"
              >
                <SponsCard imageUrl={`/assets/spons/spons-prev/${spons}`} />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-10">
            {Object.entries(SPONSORS_DATA[activeTab].categories).map(
              ([key, category]) => (
                <SponsorCategory
                  key={key}
                  name={category.name}
                  sponsors={category.sponsors}
                  size={category.size}
                />
              )
            )}
          </div>
        )}
      </div>

      <Gradient />
    </Section>
  );
};

// Tab button component
const TabButton = ({ active, onClick, label }) => (
  <div
    className={`tagline flex items-center cursor-pointer ${
      active ? "scale-125 p-4" : ""
    }`}
    onClick={onClick}
  >
    {brackets("left")}
    <div className={`mx-3 text-n-3 ${active ? "font-bold text-white" : ""}`}>
      {label}
    </div>
    {brackets("right")}
  </div>
);

export default Spons;
