import React, { useState, useEffect } from "react";
import "./App.css";

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [disableAnimation, setDisableAnimation] = useState(false);

  useEffect(() => {
    if (disableAnimation) {
      const container = document.querySelector(".containers");
      container.classList.add("disable-animation");
    }
  }, [disableAnimation]);

  const handleSliderChange = (e) => {
    setDisableAnimation(true);
    console.log("the e is", e.target.value);
    setPosition(e.target.value);
  };
  console.log("the position is", position);

  return (
    <>
      <main>
        <div
          className={`containers ${
            disableAnimation ? "disable-animation" : ""
          } relative z-20`}
          style={{ "--position": `${position}%` }}
        >
          <div className="image-container">
            <img
              className="image-before slider-image max-w-[300px] lg:max-w-[400px]"
              src="/images/uiux/image 51.png"
              alt="color photo"
            />
            <img
              className="image-after slider-image max-w-[300px] lg:max-w-[400px]"
              src="/images/uiux/image 52.png"
              alt="black and white"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            aria-label="Percentage of before photo shown"
            className="slider"
            onChange={handleSliderChange}
          />
          <div className="slider-line" aria-hidden="true"></div>
          <div className="slider-button" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="128"
                y1="40"
                x2="128"
                y2="216"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="96"
                y1="128"
                x2="16"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="48 160 16 128 48 96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
              <line
                x1="160"
                y1="128"
                x2="240"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="208 96 240 128 208 160"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
            </svg>
          </div>
        </div>
      </main>

      <div className="absolute top-0 xl:top-4 z-10 max-w-[300px] md:max-w-[400px]">
        <img src="/images/uiux/Group 712.png" alt="images 1" />
      </div>
    </>
  );
}

export default BeforeAfterSlider;
