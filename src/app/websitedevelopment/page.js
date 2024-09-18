"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/ui/navbar";
import Icon from "../Icon";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/custom/customTab";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";

export default function Main() {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const [isCardsMore, setIsCardsMore] = useState(false);

  const toggleCardsMore = () => {
    setIsCardsMore(!isCardsMore);
  };
  const [isDynamicWeb, setIsDynamicWeb] = useState(false);

  const toggleDynamicWeb = () => {
    setIsDynamicWeb(!isDynamicWeb);
  };
  const [isDynamicWord, setIsDynamicWord] = useState(false);

  const toggleDynamicWord = () => {
    setIsDynamicWord(!isDynamicWord);
  };
  const [isEcommerceCus, setIsEcommerceCus] = useState(false);

  const toggleEcommerceCus = () => {
    setIsEcommerceCus(!isEcommerceCus);
  };
  const [isEcommerceWoo, setIsEcommerceWoo] = useState(false);

  const toggleEcommerceWoo = () => {
    setIsEcommerceWoo(!isEcommerceWoo);
  };
  const images = [
    {
      logoSrc: "/images/response.svg",
      title: "Responsiveness",
      content:
        "Quick, efficient responses enhance user satisfaction and streamline communication.",
    },
    {
      logoSrc: "/images/social.svg",
      title: "Social Media Integration",
      content:
        "Enhance your online presence with a modern, user-friendly website.",
    },
    {
      logoSrc: "/images/whatsapp.svg",
      title: "Whatsapp Integration",
      content:
        "Boost customer engagement with seamless WhatsApp integration for real-time communication",
    },
    {
      logoSrc: "/images/domain.svg",
      title: "Domain",
      content: "Lorem Ipsum is simply dummy text  typesetting industry.",
    },
    {
      logoSrc: "/images/server.svg",
      title: "Server",
      content: "Lorem Ipsum is simply dummy text  typesetting industry.",
    },
    {
      logoSrc: "/images/ssl.svg",
      title: "SSL",
      content: "Lorem Ipsum is simply dummy text  typesetting industry.",
    },
    {
      logoSrc: "/images/securities.svg",
      title: "Security",
      content: "Cookies , captcha, JWT",
    },
    {
      logoSrc: "/images/chatbot.svg",
      title: "Chatbot",
      content: "",
    },
    {
      logoSrc: "/images/perform.svg",
      title: "Performance",
      content: "CDN",
    },
    {
      logoSrc: "/images/speed.svg",
      title: "Speed",
      content: "",
    },
    {
      logoSrc: "",
      title: "Google Analytics",
      content: "",
    },
    {
      logoSrc: "",
      title: "Google Map",
      content: "",
    },
    {
      logoSrc: "",
      title: "Contact Form",
      content: "",
    },
    {
      logoSrc: "",
      title: "SEO",
      content: "",
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

  const groupedItems = groupItems(images, itemsPerSlide);

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
    <div className="">
      <Navbar />
      <section className="bg-white lg:py-28 py-2">
        <div className="lg:max-w-6xl relative  mx-auto  flex flex-col lg:flex-row md:flex-row justify-between lg:gap-56  items-center">
          <div className="lg:w-1/2 md:w-1/2 lg:ml-5 md:ml-5 relative ">
            <h2 className="lg:text-6xl text-4xl lg:mr-4 font-extrabold ">
              <img
                src="/images/line.png"
                className="relative lg:top-14 top-8 lg:w-64 md:w-40 w-40 lg:ml-0 md:ml-0 ml-28"
              />{" "}
              <span className="absolute w-full flex  md:justify-start justify-center">
                Website
              </span>{" "}
              <br />{" "}
              <span className="w-full flex  md:justify-start justify-center">
                Development
              </span>
            </h2>
            <p className="mt-4   md:font-semibold md:w-full md:text-start  text-center md:text-base ">
              Elevate your digital presence with our expertise in crafting
              innovative and transformative websites.
            </p>
            <div className="p-1 overflow-hidden w-full flex justify-center md:justify-start">
              <button
                className="mt-3 btn-btn  text-center relative "
                style={{
                  border: " 2px solid",
                  padding: "10px 20px",
                  borderRadius: "15px",
                }}
              >
                <div className="w-8 h-6 btn "></div>
                <p className=" relative top-0 left-0 z-2 font-semibold text-base">
                  See Portfolio
                </p>
              </button>
            </div>
          </div>
          <div className=" mt-56  md:mt-32 lg:ml-20 md:ml-20  ">
            <img
              className=" absolute lg:top-10 top-80 lg:right-0 right-10 lg:w-80 md:w-1/3 w-1/2 lg:mx-0 mx-auto h-auto object-cover  "
              src="/images/p1 2.png"
              alt="Example"
            />
            <img
              src="/images/p2 (1).png"
              className="absolute lg:top-16 top-80 right-14 lg:-right-10 lg:w-[320px] md:w-[200px] w-48  scale-in "
            />
            <img
              src="/images/p3.png"
              className="absolute lg:top-14 top-72 right-16 lg:-right-12 lg:w-[320px] md:w-[200px] w-48   scale-img"
            />
            <img
              src="/images/p4.png"
              className="absolute lg:top-12 top-64 right-20 lg:-right-16 lg:w-[320px] md:w-[200px] w-48 scale-image"
            />
          </div>
        </div>
      </section>
      <div className="relative">
        <section className="bg-gray-50 py-8 my-24 relative w-full min-w-screen ">
          <div className="max-w-6xl mx-auto ">
            <div className="md:flex md:flex-col flex-row justify-center items-center">
              <h1 className="text-4xl  font-extrabold text-center">Service</h1>

              <Tabs defaultValue="static" className=" md:w-full">
                <div className="w-full flex justify-center mt-2 mb-6">
                  <TabsList className="grid  grid-cols-3 md:gap-0 gap-6 md:h-16 h-14 mt-4 rounded-3xl ">
                    <TabsTrigger value="static" className="hover:bg-gray-100">
                      Static
                    </TabsTrigger>
                    <TabsTrigger value="dynamic" className="hover:bg-gray-100">
                      Dynamic
                    </TabsTrigger>
                    <TabsTrigger
                      value="e-commerce"
                      className="hover:bg-gray-100"
                    >
                      E-Commerce
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="md:w-full justify-center  md:ml-0 flex leading-loose py-3">
                  <p className="text-sm md:text-base text-center">
                    Offering unparalleled speed and security, our static
                    websites provide a seamless
                    <span className="hidden md:inline">
                      {
                        "and efficient online presence,  perfect for businesses aiming for reliability and performance."
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
                          <span className="md:w-full flex justify-center">
                            and efficient online presence, perfect for
                            businesses aiming for reliability and performance.
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

                <TabsContent
                  value="static"
                  className="bg-transparent w-full grid lg:grid-cols-2 gap-4 lg:w-full rounded-2xl mt-8 sm:overflow-x-auto"
                >
                  <div className="bg-white lg:w-full md:w-11/12 w-11/12 lg:mx-0 mx-auto rounded-2xl">
                    <Card className="lg:h-full md:h-full rounded-2xl w-full">
                      <div className="w-11/12 mx-auto  h-64 mt-4">
                        <video
                          className="w-full h-full rounded-xl"
                          controls
                          src="path/to/your/video.mp4"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <CardHeader>
                        <CardTitle className="font-extrabold mt-2 md:text-2xl text-base">
                          Customized Website Solutions
                        </CardTitle>
                        <CardDescription className="font-medium  lg:text-base text-sm  py-2">
                          <span className="hidden md:inline">
                            At Huge IT Solutions, we understand that your
                            business is unique and deserves a website that
                            reflects your brand's distinct identity and goals.
                            Our customized website services are designed to
                            provide you with a tailor-made online presence that
                            stands out from the competition. Here's what sets
                            our customized websites apart:
                          </span>
                          <span className="lg:hidden">
                            {isExpanded
                              ? "At Huge IT Solutions, we understand that your business is unique and deserves a website that reflects your brand's distinct identity and goals. Our customized website services are designed to provide you with a tailor-made online presence that stands out from the competition. Here's what sets our customized websites apart:"
                              : "At Huge IT Solutions, we understand that your business is unique ..."}
                          </span>
                        </CardDescription>
                      </CardHeader>

                      <CardFooter
                        className={`${
                          isExpanded ? "block" : "hidden lg:block"
                        }`}
                      >
                        <div className="grid grid-cols-3 md:gap-10 gap-2 w-full items-center  ">
                          <div className="h-full ">
                            <div className="md:w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/brand.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Unique Brand Identity:
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/scale.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Scalability and <br />
                              Future-Proofing:
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/opt.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Optimized Performance:
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/collab.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Collaborative Design Process:
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/security.svg" />
                            </div>
                            <p className="tracking-tighter text-center md:text-base text-xs ">
                              Enhanced Security and Reliability:
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/security.svg" />
                            </div>
                            <p className=" text-center md:text-base text-xs ">
                              Advanced Functionality
                            </p>
                          </div>
                        </div>
                      </CardFooter>

                      {!isExpanded && (
                        <div className="lg:hidden flex justify-start ml-6  mb-4">
                          <button
                            onClick={handleReadMore}
                            className="text-[#FF6C37] "
                          >
                            Read More
                          </button>
                        </div>
                      )}
                      {isExpanded && (
                        <div className="lg:hidden flex justify-center  mb-4">
                          <button
                            onClick={handleReadMore}
                            className="text-[#FF6C37] "
                          >
                            show less
                          </button>
                        </div>
                      )}
                    </Card>
                  </div>
                  <div className="bg-white   lg:w-full md:w-11/12 w-11/12 lg:mx-0 mx-auto  lg:max-h-full rounded-2xl ">
                    <Card className="h-full rounded-2xl w-full">
                      <div className="w-11/12 mx-auto h-64 mt-4">
                        <img
                          className="w-full h-full rounded-xl"
                          src="/images/image 6.png"
                          alt="images"
                        />
                      </div>

                      <CardHeader>
                        <CardTitle className="font-extrabold mt-2 md:text-2xl text-base">
                          Professional Website Templates
                        </CardTitle>
                        <CardDescription className="font-medium  md:text-base text-sm  py-2">
                          <span className="hidden md:inline">
                            For businesses looking for a quick and
                            cost-effective way to establish an online presence,
                            Huge IT Solutions offers a range of professionally
                            designed website templates. Our templates are
                            crafted with the same attention to detail and
                            quality as our custom websites, ensuring you get a
                            stunning and functional website in no time. Key
                            features of our website templates include:
                          </span>
                          <span className="lg:hidden">
                            {isCardsMore
                              ? "For businesses looking for a quick and cost-effective way to establish an online presence, Huge IT Solutions offers a range of professionally designed website templates. Our templates are crafted with the same attention to detail and quality as our custom websites, ensuring you get a stunning and functional website in no time. Key features of our website templates include:"
                              : "For businesses looking for a quick and cost-effective way to establish  ..."}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardFooter
                        className={`${
                          isCardsMore ? "block" : "hidden lg:block"
                        }`}
                      >
                        <div className="grid grid-row-2 gap-6 md:ml-6  h-full">
                          <div className="grid grid-cols-3 md:gap-10 w-full items-center mb-2">
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                High-Quality Design
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                Responsive Layout
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs  tracking-tighter">
                                Easy Customization
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-10 w-full items-center mb-2">
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                SEO-Friendly
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                Fast Load Times
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                Built-In Security
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardFooter>

                      {!isCardsMore && (
                        <div className="lg:hidden flex justify-start ml-6  mb-4">
                          <button
                            onClick={toggleCardsMore}
                            className="text-[#FF6C37] "
                          >
                            Read More
                          </button>
                        </div>
                      )}
                      {isCardsMore && (
                        <div className="lg:hidden flex justify-center  mb-4">
                          <button
                            onClick={toggleCardsMore}
                            className="text-[#FF6C37] "
                          >
                            show less
                          </button>
                        </div>
                      )}
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent
                  value="dynamic"
                  className=" bg-transparent w-full grid lg:grid-cols-2 gap-4 lg:w-full rounded-2xl  sm:overflow-x-auto"
                >
                  <div className="bg-white lg:w-full md:w-11/12 w-11/12 lg:mx-0 mx-auto rounded-2xl">
                    <Card className="lg:h-full md:h-full rounded-2xl w-full">
                      <div className="w-11/12 mx-auto  h-64 mt-4">
                        <video
                          className="w-full h-full rounded-xl"
                          controls
                          src="path/to/your/video.mp4"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <CardHeader>
                        <CardTitle className="font-extrabold mt-2 md:text-2xl text-base">
                          Customized CMS Websites
                        </CardTitle>
                        <CardDescription className="font-medium  lg:text-base text-sm  py-2">
                          <span className="hidden md:inline">
                            A Customized Content Management System (CMS)
                            provides the flexibility and control needed for
                            businesses with unique requirements. Our customized
                            CMS solutions are designed to offer a bespoke
                            platform that fits perfectly with your operational
                            needs. Here’s what you can expect:
                          </span>
                          <span className="lg:hidden">
                            {isDynamicWeb
                              ? "A Customized Content Management System (CMS) provides the flexibility and control needed for businesses with unique requirements. Our customized CMS solutions are designed to offer a bespoke platform that fits perfectly with your operational needs. Here’s what you can expect:"
                              : " A Customized Content Management System (CMS) provides the flexibility  ..."}
                          </span>
                        </CardDescription>
                      </CardHeader>

                      <CardFooter
                        className={`${
                          isDynamicWeb ? "block" : "hidden lg:block"
                        }`}
                      >
                        <div className="grid grid-cols-3 md:gap-10 gap-2 w-full items-center  ">
                          <div className="h-full ">
                            <div className="md:w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/brand.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Tailored Functionality
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/scale.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Scalable Architecture
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/opt.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              User Roles and Permissions
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/collab.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Advanced Security
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/security.svg" />
                            </div>
                            <p className=" text-center md:text-base text-xs ">
                              Seamless Integration <br />
                              and Reliability:
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/security.svg" />
                            </div>
                            <p className=" text-center md:text-base text-xs ">
                              Ongoing Support
                            </p>
                          </div>
                        </div>
                      </CardFooter>

                      {!isDynamicWeb && (
                        <div className="lg:hidden flex justify-start ml-6  mb-4">
                          <button
                            onClick={toggleDynamicWeb}
                            className="text-[#FF6C37] "
                          >
                            Read More
                          </button>
                        </div>
                      )}
                      {isDynamicWeb && (
                        <div className="lg:hidden flex justify-center  mb-4">
                          <button
                            onClick={toggleDynamicWeb}
                            className="text-[#FF6C37] "
                          >
                            show less
                          </button>
                        </div>
                      )}
                    </Card>
                  </div>
                  <div className="bg-white   lg:w-full md:w-11/12 w-11/12 lg:mx-0 mx-auto  lg:max-h-full rounded-2xl ">
                    <Card className="h-full rounded-2xl w-full">
                      <div className="w-11/12 mx-auto h-64 mt-4">
                        <img
                          className="w-full h-full rounded-xl"
                          src="/images/image 6.png"
                          alt="images"
                        />
                      </div>

                      <CardHeader>
                        <CardTitle className="font-extrabold mt-2 md:text-2xl text-base">
                          WordPress/Elementor Websites
                        </CardTitle>
                        <CardDescription className="font-medium  md:text-base text-sm  py-2">
                          <span className="hidden md:inline">
                            WordPress and Elementor provide powerful and
                            flexible solutions for dynamic websites, ideal for
                            businesses looking for ease of use and a wide range
                            of features. Our WordPress/Elementor website
                            services offer a balance of functionality and
                            simplicity. Key features include:
                          </span>
                          <span className="lg:hidden">
                            {isDynamicWord
                              ? "WordPress and Elementor provide powerful and flexible solutions for dynamic websites, ideal for businesses looking for ease of use and a wide range of features. Our WordPress/Elementor website services offer a balance of functionality and simplicity. Key features include:"
                              : "  WordPress and Elementor provide powerful and flexible solutions for dynamic websites ..."}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardFooter
                        className={`${
                          isDynamicWord ? "block" : "hidden lg:block"
                        }`}
                      >
                        <div className="grid grid-row-2 gap-6 md:ml-6  h-full">
                          <div className="grid grid-cols-3 md:gap-10 w-full items-center mb-2">
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                Easy Customization
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                User-Friendly Interface
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs  tracking-tighter">
                                Extensive Plugin Library
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-10 w-full items-center mb-2">
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                Responsive Design
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                SEO Optimization
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                Community Support
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardFooter>

                      {!isDynamicWord && (
                        <div className="lg:hidden flex justify-start ml-6  mb-4">
                          <button
                            onClick={toggleDynamicWord}
                            className="text-[#FF6C37] "
                          >
                            Read More
                          </button>
                        </div>
                      )}
                      {isDynamicWord && (
                        <div className="lg:hidden flex justify-center  mb-4">
                          <button
                            onClick={toggleDynamicWord}
                            className="text-[#FF6C37] "
                          >
                            show less
                          </button>
                        </div>
                      )}
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent
                  value="e-commerce"
                  className=" bg-transparent w-full grid lg:grid-cols-2 gap-4 lg:w-full rounded-2xl  sm:overflow-x-auto"
                >
                  <div className="bg-white lg:w-full md:w-11/12 w-11/12 lg:mx-0 mx-auto rounded-2xl">
                    <Card className="lg:h-full md:h-full rounded-2xl w-full">
                      <div className="w-11/12 mx-auto  h-64 mt-4">
                        <video
                          className="w-full h-full rounded-xl"
                          controls
                          src="path/to/your/video.mp4"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <CardHeader>
                        <CardTitle className="font-extrabold mt-2 md:text-2xl text-base">
                          Custom Ecommerce Websites
                        </CardTitle>
                        <CardDescription className="font-medium  lg:text-base text-sm  py-2">
                          <span className="hidden md:inline">
                            Our custom ecommerce websites are built from
                            scratch, tailored to your unique business needs and
                            specifications. We work closely with you to create
                            an ecommerce platform that aligns perfectly with
                            your brand and goals. Here’s what our custom
                            ecommerce solutions include: 's distinct identity
                            and goals. Our customized website services are
                            designed to provide you with a tailor-made online
                            presence that stands out from the competition.
                            Here's what sets our customized websites apart:
                          </span>
                          <span className="lg:hidden">
                            {isEcommerceCus
                              ? "Our custom ecommerce websites are built from scratch, tailored to your unique business needs and specifications. We work closely with you to create an ecommerce platform that aligns perfectly with your brand and goals. Here’s what our custom ecommerce solutions include's distinct identity and goals. Our customized website services are designed to provide you with a tailor-made online presence that stands out from the competition. Here's what sets our customized websites apart:"
                              : "Our custom ecommerce websites are built from scratch, tailored to your unique  ..."}
                          </span>
                        </CardDescription>
                      </CardHeader>

                      <CardFooter
                        className={`${
                          isEcommerceCus ? "block" : "hidden lg:block"
                        }`}
                      >
                        <div className="grid grid-cols-3 md:gap-10 gap-2 w-full items-center  ">
                          <div className="h-full ">
                            <div className="md:w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/brand.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Personalized Design
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/scale.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Custom Functionality
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/opt.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Scalable Architecture
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/collab.svg" />
                            </div>
                            <p className="text-center md:text-base text-xs ">
                              Advanced Security
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/security.svg" />
                            </div>
                            <p className="tracking-tighter text-center md:text-base text-xs ">
                              Seamless Integration and Reliability:
                            </p>
                          </div>
                          <div className="h-full">
                            <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                              <img src="/images/security.svg" />
                            </div>
                            <p className=" text-center md:text-base text-xs ">
                              Dedicated Support
                            </p>
                          </div>
                        </div>
                      </CardFooter>

                      {!isEcommerceCus && (
                        <div className="lg:hidden flex justify-start ml-6  mb-4">
                          <button
                            onClick={toggleEcommerceCus}
                            className="text-[#FF6C37] "
                          >
                            Read More
                          </button>
                        </div>
                      )}
                      {isEcommerceCus && (
                        <div className="lg:hidden flex justify-center  mb-4">
                          <button
                            onClick={toggleEcommerceCus}
                            className="text-[#FF6C37] "
                          >
                            show less
                          </button>
                        </div>
                      )}
                    </Card>
                  </div>
                  <div className="bg-white   lg:w-full md:w-11/12 w-11/12 lg:mx-0 mx-auto  lg:max-h-full rounded-2xl ">
                    <Card className="h-full rounded-2xl w-full">
                      <div className="w-11/12 mx-auto h-64 mt-4">
                        <img
                          className="w-full h-full rounded-xl"
                          src="/images/image 6.png"
                          alt="images"
                        />
                      </div>

                      <CardHeader>
                        <CardTitle className="font-extrabold mt-2 md:text-2xl text-base">
                          WooCommerce & Shopify Customization
                        </CardTitle>
                        <CardDescription className="font-medium  md:text-base text-sm  py-2">
                          <span className="hidden md:inline">
                            WooCommerce & Shopify provides a powerful and
                            flexible platform for ecommerce, ideal for
                            businesses looking for a cost-effective solution. We
                            customize WooCommerce & Shopify based on templates
                            purchased by you, enhancing and tailoring the site
                            to fit your specific needs. Our WooCommerce &
                            Shopify customization services include:
                          </span>
                          <span className="lg:hidden">
                            {isEcommerceWoo
                              ? "WooCommerce & Shopify provides a powerful and flexible platform for ecommerce, ideal for businesses looking for a cost-effective solution. We customize WooCommerce & Shopify based on templates purchased by you, enhancing and tailoring the site to fit your specific needs. Our WooCommerce & Shopify customization services include:"
                              : "  WooCommerce & Shopify provides a powerful and flexible platform for ecommerce ..."}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardFooter
                        className={`${
                          isEcommerceWoo ? "block" : "hidden lg:block"
                        }`}
                      >
                        <div className="grid grid-row-2 gap-6 md:ml-6  h-full">
                          <div className="grid grid-cols-3 md:gap-10 w-full items-center mb-2">
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                Template Customization
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                Plugin Integration
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs  tracking-tighter">
                                User-Friendly Interface
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-10 w-full items-center mb-2">
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                Responsive Design
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                SEO Optimization
                              </p>
                            </div>
                            <div>
                              <div className="w-full flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src="/images/brand.svg" />
                              </div>
                              <p className="text-center md:text-base text-xs ">
                                Ongoing Support
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardFooter>

                      {!isEcommerceWoo && (
                        <div className="lg:hidden flex justify-start ml-6  mb-4">
                          <button
                            onClick={toggleEcommerceWoo}
                            className="text-[#FF6C37] "
                          >
                            Read More
                          </button>
                        </div>
                      )}
                      {isEcommerceWoo && (
                        <div className="lg:hidden flex justify-center  mb-4">
                          <button
                            onClick={toggleEcommerceWoo}
                            className="text-[#FF6C37] "
                          >
                            show less
                          </button>
                        </div>
                      )}
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className=" md:text-4xl text-2xl text-center py-16 font-extrabold">
            <p class="flex w-full justify-center gap-3">
              <span className="mt-1">Visit Us</span>{" "}
              <span class="bg-[#82B541] text-white inline-flex items-center  rounded-xl px-3 py-1">
                <img
                  src="/images/envato.svg"
                  alt="envato logo"
                  class="w-7 h-7 mr-1"
                />
                envato
              </span>{" "}
              <span className="hidden lg:flex mt-1">Marketplace</span>
            </p>
          </div>
          <p className="text-center md:text-4xl text-2xl font-extrabold ">
            Technology & Tools
          </p>
          <div className="w-full flex justify-center mt-4">
            <p className="md:text-base text-sm md:w-1/3 md:mr-0 mr-6 text-center tracking-wider ml-6 ">
              Discover the advanced tools and technologies our IT experts use to
              craft exceptional websites. We leverage the latest innovations to
              deliver tailored solutions for your business needs.
            </p>
          </div>

          <Icon />
        </section>
        {/* <Services /> */}
        <div className=" absolute bottom-0 ">
          <img src="/images/curvedbg.svg" alt="bg" className=" shadow-img" />
        </div>
      </div>
      <section className="lg:mb-20 mb-5">
        <div className="md:text-4xl text-2xl text-center md:py-4 font-extrabold">
          <p class="">Workflow</p>
        </div>
        <div class="w-full flex justify-center lg:mt-6  mt-4 ">
          <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-12 gap-6 lg:p-0 p-3">
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
      <section className="lg:py-4 py-4 bg-[#F9F9F9]">
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
                  <button onClick={toggleReadMore} className="text-[#FF6C37] ">
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

        {/* <div className="w-full flex justify-center py-10 relative">
          <Carousel
            autoPlay             
            interval={2000}     
            infiniteLoop        
            stopOnHover={false}  
            showStatus={false}   
            showThumbs={false}   
            showArrows         
            className="w-11/12 lg:max-w-5xl rounded-xl"
          >
            {groupedItems.map((group, index) => (
              <div key={index} className="flex justify-center ">
                {group.map((item, subIndex) => (
                  <div key={subIndex} className="p-1 w-full sm:w-full md:w-1/3 lg:w-1/3">
                    <div className="bg-[#FFFFFF] rounded-2xl shadow-md h-80 md:h-80 lg:h-96 xl:h-80">
                      <div className="flex flex-col items-center justify-center h-full">
                        <img src={item.logoSrc} alt={`Logo ${subIndex}`} className="h-32 md:h-24 lg:h-32 xl:h-24 w-auto object-contain -mt-10" />
                        <span className="lg:text-xl md:text-lg text-md font-semibold mt-2">{item.title}</span>
                        <span className="lg:text-base text-sm mt-3 text-center lg:w-11/12 w-full">{item.content}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
           <button
        onClick={handlePrevClick}
        className=" lg:flex hidden absolute left-48 top-1/2 z-10 focus:outline-none bg-[#EAEAEA] rounded-full"
      >
        <svg className="w-8 h-8 text-[#FFFFFF] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        className=" lg:flex hidden absolute right-48 top-1/2  z-10 focus:outline-none bg-[#EAEAEA] rounded-full"
      >
        <svg className="w-8 h-8 text-[#FFFFFF] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9.59 16.59L11 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
        </div> */}

        <div className="w-full flex justify-center py-10 ">
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-11/12 lg:max-w-5xl rounded-xl "
          >
            <CarouselContent className="flex  ">
              {images.map((item, index) => (
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

      <section className="py-8">
        <div className="md:text-4xl text-2xl text-center md:py-4 font-extrabold">
          <p class="">Partner With Us</p>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-sm md:text-base text-center tracking-tight lg:w-8/12  w-11/12 md:mt-0 mt-3">
            We understand how hard it is for you to find the perfect development
            partners. At Huge IT Solutions,
            <span className="hidden lg:inline">
              {
                " our experts will provide the consulting you need, analyze your requirements, and deliver the best solutions tailored to your industry and needs. Let us help you achieve your digital goals.Reach out to us now for a consultation and take the first step towards a powerful online presence."
              }
            </span>
            <span className="inline lg:hidden">
              {!isReadMore && (
                <>
                  ...{" "}
                  <button onClick={toggleReadMore} className="text-[#FF6C37] ">
                    Read More
                  </button>
                </>
              )}
              {isReadMore && (
                <>
                  <span className="lg:w-full  flex justify-center text-center">
                    our experts will provide the consulting you need, analyze
                    your requirements, and deliver the best solutions tailored
                    to your industry and needs. Let us help you achieve your
                    digital goals.Reach out to us now for a consultation and
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
            className={`button  ${hovered ? "hover" : ""} `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ "--button-content": `"${contents}" ` }}
          >
            <img src="/images/phone.svg" className="  -ml-3 hidden lg:flex" />
          </button>
          <button
            className={`button  ${isHovered ? "hover" : ""} `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ "--button-content": `"${contentt}" ` }}
          >
            <img src="/images/email.svg" className=" -ml-2 hidden lg:flex " />
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
              className={`button absolute lg:left-1/2 md:right-64 left-1/3 lg:top-36 md:top-32 top-20  mt-7 ${
                hover ? "hover" : ""
              }`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{ "--button-content": `"${content}"` }}
            ></button>
            {/* <Button className='  bg-[#191919]  text-white hover:bg-[#191919] rounded-2xl text-base font-semibold tracking-tighter md:py-6 '>Travel with Us</Button> */}
          </div>
        </section>
      </div>
      <Footer />
      <div className="fixed md:bottom-2 bottom-10 md:right-20 right-6">
        <div className=" animate-bounce border border-white drop-shadow-xl w-12 h-12 bg-[#FFFFFF] rounded-full absolute bottom-0 right-0 transform -translate-x-1/2">
          <img
            src="/images/whats.svg"
            alt="image"
            className="absolute inset-0 m-auto w-3/4 h-3/4"
          />
        </div>
      </div>
    </div>
  );
}
