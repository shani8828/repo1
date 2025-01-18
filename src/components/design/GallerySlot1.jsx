import React from "react";
import '../OptimaCss/Gallery.css'; // Custom CSS file for styles
import CollageGallery from "./CollageGallery";

const GallerySlot1 = () => {
  const images = [
    "mars1.jpg",
    "nature.jpg",
    "wall.jpg",
    "nature.jpg",
    "mars1.jpg",
    "nature.jpg",
    "mars1.jpg",
  ];

  return (
    <CollageGallery images={images} />
  );
};

export default GallerySlot1;
