import React, { useEffect, useRef } from 'react';
import './portfolio.css'; // Ensure this CSS file contains your styles

const ScrollingText = () => {
  const outerRef = useRef(null);
  const loopRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const loop = loopRef.current;

    if (outer && loop) {
      // Ensure content is long enough for continuous scrolling
      repeatContent(loop, outer.offsetWidth);

      // Clone the content for continuous scrolling effect
      loop.innerHTML += loop.innerHTML;
    }
  }, []);

  const repeatContent = (el, until) => {
    const html = el.innerHTML;
    let counter = 0; // Prevents infinite loop

    while (el.offsetWidth < until && counter < 100) {
      el.innerHTML += html;
      counter += 1;
    }
  };

  return (
    <div className="outer" ref={outerRef}>
      <div className="loop" ref={loopRef}>
        <div className="content">
          Take a Look at Our Work .&nbsp;
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
