import React, { useState } from 'react';
import Heading from './Heading';
import Section from './Section';

const prevSpons = [
  'ACC.png',
  'AIBH.png',
  'Allied_publishers.png',
  'GE_HealthCare.png',
  'RP_Industrial_Consultant.png',
  'Springer.png',
  'SR_Srinivasan.jpg',
  'TATA.png',
  'Total_Library_Solution.png',
];

const imgToUrl = {
  'ACC.png' : "https://www.acclimited.com/",
  'AIBH.png': "https://www.aibh.in/",
  'Allied_publishers.png': "https://www.alliedpublishers.com/",
  'GE_HealthCare.png' :"https://www.gehealthcare.com/",
  'RP_Industrial_Consultant.png': "https://www.rpic.in/",
  'Springer.png': "https://www.springer.com/",
  'SR_Srinivasan.jpg': "https://www.srsrinivasan.com/",
  'TATA.png': "https://www.tata.com/",
  'Total_Library_Solution.png': "https://tlsgroup.co.in/",
  'OPTYM.jpg': "https://www.optym.com/",
  'AirIndia.png': "https://www.airindia.in/",
  'FlexSim.jpg': "https://www.flexsim.com/",
  'RahulCommerce.jpg': "http://rahulcom.com/",
  'Vicon.png': "https://www.vicon.com/",
  'ORMAE.jpeg': "https://www.ormae.com/",
  'DCVisionVR.jpg': "https://dcvision.in/",
  'Blue_Yonder.png': "https://www.blueyonder.com/",
  'Delhivery_Logo.png': "https://www.delhivery.com/",
  'GFG.png': "https://www.geeksforgeeks.org/",
  'Sabre.png': "https://www.sabre.com/",
  'OwlPrints.png': "https://www.owlprints.in/",
  'CampusVarta.png': "https://www.campusvarta.com/",
  'WomansEra.png': "https://www.womansera.com/",

}

const spons23 = {
  titleSponsor: ['OPTYM.jpg'],
  majorSponsors: ['AirIndia.png', 'FlexSim.jpg'],
  strategicPartners: ['RahulCommerce.jpg', 'Vicon.png'],
  eventsPartners: [
    'ORMAE.jpeg',
    'DCVisionVR.jpg',
    'Blue_Yonder.png',
    'Delhivery_Logo.png',
    'GFG.png',
    'Sabre.png',
  ],
  merchandisePartner: ['OwlPrints.png'],
  mediaPartners: ['CampusVarta.png', 'WomansEra.png'],
};

// Gradient Background Component
const GradientLight = () => {
  return (
    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 pointer-events-none opacity-50" />
  );
};

const Spons = () => {
  const [activeTab, setActiveTab] = useState('prevSpons');

  const tabs = [
    { id: 'prevSpons', label: 'Previous Sponsors' },
    { id: 'spons23', label: 'Optima 2023 Sponsors' },
  ];

  return (
    <Section id="sponsors">
      <div className="container mx-auto relative z-2">
        <Heading
          className="text-center mb-8 md:max-w-md lg:max-w-2xl mx-auto"
          title="Our Esteemed Sponsors"
        />

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-2 rounded-lg text-sm font-semibold ${
                activeTab === tab.id
                  ? 'bg-[#4a1a54] text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors duration-200`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'prevSpons' && (
          <div className="flex flex-wrap gap-10 mb-10 items-center justify-center">
            {prevSpons.map((spons, index) => (
              <a  href={imgToUrl[spons]} target="_blank" rel="noreferrer" >

              <div
                className="relative p-4 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300 md:max-w-[18rem] group"
                key={spons}
                >
                {index % 2 === 0 && <GradientLight />}
                <SponsCard imageUrl={`/assets/spons/spons-prev/${spons}`} />
              </div>
                </a>
            ))}
          </div>
        )}

        {activeTab === 'spons23' && (
<div className="space-y-10">
  {/* Title Sponsor */}
  <div className="text-center">
    <h2 className="text-4xl font-bold mt-12 mb-8">Title Sponsor</h2>
    <div className="flex justify-center">
      {spons23.titleSponsor.map((spons) => (
        <a href={imgToUrl[spons]} target="_blank" rel="noreferrer">
        <div
          className="relative p-4 rounded-lg shadow-2xl bg-white hover:scale-105 transition-transform duration-300 max-w-[56rem] group"
          key={spons}
        >
          {/* <GradientLight /> */}
      <div className="h-[500px] w-full bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden relative z-10">
      <img
        src={`/assets/spons/spons-23/${spons}`}
        alt="Sponsor"
        className="h-full w-auto object-contain p-4"
      />
    </div>
         
        </div>
        </a>
      ))}
    </div>
  </div>

  {/* Major Sponsors */}
  <div>
    <h2 className="text-4xl font-bold mb-6 text-center">Major Sponsors</h2>
    <div className="flex flex-wrap gap-8 justify-center">
      {spons23.majorSponsors.map((spons) => (
        <a href={imgToUrl[spons]} target="_blank" rel="noreferrer">

        <div
          className="relative p-6 rounded-lg shadow-xl bg-white hover:scale-105 transition-transform duration-300 max-w-[32rem] group"
          key={spons}
          >
          <GradientLight />
            <div className="h-72 w-full bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden relative z-10">
      <img
        src={`/assets/spons/spons-23/${spons}`} 
        alt="Sponsor"
        className="h-full w-auto object-contain p-4"
        />
    </div>
          {/* <SponsCard imageUrl={`/assets/spons/spons-23/${spons}`} /> */}
        </div>
        </a>
      ))}
    </div>
  </div>

  {/* Strategic Partners */}
  <div>
    <h2 className="text-2xl font-bold mb-6 text-center">Strategic Partners</h2>
    <div className="flex flex-wrap gap-6 justify-center">
      {spons23.strategicPartners.map((spons) => (
        <a href={imgToUrl[spons]} target="_blank" rel="noreferrer">
        <div
          className="relative p-5 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300 max-w-[20rem] group"
          key={spons}
        >
          <SponsCard imageUrl={`/assets/spons/spons-23/${spons}`} />
        </div>
        </a>
      ))}
    </div>
  </div>

  {/* Events Partners */}
  <div>
    <h2 className="text-2xl font-bold mb-6 text-center">Event Partners</h2>
    <div className="flex flex-wrap gap-6 justify-center">
      {spons23.eventsPartners.map((spons) => (
        <a href={imgToUrl[spons]} target="_blank" rel="noreferrer">
        <div
          className="relative p-4 rounded-lg shadow-md bg-white hover:scale-105 transition-transform duration-300 max-w-[18rem] group"
          key={spons}
        >
          <SponsCard imageUrl={`/assets/spons/spons-23/${spons}`} />
        </div>
        </a>
      ))}
    </div>
  </div>

  {/* Merchandise Partner */}
  <div>
    <h2 className="text-2xl font-bold mb-6 text-center">Merchandise Partner</h2>
    <div className="flex justify-center">
      {spons23.merchandisePartner.map((spons) => (
        <a href={imgToUrl[spons]} target="_blank" rel="noreferrer">
        <div
          className="relative p-4 rounded-lg shadow-md bg-white hover:scale-105 transition-transform duration-300 max-w-[18rem] group"
          key={spons}
        >
          <SponsCard imageUrl={`/assets/spons/spons-23/${spons}`} />
        </div>
        </a>
      ))}
    </div>
  </div>

  {/* Media Partners */}
  <div>
    <h2 className="text-2xl font-bold mb-6 text-center">Media Partners</h2>
    <div className="flex flex-wrap gap-6 justify-center">
      {spons23.mediaPartners.map((spons) => (
        <a href={imgToUrl[spons]} target="_blank" rel="noreferrer">
        <div
          className="relative p-4 rounded-lg shadow-md bg-white hover:scale-105 transition-transform duration-300 max-w-[16rem] group"
          key={spons}
        >
          <SponsCard imageUrl={`/assets/spons/spons-23/${spons}`} />
        </div>
        </a>
      ))}
    </div>
  </div>
</div>

        )}
      </div>
    </Section>
  );
};

export default Spons;

const SponsCard = ({ imageUrl }) => {
  return (
    <div className="h-40 w-full bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden relative z-10">
      <img
        src={imageUrl}
        alt="Sponsor"
        className="h-full w-auto object-contain p-4"
      />
    </div>
  );
};

