import React from "react";

const CollageGallery = ({ images }) => {
  // Function to determine image size class based on position and total count
  const getImageSize = (index, totalImages) => {
    // For very few images, make them larger
    if (totalImages <= 2) return "wide";
    
    // For 3-5 images, alternate between wide and medium
    if (totalImages <= 5) {
      return index === 0 ? "wide" : "medium";
    }
    
    // For more images, create a dynamic pattern
    const position = index % 6;
    if (position === 0) return "wide";
    if (position === 1 || position === 2) return "medium";
    return "narrow";
  };

  // Function to adjust the last row to prevent orphaned images
  const adjustLastRow = (index, totalImages) => {
    const itemsInLastRow = totalImages % 3;
    if (itemsInLastRow === 0) return getImageSize(index, totalImages);
    
    // If we're in the last row and it's not full
    if (index >= totalImages - itemsInLastRow) {
      return itemsInLastRow === 1 ? "wide" : "medium";
    }
    
    return getImageSize(index, totalImages);
  };

  return (
    <div className="CollageGallery-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`CollageGallery-item ${adjustLastRow(index, images.length)}`}
          role="img"
          aria-label={`Gallery image ${index + 1}`}
        >
          <img
            src={typeof image === 'string' ? image : image.src}
            alt={typeof image === 'string' ? `Gallery image ${index + 1}` : image.alt || `Gallery image ${index + 1}`}
            className="CollageGallery-img"
            loading="lazy"
          />
          <div className="CollageGallery-shine"></div>
        </div>
      ))}
    </div>
  );
};

export default CollageGallery;