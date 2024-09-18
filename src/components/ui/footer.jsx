import React from "react";

import Link from "next/link";
import Logo from "@/components/ui/logo";
// import "../../app/design/designui.css";
import "../../app/globals.css"

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] justify-center text-[#212042] lg:text-left ">
      <div className="mx-auto px-4 lg:px-20 py-6  justify-center md:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 footer-grid footer-margin overflow-hidden">
          <div className="ml-2 md:mb-0 mb-6 text-[#191919] ">
            <h6 className="mb-4 flex md:px-0 px-1.5 font-semibold uppercase md:justify-start text-[#191919] w-fit ">
              Quick Links
            </h6>

            <Link
              href="#home"
              className="text-sm md:mb-4 mb-2  md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm md:mb-4 mb-2  md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href="#work"
              className="text-sm md:mb-4 mb-2 md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer"
            >
              Service
            </Link>
            <Link
              href="#contact"
              className="text-sm md:mb-4 mb-2 md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer"
            >
              Potfolio
            </Link>
            <Link
              href="#contact"
              className="text-sm md:mb-4 mb-2 md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer"
            >
              Product
            </Link>
          </div>
          <div className="md:ml-4 ml-2 md:mb-0 mb-6 text-[#191919]">
            <h6 className="mb-4 md:px-0 px-1.5 flex font-semibold uppercase md:justify-start cursor-default">
              Services
            </h6>
            <h3 className="text-sm md:mb-4 mb-2 md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer">
              Website Development
            </h3>
            <h3 className="text-sm md:mb-4 mb-2 md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer">
              Mobile App Development
            </h3>
            <h3 className="text-sm md:mb-4 mb-2 md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer">
              Staff Augmentation
            </h3>
            <h3 className="text-sm md:mb-4 mb-2 md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer">
              ERP
            </h3>
            <h3 className="text-sm md:mb-4 mb-2 md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer">
              Graphic Design
            </h3>
          </div>
          <div className="md:ml-4 ml-2 md:mb-0 mb-6 text-[#191919]">
            <h6 className="mb-4 md:px-0 px-1.5 flex font-semibold uppercase md:justify-start cursor-default">
              Product
            </h6>
            <h3 className="text-sm md:mb-4 mb-2  md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer">
              CRM
            </h3>
            <h3 className="text-sm md:mb-4 mb-2  md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer">
              HRMS
            </h3>
            <h3 className="text-sm md:mb-4 mb-2  md:ml-0 ml-2 flex items-center gap-2 w-fit cursor-pointer">
              Inventory
            </h3>
          </div>
          <div className="md:mb-0 mb-6 text-[#191919] footer-contact">
            <h6 className="mb-4 md:px-0 flex font-semibold uppercase md:justify-start cursor-default">
              Contact Info
            </h6>
            <div className="text-sm md:mb-4 mb-2 md:ml-0 ml-1 flex items-center gap-2 w-fit cursor-pointer">
              <a href="">+91 9092090077</a>
            </div>
            <div className="text-sm md:mb-4 mb-2 md:ml-0 ml-1 flex items-center gap-2 w-fit cursor-pointer">
              <a href=""> sales@hugeitsolutions.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center lg:mt-0 mt-4">
        <div className="bg-white lg:w-8/12 w-11/12 rounded-xl h-20 md:mb-4 mb-16">
          <div className="md:flex md:flex-row flex-col justify-between">
            <div className="md:flex md:flex-row flex-col md:gap-2 md:ml-6 mt-1 md:mt-4">
              <img
                src="/images/Huge.svg"
                className=" md:w-24 w-16 md:text-none md:mx-0 mx-auto "
              />

              <p className="lg:mt-4  md:mt-4 mt-1 lg:text-xs text-xs md:ml-0 ml-2 md:tracking-normal tracking-tighter text-center">
                © Copyright 2024 HUGE IT SOLUTIONS | All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-row lg:gap-3 gap-2 lg:mt-6 mt-1 md:mt-8 md:ml-0 ml-28 mr-6 ">
              <img
                src="/images/fb.svg"
                className="lg:w-7 lg:h-7 w-5 h-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <img
                src="/images/insta.svg"
                className="lg:w-7 lg:h-7 w-5 h-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <img
                src="/images/Subtract.svg"
                className="lg:w-7 lg:h-7 w-5 h-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <img
                src="/images/yt.svg"
                className="lg:w-7 lg:h-7 w-5 h-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <img
                src="/images/Linked In.svg"
                className=" lg:w-7 lg:h-7 w-5 h-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
