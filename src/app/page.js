"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import "./globals.css";
import Footercrm from "@/components/ui/footercrm";
import Footer from "@/components/ui/footer";
import Navbarheader from "@/components/ui/navbarheader";

function AuroraBackgroundDemo() {


  return (
    <>
      <Navbarheader />
     
      {/* Auruora background     */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Welcome to Huge IT Solutions
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Fullfill Your Buisness Needs Us.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Explore now
          </button>
        </motion.div>
      </AuroraBackground>

      <Footercrm />
      <Footer />
    </>
  );
}

export default AuroraBackgroundDemo;
