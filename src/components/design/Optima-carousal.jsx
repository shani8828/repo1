"use client";

import { useState, useEffect } from "react";
import { Gradient } from "./Hero";

const CarouselComponent = () => {
  // Array of image URLs (you can replace these with your own images)
  const images = [
    "/nature.jpg", // Image 1
    "/wall.jpg", // Image 2
    "/mars1.jpg", // Image 3
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update image index every 3 seconds
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
      <div className="relative bg-n-8 rounded-[1rem]">
        {/* This is the outer parent div that maintains the aspect ratio */}
        <div
          className="relative w-full"
          style={{
            // Aspect ratio of 33/40 or 490/1024
            paddingTop: "45.68%", // 490/1024 * 100
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full rounded-[1rem] transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover", 
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat", 
            }}
          />
        </div>
      </div>
      {/* Add gradient if needed */}
      <Gradient />
    </div>
  );
};

export default CarouselComponent;
