"use client";
import React from "react";
import { useState, useEffect } from "react";
import "./design.css";
import Footer from "@/components/ui/footer";
import DesignCarousel from "./designcarousel";

const DesignAndDevelopment = () => {
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
            scrollerInner.style.animationPlayState = "paused";
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
      <div className="w-full min-h-screen top-container">
        {/* Home-icon section */}
        <div className="Home-icon-container" style={{ position: "absolute" }}>
          <img
            src="/images/Home-icons/Group.png"
            alt="Home-icon-1"
            className="Home-icon-1"
          />
          <img
            src="/images/Home-icons/Group 687.png"
            alt="Home-icon-2"
            className="Home-icon-2"
          />
          <img
            src="/images/Home-icons/Group 688.png"
            alt="Home-icon-3"
            className="Home-icon-3"
          />
          <img
            src="/images/Home-icons/Group 690.png"
            alt="Home-icon-4"
            className="Home-icon-4"
          />
        </div>

        {/* header container */}
        <div
          className="flex min-h-screen flex-col items-center justify-between p-24 main-header-container"
          style={{ backgroundColor: "white", width: "100vw" }}
        >
          <div className="main-header" style={{ textAlign: "center" }}>
            <h1 className="heading">Design and Branding</h1>
            <p className="paragraph">
              Creating seamless and engaging user experiences, along with
              innovative and impactful design solutions, to enhance your brands
              visual identity and digital engagement.
            </p>
            <div className="p-1 overflow-hidden flex justify-center md:justify-start">
              <button
                className="mt-3 btn-btn  text-center relative  font-bold py-2 px-4 rounded"
                style={{
                  border: " 2px solid",
                  padding: "10px 20px",
                  borderRadius: "15px",
                  margin: "auto",
                }}
              >
                <div className="w-8 h-6 btn "></div>
                <p className=" relative top-0 left-0 z-2 font-semibold text-base">
                  See Portfolio
                </p>
              </button>
            </div>

            <div className="Hover-cards mx-auto p-4 mt-20">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100vw",
                  padding: "10px",
                }}
              >
                <div className="p-2">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:translate-y-50 transition duration-300 Hover-img-1">
                    <img
                      src="/images/Hover-cards/Group707.jpg"
                      alt="Hover-Card-3"
                      style={{ width: "320px" }}
                    />
                  </div>
                </div>
                <div className="p-2 mx-5 my-5">
                  <div
                    className="bg-white rounded-lg shadow-md hover:shadow-lg hover:translate-y-50 transition duration-300 Hover-img-2"
                    style={{
                      width: "320px",
                      position: "relative",
                      bottom: "80px",
                    }}
                  >
                    <img
                      src="/images/Hover-cards/Logo-Presentation2.jpg"
                      alt="Hover-Card-1"
                      style={{ width: "320px" }}
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <div className="shadow-md hover:shadow-lg hover:translate-y-50 transition duration-300 Hover-img-3">
                      <img
                        src="/images/Hover-cards/image 46.png"
                        alt="Hover-Card-2"
                        style={{ width: "320px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Section */}
            <div
              className="service-container container"
              style={{ height: "60vh", width: "100vw" }}
            >
              <div className=" marquee-containers">
                <div className="">
                  <div className="">
                    <p className="marquee-sections">UI/Ux</p>
                  </div>
                </div>
              </div>

              <div className="service-header mb-10 mt-5 w-full">
                <h6>Service</h6>
              </div>

              <div className="px-4 lg:px-0 container">
                <div className="service-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 container">
                  <div className="service-image-container">
                    <img
                      src="/images/Service-section/Group 686.png"
                      alt="service-section-img"
                      className="h-auto"
                      style={{ width: "600px" }}
                    />
                  </div>
                  <div
                    className="service-content-container text-left container"
                    style={{ height: "60vh" }}
                  >
                    {/* <h6 className='service-h6'>UI/UX Design Solutions</h6> */}
                    {/* <p style={{marginBottom:"25px",paddingRight:"15px"}} className='service-para'>Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional. Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces.</p> */}
                    <DesignCarousel />
                    {/* <button className='bg-black text-white py-2 px-4' style={{width:"150px",borderRadius:"14px"}}>Explore</button> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Technology and tools section */}
            <div className="technology-container w-full container my-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div
                  className="technology-content-container mt-20"
                  style={{ lineHeight: "2", position: "relative" }}
                >
                  <h6 style={{ textAlign: "left" }}>Technology & Tools</h6>
                  <p style={{ textAlign: "left", width: "700px" }}>
                    Lorem Ipsum is simply dummy text Of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Loren-n Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                </div>
                <div
                  className="technology-image-container"
                  style={{
                    width: "600px",
                    height: "450px",
                    display: "flex",
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                  }}
                >
                  <div>
                    <div className="flex justify-center gap-10 mt-20">
                      <img
                        src="/images/technology-section/Group 664.png"
                        alt="technology-img-5"
                      />
                      <img
                        src="/images/technology-section/Group 660.png"
                        alt="technology-img-2"
                        style={{ position: "relative", bottom: "50px" }}
                      />
                      <img
                        src="/images/technology-section/Group 666@3x.png"
                        alt="technology-img-6"
                      />
                    </div>
                  </div>

                  <div
                    className="flex justify-center gap-10"
                    style={{ margin: "50px 0" }}
                  >
                    <img
                      src="/images/technology-section/Group 665.png"
                      alt="technology-img-6"
                    />
                    <img
                      src="/images/technology-section/Group 667.png"
                      alt="technology-img-7"
                      style={{ position: "relative", bottom: "50px" }}
                    />
                    <img
                      src="/images/technology-section/Group 659@2x.png"
                      alt="technology-img-1"
                    />
                  </div>

                  <div className="flex justify-center gap-10">
                    <img
                      src="/images/technology-section/Group 663.png"
                      alt="technology-img-4"
                    />
                    <img
                      src="/images/technology-section/Group 662.png"
                      alt="technology-img-6"
                      style={{ position: "relative", bottom: "50px" }}
                    />

                    <img
                      src="/images/technology-section/Group 661.png"
                      alt="technology-img-3"
                    />
                  </div>
                </div>

                {/* Marquee section */}

                <div
                  className="Scroller marquee-container container"
                  style={{ width: "100%" }}
                >
                  <div className="scroller" data-speed="fast">
                    <div className="scroller__inner">
                      <p className="marquee-section" style={{ width: "100%" }}>
                        Technology & Tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next section */}
            <section className="py-8">
              <div className="md:text-4xl text-2xl text-center md:py-4 font-extrabold my-10">
                <p class="">Partner With Us</p>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-sm md:text-base text-center tracking-tight lg:w-8/12  w-11/12 md:mt-0 mt-3">
                  We understand how hard it is for you to find the perfect
                  development partners. At Huge IT Solutions,
                  <span className="hidden lg:inline">
                    {
                      " our experts will provide the consulting you need, analyze your requirements, and deliver the best solutions tailored to your industry and needs. Let us help you achieve your digital goals.Reach out to us now for a consultation and take the first step towards a powerful online presence."
                    }
                  </span>
                  <span className="inline lg:hidden">
                    {!isReadMore && (
                      <>
                        ...{" "}
                        <button
                          onClick={toggleReadMore}
                          className="text-[#FF6C37] "
                        >
                          Read More
                        </button>
                      </>
                    )}
                    {isReadMore && (
                      <>
                        <span className="lg:w-full  flex justify-center text-center">
                          our experts will provide the consulting you need,
                          analyze your requirements, and deliver the best
                          solutions tailored to your industry and needs. Let us
                          help you achieve your digital goals.Reach out to us
                          now for a consultation and take the first step towards
                          a powerful online presence.
                        </span>
                        <button
                          onClick={toggleReadMore}
                          className="text-[#FF6C37]"
                        >
                          Show Less
                        </button>
                      </>
                    )}
                  </span>
                </p>
              </div>

              <div className="w-full flex justify-center mt-6 gap-4">
                <button
                  className={`button  ${hovered ? "hover" : ""} `}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{ "--button-content": `"${contents}" ` }}
                >
                  <img
                    src="/images/phone.svg"
                    className="  -ml-3 hidden lg:flex"
                  />
                </button>
                <button
                  className={`button  ${isHovered ? "hover" : ""} `}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ "--button-content": `"${contentt}" ` }}
                >
                  <img
                    src="/images/email.svg"
                    className=" -ml-2 hidden lg:flex "
                  />
                </button>
              </div>
            </section>

            <div className="relative">
              <div className=" absolute md:bottom-[-18px]  bottom-[0px]">
                <img src="/images/bg.svg" alt="bg" className="" />
              </div>
              <section className=" md:py-12 py-4 mt-16 w-full  flex justify-center">
                <div className="bg-[#FFD100] lg:w-8/12  w-11/12  md:h-64 h-80 rounded-xl relative ">
                  <div className="absolute md:w-80 lg:w-96 w-7/12 bottom-[1px] lg:left-12 md:left-0 left-16">
                    <img
                      src="/images/partner.svg"
                      className=" bottom-[px] md:top-0 top-5 md:left-12 left-2 "
                    />
                  </div>
                  <div className="absolute lg:right-20 md:right-16 right-12 md:top-4   ">
                    <p className="  lg:w-full  lg:text-5xl md:text-4xl text-2xl  font-bold tracking-wide leading-relaxed ">
                      Struggling with <br /> CRM Challenges?
                    </p>
                  </div>

                  <p className=" absolute lg:right-36  md:right-16 right-12 md:top-24 top-16 lg:py-4 mt-3 lg:ml-2 lg:text-lg md:text-base text-xs ">
                    Let's solve your CRM challenges together.
                  </p>
                  <button
                    className={`button absolute lg:left-1/2 md:right-64 left-1/3 lg:top-36 md:top-32 top-20  mt-7${
                      hover ? "hover" : ""
                    }`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{ "--button-content": `"${content}"` }}
                  ></button>
                </div>
              </section>
            </div>
            <Footer />
            <div className="fixed md:bottom-2 bottom-10 md:right-20 right-6">
              <div className=" animate-bounce border border-white drop-shadow-xl w-12 h-12 bg-[#FFFFFF] rounded-full absolute bottom-0 right-0 transform -translate-x-1/2">
                <img
                  src="/images/whats.svg"
                  alt="image"
                  className="absolute inset-0 m-auto w-3/4 h-3/4 whatsup-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignAndDevelopment;
