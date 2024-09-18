import React, { useEffect } from "react";
import "./App.css";

const RotatingText = () => {
  useEffect(() => {
    const str = "NSCODE YT CHANNEL SUBSCRIBE NOW";
    const text = document.getElementById("text");
    for (let i = 0; i < str.length; i++) {
      let span = document.createElement("span");
      span.innerHTML = str[i];
      text.appendChild(span);
      span.style.transform = `rotate(${11 * i}deg)`;
    }
  }, []);

  return (
    <div className="rotatetext absolute">
      <div className="rotating-text-container">
        <p id="text"></p>
      </div>
    </div>
  );
};

export default RotatingText;
