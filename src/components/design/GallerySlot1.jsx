import React from "react";
import '../OptimaCss/Gallery.css'; // Custom CSS file for styles

const GallerySlot1 = () => {
  const images = [
    "mars1.jpg",
    "nature.jpg",
    "wall.jpg",
    "nature.jpg",
    "mars1.jpg",
    "nature.jpg",
  ];

  return (
    <div className="CollageGallery-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="CollageGallery-item"
          role="img"
          aria-label={`Gallery image ${index + 1}`}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="CollageGallery-img"
            loading="lazy"
          />
          <div className="CollageGallery-shine"></div>
        </div>
      ))}
    </div>
  );
};

export default GallerySlot1;
