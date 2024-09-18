"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./portfolio.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = [
  // Existing cards
  {
    id: 1,
    label: "Mobile App",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    backgroundColor: "#1D8CC5",
    imgSrc: "/images/portfolio/Group 805.png",
    classes:
      "card card-1 w-2/3 rounded-xl flex justify-center flex-col md:flex-row justify-items-center relative",
    imgClasses: " relative bottom-0 lg:bottom-20 cards-img card-img-1",
  },
  {
    id: 2,
    label: "Website",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    backgroundColor: "#FD273B",
    imgSrc: "/images/portfolio/Group 806.png",
    classes:
      "card card-2 w-2/3 rounded-xl flex justify-center flex-col md:flex-row  justify-items-center",
    imgClasses:
      "w-full relative bottom-0 top-1 lg:top-0 lg:bottom-10 cards-img card-img-2",
  },
  {
    id: 3,
    label: "Designing and Branding",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    backgroundColor: "#FFA600",
    imgSrc: "/images/portfolio/Mask group.png",
    classes:
      "card card-3 w-2/3 rounded-xl  flex justify-center flex-col md:flex-row  justify-items-center",
    imgClasses: "w-full relative bottom-0 lg:bottom-10 cards-img card-img-3",
  },
  {
    id: 4,
    label: "Customized Web App",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    backgroundColor: "#5065AC",
    imgSrc: "/images/portfolio/Group 806.png",
    classes:
      "card card-4 w-2/3 rounded-xl flex justify-center flex-col md:flex-row   justify-items-center",
    imgClasses:
      "w-full relative bottom-0 top- lg:top-0 lg:bottom-10 cards-img card-img-2",
  },
  {
    id: 5,
    label: "Customized ERP",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    backgroundColor: "#118586",
    imgSrc: "/images/portfolio/Group 806.png",
    classes:
      "card card-5 w-2/3 rounded-xl flex justify-center flex-col md:flex-row justify-items-center",
    imgClasses: "w-full cards-img card-img-6",
  },
];

const OverlappingCards = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: cardsRef.current,
          pin: true,
          pinSpacing: true,
          start: "left-=120px left",
          end: "+=3100", // Adjusted end value for 5 cards
          scrub: 1,
        },
      });

      // Animation for the first card
      timeline.addLabel("card1");
      timeline.to(".card-1", {
        xPercent: 0,
        opacity: 1,
      });

      // Animation for the second card
      timeline.from(".card-2", {
        xPercent: 75,
        opacity: 0,
      });
      timeline.addLabel("card2");

      timeline.to(
        ".card-1",
        {
          scale: 0.95,
          xPercent: -0.5,
          opacity: 0.5,
        },
        "-=0.3"
      );

      timeline.to(".card-2", {
        xPercent: 0,
        opacity: 1,
      });

      // Animation for the third card
      timeline.from(".card-3", {
        xPercent: 75,
        opacity: 0,
      });
      timeline.addLabel("card3");

      timeline.to(
        ".card-2",
        {
          scale: 0.98,
          xPercent: -0.4,
          opacity: 0.6,
        },
        "-=0.3"
      );

      timeline.to(".card-3", {
        xPercent: 0,
        opacity: 1,
      });

      // Animation for the fourth card
      timeline.from(".card-4", {
        xPercent: 75,
        opacity: 0,
      });
      timeline.addLabel("card4");

      timeline.to(
        ".card-3",
        {
          scale: 0.98,
          xPercent: -0.4,
          opacity: 0.6,
        },
        "-=0.3"
      );

      timeline.to(".card-4", {
        xPercent: 0,
        opacity: 1,
      });

      // Animation for the fifth card
      timeline.from(".card-5", {
        xPercent: 75,
        opacity: 0,
      });
      timeline.addLabel("card5");

      timeline.to(
        ".card-4",
        {
          scale: 0.98,
          xPercent: -0.4,
          opacity: 0.6,
        },
        "-=0.3"
      );

      timeline.to(".card-5", {
        xPercent: 0,
        opacity: 1,
      });
    }, cardsRef);
    return () => context.revert();
  }, []);

  return (
    <div className="cards w-full relative overflow-x-hidden" ref={cardsRef}>
      {sections.map((section) => (
        <div
          key={section.id}
          className="flex justify-center flex-col lg:flex-row  items-center text-white mx-auto"
        >
          <div
            className={section.classes}
            style={{ backgroundColor: section.backgroundColor }}
          >
            <div className="p-3 lg:p-10 w-full lg:w-3/5">
              <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold mb-2">
                {section.label}
              </h1>
              <p className="text-sm mb-2">{section.content}</p>
              <button
                className="bg-white rounded-2xl  w-1/4 p-2 text-sm md:text-base"
                style={{ color: section.backgroundColor }}
              >
                Discover
              </button>
            </div>
            <div className="relative top-1">
              <img src={section.imgSrc} alt="" className={section.imgClasses} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverlappingCards;
