import React from "react";
import '../OptimaCss/Gallery.css'; // Custom CSS file for styles
import { GradientLight } from "./Benefits";
import CollageGallery from "./CollageGallery";

const GallerySlot2 = () => {
  const images = [
    "mars1.jpg",
    "nature.jpg",
    "mars1.jpg",
    "wall.jpg",
    "wall.jpg",
    "nature.jpg",
    "mars1.jpg",
    "wall.jpg",
  ];

  return (
    <CollageGallery images={images}/>
  );
};

export default GallerySlot2;
