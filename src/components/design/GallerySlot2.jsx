import React from "react";
import '../OptimaCss/Gallery.css'; // Custom CSS file for styles
import { GradientLight } from "./Benefits";
import CollageGallery from "./CollageGallery";

const GallerySlot2 = () => {
  const images = [
    "/GalleryPhotos/competitions/c1.jpg",
    "/GalleryPhotos/competitions/c2.jpg",
    "/GalleryPhotos/competitions/c3.jpg",
    "/GalleryPhotos/competitions/c4.jpg",
    "/GalleryPhotos/competitions/c5.jpg",
    "/GalleryPhotos/competitions/c6.jpg",
    "/GalleryPhotos/competitions/c7.jpg",
    "/GalleryPhotos/competitions/c8.jpg",
  ];

  return (
    <CollageGallery images={images}/>
  );
};

export default GallerySlot2;
