// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import BeforeAfterSlider from "@/app/ui/ux/beforeafter";

// export function CarouselPlugin() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );

//   const slidess = [
//     {
//       component: <BeforeAfterSlider />,
//       label: "Mobile UI/UX",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     },
//     {
//       component: <BeforeAfterSlider />,
//       label: "Web UI/UX",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     },
//     {
//       component: <BeforeAfterSlider />,
//       label: "Tablet UI/UX",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     },
//   ];

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-5/6 mx-auto" // Center the carousel
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {slidess.map((slide, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex items-center justify-center p-6">
//                   <div className="relative w-full flex flex-col md:flex-row items-center justify-between p-4">
//                     <div className="w-full md:w-1/2 flex items-center justify-center">
//                       {/* Render the component or image */}
//                       {slide.component ? (
//                         slide.component
//                       ) : (
//                         <img
//                           src={slide.imgSrc}
//                           alt={slide.label}
//                           className="w-full object-cover max-h-[100vh]"
//                         />
//                       )}
//                     </div>
//                     <div className="w-full md:w-1/2 text-left p-4">
//                       <h5 className="text-2xl md:text-3xl font-bold mb-4">
//                         {slide.label}
//                       </h5>
//                       <p className="text-base md:text-lg">
//                         {slide.description}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterSlider from "@/app/ui/ux/beforeafter";

export function CarouselPlugins() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const slide = [
    {
      backgroundtexts: "Mobile",
      component: <BeforeAfterSlider />,
      label: "Branding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      backgroundtexts: "Mobile",
      component: <BeforeAfterSlider />,
      label: "Web UI/UX",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      backgroundtexts: "Mobile",
      component: <BeforeAfterSlider />,
      label: "Tablet UI/UX",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full md:w-5/6 mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slide.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="h-full border-none shadow-none">
                <CardContent className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Background text */}
                    <h1
                      className="text-7xl md:text-8xl lg:text-9xl font-bold z-0 select-none relative xl:left-40 xl:top-32 lg:left-32 lg:top-28 backgroundtexts md:top-40 md:left-28 sm:top-40 sm:left-44"
                      style={{ color: "#F6F6F6" }}
                    >
                      {slide.backgroundtexts}
                    </h1>
                  </div>
                  <div className="w-full lg:w-1/2 flex items-center justify-center mb-4 lg:mb-0">
                    {/* Render the component or image */}
                    {slide.component ? (
                      slide.component
                    ) : (
                      <img
                        src={slide.imgSrc}
                        alt={slide.label}
                        className="w-full object-cover max-h-[40vh] sm:max-h-[30vh] md:max-h-[50vh] lg:max-h-[50vh] xl:max-h-[80vh]"
                      />
                    )}
                  </div>
                  <div className="w-full lg:w-1/2 text-left px-2 lg:px-4">
                    <h5 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-4">
                      {slide.label}
                    </h5>
                    <p className="text-sm sm:text-base lg:text-lg">
                      {slide.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
