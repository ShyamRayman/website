"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import "./portfolio.css";
import { motion, useScroll } from "framer-motion";
import OverlappingCards from "./ScrollerCards";
import Footer from "@/components/ui/footer";

import ScrollingText from "./Glider";
import Footercrm from "@/components/ui/footercrm";
import Navbarheader from "@/components/ui/navbarheader";

// Component for images with animation
const ImageWithAnimations = ({ src, alt, className }) => (
  <motion.img
    src={src}
    alt={alt}
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  />
);

const Portfolio = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hover, setHover] = useState(false);
  const content = "Travel with Us";
  const contents = "Make a call";
  const contentt = "Email Us";

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");

        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);

  return (
    <>

    <div className="relative z-10">
      {/* Navbar section */}
      {/* <Navbar /> */}
      <Navbarheader />

      {/* Portfolio home section */}
      <div className="portfolio-home w-full relative z-0">
        <section className="flex flex-col justify-center items-center relative z-0 w-full">
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold my-5">
            Portfolio
          </h1>

          <div className="flex flex-col w-full justify-center items-center mt-0 lg:mt-40">
            <div className="flex justify-center portfolio-set-1-img">
              <ImageWithAnimations
                src="/images/portfolio/portfolio_5.gif"
                alt="portfolio_1"
                className="w-1/2 h-1/2 lg:w-1/6 lg:h-1/6 md:w-1/6 md:h-1/6 rounded-xl mx-5 portfolio_1 shadow-2xl"
              />
              <ImageWithAnimations
                src="/images/portfolio/portfolio_2.gif"
                alt="portfolio_2"
                className="w-1/2 h-1/2 rounded-xl mx-5 relative lg:bottom-32 md:w-1/6 md:h-1/6 md:bottom-32 portfolio_2 shadow-2xl"
              />
              <ImageWithAnimations
                src="/images/portfolio/portfolio_3.gif"
                alt="portfolio_3"
                className="w-1/2 h-1/2 rounded-xl mx-5 md:w-1/6 md:h-1/6 relative lg:bottom-12 portfolio_3 shadow-2xl"
              />
            </div>

            <div className="flex justify-center portfolio-set-2-img">
              <ImageWithAnimations
                src="/images/portfolio/portfolio-4.gif"
                alt="portfolio_4"
                className="w-1/2 h-1/2 lg:w-1/6 lg:h-1/6 md:w-1/6 md:h-1/6 rounded-xl mx-5 portfolio_4 relative md:left-20 lg:right-4 shadow-2xl"
              />
              <ImageWithAnimations
                src="/images/portfolio/Group 771.png"
                alt="image-icon"
                className="home-content-main"
              />
              <ImageWithAnimations
                src="/images/portfolio/portfolio_1.gif"
                alt="portfolio_5"
                className="w-1/2 h-1/2 lg:w-1/12 lg:h-1/2 md:w-1/5 md:h-1/5 rounded-xl mx-5 portfolio_5 relative md:right-16 lg:right-4 shadow-2xl"
              />
              {/* <img src="/images/portfolio/portfolio_1.gif" alt="" style={{height:"10%",width:"10%"}}/> */}
            </div>
          </div>
          <div className="md:absolute bottom-0 lg:bottom-24 left-0 w-full">
            <img src="/images/bg.svg" alt="bg" className="w-full" />
          </div>
          <div
            className="md:absolute bottom-0"
            style={{ backgroundColor: "#F3F3F3", height: "10%", width: "100%" }}
          ></div>

          {/* marquee section */}
          <div
            className="Scroller marquee-container absolute -bottom-80 md:-bottom-8  lg:bottom-16"
            style={{ width: "100%" }}
          >
            <div
              className="scroller flex justify-center items-center h-16 md:h-20 lg:h-24 overflow-hidden"
              data-speed="fast"
            >
              <div className="scroller__inner" style={{ width: "90%" }}>
                <p className="marquee-section marquee-text marquee-font font-bold tracking-widest text-gray-200 whitespace-nowrap relative bottom-4 text-xl md:text-7xl lg:text-9xl ">
                  Take a Look at Our Work
                </p>
              </div>
            </div>
          </div>

          {/* <div class="scrolling_text">
              <div class="text">
                <span class="bebas-neue-regular">Take a Look at Our Work .</span>
              </div>
          </div> */}

          {/* <ScrollingText /> */}
        </section>
      </div>

      <section
        className="w-full h-1/2 relative"
        style={{ backgroundColor: "#F3F3F3" }}
      >
        {/* Overlapping cards */}
        <div>
          <OverlappingCards />
        </div>
      </section>

      {/* Partner with us section */}
      <section className="py-8">
        <div className="text-center font-extrabold my-10">
          <p className="text-2xl md:text-4xl">Partner With Us</p>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-sm md:text-base text-center tracking-tight lg:w-8/12 w-11/12 mt-3">
            We understand how hard it is for you to find the perfect development
            partners. At Huge IT Solutions,
            <span className="hidden lg:inline">
              {
                " our experts will provide the consulting you need, analyze your requirements, and deliver the best solutions tailored to your industry and needs. Let us help you achieve your digital goals. Reach out to us now for a consultation and take the first step towards a powerful online presence."
              }
            </span>
            <span className="inline lg:hidden">
              {!isReadMore ? (
                <>
                  ...{" "}
                  <button onClick={toggleReadMore} className="text-[#FF6C37]">
                    Read More
                  </button>
                </>
              ) : (
                <>
                  <span className="block lg:w-full text-center">
                    our experts will provide the consulting you need, analyze
                    your requirements, and deliver the best solutions tailored
                    to your industry and needs. Let us help you achieve your
                    digital goals. Reach out to us now for a consultation and
                    take the first step towards a powerful online presence.
                  </span>
                  <button onClick={toggleReadMore} className="text-[#FF6C37]">
                    Show Less
                  </button>
                </>
              )}
            </span>
          </p>
        </div>

        <div className="w-full flex justify-center mt-6 gap-4">
          <button
            className={`button ${hovered ? "hover" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ "--button-content": `"${contents}"`, paddingLeft: "90px" }}
          >
            <img
              src="/images/phone.svg"
              className="hidden lg:flex -ml-20 relative left-1 me-5"
            />
          </button>
          <button
            className={`button ${isHovered ? "hover" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ "--button-content": `"${contentt}"` }}
          >
            <img src="/images/email.svg" className="hidden lg:flex -ml-2" />
          </button>
        </div>
      </section>

      {/* CRM section */}
      <Footercrm />

      <Footer />

      {/* WhatsApp button */}
      <div className="fixed bottom-10 right-6">
        <div className="animate-bounce border border-white drop-shadow-xl w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center">
          <img src="/images/whats.svg" alt="image" className="w-3/4 h-3/4" />
        </div>
      </div>

      </div>
    </>
  );
};

export default Portfolio;
