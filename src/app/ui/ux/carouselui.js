import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./uiux.css"; // Ensure this file includes necessary styles
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const images = [
  "/images/some-work/Group 522.jpg",
  "/images/some-work/Group 525.jpg",
  "/images/some-work/image 32.jpg",
  "/images/some-work/image 34.jpg",
];

export const ResponsiveSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 4);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 4);
    }
  };




  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 8}%)` ,      }} // Adjusted for smaller images
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 sm:w-1/3 md:w-1/3">
            {" "}
            {/* 33.33% width for each image */}
            <img
              src={src}
              alt={`carousel-image-${index}`}
              className="lg:w-full sm:w-full h-auto object-cover p-5"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Previous Slide"
        disabled={currentIndex === 0}
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full ${
          currentIndex === images.length - 1
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        aria-label="Next Slide"
        disabled={currentIndex === images.length - 1}
      >
        <FaArrowRight />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {/* {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? 'bg-black' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))} */}
      </div>
    </section>
  );
};
