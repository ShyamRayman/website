"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import "./review.css";
import ReactStars from "react-stars";
import { Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons/lib/icons";
import { CheckOutlined } from "@ant-design/icons/lib/icons";
import Footercrm from "@/components/ui/footercrm";
import Footer from "@/components/ui/footer";
import Navbarheader from "@/components/ui/navbarheader";

const cardData = [
  {
    title: "Qatar Factory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/images/clientreview/Mask group.jpg",
    imageicon: "/images/clientreview/Group 745.svg",
  },
  {
    title: "Global Engineering",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    imageUrl: "/images/clientreview/Mask group.jpg",
    imageicon: "/images/clientreview/Ashford Therapyhub_Logo (1) 2.svg",
  },
  {
    title: "Ashford Therapyhub",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    imageUrl: "/images/clientreview/Mask group.jpg",
    imageicon: "/images/clientreview/image 35.svg",
  },

  {
    title: "Tamilan Tiles",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    // imageUrl: "/images/clientreview/Mask group.jpg",
    // iframevid:"https://www.youtube.com/embed/6m9sM5dE1oE?si=PS7U1sU41rjrWQqP",
    videofiles:
      "Inventory Management Software_ERP Module_HUGE IT SOLUTIONS_Indian Software Company_Indian IT.mp4",
    imageicon: "/images/clientreview/tt_official_lg (1) 3.svg",
  },
  {
    title: "Infonet",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageicon: "/images/clientreview/infonet_logo (1) 2.svg",
  },
];

const ReviewFromClients = () => {
  const [showData, setShowData] = useState(0);
  const [isReadMore, setIsReadMore] = useState(false);
  const [hover, setHover] = useState(false);
  const content = "Travel with Us";

  const [hovered, setHovered] = useState(false);
  const contents = "Make a call";

  const [isHovered, setIsHovered] = useState(false);
  const contentt = "Email Us";

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
    <div className="relative z-10">
      {/* Navbar Section */}
      
      {/* <Navbar /> */}
      <Navbarheader />

    

      {/* Home section */}
      <div className="relative z-0">
        <img
          src="/images/clientreview/Group.svg"
          alt="client-review-1"
          className="absolute xl:top-3 xl:left-40  md:top-0 md:left-16  sm:top-1 sm:left-7  w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 client-review-1"
        />

        {/* Top-right corner */}
        <img
          src="/images/clientreview/Group 762.svg"
          alt="client-review-2"
          className="absolute xl:top-3 xl:right-40  md:top-2 md:right-20  sm:top-1 sm:right-7 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 client-review-2"
        />

        {/* Bottom-left corner */}
        <img
          src="/images/clientreview/Group 804.svg"
          alt="client-review-3"
          className="absolute xl:bottom-60  xl:left-72 lg:bottom-80  lg:left-54 md:bottom-80 md:top:20 md:left-40 sm:bottom-80 sm:top:20 sm:left-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 client-review-3"
        />

        {/* Bottom-right corner */}
        <img
          src="/images/clientreview/Group 763.svg"
          alt="client-review-4"
          className="absolute xl:bottom-60  xl:right-72 lg:bottom-80 lg:right-60 md:bottom-80 md:right-40 sm:bottom-80 sm:right-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 client-review-4"
        />

        <section
          style={{ width: "100%", height: "auto", backgroundColor: "white" }}
        >
          <div
            className="uiuxhome-container"
            style={{ backgroundColor: "#fff", width: "100%" }}
          >
            {/* Home content container */}
            <div className="uiux-header relative z-10 text-center flex flex-col justify-center items-center">
              <h1 className="text-3xl lg:text-6xl md:text-4xl sm:3xl font-bold">
                Words from our Clients
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
                    src="/images/clientreview/Group 732.png"
                    alt="case-img"
                    className="w-full max-w-[300px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[500px] xl:max-w-[600px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="review-content">
        <div className="h-auto w-full">
          {/* card section */}
          <div className="flex flex-wrap lg:flex-row sm:flex-col justify-center items-center gap-10 lg:mt-10 p-2 w-full mx-auto">
            <div className="flex flex-col items-center">
              {cardData.slice(0, 2).map((card, index) => (
                <div
                  key={card.id}
                  className="case-card border relative mb-3 transform hover:-translate-y-5 transition-transform duration-200 ease-in-out"
                  style={{
                    width: "100%", // Adjust width for centering
                    maxWidth: "500px",
                    backgroundColor: "#fff",
                    borderRadius: "15px",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                  }}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                >
                  <img
                    src={card.imageicon}
                    alt="home-icon"
                    className="absolute h-12 w-12 bg-white p-3 rounded-full top-4 left-4 "
                  />
                  {/* <img src={card.imageUrl} alt="" className='p-2 rounded-2xl' /> */}
                  {card.imageUrl ? (
                    <img
                      src={card.imageUrl}
                      alt=""
                      className="p-2 rounded-2xl"
                    />
                  ) : card.videofiles ? (
                    // <video width="600" height="400" controls autoplay muted loop poster="poster.jpg">
                    //   <source src={card.videofiles} type="video/mp4" />
                    //   Your browser does not support the video tag.
                    // </video>
                    <iframe
                      width="200"
                      height="200"
                      src={card.iframevid}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <div className="p-2"></div> // empty container if no image or video
                  )}

                  <div className="p-3">
                    {card.imageUrl || card.videofiles ? (
                      <div>
                        <p className="font-bold p-2 lg:text-lg w-3/4 ">
                          {card.title}
                        </p>
                        <Rate
                          defaultValue={5}
                          count={5}
                          allowHalf
                          className="rating-star ms-1"
                        />
                        <p className="ps-2 pe-1 lg:text-sm sm:text-xs case-desc">
                          {card.description}
                        </p>
                      </div>
                    ) : (
                      <div className="">
                        <p className="font-bold p-2 lg:text-lg w-3/4 mt-6 relative bottom-8 left-10 ms-3">
                          {card.title}
                        </p>
                        <div className="relative bottom-6">
                          <Rate
                            defaultValue={5}
                            count={5}
                            allowHalf
                            className="rating-star ms-1"
                          />
                          <p className="ps-2 pe-1 lg:text-sm sm:text-xs case-desc">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {hover === index && (
                    <div className="hover-text absolute inset-0 flex flex-col items-center justify-center bg-yellow-500 bg-opacity-80 text-black text-lg font-bold opacity-0 transition-opacity duration-300 leading-relaxed">
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

            <div className="flex flex-col items-center">
              {cardData.slice(2, 5).map((card, index) => (
                <div
                  key={card.id}
                  className="case-card border relative mb-3 transform hover:-translate-y-5 transition-transform duration-200 ease-in-out"
                  style={{
                    width: "100%", // Adjust width for centering
                    maxWidth: "500px",
                    backgroundColor: "#fff",
                    borderRadius: "15px",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                  }}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                >
                  <img
                    src={card.imageicon}
                    alt="home-icon"
                    className="absolute h-12 w-12 bg-white p-3 rounded-full top-4 left-4 "
                  />
                  {/* <img src={card.imageUrl} alt="" className='p-2 rounded-2xl' /> */}
                  {card.imageUrl ? (
                    <img
                      src={card.imageUrl}
                      alt=""
                      className="p-2 rounded-2xl"
                    />
                  ) : card.videofiles ? (
                    <video
                      width="600"
                      height="400"
                      controls
                      autoplay
                      muted
                      loop
                      poster="poster.jpg"
                    >
                      <source src={card.videofiles} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="p-2"></div> // empty container if no image or video
                  )}
                  <div className="p-3">
                    {card.imageUrl || card.videofiles ? (
                      <div>
                        <p className="font-bold p-2 lg:text-lg w-3/4">
                          {card.title}
                        </p>
                        <Rate
                          defaultValue={5}
                          count={5}
                          allowHalf
                          className="rating-star ms-1"
                        />
                        <p className="ps-2 pe-1 lg:text-sm sm:text-xs case-desc">
                          {card.description}
                        </p>
                      </div>
                    ) : (
                      <div className="">
                        <p className="font-bold p-2 lg:text-lg w-3/4 mt-6 relative bottom-8 left-10 ms-3">
                          {card.title}
                        </p>
                        <div className="relative bottom-6">
                          <Rate
                            defaultValue={5}
                            count={5}
                            allowHalf
                            className="rating-star ms-1"
                          />
                          <p className="ps-2 pe-1 lg:text-sm sm:text-xs case-desc">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {hover === index && (
                    <div className="hover-text absolute inset-0 flex flex-col items-center justify-center bg-yellow-500 bg-opacity-80 text-black text-lg font-bold opacity-0 transition-opacity duration-300 leading-relaxed">
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
          </div>
        </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6m9sM5dE1oE?si=PS7U1sU41rjrWQqP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </section>

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

      

      <div className="fixed bottom-10 right-6">
        <div className="animate-bounce border border-white drop-shadow-xl w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center">
          <img src="/images/whats.svg" alt="image" className="w-3/4 h-3/4" />
        </div>
      </div>

      </div>
    </>
  );
};

export default ReviewFromClients;
