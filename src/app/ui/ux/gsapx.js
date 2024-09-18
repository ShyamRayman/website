// // // // import React, { useEffect } from 'react';
// // // // import { gsap } from 'gsap';

// // // // const PathAnimation = () => {
// // // //   useEffect(() => {
// // // //     gsap.fromTo(
// // // //       "#path",
// // // //       { strokeDasharray: "300", strokeDashoffset: "300" },
// // // //       { strokeDashoffset: "0", duration: 5, repeat: -1, ease: "easeInOut" }
// // // //     );
// // // //   }, []);

// // // //   return (
// // // //     <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
// // // //       <path
// // // //         id="path"
// // // //         d="M10,80 Q100,10 190,80 T370,80"
// // // //         stroke="black"
// // // //         strokeWidth="2"
// // // //         fill="transparent"
// // // //       />
// // // //     </svg>
// // // //   );
// // // // };

// // // // export default PathAnimation;

// // // import React, { useEffect } from 'react';
// // // import { gsap } from 'gsap';

// // // const PathAnimation = () => {
// // //   useEffect(() => {
// // //     gsap.fromTo(
// // //       "#path",
// // //       { strokeDasharray: "10, 10", strokeDashoffset: "30" },
// // //       { strokeDashoffset: "0", duration: 10, repeat: 1, ease: "easeInOut" }
// // //     );
// // //   }, []);

// // //   return (
// // //     <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
// // //       <path
// // //         id="path"
// // //         d="M10,80 Q100,10 190,80 T370,80"
// // //         stroke="black"
// // //         strokeWidth="2"
// // //         fill="transparent"
// // //         strokeDasharray="10, 10" /* Adds dashes and gaps */
// // //       />
// // //     </svg>
// // //   );
// // // };

// // // export default PathAnimation;


// // import React, { useEffect } from 'react';
// // import { gsap } from 'gsap';
// // import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// // // Register the plugin
// // gsap.registerPlugin(MotionPathPlugin);

// // const PathAnimation = () => {
// //   useEffect(() => {
// //     gsap.to("#circle", {
// //       duration: 5,
// //       motionPath: {
// //         path: "#path",
// //         align: "#path",
// //         autoRotate: true,
// //       },
// //       repeat: -1,
// //       ease: "power1.inOut",
// //     });
// //   }, []);

// //   return (
// //     <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
// //       <path
// //         id="path"
// //         d="M10,80 Q100,10 190,80 T370,80"
// //         stroke="black"
// //         strokeWidth="2"
// //         fill="transparent"
// //         strokeDasharray="10, 10" /* Adds dashes and gaps */
// //       />
// //       <circle id="circle" cx="0" cy="0" r="5" fill="red" />
// //     </svg>
// //   );
// // };

// // export default PathAnimation;


// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// // Register the plugin
// gsap.registerPlugin(MotionPathPlugin);

// const PathAnimation = () => {
//   useEffect(() => {
//     // Animate the path drawing
//     gsap.fromTo(
//       "#path",
//       { strokeDasharray: "1000", strokeDashoffset: "1000" },
//       { strokeDashoffset: "0", duration: 5, ease: "power1.inOut", repeat: -1, repeatDelay: 1 }
//     );

//     // Animate the circle along the path
//     gsap.to("#circle", {
//       duration: 5,
//       motionPath: {
//         path: "#path",
//         align: "#path",
//         autoRotate: true,
//       },
//       repeat: -1,
//       ease: "power1.inOut",
//     });
//   }, []);

//   return (
//     <div>
//     <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//       <path
//         id="path"
//         d="M10,80 Q100,10 190,80 T370,80"
//         stroke="black"
//         strokeWidth="2"
//         fill="transparent"
//         strokeDasharray="10, 10,10,10,10,10,10,10,10,10,10" /* Ensures the entire path is considered for the animation */
//       />
//     <circle id="circle" cx="0" cy="0" r="5" fill="red" />  
//     </svg>

//     </div>
//   );
// };

// export default PathAnimation;



import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register the plugin
gsap.registerPlugin(MotionPathPlugin);

const PathAnimation = () => {
  useEffect(() => {
    // Animate the path drawing (making it appear as if it's being drawn)
    gsap.fromTo(
      "#path",
      { strokeDasharray:"9 9", strokeDashoffset: "1000" },
      { strokeDashoffset: "0", duration: 5, ease: "power1.inOut", repeat: -1, repeatDelay: 1 }
    );

    // Animate the circle along the path
    gsap.to("#circle", {
      duration: 5,
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
      },
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        id="path"
        d="M2 51.7232C21.8278 18.9661 92.2505 -30.7589 215.319 32.3979C369.156 111.344 489.763 96.1303 562.374 56.6574C634.984 17.1845 729.337 9.37207 788 78.0386C801.833 96.0257 851.7 120 940.5 72C1029.3 24 1063.17 52 1069 72"
        stroke="black"
        strokeWidth="2"
        fill="transparent"
        strokeDasharray="10, 10 ,10, 10, 10, 10, 10, 10 , 10, 10, 10, 10" /* Creates the dashed line effect */
      />
      <circle id="circle" cx="0" cy="0" r="5" fill="red" />
    </svg>
  );
};

export default PathAnimation;
