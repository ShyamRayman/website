"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import "./casestudies.css";
import Footer from "@/components/ui/footer";
import { motion } from "framer-motion";
import Footercrm from "@/components/ui/footercrm";
import Navbarheader from "@/components/ui/navbarheader";

const cardsData = [
  {
    title: "Qatar Factory Website Case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/images/casestudies/image 34.png",
  },
  {
    title: "Qatar Factory Website Case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/images/casestudies/image 34.png",
  },
  {
    title: "Qatar Factory Website Case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/images/casestudies/image 34.png",
  },
  {
    title: "Qatar Factory Website Case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/images/casestudies/image 34.png",
  },
  {
    title: "Qatar Factory Website Case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/images/casestudies/image 34.png",
  },
  {
    title: "Qatar Factory Website Case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/images/casestudies/image 34.png",
  },
];

const casestudies = () => {
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
      <Navbarheader />

      <div className="relative z-0">
        {/* Home section */}
        <div className="relative ">
          <img
            src="/images/casestudies/Group 789.png"
            alt="case-studies-1"
            className="absolute lg:top-3 lg:left-40 md:top-0 md:left-16  sm:top-1 sm:left-7  w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 case-studies-1"
          />

          {/* Top-right corner */}
          <img
            src="/images/casestudies/Group 787.png"
            alt="case-studies-2"
            className="absolute lg:top-3 lg:right-40  md:top-2 md:right-20  sm:top-1 sm:right-7 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 case-studies-2"
          />

          {/* Bottom-left corner */}
          <img
            src="/images/casestudies/Group 788.png"
            alt="case-studies-3"
            className="absolute xl:bottom-60  xl:left-72 lg:bottom-60  lg:left-54 md:bottom-72 md:top:20 md:left-52 sm:bottom-80 sm:top:20 sm:left-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 case-studies-3"
          />

          {/* Bottom-right corner */}
          <img
            src="/images/casestudies/Group.png"
            alt="case-studies-4"
            className="absolute xl:bottom-60  xl:right-72 lg:bottom-60 lg:right-60 md:bottom-72 md:right-20 sm:bottom-80 sm:right-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 case-studies-4"
          />

          <section
            style={{ width: "100%", height: "auto", backgroundColor: "white" }}
            className="relative z-10"
          >
            <div
              className="uiuxhome-container"
              style={{ backgroundColor: "#fff", width: "100%" }}
            >
              {/* Home content container */}
              <div className="uiux-header relative z-10 text-center flex flex-col justify-center items-center">
                <h1 className="text-3xl lg:text-6xl md:text-4xl sm:3xl font-bold">
                  Case Studies
                </h1>
                <p
                  className="text-center text-base lg:text-base sm:text-sm text-semibold lg:px-36 md:px-28 sm:px-16 case-para"
                  style={{ width: "85%" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  reiciendis officia vitae temporibus perspiciatis Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Dolor tenetur
                  beatae
                </p>

                {/* Home image container */}
                <div className="Home-image-containers relative z-20 sm:mt-10">
                  {/* Image */}
                  <div className="">
                    <img
                      src="/images/casestudies/Group 802.png"
                      alt="case-img"
                      className="w-full max-w-[300px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[500px] xl:max-w-[600px] "
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="md:absolute bottom-0 left-0 w-full z-10">
              <img src="/images/bg.svg" alt="bg" className="w-full h-1/2" />
            </div> */}
          </section>
        </div>

        {/* seated section */}
        <section className="card-data relative bottom-20 z-20">
          <div className=" flex justify-center items-center h-auto">
            {/* card section */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4  p-2">
              {cardsData.map((card, index) => (
                <div
                  key={card.id}
                  className="case-card border relative"
                  style={{
                    width: "310px",
                    height: "410px",
                    backgroundColor: "#fff",
                    borderRadius: "15px",
                    boxShadow: " rgba(17, 17, 26, 0.1) 0px 0px 16px ",
                  }}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                >
                  <img
                    src={card.imageUrl}
                    alt="card-img"
                    className="p-2  rounded-2xl"
                  />
                  <p className="font-bold p-2 text-xl lg:text-lg w-3/4">
                    {card.title}
                  </p>
                  <p className="ps-2 pe-1 lg:text-sm sm:text-xs case-desc">
                    {card.description}
                  </p>

                  {hover === index && (
                    <div className="hover-text absolute inset-0 flex flex-col   items-center justify-center line-clamp-6 bg-yellow-500  text-black text-lg font-bold opacity-0  transition-opacity duration-300 leading-relaxed">
                      <img
                        src="/images/casestudies/Group 797.png"
                        alt="case-icon"
                        className="text-black"
                      />
                      <p className="text-black">Case Study</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* card section ends */}

            {/* Hover text */}
            {/* <div className="hover-text absolute inset-0 flex items-center justify-center bg-yellow-500  text-black text-3xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Hello
              </div> */}
          </div>
          <div className="w-full flex justify-center p-10">
            <button
              className="bg-black text-white rounded-2xl w-32 py-2 mx-auto"
              onClick={handleClick}
            >
              Show More
            </button>
          </div>
        </section>
      </div>

      <section className="py-8 relative bottom-32">
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

export default casestudies;
