"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import "./creative.css";
import { DesignCarousel4 } from "../designanddevelopment/designcarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/custom/customTab";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Footer from "@/components/ui/footer";
import DashedLineWithCircleAnimation from "../ui/ux/framer";
import Footercrm from "@/components/ui/footercrm";
import { CarouselPlugins } from "@/components/ui/carouselcard2";
import Navbarheader from "@/components/ui/navbarheader";

const CreativeSolution = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  // State to track the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to update the window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine whether to show the DashedLineWithCircleAnimation component
  const shouldShowDashedLine = windowWidth >= 1024;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.getElementById("service-section");
      if (!serviceSection) return;

      const rect = serviceSection.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        setShowBeforeAfter(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imagess = [
    {
      logoSrc: "/images/creativecar/Group 713.svg",
      title: "User-Centered Design",
      content:
        "Quick, efficient responses enhance user satisfaction and streamline communication.",
    },
    {
      logoSrc: "/images/creativecar/Group 714.svg",
      title: "Responsive Design",
      content:
        "Enhance your online presence with a modern, user-friendly website.",
    },
    {
      logoSrc: "/images/creativecar/Group 715.svg",
      title: "Consistency",
      content:
        "Boost customer engagement with seamless WhatsApp integration for real-time communication",
    },
  ];

  const [hover, setHover] = useState(false);
  const content = "Travel with Us";

  const [hovered, setHovered] = useState(false);
  const contents = "Make a call";

  const [isHovered, setIsHovered] = useState(false);
  const contentt = "Email Us";

  const itemsPerSlide = 2;

  const groupItems = (items, itemsPerSlide) => {
    const groups = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      groups.push(items.slice(i, i + itemsPerSlide));
    }
    return groups;
  };

  const groupedItems = groupItems(imagess, itemsPerSlide);

  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="relative z-20">
        {/* <Navbar style={{ height: "10%" }} /> */}
        <Navbarheader />
        <div className="w-full overflow-hidden xl:mb-0 lg:mb-10 relative z-0">
          {/* Home section */}
          <div className="relative ">
            <img
              src="/images/Home-icons/Group 690.png"
              alt="Home-icon-9"
              className="absolute lg:top-2 lg:left-40 md:top-0 md:left-16  sm:top-1 sm:left-7  w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-9 xl:top-4"
            />

            {/* Top-right corner */}
            <img
              src="/images/Home-icons/Group 688.png"
              alt="Home-icon-10"
              className="absolute lg:top-2 lg:right-40  md:top-2 md:right-20  sm:top-1 sm:right-7 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-10 xl:top-4"
            />

            {/* Bottom-left corner */}
            <img
              src="/images/Home-icons/Group 687.png"
              alt="Home-icon-11"
              className="absolute  xl:left-50 lg:bottom-72  lg:left-48 md:bottom-80 md:top:20 md:left-40 sm:bottom-80 sm:top:20 sm:left-24 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-11 xl:left-60"
            />

            {/* Bottom-right corner */}
            <img
              src="/images/Home-icons/Group.png"
              alt="Home-icon-12"
              className="absolute  xl:right-50  lg:bottom-80 lg:right-48 md:bottom-80 md:right-40 sm:bottom-80 sm:right-24 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-12 xl:right-60"
            />

            <section style={{ width: "100%", height: "50%" }}>
              <div
                className="flex flex-col items-center uiuxhome-container headercontainers h-full md:h-1/2 sm:1/2 lg:h-screen"
                style={{ width: "100%" }}
              >
                {/* Home content container */}
                <div className="uiux-header relative z-10 text-center">
                  <h1 className="headingss">Creative Solutions</h1>
                  <p className="paragraphss">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="p-1 overflow-hidden flex justify-center md:justify-start">
                    <button
                      className="mt-3 btn-btn text-center relative font-bold py-2 px-4 rounded mb-16"
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
                  {/* Home image container */}
                  <div className="Home-image-container lg:mt-0   xl:mt-10  md:mt-36 relative z-20 sm:mt-40">
                    <div className="w-full flex flex-col items-center relative">
                      {/* Image */}
                      <div className="flex justify-center relative z-10 lg:top-28 lg:right-8 md:right-8 md:bottom-24 md:top-4 sm:right-8 sm:bottom-8 Kindimgpos">
                        {/* <div> */}
                        <img
                          src="/images/creativehome/Group 724.png"
                          alt="Kind-img"
                          className="w-full sm:max-w-[500px] md:max-w-[440px] xl:max-w-[580px] lg:max-w-[480px] object-contain Kindimg2 relative xl:top-0 xl:bottom-20 lg:top-4 lg:left-12 md:top-0  md:left-10 sm:top-0 sm:left-8 xl:left-9"
                        />
                      </div>
                      {/* Text Rotate Container */}
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <section className="overflow-visible">
                          <div className="relative lg:top-40 xl:top-28 md:top-8">
                            <div className="circle-texts flex items-center justify-center text-rotate-container">
                              <svg
                                className="overflow-visible w-full sm:h-1/2 md:w-3/4 lg:h-1/3 xl:h-1/4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="transparent"
                                viewBox="0 0 250.5 250.5"
                                // height={324.4}
                                style={{ height: "auto" }}
                              >
                                <defs>
                                  <path
                                    d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                                    id="wgl-path-7e10935"
                                  ></path>
                                </defs>
                                <text fill="#CACACA">
                                  <textPath
                                    className="text-uppercase"
                                    id="wgl-text-path-7e10935"
                                    href="#wgl-path-7e10935"
                                    startOffset="0"
                                  >
                                    Innovative Interfaces Exceptional Experience
                                    &nbsp;&nbsp;Innovative Interfaces
                                    Exceptional Experience
                                  </textPath>
                                </text>
                              </svg>
                            </div>
                          </div>
                        </section>
                      </div>
                      {/* <RotatingText /> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div
            className="w-full lg:mt-1 md:py-12 md:mt-10 xl:-mt-10"
            id="service-section"
          >
            <p className="text-4xl font-bold text-center lg:mt-1">Service</p>
            {showBeforeAfter && <CarouselPlugins />}
          </div>
        </div>

        {/* <CarouselPlugins /> */}

        <section className="lg:mb-20 workflow-containers mt-20 relative">
          <div className="md:text-4xl text-2xl text-center md:py-4 font-extrabold">
            <p class="">Workflow</p>
          </div>
          <div class="w-full flex justify-center lg:mt-6  mt-4 ">
            {shouldShowDashedLine && (
              <div className="absolute z-10 lg:top-36">
                <DashedLineWithCircleAnimation />
              </div>
            )}
            <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-12 gap-6 lg:p-0 p-3 z-20">
              <div class="flex flex-col items-center text-center">
                <img
                  src="/images/requirement.png"
                  class="lg:w-48 lg:h-48 w-48 h-48 object-contain"
                />
                <span class="lg:mt-6 mt-3 font-semibold text-md block md:text-lg lg:text-base ">
                  Requirement Gathering
                </span>
              </div>
              <div class="flex flex-col items-center text-center">
                <img
                  src="/images/wireframe.png"
                  class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
                />
                <span class="lg:mt-6 mt-3  font-semibold lg:text-base text-md block">
                  Wireframe
                </span>
              </div>
              <div class="flex flex-col items-center text-center">
                <img
                  src="/images/develop.png"
                  class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
                />
                <span class="lg:mt-6 mt-3   font-semibold lg:text-base text-md block">
                  Development
                </span>
              </div>
              <div class="flex flex-col items-center text-center">
                <img
                  src="/images/testing.png"
                  class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
                />
                <span class="lg:mt-6 mt-3  font-semibold lg:text-base text-md block">
                  Testing
                </span>
              </div>
              <div class="flex flex-col items-center text-center">
                <img
                  src="/images/deliver.png"
                  class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
                />
                <span class="lg:mt-6 mt-3  font-semibold lg:text-base text-md block">
                  Delivery
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Some of our work */}
        <section className="w-full py-8 px-4 md:px-8 lg:px-16">
          <div className="mb-6 text-center">
            <h5 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Some of our work
            </h5>
          </div>
        </section>

        <section>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
            <img
              src="/images/creativegif/gif1.gif"
              alt=""
              className="w-full h-auto object-cover"
            />
            <img
              src="/images/creativegif/gif2.gif"
              alt=""
              className="w-full h-auto object-cover"
            />
            <img
              src="/images/creativegif/image 55.png"
              alt=""
              className="w-full h-auto object-cover"
            />
            <img
              src="/images/creativegif/image 56.png"
              alt=""
              className=" w-full h-auto object-cover"
            />
            <img
              src="/images/creativegif/gif3.gif"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Carousel section */}

        <section className="lg:py-4 py-4 bg-[#F9F9F9] mt-10 container">
          <div className="text-4xl text-center md:py-4  font-extrabold md:mb-0 mb-4">
            <p class="">Features</p>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-sm md:text-base text-center lg:w-7/12 md:w-11/12 md:mt-0 mt-2">
              Discover the essential features that make modern websites shine.
              <span className="hidden md:inline">
                {
                  " Add these to make your site look great, work smooth, and keep visitors happy."
                }
              </span>
              <span className="inline md:hidden">
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
                    <span className="lg:w-full flex justify-center">
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </span>
                    <button onClick={toggleReadMore} className="text-[#FF6C37]">
                      Show Less
                    </button>
                  </>
                )}
              </span>
            </p>
          </div>

          <div className="w-full flex justify-center py-10 ">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              className="w-11/12 lg:max-w-5xl rounded-xl "
            >
              <CarouselContent className="flex  ">
                {imagess.map((item, index) => (
                  <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 rounded-xl drop-shadow-sm ">
                    <div className="p-1" key={index}>
                      <Card className="bg-gray-50 rounded-2xl shadow-md">
                        <CardContent className="flex flex-col aspect-square items-center justify-center  ">
                          <img
                            src={item.logoSrc}
                            alt={`Logo ${index}`}
                            className=""
                          />
                          <span className="lg:text-xl md:text-lg text-md font-semibold mt-2">
                            {item.title}
                          </span>
                          <span className="text-sm mt-3 text-center">
                            {item.content}{" "}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="" />
              <CarouselNext />
            </Carousel>
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

export default CreativeSolution;
