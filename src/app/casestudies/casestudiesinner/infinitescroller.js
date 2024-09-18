import React, { useEffect } from "react";
import "./casestudiesinner.css"; // Import the CSS

const InfiniteScroll = () => {
  useEffect(() => {
    // Function to add animation
    const addAnimation = () => {
      const scrollers = document.querySelectorAll(".scroller");

      scrollers.forEach((scroller) => {
        // Add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it, add aria-hidden, and append it
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    // Check if the user prefers reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>Infinite Scroll Animation</h1> */}

      {/* <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>SSG</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
        </ul>
      </div> */}

      <div className="scroller " data-speed="slow">
        <div className="scroller__inner">
          <img src="/images/casestudiesinner/image 64.jpg" alt="avatar 1" style={{width:"400px",height:"400px"}} className="object-cover"/>
          <img src="/images/casestudiesinner/image 65.jpg" alt="avatar 2" style={{width:"400px",height:"400px"}} className="object-cover"/>
          <img src="/images/casestudiesinner/image 66.jpg" alt="avatar 3" style={{width:"400px",height:"400px"}} className="object-cover"/>
          {/* <img src="https://i.pravatar.cc/150?img=4" alt="avatar 4" />
          <img src="https://i.pravatar.cc/150?img=5" alt="avatar 5" />
          <img src="https://i.pravatar.cc/150?img=6" alt="avatar 6" /> */}
        </div>
      </div>

      {/* <a className="yt" href="https://youtu.be/pKHKQwAsZLI">
        Watch the tutorial
      </a> */}
    </div>
  );
};

export default InfiniteScroll;
