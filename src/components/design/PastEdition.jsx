import React from "react";

const PastEdition = ({link}) => {
  return (
    <div className="text-sm md:text-2xl text-center mt-6 p-2">
        <a
          href={link}
          className=" p-2 rounded-md cursor-pointer"
          target="_blank"
          style={{
            background:
              "linear-gradient(125deg, rgba(58, 16, 106, 0.8), rgba(10, 10, 94, 0.95))",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          Visit Our past Edition
        </a>

    </div>
  );
};

export default PastEdition;
