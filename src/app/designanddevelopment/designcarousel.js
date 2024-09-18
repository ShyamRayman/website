import React, { useState, useEffect } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import BeforeAfterSlider from "../ui/ux/beforeafter";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../../app/globals.css";
import Link from "next/link";

const slides = [
  {
    label: "UI/UX Design Solutions",
    description:
      "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
  },
  {
    label: "Creative solution",
    description:
      "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
  },
];

const DesignCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative overflow-hidden ms-10"
      style={{ width: "50vw", height: "60vh" }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative"
            style={{ height: "50px" }}
          >
            <p>{slide.description}</p>
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-gray-800 via-transparent to-transparent text-white">
              <h5 className="text-xl font-bold mb-2">{slide.label}</h5>
              <p className="text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        aria-label="Previous slide"
      >
        &lt;
      </button> */}
      <button
        onClick={nextSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2text-white p-2 rounded-full "
        aria-label="Next slide"
        style={{ fontSize: "40px" }}
      >
        <FaCircleChevronRight />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignCarousel;

// ui/ux design slider

const slidess = [
  {
    component: <BeforeAfterSlider />,
    label: "Mobile UI/UX",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    component: <BeforeAfterSlider />,
    label: "Mobile UI/UX",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    component: <BeforeAfterSlider />,
    label: "Mobile UI/UX",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const DesignCarousel2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidess.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidess.length) % slidess.length);
  };

  return (
    <div className="relative overflow-hidden w-full lg:h-[80vh] bg-white">
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slidess.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex items-center justify-center"
            >
              <div className="relative w-full flex flex-col md:flex-row items-center justify-center p-4 uiux-height">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  {/* Check if component or imgSrc exists */}
                  {slide.component ? (
                    slide.component
                  ) : (
                    <img
                      src={slide.imgSrc}
                      alt={slide.label}
                      className="w-75  object-cover max-w-full lg:max-h-[100vh] md:max-h-[100vh]"
                    />
                  )}
                </div>
                <div className="w-full md:w-1/2 text-left md:text-left p-1 md:p-8 relative bottom-20">
                  <h5 className="text-2xl md:text-3xl text-left font-bold mb-4">
                    {slide.label}
                  </h5>
                  <p className="text-base md:text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-left flex align-items-center relative">
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full  ${
              currentSlide === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            aria-label="Previous slide"
            style={{ fontSize: "1.6rem", marginLeft: "3rem" }}
            disabled={currentSlide === 0}
          >
            <FaCircleChevronLeft />
          </button>
        </div>

        <div className="carousel-right flex align-items-center">
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full  ${
              currentSlide === slidess.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            aria-label="Next slide"
            style={{ fontSize: "1.6rem", marginRight: "3rem" }}
            disabled={currentSlide === slidess.length - 1}
          >
            <FaCircleChevronRight />
          </button>
        </div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slidess.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// const slidesss = [
//   {
//     backgroundtext: "UI/UX",
//     imgSrc: "/images/service-section/Group 686.png",
//     label: "UI/UX Design Solutions",
//     description:
//       "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
//   },
//   {
//     backgroundtext: "UI/UX",
//     imgSrc: "/images/service-section/Group 686.png",
//     label: "Creative Solution",
//     description:
//       "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
//   },
// ];

// export const DesignCarousel3 = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slidesss.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slidesss.length) % slidesss.length);
//   };

//   return (
//     <div className="relative overflow-hidden w-full h-auto bg-white">
//       <div className="md:container relative">
//         <div
//           className="flex transition-transform duration-500 ease-in-out w-full h-full"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slidesss.map((slide, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-full h-full flex items-center justify-center relative"
//             >
//               <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
//                 {/* Background text */}
//                 <h1 className="text-gray-200 text-4xl md:text-8xl lg:text-9xl font-bold z-0 select-none relative lg:right-80 lg:bottom-32 xl:right-80 xl:bottom-40 md:right-48 md:bottom-28 backgroundtext">
//                   {slide.backgroundtext}
//                 </h1>
//               </div>
//               <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-0 md:p-8 z-10 overflow-hidden">
//                 <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
//                   <img
//                     src={slide.imgSrc}
//                     alt={slide.label}
//                     className="w-full h-auto object-cover max-w-full max-h-[50vh] md:max-h-[60vh]"
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2 text-center md:text-left p-1 ">
//                   <h5 className="sm:text-2xl md:text-3xl font-bold mb-4 label-text">
//                     {slide.label}
//                   </h5>
//                   <p className="w-full text-base md:text-lg">{slide.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="relative md:bottom-40 lg:bottom-52 right-10 md:right-16 icon-carousel-1">
//           <button
//             onClick={prevSlide}
//             className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full prev-slide ${
//               currentSlide === 0
//                 ? "opacity-50 cursor-not-allowed"
//                 : "opacity-100 cursor-pointer"
//             }`}
//             aria-label="Previous slide"
//             style={{ fontSize: "1.6rem", marginLeft: "3rem" }}
//             disabled={currentSlide === 0}
//           >
//             <FaCircleChevronLeft />
//           </button>
//         </div>
//         <div className="relative md:bottom-40 lg:bottom-52 left-10 md:left-16 icon-carousel-2">
//           <button
//             onClick={nextSlide}
//             className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
//               currentSlide === slidesss.length - 1
//                 ? "opacity-50 cursor-not-allowed"
//                 : "opacity-100 cursor-pointer"
//             }`}
//             aria-label="Next slide"
//             style={{ fontSize: "1.6rem", marginRight: "3rem" }}
//             disabled={currentSlide === slidesss.length - 1}
//           >
//             <FaCircleChevronRight />
//           </button>
//         </div>
//         <div className="relative  mb-4 md:mb-0 top-3 md:top-0 bottom-0 md:bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
//           {slidesss.map((_, index) => (
//             <button
//               key={index}
//               className={`h-1 w-1 rounded-full ${
//                 currentSlide === index ? "bg-black" : "bg-gray-400"
//               }`}
//               onClick={() => setCurrentSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const slidesss = [
  {
    backgroundtext: "UI/UX",
    imgSrc: "/images/service-section/Group 686.png",
    label: "UI/UX Design Solutions",
    description:
      "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
    url: "ui/ux", // Add URL for navigation
  },
  {
    backgroundtext: "UI/UX",
    imgSrc: "/images/service-section/Group 686.png",
    label: "Creative Solution",
    description:
      "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
    url: "/creativesolution", // Add URL for navigation
  },
];

export const DesignCarousel3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesss.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesss.length) % slidesss.length);
  };

  return (
    <div className="relative overflow-hidden w-full h-auto bg-white">
      <div className="md:container relative">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slidesss.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center relative"
            >
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {/* Background text */}
                <h1 className="text-gray-200 text-4xl md:text-8xl lg:text-9xl font-bold z-0 select-none relative lg:right-80 lg:bottom-32 xl:right-80 xl:bottom-40 md:right-48 md:bottom-28 backgroundtext">
                  {slide.backgroundtext}
                </h1>
              </div>
              <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-0 md:p-8 z-10 overflow-hidden">
                <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
                  <img
                    src={slide.imgSrc}
                    alt={slide.label}
                    className="w-full h-auto object-cover max-w-full max-h-[50vh] md:max-h-[60vh]"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left p-1">
                  <h5 className="sm:text-2xl md:text-3xl font-bold mb-4 label-text">
                    {slide.label}
                  </h5>
                  <p className="w-full text-base md:text-lg">
                    {slide.description}
                  </p>
                  <div className="mt-4">
                    <Link href={slide.url}>
                      <button className="inline-block px-6 py-2 bg-black text-white rounded-3xl">
                        Explore
                      </button>
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative md:bottom-40 lg:bottom-52 right-10 md:right-16 icon-carousel-1">
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full prev-slide ${
              currentSlide === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            aria-label="Previous slide"
            style={{ fontSize: "1.6rem", marginLeft: "3rem" }}
            disabled={currentSlide === 0}
          >
            <FaCircleChevronLeft />
          </button>
        </div>
        <div className="relative md:bottom-40 lg:bottom-52 left-10 md:left-16 icon-carousel-2">
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
              currentSlide === slidesss.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            aria-label="Next slide"
            style={{ fontSize: "1.6rem", marginRight: "3rem" }}
            disabled={currentSlide === slidesss.length - 1}
          >
            <FaCircleChevronRight />
          </button>
        </div>
        <div className="relative mb-4 md:mb-0 top-3 md:top-0 bottom-0 md:bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
          {slidesss.map((_, index) => (
            <button
              key={index}
              className={`h-1 w-1 bg-black text-white rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



const slidessss = [
  {
    backgroundtexts: "Mobile",
    component: <BeforeAfterSlider />,
    label: "Branding",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    backgroundtexts: "Mobile",
    component: <BeforeAfterSlider />,
    label: "Branding",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    backgroundtexts: "Mobile",
    component: <BeforeAfterSlider />,
    label: "Branding",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const DesignCarousel4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidess.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidess.length) % slidess.length);
  };

  return (
    <div className="relative overflow-hidden w-full lg:h-[80vh] bg-white lg:mt-1 ">
      <div className="container relative">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full "
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slidessss.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center px-5"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Background text */}
                <h1
                  className="text-7xl md:text-8xl lg:text-9xl font-bold z-0 select-none relative xl:left-40 xl:top-32 lg:left-32 lg:top-28 backgroundtexts md:top-40 md:left-28 sm:top-40 sm:left-44"
                  style={{ color: "#F6F6F6" }}
                >
                  {slide.backgroundtexts}
                </h1>
              </div>
              <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8 z-10 ">
                <div className="w-full md:w-1/2 flex items-center justify-center  md:mb-0">
                  {/* Check if component or imgSrc exists */}
                  {slide.component ? (
                    slide.component
                  ) : (
                    <img
                      src={slide.imgSrc}
                      alt={slide.label}
                      className="w-full h-full object-cover max-w-full lg:max-h-[100vh] md:max-h-[100vh]"
                    />
                  )}
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left p-1 md:p-8">
                  <h5 className="text-2xl md:text-3xl font-bold mb-2">
                    {slide.label}
                  </h5>
                  <p className="text-base md:text-lg w-full sm:pe-2 mb-14">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
            currentSlide === 0
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          aria-label="Previous slide"
          style={{ fontSize: "2rem", marginLeft: "3rem" }}
          disabled={currentSlide === 0}
        >
          <FaCircleChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
            currentSlide === slidess.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          aria-label="Next slide"
          style={{ fontSize: "2rem", marginRight: "3rem" }}
          disabled={currentSlide === slidess.length - 1}
        >
          <FaCircleChevronRight />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slidess.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
