"use client";

import React, { useEffect } from "react";
import "./uiux.css";

const MapWrapper = () => {
  useEffect(() => {
    const trail = document.querySelector("#dotted-line");
    const animated = document.querySelector("#animated-line");

    // Beginning coordinates for the dotted line
    const startElem = document.querySelector(".start span");
    const startX = startElem.getBoundingClientRect().left + window.scrollX;
    const startY = startElem.getBoundingClientRect().top + window.scrollY;
    let correctPath = `M ${startX},${startY}`;

    document.querySelectorAll("button").forEach((button, index) => {
      const buttonRect = button.getBoundingClientRect();
      const left = buttonRect.left + window.scrollX;
      const top = buttonRect.top + window.scrollY;

      if (index === 0) {
        correctPath += ` C540,50, 580,100, ${left},${top} `;
      } else {
        if (index % 2 === 0) {
          correctPath += `S500,${top - 50}, ${left},${top} `;
        } else {
          correctPath += `S600,${top - 50}, ${left - 50},${top} `;
        }
      }
    });

    // Now that we have calculated the curved line, add the path to the SVG elements
    trail.setAttribute("d", correctPath);
    animated.setAttribute("d", correctPath);

    // Draw trail 2 as you scroll
    const path = document.querySelector("#animated-line");
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;

    const onScroll = () => {
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const drawLength = pathLength * scrollPercentage;

      path.style.strokeDashoffset = pathLength - drawLength;

      if (scrollPercentage >= 0.99) {
        path.style.strokeDasharray = "none";
      } else {
        path.style.strokeDasharray = `${pathLength} ${pathLength}`;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="map-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="svg-container"
      >
        <path
          id="dotted-line"
          strokeDasharray="20,10"
          fill="none"
          stroke="#F7C700"
          strokeWidth="2px"
        />
        <path
          id="animated-line"
          strokeDasharray="20,10"
          fill="none"
          stroke="#793C25"
          strokeWidth="4px"
        />
      </svg>
      <div className="start">
        <span>Start Here</span>
      </div>
      <div className="point one">
        <button>One</button>
      </div>
      <div className="point two">
        <button>Two</button>
      </div>
      <div className="point three">
        <button>Three</button>
      </div>
      <div className="point four">
        <button>Four</button>
      </div>
      <div className="point five">
        <button>Five</button>
      </div>
    </div>
  );
};

export default MapWrapper;
