"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/components/ui/footer";
import DesignCarousel, {
  DesignCarousel3,
} from "../designanddevelopment/designcarousel";
import "./designui.css";
import Navbarheader from "@/components/ui/navbarheader";

const Design = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const [hover, setHover] = useState(false);
  const content = "Travel with Us";

  const [hovered, setHovered] = useState(false);
  const contents = "Make a call";

  const [isHovered, setIsHovered] = useState(false);
  const contentt = "Email Us";

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

          scrollerInner.addEventListener("mouseenter", () => {
            scrollerInner.style.animationPlayState = "running";
          });
          scrollerInner.addEventListener("mouseleave", () => {
            scrollerInner.style.animationPlayState = "running";
          });
        }
      });
    }
  }, []);

  return (
    <>
      <div className="relative z-10 bg-white">
        <Navbarheader />
        <div className="min-h-screen flex flex-col items-center justify-center">
          {/* Home-icon section */}
          <div className="main-header-container">
            <div className="relative main-header-container">
              {/* Top-left corner */}
              <img
                src="/images/Home-icons/Group 690.png"
                alt="Home-icon-1"
                className="absolute lg:top-16 lg:left-56 md:top-5 md:left-36  sm:top-3 sm:left-28  w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-1"
              />

              {/* Top-right corner */}
              <img
                src="/images/Home-icons/Group 688.png"
                alt="Home-icon-2"
                className="absolute lg:top-16 lg:right-56  md:top-5 md:right-36  sm:top-3 sm:right-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-2"
              />

              {/* Bottom-left corner */}
              <img
                src="/images/Home-icons/Group 687.png"
                alt="Home-icon-3"
                className="absolute lg:bottom-20 lg:top:20 lg:left-80 md:bottom-10 md:top:20 md:left-56 sm:bottom-3 sm:top:20 sm:left-44 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-3"
              />

              {/* Bottom-right corner */}
              <img
                src="/images/Home-icons/Group.png"
                alt="Home-icon-4"
                className="absolute lg:bottom-20 lg:right-80 md:bottom-10 md:right-56 sm:bottom-3 sm:right-44 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-4"
              />

              {/* header container */}
              <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 lg:p-24 text-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold mb-4">
                  Design and Branding
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 mx-4 md:mx-12 lg:mx-24">
                  Creating seamless and engaging user experiences, along with
                  innovative and impactful design solutions, to enhance your
                  brand's visual identity and digital engagement.
                </p>
                {/* headerButton */}
                <div className="p-1 overflow-hidden flex justify-center md:justify-start">
                  <button
                    className="mt-3 btn-btn text-center relative font-bold py-2 px-4 rounded"
                    style={{
                      border: "2px solid",
                      padding: "10px 20px",
                      borderRadius: "15px",
                      margin: "auto",
                    }}
                  >
                    <div className="w-8 h-6 btn"></div>
                    <p className="relative top-0 left-0 z-2 font-semibold text-base">
                      See Portfolio
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* header Hover Cards */}
            <div className="flex flex-col justify-center items-center mt-12 px-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="w-full flex justify-center items-center">
                  <img
                    src="/images/Hover-cards/Group707.jpg"
                    alt="Hover-Card-1"
                    className="w-full max-w-xs object-cover Hover-img-1"
                  />
                </div>
                <div className="w-full flex justify-center">
                  <img
                    src="/images/Hover-cards/Logo-Presentation2.jpg"
                    alt="Hover-Card-2"
                    className="w-full max-w-xs object-cover Hover-img-2 relative lg:bottom-14"
                  />
                </div>
                <div className="w-full flex justify-center">
                  <img
                    src="/images/Hover-cards/image 46.png"
                    alt="Hover-Card-3"
                    className="w-full max-w-xs object-cover Hover-img-3"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Section */}
          <div className="service-container container mx-auto px-4 py-8 h-50 w-full">
            {/* marquee section */}
            {/* <div className="marquee-container overflow-hidden relative">
        <div className="whitespace-nowrap animate-marquee">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">UI/UX</p>
        </div>
      </div> */}

            {/* Service header */}
            <div className="service-header mb-10 mt-5 text-center w-full">
              <h6 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-semibold">
                Service
              </h6>
            </div>

            {/* Carousel Component */}
            <DesignCarousel3 />
          </div>

          {/* Technology and tools section */}

          <section className="w-full  relative technology-container z-10">
            {/* Technology container */}
            <div className="container my-10 flex justify-center items-center  bg-transparent relative ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 technology-top ">
                <div className="technology-content-container mt-5 z-20">
                  <h6 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide leading-relaxed text-left">
                    Technology & Tools
                  </h6>
                  <p className="mt-2 leading-relaxed">
                    Boost customer engagement with seamless WhatsApp integration
                    for real-time communication our experts will provide the
                    consulting you need, analyze your requirements, and deliver
                    the best solutions tailored to your industry and needs. Let
                    us help you achieve your digital goals. Reach out to us now
                    for a consultation and take the first step towards a
                    powerful online presence.
                  </p>
                </div>

                {/* Technology image container */}
                <div className="flex flex-col items-center mx-auto max-w-xs lg:max-w-sm z-20">
                  <div className="flex justify-center gap-8 mt-16">
                    <img
                      src="/images/technology-section/Group 664.png"
                      alt="technology-img-5"
                      className="w-20 h-20 lg:w-24 lg:h-24 hover:scale-110 transition-transform duration-300"
                    />
                    <img
                      src="/images/technology-section/Group 660.png"
                      alt="technology-img-2"
                      className="w-20 h-20 lg:w-24 lg:h-24 relative bottom-20 hover:scale-110 transition-transform duration-300"
                    />
                    <img
                      src="/images/technology-section/Group 666@3x.png"
                      alt="technology-img-6"
                      className="w-20 h-20 lg:w-24 lg:h-24 hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-center gap-12 my-12">
                    <img
                      src="/images/technology-section/Group 665.png"
                      alt="technology-img-6"
                      className="w-20 h-20 lg:w-24 lg:h-24 hover:scale-110 transition-transform duration-300"
                    />
                    <img
                      src="/images/technology-section/Group 667.png"
                      alt="technology-img-7"
                      className="w-20 h-20 lg:w-24 lg:h-24 relative bottom-16 hover:scale-110 transition-transform duration-300"
                    />
                    <img
                      src="/images/technology-section/Group 659@2x.png "
                      alt="technology-img-1"
                      className="w-20 h-20 lg:w-24 lg:h-24 hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-center gap-12">
                    <img
                      src="/images/technology-section/Group 663.png"
                      alt="technology-img-4"
                      className="w-20 h-20 lg:w-24 lg:h-24 hover:scale-110 transition-transform duration-300"
                    />
                    <img
                      src="/images/technology-section/Group 662.png"
                      alt="technology-img-6"
                      className="w-20 h-20 lg:w-24 lg:h-24 relative bottom-16 hover:scale-110 transition-transform duration-300"
                    />
                    <img
                      src="/images/technology-section/Group 661.png"
                      alt="technology-img-3"
                      className="w-20 h-20 lg:w-24 lg:h-24 hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div
                  className="Scroller marquee-container absolute z-10 bottom-0"
                  style={{ width: "95%" }}
                >
                  <div
                    className="scroller flex justify-center items-center h-16 md:h-20 lg:h-24 overflow-hidden "
                    data-speed="fast"
                  >
                    <div className="scroller__inner" style={{ width: "90%" }}>
                      <p className="marquee-section marquee-text text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest text-gray-200 whitespace-nowrap relative bottom-0">
                        Technology & Tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div
            className="Scroller marquee-container absolute z-20"
            style={{ width: "100%" }}
          >
            <div
              className="scroller flex justify-center items-center h-16 md:h-20 lg:h-24 overflow-hidden"
              data-speed="fast"
            >
              <div className="scroller__inner" style={{ width: "90%" }}>
                <p className="marquee-section marquee-text text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest text-gray-200 whitespace-nowrap relative bottom-8">
                  Technology & Tools
                </p>
              </div>
            </div>
          </div> */}
          </section>
        </div>

        {/* Partner with us section */}
        <section className="py-8">
          <div className="text-center font-extrabold my-1">
            <p className="text-2xl md:text-4xl">Partner With Us</p>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-sm md:text-base text-center tracking-tight lg:w-8/12 w-11/12 mt-3">
              We understand how hard it is for you to find the perfect
              development partners. At Huge IT Solutions,
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
              className={`button ${hovered ? "hover" : ""} px-5`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ "--button-content": `"${contents}" ` }}
            >
              <img src="/images/phone.svg" className="hidden lg:flex" />
            </button>
            <button
              className={`button ${isHovered ? "hover" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                "--button-content": `"${contentt}" `,
                position: "relative",
                left: "20px",
              }}
            >
              <img src="/images/email.svg" className="hidden lg:flex" />
            </button>
          </div>
        </section>

        <div className="relative ">
          <div className="md:absolute bottom-0 left-0 w-full">
            <img
              src="/images/bg.svg"
              alt="bg"
              className="w-full hidden sm:hidden md:block "
            />
          </div>
          <section className="py-4 mt-16 w-full flex justify-center ">
            <div className="bg-[#FFD100] lg:w-8/12 md:w-9/12 w-11/12 h-auto md:h-48 lg:h-64 rounded-xl relative max-w-7xl flex flex-col-reverse gap-5 items-center justify-center">
              <div className="md:absolute bottom-0 lg:left-12 md:left-8 left-16 w-7/12 lg:w-96 md:w-96 sm:w-80">
                <img
                  src="/images/partner.svg"
                  className="w-full lg:w-full md:w-3/4 sm:w-full crm-img"
                />
              </div>
              <div className="md:absolute top-5 lg:right-22 md:right-16 right-12 text-center flex md:block flex-col justify-center">
                <p className="text-l md:text-2xl text-left  sm:text-9xl lg:ms-2 font-bold tracking-wide leading-relaxed relative  crm-1">
                  Struggling with <br /> CRM Challenges?
                </p>

                <p className="text-xs md:text-base lg:text-base sm:text-base sm:mt-1 text-center relative crm-2">
                  Let's solve your CRM challenges together.
                </p>

                <button
                  className={`button   relative  mt-3 ${
                    hover ? "hover" : ""
                  } crm-3`}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  style={{ "--button-content": `"${content}"` }}
                ></button>
              </div>
            </div>
          </section>
        </div>

        <Footer />

        <div className="fixed bottom-10 right-6">
          <div className="animate-bounce border border-white drop-shadow-xl w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center">
            <img src="/images/whats.svg" alt="image" className="w-3/4 h-3/4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
