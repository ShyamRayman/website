import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

const Navbarheader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [hoverItem, setHoverItem] = useState(null);
  const [hover, setHover] = useState(false);
  const content = "Contact us";

  const navigationItems = [
    {
      label: "Home",
      href: "/",
      content: [{ label: "About Us", href: "/" }],
    },
    {
      label: "Company",
      href: "#about",
      content: [
        { label: "Story", href: "/" },
        { label: "Milestones", href: "/" },
        { label: "Team", href: "/" },
        { label: "Culture", href: "/" },
        { label: "For Society", href: "/" },
        { label: "CSR", href: "/" },
      ],
    },
    {
      label: "Work",
      href: "#services",
      content: [
        { label: "Client Testimonial", href: "/reviews" },
        {
          label: "Case Studies",
          href: "/casestudies",
          subContent: [
            {
              label: "case studies inner",
              href: "/casestudies/casestudiesinner",
            },
          ],
        },
        { label: "Portfolio", href: "/portfolio" },
      ],
    },
    {
      label: "Services",
      href: "/portfolio",
      content: [
        { label: "Website Development", href: "/websitedevelopment" },
        { label: "Mobile Application Development", href: "/" },
        {
          label: "Design and Branding",
          href: "/design",
          subContent: [
            { label: "UI/UX", href: "/ui/ux" },
            { label: "Creative solutions", href: "/creativesolutions" },
          ],
        },
      ],
    },
  ];
  return (
    <div className=" bg-gray-50   z-30 top-0 max-h-full w-full overflow-visible">
      <div className=" md:max-w-6xl w-full md:mx-auto p-2   flex justify-between items-center container  md:my-auto ">
        <div className="  flex items-center mt-1">
          <Image
            src="/images/hugeLogo.svg"
            width={50}
            height={12}
            className="h-8"
            alt="Picture of the author"
          />
        </div>
        <div className="flex xs:w-fit sm:max-w-60 md:w-max-w-80 lg:max-w-3xl xl:max-w-3xl 2xl:w-full justify-between  gap-3 items-center">
          <div class="hidden lg:flex justify-right items-left space-x-4">
            <NavigationMenu>
              {navigationItems.map((item, index) => (
                <NavigationMenuList key={index}>
                  <div className="relative group">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Link
                          href={item.href}
                          className="tracking-tighter font-semibold hover:text-[#a67b2a] pr-2"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>
                          {Array.isArray(item.content) ? (
                            <ul className="list-none">
                              {item.content.map((subItem, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="my-2 pl-2 p-1 relative"
                                >
                                  <div className="group">
                                    <Link
                                      href={subItem.href}
                                      className="hover:text-blue-600"
                                    >
                                      {subItem.label}
                                    </Link>

                                    {Array.isArray(subItem.subContent) && (
                                      <ul
                                        className={`list-none absolute -translate-y-1/2 left-1/2 transform origin-top translate-x-[-50%] bg-white shadow-lg rounded-md p-2 w-[200px] opacity-0 invisible group-hover:visible transition-all duration-300 ease-in-out ${
                                          hoverItem === item.label
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible"
                                        }`}
                                      >
                                        {subItem.subContent.map(
                                          (subSubItem, subSubIndex) => (
                                            <li
                                              key={subSubIndex}
                                              className="hover:bg-gray-200 p-1"
                                            >
                                              <Link href={subSubItem.href}>
                                                {subSubItem.label}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <Link
                              href={item.content.href}
                              className="hover:text-blue-600"
                            >
                              {item.content.label}
                            </Link>
                          )}
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </div>
                </NavigationMenuList>
              ))}
            </NavigationMenu>
          </div>
          <button
            className={`button ${hover ? "hover" : ""} hidden lg:flex`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ "--button-content": `"${content}"` }}
          ></button>
        </div>
        <div className="lg:hidden">
          <button
            id="menu-toggle"
            onClick={toggleMenu}
            className="text-blue-600 focus:outline-none"
          >
            <svg
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9474 18.9412C24.4745 18.9414 24.9813 19.1422 25.3628 19.5018C25.7443 19.8615 25.9713 20.3525 25.9966 20.8731C26.0219 21.3936 25.8437 21.9039 25.4989 22.2981C25.1541 22.6923 24.6691 22.9402 24.1444 22.9905L23.9474 23H2.05263C1.52549 22.9997 1.01866 22.799 0.637155 22.4393C0.25565 22.0797 0.0287204 21.5887 0.00338785 21.0681C-0.0219447 20.5475 0.156262 20.0373 0.501082 19.6431C0.845902 19.2489 1.3309 19.0009 1.85558 18.9506L2.05263 18.9412H23.9474ZM23.9474 9.47059C24.4918 9.47059 25.0139 9.6844 25.3988 10.065C25.7837 10.4456 26 10.9618 26 11.5C26 12.0382 25.7837 12.5544 25.3988 12.935C25.0139 13.3156 24.4918 13.5294 23.9474 13.5294H2.05263C1.50824 13.5294 0.986145 13.3156 0.601202 12.935C0.216259 12.5544 0 12.0382 0 11.5C0 10.9618 0.216259 10.4456 0.601202 10.065C0.986145 9.6844 1.50824 9.47059 2.05263 9.47059H23.9474ZM23.9474 0C24.4918 0 25.0139 0.213812 25.3988 0.594401C25.7837 0.97499 26 1.49118 26 2.02941C26 2.56765 25.7837 3.08383 25.3988 3.46442C25.0139 3.84501 24.4918 4.05882 23.9474 4.05882H2.05263C1.50824 4.05882 0.986145 3.84501 0.601202 3.46442C0.216259 3.08383 0 2.56765 0 2.02941C0 1.49118 0.216259 0.97499 0.601202 0.594401C0.986145 0.213812 1.50824 0 2.05263 0H23.9474Z"
                fill="#191919"
              />
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`lg:hidden  bg-[#191919] fixed top-[56px] w-[100%]  right-[2px] z-30 ${
            menuOpen ? "" : "hidden"
          } `}
        ></div>
      </div>
    </div>
  );
};

export default Navbarheader;

// import React, { useState } from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
// import Link from "next/link";
// import Image from "next/image";

// const Navbarheader = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const [hover, setHover] = useState(false);

//   const [hoverItem, setHoverItem] = useState(null);

//   const content = "Contact us";

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const navigationItems = [
//     {
//       label: "Home",
//       href: "/",
//       content: [{ label: "About Us", href: "/" }],
//     },
//     {
//       label: "Company",
//       href: "#about",
//       content: [
//         { label: "Story", href: "/" },
//         { label: "Milestones", href: "/" },
//         { label: "Team", href: "/" },
//         { label: "Culture", href: "/" },
//         { label: "For Society", href: "/" },
//         { label: "CSR", href: "/" },
//       ],
//     },
//     {
//       label: "Work",
//       href: "#services",
//       content: [
//         { label: "Client Testimonial", href: "/reviews" },
//         {
//           label: "Case Studies",
//           href: "/casestudies",
//           subContent: [
//             {
//               label: "case studies inner",
//               href: "/casestudies/casestudiesinner",
//             },
//           ],
//         },
//         { label: "Portfolio", href: "/portfolio" },
//       ],
//     },
//     {
//       label: "Services",
//       href: "/portfolio",
//       content: [
//         { label: "Website Development", href: "/websitedevelopment" },
//         { label: "Mobile Application Development", href: "/" },
//         {
//           label: "Design and Branding",
//           href: "/design",
//           subContent: [
//             { label: "UI/UX", href: "/ui/ux" },
//             { label: "Creative solutions", href: "/creativesolutions" },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className=" bg-gray-50   z-30 top-0 max-h-full w-full overflow-visible">
//       <div className=" md:max-w-6xl w-full md:mx-auto p-2   flex justify-between items-center container  md:my-auto ">
//         <div className="  flex items-center mt-1">
//           <Image
//             src="/images/hugeLogo.svg"
//             width={50}
//             height={12}
//             className="h-8"
//             alt="Picture of the author"
//           />
//         </div>
//         <div className="flex xs:w-fit sm:max-w-60 md:w-max-w-80 lg:max-w-3xl xl:max-w-3xl 2xl:w-full justify-between  gap-3 items-center">
//           <div className="hidden lg:flex justify-right items-left space-x-4">
//             <NavigationMenu>
//               {navigationItems.map((item, index) => (
//                 <NavigationMenuItem key={index}>
//                   <NavigationMenuTrigger
//                     onMouseOver={() => setHoverItem(item.label)}
//                   >
//                     <Link
//                       href={item.href}
//                       className={`tracking-tighter font-semibold hover:text-[#a67b2a] pr-2 ${
//                         hoverItem === item.label ? "text-blue-600" : ""
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   </NavigationMenuTrigger>
//                   {item.content && (
//                     <NavigationMenuContent
//                       onMouseOver={() => setHoverItem(item.label)}
//                       onMouseLeave={() => setHoverItem(null)}
//                     >
//                       <ul className="list-none">
//                         {item.content.map((subItem, subIndex) => (
//                           <li key={subIndex} className="my-2 pl-2 p-1 relative">
//                             <div className="group">
//                               <Link
//                                 href={subItem.href}
//                                 className="hover:text-blue-600"
//                               >
//                                 {subItem.label}
//                               </Link>

//                               {Array.isArray(subItem.subContent) && (
//                                 <ul
//                                   className={`list-none absolute -translate-y-1/2 left-1/2 transform origin-top translate-x-[-50%] bg-white shadow-lg rounded-md p-2 w-[200px] opacity-0 invisible group-hover:visible transition-all duration-300 ease-in-out ${
//                                     hoverItem === item.label
//                                       ? "opacity-100 visible"
//                                       : "opacity-0 invisible"
//                                   }`}
//                                 >
//                                   {subItem.subContent.map(
//                                     (subSubItem, subSubIndex) => (
//                                       <li
//                                         key={subSubIndex}
//                                         className="hover:bg-gray-200 p-1"
//                                       >
//                                         <Link href={subSubItem.href}>
//                                           {subSubItem.label}
//                                         </Link>
//                                       </li>
//                                     )
//                                   )}
//                                 </ul>
//                               )}
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </NavigationMenuContent>
//                   )}
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenu>
//           </div>
//           <button
//             className={`button ${hover ? "hover" : ""} hidden lg:flex`}
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//             style={{ "--button-content": `"${content}"` }}
//           ></button>
//         </div>
//         <div className="lg:hidden">
//           <button
//             id="menu-toggle"
//             onClick={toggleMenu}
//             className="text-blue-600 focus:outline-none"
//           >
//             <svg
//               width="26"
//               height="23"
//               viewBox="0 0 26 23"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M23.9474 18.9412C24.4745 18.9414 24.9813 19.1422 25.3628 19.5018C25.7443 19.8615 25.9713 20.3525 25.9966 20.8731C26.0219 21.3936 25.8437 21.9039 25.4989 22.2981C25.1541 22.6923 24.6691 22.9402 24.1444 22.9905L23.9474 23H2.05263C1.52549 22.9997 1.01866 22.799 0.637155 22.4393C0.25565 22.0797 0.0287204 21.5887 0.00338785 21.0681C-0.0219447 20.5475 0.156262 20.0373 0.501082 19.6431C0.845902 19.2489 1.3309 19.0009 1.85558 18.9506L2.05263 18.9412H23.9474ZM23.9474 9.47059C24.4918 9.47059 25.0139 9.6844 25.3988 10.065C25.7837 10.4456 26 10.9618 26 11.5C26 12.0382 25.7837 12.5544 25.3988 12.935C25.0139 13.3156 24.4918 13.5294 23.9474 13.5294H2.05263C1.50824 13.5294 0.986145 13.3156 0.601202 12.935C0.216259 12.5544 0 12.0382 0 11.5C0 10.9618 0.216259 10.4456 0.601202 10.065C0.986145 9.6844 1.50824 9.47059 2.05263 9.47059H23.9474ZM23.9474 0C24.4918 0 25.0139 0.213812 25.3988 0.594401C25.7837 0.97499 26 1.49118 26 2.02941C26 2.56765 25.7837 3.08383 25.3988 3.46442C25.0139 3.84501 24.4918 4.05882 23.9474 4.05882H2.05263C1.52549 4.05882 0.986145 3.84501 0.601202 3.46442C0.216259 3.08383 0 2.56765 0 2.02941C0 1.49118 0.216259 0.97499 0.601202 0.594401C0.986145 0.213812 1.50824 0 2.05263 0H23.9474Z"
//                 fill="#191919"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           id="mobile-menu"
//           className={`lg:hidden  bg-[#191919] fixed top-[56px] w-[100%]  right-[2px] z-30 ${
//             menuOpen ? "" : "hidden"
//           } `}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Navbarheader;
