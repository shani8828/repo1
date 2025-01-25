import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faPersonPraying,
} from "@fortawesome/free-solid-svg-icons";
import "../OptimaCss/ComingSoon.css";
import AnimationComingSoon from "./AnimationComingSoon";
const ComingSoon = () => {
  return (
    <div className=" bg-white/20 border border-n-1/10 flex flex-col justify-center items-center rounded-3xl gap-5 p-3">
      <h1 className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-orange-500 to-red-200 bg-clip-text text-transparent">Coming Soon...</h1>
      <div>
        <AnimationComingSoon />
      </div>
      <p className="decoration-indigo-50 text-center">
        We appreciate your patience{" "}
        <FontAwesomeIcon
          icon={faPersonPraying}
          flip="horizontal"
          style={{ color: "#9333ea" }}
        />
      </p>
      <p className="text-center">
        Stay tuned! Something
        <span className="text-purple-500 font-semibold">
          {" "}
          optimized{" "}
          <FontAwesomeIcon
            icon={faWandMagicSparkles}
            fade
            style={{ color: "#9333ea" }}
          />{" "}
        </span>
        is yet to come.
      </p>
    </div>
  );
};

export default ComingSoon;
