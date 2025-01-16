import React from "react";
import Slider from "react-slick";

function CustomPaging() {
    const customImages = [
        "mars1.jpg",
        "nature.jpg",
        "wall.jpg",
      ];

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={customImages[i]}
            alt={`Thumbnail ${i + 1}`}
            style={{ width: "600px", height: "30px", objectFit: "cover" }}
            className="rounded-md shadow-sm"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {customImages.map((image, index) => (
          <div key={index} className="slide-item">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
              className="rounded-md shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomPaging;
