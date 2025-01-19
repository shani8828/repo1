import React from "react";
import '../OptimaCss/Gallery.css';

const guestLectures = [
  {
    id: 1,
    image: "/GalleryPhotos/guest-lecture-images/g1.jpg",
    title: "Innovative Technology",
    description: "Dr. Smith discussed cutting-edge advancements in AI.",
  },
  {
    id: 2,
    image: "/GalleryPhotos/guest-lecture-images/g2.jpg",
    title: "Sustainability Practices",
    description: "Ms. Johnson shared insights on green energy solutions.",
  },
  {
    id: 3,
    image: "/GalleryPhotos/guest-lecture-images/g3.jpg",
    title: "Business Strategy",
    description: "Mr. Brown elaborated on modern business models.",
  },
];

const GuestLec = () => {
  return (
    <div className="Guest-container mx-auto px-4 sm:px-8">
      <div className="Guest-grid h-[600px] md:h-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {guestLectures.map((lec) => (
          <div
            key={lec.id}
            className="Guest-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={lec.image}
              alt={lec.title}
              className="Guest-img w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="Guest-overlay absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-400">
              <div className="Guest-text absolute bottom-4 px-2 text-white">
                <h3 className="text-xl font-bold">{lec.title}</h3>
                <p className="text-sm mt-2">{lec.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestLec;
