"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import "./casestudiesinner.css";
import InfiniteScroll from "./infinitescroller";
import { motion } from "framer-motion";
import Footercrm from "@/components/ui/footercrm";
import Navbarheader from "@/components/ui/navbarheader";

const ImageWithAnimation = ({ src, alt, additionalClasses }) => (
  <motion.img
    src={src}
    alt={alt}
    className={`w-[40%] md:w-[90%] lg:w-[90%] sm:w-[60%]  mx-auto ${additionalClasses}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  />
);

const CaseStudiesInner = () => {
  const [showData, setShowData] = useState(0);
  const [isReadMore, setIsReadMore] = useState(false);
  const [hover, setHover] = useState(false);
  const content = "Travel with Us";

  const [hovered, setHovered] = useState(false);
  const contents = "Make a call";

  const [isHovered, setIsHovered] = useState(false);
  const contentt = "Email Us";

  useEffect(() => {
    const logWindowWidth = () => {
      console.log("Window width:", window.innerWidth);
    };

    logWindowWidth();

    window.addEventListener("resize", logWindowWidth);

    return () => {
      window.removeEventListener("resize", logWindowWidth);
    };
  }, []);

  const handleClick = () => {
    console.log("the window width is ", window.innerWidth);

    window.addEventListener("resize", () => {
      console.log("Window width:", window.innerWidth);
    });

    setShowData(cardsData);
    console.log(showData);
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
    <div className="relative z-10">
      {/* Navbar section */}
      {/* <Navbar /> */}
      <Navbarheader/>

      {/* Case Studies inner Home Page */}

      <section className="h-auto relative case-inner-bg z-0">
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Qatar Factory
            </h1>
            <img
              src="/images/casestudiesinner/Group 765.svg"
              alt="case-studies-1"
              className="max-w-[330px] sm:max-w-[300px] md:max-w-[550px] lg:max-w-[550px] mt-14 z-10"
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <h1 className="absolute text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold xl:left-80 xl:top-96 lg:top-96 md:bottom-0 md:top-96 sm:bottom-0 sm:top-60 z-0 text-[#ECECEC] case-study-text">
            Case Study
          </h1>
        </div>
      </section>

      {/* case studies inner content section */}

      <section className="case-inner-content h-auto w-full grid lg:grid-cols-2 justify-items-center">
        <div className="case-content-img">
          <ImageWithAnimation
            src="/images/casestudiesinner/Group 767.png"
            alt="case-content-1"
            className="h-auto"
          />
        </div>

        <div className="case-content-text ms-2 mt-0 xl:mt-64 lg:mt-64 p-0 lg:pb-10 xl:pt-10">
          <article className="leading-relaxed text-base p-0  md:px-10 lg:px-0 lg:pe-20 overflow-hidden">
            QATAR FACTORY for Fire Fighting Equipment & Safety Systems is a
            leading provider of fire safety solutions in Qatar. Renowned for
            their expertise and commitment to quality, they offer a
            comprehensive range Of services, including manufacturing, design,
            installation, and maintenance of fire safety systems. They are
            recognized by local and international authorities, including the
            QATAR Civil Defense Department (QCDD).
          </article>

          <h3 className="font-bold text-xl my-5 p-0 md:px-10 lg:px-0">
            The Challenge:
          </h3>

          <article className="overflow-y-scroll scrollbar-hide h-48 p-0 md:px-10 lg:px-0 lg:pe-20 w-full overflow-hidden">
            <p className="my-2 text-base leading-relaxed">
              • The old website did not effectively communicate the company's
              certifications and extensive expertise.
            </p>
            <p className="my-2 text-base leading-relaxed">
              • It lacked interactive elements that could engage visitors and
              highlight the company's innovative solutions.
            </p>
            <p className="my-2 text-base leading-relaxed">
              • The old website did not effectively communicate the company's
              certifications and extensive expertise.
            </p>
            <p className="my-2 text-base leading-relaxed">
              • It lacked interactive elements that could engage visitors and
              highlight the company's innovative solutions.
            </p>
            <p className="my-2 text-base leading-relaxed">
              • The old website did not effectively communicate the company's
              certifications and extensive expertise.
            </p>
            <p className="my-2 text-base leading-relaxed">
              • It lacked interactive elements that could engage visitors and
              highlight the company's innovative solutions.
            </p>
            <p className="my-2 text-base leading-relaxed">
              • The old website did not effectively communicate the company's
              certifications and extensive expertise.
            </p>
            <p className="my-2 text-base leading-relaxed">
              • It lacked interactive elements that could engage visitors and
              highlight the company's innovative solutions.
            </p>
          </article>
        </div>
      </section>

      {/* Our Approach section */}
      <section className="h-auto w-full flex flex-col justify-center items-center mt-0 lg:mt-10 mb-0">
        <h2 className="text-3xl font-bold mb-3 mt-5 sm:mt-10 ">Our Approach</h2>
        <p className="px-10 lg:px-40 text-sm sm:text-base text-center">
          To enhance the QATAR FACTORY for Fire Fighting Equipment & Safety
          Systems website, we propose a comprehensive redesign focusing on
          modernizing the visual design with an updated color scheme,
          typography, and layout to align with contemporary standards. We will
          streamline the navigation menu for improved intuitiveness and consider
          adding a search feature for easier information retrieval. The content
          presentation will be redesigned to effectively highlight key services,
          certifications, and company achievements through engaging visuals and
          interactive elements. Additionally, we will ensure the mobile
          experience is fully optimized for a seamless and user-friendly
          interaction across all devices.
        </p>

        <InfiniteScroll />
      </section>

      {/* case studies inner solution section */}

      <section
        className="h-auto w-full flex flex-col lg:flex-row overflow-hidden"
        style={{ backgroundColor: "#F3F3F3" }}
      >
        <img
          src="/images/casestudiesinner/Vector.svg"
          alt="case-inner-icon-1"
          className="w-[20%] relative right-3 bottom-0 lg:bottom-10 lg:right-16 lg:w-[20%] lg:mr-4"
        />

        {/* Case inner content section */}
        <div className="w-full lg:w-[50%] p-5 md:p-16 lg:p-10 my-auto">
          <h1 className="text-2xl font-bold mb-4">The Solution</h1>
          <div className="leading-relaxed text-sm sm:text-base">
            <p>
              • Apply a modern design with updated colors, typography, and
              layout elements to improve visual appeal.
            </p>
            <p>
              • Reorganize the menu and consider adding a search function for
              easier information retrieval.
            </p>
            <p>
              • Utilize visuals, infographics, and interactive elements to
              better present services and certifications.
            </p>
            <p>
              • Ensure that the mobile experience is seamless and responsive
              across various devices.
            </p>
            <p>
              • A modernized design and improved content presentation will
              likely lead to higher user engagement and longer site visits.
            </p>
            <p>
              • Streamlined navigation and a better mobile experience will make
              it easier for users to find information and interact with the
              site.
            </p>
            <p>
              • A refreshed design and clearer presentation of expertise and
              certifications will reinforce the company's status as a leader in
              fire safety.
            </p>
          </div>
        </div>

        {/* Case studies inner image section */}
        <div className="flex flex-col md:flex-row lg:flex-row lg:p-5 md:justify-center">
          <div className="mb-4 lg:mb-0">
            <ImageWithAnimation
              src="/images/casestudiesinner/image 68.jpg"
              alt="case-inner-image-1"
              className="w-[40%] md:w-[90%] lg:w-[90%] mx-auto relative lg:left-5 lg:top-60 md:top-60 case-inner-image-1 sm:w-[60%]"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <ImageWithAnimation
              src="/images/casestudiesinner/image 69.jpg"
              alt="case-inner-image-2"
              className="w-[40%] md:w-[90%] lg:w-[90%] mx-auto case-inner-image-2 sm:w-[60%]"
            />
            <ImageWithAnimation
              src="/images/casestudiesinner/image 67.jpg"
              alt="case-inner-image-3"
              className="w-[40%] md:w-[90%] lg:w-[90%] mx-auto case-inner-image-3 sm:w-[60%]"
            />
          </div>
        </div>
      </section>

      {/* Regular section */}

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
            className={`button ${hovered ? "hover" : ""} `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              "--button-content": `"${contents}" `,
              paddingLeft: "90px",
            }}
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
            style={{ "--button-content": `"${contentt}" ` }}
          >
            <img src="/images/email.svg" className="hidden lg:flex -ml-2" />
          </button>
        </div>
      </section>

      <Footercrm />

      <Footer />

      <div></div>

      <div className="fixed bottom-10 right-6">
        <div className="animate-bounce border border-white drop-shadow-xl w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center">
          <img src="/images/whats.svg" alt="image" className="w-3/4 h-3/4" />
        </div>
      </div>
      </div>
    </>
  );
};

export default CaseStudiesInner;
