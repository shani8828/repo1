import React from "react";
import "../components/OptimaCss/Timeline.css";
import core5 from "../assets/Team/untitled design1.png";

const Day0 = () => {
  return (
    <div className="tl tl-day0">
      <div className="tl-container left-container">
        <img src={core5} alt="" />
        <div className="tl-text-box">
          <h2 className="text-xl bg-gradient-to-r from-orange-500 to-red-300 bg-clip-text text-transparent">Inauguration Ceremony</h2>
          <small>04:30 PM</small>
          <a href="https://maps.app.goo.gl/czHQcdhZBnsAUXBd6" target="_blank" className="hover:text-purple-500 transition-all duration-300">
            Netaji Auditorium
          </a>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="tl-container right-container">
        <img src={core5} alt="" />
        <div className="tl-text-box">
          <h2 className="text-xl bg-gradient-to-r from-orange-500 to-red-300 bg-clip-text text-transparent">HackTank Mixer</h2>
          <small>09:30 PM</small>
          <a href="https://maps.app.goo.gl/USTHoae3Dnx4t4Nj9" target="_blank" className="hover:text-purple-500 transition-all duration-300">
            Dept. of Industrial & Systems Engg.
          </a>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      {/* <div className="tl-container left-container">
        <img src="/tl/MK_Tiwari.jpeg" alt="" />
        <div className="tl-text-box">
          <h2 className="text-xl bg-gradient-to-r from-orange-500 to-red-300 bg-clip-text text-transparent">Talk by Prof. M.K.Tiwari</h2>
          <small>8 PM</small>
          <a href="https://maps.app.goo.gl/5fRduL1ocaE75UKPA" target="_blank" className="hover:text-purple-500 transition-all duration-300">
            Kalidas Auditorium
          </a>
          <span className="left-container-arrow"></span>
        </div>
      </div> */}
    </div>
  );
};

export default Day0;
