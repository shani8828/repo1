import React from "react";
import '../OptimaCss/Gallery.css'; // Custom CSS file for styles
import CollageGallery from "./CollageGallery";

const GallerySlot1 = () => {
  const images = [
    "/GalleryPhotos/workshops/w5.jpg",
    "/GalleryPhotos/workshops/w3.jpg",
    "/GalleryPhotos/workshops/w4.jpg",
    "/GalleryPhotos/workshops/w1.jpg",
    "/GalleryPhotos/workshops/w2.jpg",
  ];

  return (
    <CollageGallery images={images} />
  );
};

export default GallerySlot1;
