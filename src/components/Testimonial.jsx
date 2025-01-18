import React from "react";
import {BottomLine} from "./design/Hero";
const Testimonial = () => {
  return (
    <section className="pt-[1rem] -mt-[2rem] mb-2 ml-4">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-150 sm:text-4xl text-center">
            Testimonial
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/** Example review blocks */}
          {reviews.map((review, index) => (
            <ReviewBlock key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewBlock = ({ review }) => {
  return (
    <blockquote className="flex h-full flex-col justify-between p-6 shadow-sm sm:p-8">
      <div>
        <div className="flex gap-0.5 text-purple-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <div className="mt-4">
          <p className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-200 bg-clip-text text-transparent sm:text-3xl">
            {review.title}
          </p>
          <p className="mt-4 leading-relaxed text-gray-150">{review.content}</p>
        </div>
      </div>
      <footer className="mt-4 text-sm font-medium text-gray-500 sm:mt-6">
        &mdash; {review.author}
      </footer>
      <BottomLine/>
    </blockquote>
  );
};

const StarIcon = () => (
  <svg
    className="size-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg>
);

// Example data for reviews
const reviews = [
  {
    title: "Stayin' Alive",
    content:
      "No, Rose, they are not breathing. And they have no arms or legs… Where are they? If we come across somebody with no arms or legs, do we bother resuscitating them?",
    author: "Michael Scott",
  },
  {
    title: "Amazing Service!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat est at nunc vestibulum, ac lacinia velit sollicitudin.",
    author: "Jim Halpert",
  },
  {
    title: "Would recommend",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quaerat!",
    author: "Pam Beesly",
  },
  {
    title: "Would recommend",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quaerat!",
    author: "Pam Beesly",
  },
  {
    title: "Would recommend",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quaerat!",
    author: "Pam Beesly",
  },
  {
    title: "Would recommend",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quaerat!",
    author: "Pam Beesly",
  },
];

export default Testimonial;

