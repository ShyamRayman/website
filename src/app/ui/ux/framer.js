// // import { motion } from 'framer-motion';

// // const DashedLineAnimation = () => {
// //   return (
// //     <svg width="100%" height="50%" viewBox="0 0 1071 102" xmlns="http://www.w3.org/2000/svg">
// //       <motion.path
// //         d="M2 51.7232C21.8278 18.9661 92.2505 -30.7589 215.319 32.3979C369.156 111.344 489.763 96.1303 562.374 56.6574C634.984 17.1845 729.337 9.37207 788 78.0386C801.833 96.0257 851.7 120 940.5 72C1029.3 24 1063.17 52 1069 72"  // Replace with your path data
// //         stroke="black"
// //         strokeWidth="2"
// //         fill="none"
// //         strokeDasharray="5,5"  // Dashed line pattern
// //         strokeDashoffset={0}
// //         animate={{ strokeDashoffset: [0, 20] }}  // Animate dashed line
// //         transition={{ repeat: Infinity, duration: 2, ease: "linear" }}  // Repeat animation infinitely
// //       />
// //     </svg>
// //   );
// // };

// // export default DashedLineAnimation;


// // import { motion } from 'framer-motion';

// // const DashedLineWithCircleAnimation = () => {
// //   return (
// //     <svg width="1071" height="102" viewBox="0 0 1071 102" xmlns="http://www.w3.org/2000/svg">
// //       {/* Dashed line path */}
// //       <motion.path
// //         d="M2 51.7232C21.8278 18.9661 92.2505 -30.7589 215.319 32.3979C369.156 111.344 489.763 96.1303 562.374 56.6574C634.984 17.1845 729.337 9.37207 788 78.0386C801.833 96.0257 851.7 120 940.5 72C1029.3 24 1063.17 52 1069 72"  // Replace with your path data
// //         stroke="black"
// //         strokeWidth="2"
// //         fill="none"
// //         strokeDasharray="9 9"  // Dashed line pattern
// //         strokeDashoffset={0}
// //         animate={{ strokeDashoffset: [0, 20] }}  // Animate dashed line
// //         transition={{ repeat: Infinity, duration: 2, ease: "linear" }}  // Repeat animation infinitely
// //       />

// //       {/* Animated circle */}
// //       <motion.circle
// //         cx="10"  // Starting X position
// //         cy="80"  // Starting Y position
// //         r="2"    // Radius of the circle
// //         fill="yellow"
// //         animate={{ 
// //           pathLength: 1,  // Required for stroke-dasharray to work
// //         }}
// //         transition={{
// //           pathLength: {
// //             repeat: Infinity,
// //             duration: 2,
// //             ease: "linear",
// //             times: [0, 0.5, 1]
// //           }
// //         }}
// //         style={{
// //           transformOrigin: 'center',
// //           transform: 'translate(-50%, -50%)'
// //         }}
// //       >
// //         <motion.animateMotion
// //           keyframes={[
// //             { offsetDistance: '0%' },
// //             { offsetDistance: '100%' }
// //           ]}
// //           dur="2s"
// //           repeatCount="indefinite"
// //         />
// //       </motion.circle>
// //     </svg>
// //   );
// // };

// // export default DashedLineWithCircleAnimation;


// import { motion, useAnimation } from 'framer-motion';
// import React, { useEffect, useRef } from 'react';

// // Function to calculate the position of the circle on the path
// const calculateCirclePosition = (path, progress) => {
//   const point = path.getPointAtLength(progress * path.getTotalLength());
//   return { x: point.x, y: point.y };
// };

// const DashedLineWithCircleAnimation = () => {
//   const pathRef = useRef(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     if (pathRef.current) {
//       // Animate the circle along the path
//       controls.start({
//         translateX: [0, 1], // Dummy values to trigger updates
//         translateY: [0, 1],
//         transition: {
//           duration: 4,
//           repeat: Infinity,
//           ease: 'linear',
//         },
//         pathLength: 1, // Ensure the circle moves along the path
//       });
//     }
//   }, [controls]);

//   return (
//     <svg width="1071" height="102" viewBox="0 0 1071 102" xmlns="http://www.w3.org/2000/svg">
//       {/* Dashed line path */}
//       <motion.path
//         d="M2 51.7232C21.8278 18.9661 92.2505 -30.7589 215.319 32.3979C369.156 111.344 489.763 96.1303 562.374 56.6574C634.984 17.1845 729.337 9.37207 788 78.0386C801.833 96.0257 851.7 120 940.5 72C1029.3 24 1063.17 52 1069 72"
//         stroke="black"
//         strokeWidth="2"
//         fill="none"
//         strokeDasharray="9 9" // Dashed line pattern
//         strokeDashoffset={0}
//         animate={{ strokeDashoffset: [0, 20] }} // Animate dashed line
//         transition={{ repeat: Infinity, duration: 2, ease: "linear" }} // Repeat animation infinitely
//         ref={pathRef}
//       />

//       {/* Animated circle */}
//       <motion.circle
//         fill="yellow"
//         r="10" // Radius of the circle
//         style={{
//           cx: pathRef.current ? calculateCirclePosition(pathRef.current, 0).x : 0,
//           cy: pathRef.current ? calculateCirclePosition(pathRef.current, 0).y : 0,
//           transformOrigin: 'center',
//         }}
//         animate={{ pathLength: 1 }} // Required for stroke-dasharray to work
//         transition={{
//           pathLength: {
//             repeat: Infinity,
//             duration: 4,
//             ease: "linear",
//           }
//         }}
//         // Function to update the circle position
//         style={({ progress }) => {
//           if (!pathRef.current) return {};
//           const { x, y } = calculateCirclePosition(pathRef.current, progress);
//           return { cx: x, cy: y };
//         }}
//       />
//     </svg>
//   );
// };

// export default DashedLineWithCircleAnimation;


import { motion, useAnimationFrame } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

// Hook to get the circle's position on the path
const usePathAnimation = (pathRef, duration) => {
  const [progress, setProgress] = React.useState(0);

  useAnimationFrame((time) => {
    const progress = (time % duration) / duration;
    setProgress(progress);
  });

  return React.useMemo(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(progress * pathLength);
      return { x: point.x, y: point.y };
    }
    return { x: 0, y: 0 };
  }, [pathRef, progress]);
};

const DashedLineWithCircleAnimation = () => {
  const pathRef = useRef(null);
  const { x, y } = usePathAnimation(pathRef, 4000); // Duration of the animation in milliseconds

  return (
    <svg width="980" height="102" viewBox="0 0 1071 102" xmlns="http://www.w3.org/2000/svg">
      {/* Dashed line path */}
      <motion.path
        ref={pathRef}
        d="M2 51.7232C21.8278 18.9661 92.2505 -30.7589 215.319 32.3979C369.156 111.344 489.763 96.1303 562.374 56.6574C634.984 17.1845 729.337 9.37207 788 78.0386C801.833 96.0257 851.7 120 940.5 72C1029.3 24 1063.17 52 1069 72"
        stroke="black"
        strokeWidth="2"
        fill="none"
        strokeDasharray="10, 10" // Dashed line pattern
        strokeDashoffset={0}
        animate={{ strokeDashoffset: [0, -20] }} // Animate dashed line
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }} // Repeat animation infinitely
      />

      {/* Animated circle */}
      <motion.circle
        cx={x}
        cy={y}
        r="9" // Radius of the circle
        fill="#FFD100"
        transition={{ duration: 2 }} // No transition delay for position changes
      />
    </svg>
  );
};

export default DashedLineWithCircleAnimation;



