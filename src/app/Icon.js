'use client'

import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Icon() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
        });
    
        const handleScroll = () => {
          const scrollOffset = window.scrollY;
          if (scrollOffset > 0) {
            AOS.refresh();
            window.removeEventListener('scroll', handleScroll);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    
    return (


        <div className="md:w-full w-1/2 flex justify-center md:py-36 py-24">
            <div class=" " data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="1000" data-aos-easing="ease-in-out">
                    <div className="relative md:h-24 h-8 w-8 md:w-24  rounded-full bg-white mt-20 shadow-xl transform md:-translate-y-0 -translate-y-12 md:left-0 left-[calc(50%+5rem)] transition duration-500 hover:scale-110 ">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " >
                    <img src="/images/Nodejs.svg" />
                </div>
                </div>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800" data-aos-easing="ease-in-out">
                <div class="absolute transform md:translate-y-28 translate-y-20  md:translate-x-10 translate-x-20  md:h-20 h-6 w-6 md:w-20 rounded-full bg-white mt-20 shadow-xl transition duration-1000 hover:scale-125 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/Pmn.svg" className="" />
                    </div>
                </div>
                <div class="absolute transform md:translate-y-28 translate-y-20 md:-translate-x-64 md:left-0 left-[calc(50%+2rem)] md:h-20  h-6 w-6 md:w-20  rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/Gh.svg" className="" />
                    </div>
                </div></div>
            <div className="relative" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800"  data-aos-easing="ease-in-out">
                <div class="absolute transform md:translate-y-18 translate-y-18 md:right-[calc(50%+18rem)] right-[calc(50%+rem)] md:h-28 h-12 w-12 md:w-28 rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/Jquery.svg" className="" />
                    </div>
                </div>

                <div class="absolute transform translate-y-18 md:left-[calc(50%+10rem)] left-[calc(50%+6rem)] md:h-28 h-12 w-12 md:w-28 rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/mui 1.svg" className="" />
                    </div>
                </div>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-easing="ease-in-out">
                <div class="absolute transform md:-translate-y-24 -translate-y-14    md:right-[calc(50%+10rem)] right-[calc(50%+1rem)]  md:h-24 h-8 w-8 md:w-24 rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/Java script.svg" className="" />
                    </div>
                </div>
                <div class="absolute transform md:-translate-y-24 -translate-y-16 md:left-[calc(50%+2rem)] left-[calc(50%+9rem)]  md:h-24 h-8 w-8 md:w-24 rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/mysql.svg" className="" />
                    </div>
                </div></div>

            <div className="relative" data-aos="fade-up" data-aos-duration="500"  data-aos-easing="ease-in-out" >
                <div class="absolute transform md:-translate-y-56  -translate-y-40  md:right-[calc(50%+20rem)] right-[calc(50%+1rem)]  md:h-32 h-16 w-16 md:w-32 rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 "
                >
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/react.svg" className="" />
                    </div>
                </div>
                <div class="absolute transform  md:-translate-y-56  -translate-y-40   md:left-[calc(50%+12rem)] left-[calc(50%+10rem)]  md:h-32 h-16 w-16 md:w-32 rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/Python.svg" className="" />
                    </div>
                </div></div>
            <div className="relative" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" data-aos-easing="ease-in-out">
                <div class="absolute transform md:-translate-y-16  -translate-y-28 md:left-[calc(50%+20rem)]  left-[calc(50%+6rem)]  md:h-28 h-12 w-12 md:w-28 rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/Php.svg" className="" />
                    </div>
                </div>
                <div class="absolute transform md:-translate-y-16 -translate-y-28 md:right-[calc(50%+28rem)]  right-[calc(50%+rem)] md:h-28 h-12 w-12  md:w-28 rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/Figma.svg" className="" />
                    </div>
                </div>


            </div>
            <div className="relative" data-aos="fade-up" data-aos-duration="1800" data-aos-delay="500" data-aos-easing="ease-in-out">
                <div class="absolute transform md:translate-y-24 translate-y-16 md:right-[calc(50%+32rem)] right-[calc(50%+0.5rem)] md:h-24 h-8 w-8 md:w-24 rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/mui.svg" className="" />
                    </div>
                </div>
                <div class="absolute transform  md:translate-y-20 translate-y-28   md:right-[calc(50%+42rem)] right-[calc(50%+2rem)] md:h-20 h-6 w-6 md:w-20  rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/boots.svg" className="" />
                    </div>
                </div></div>
            <div className="relative" data-aos="fade-up" data-aos-duration="1800" data-aos-delay="500" data-aos-easing="ease-in-out">
                <div class="absolute transform md:translate-y-24 translate-y-16  md:left-[calc(50%+26rem)] left-[calc(50%+9rem)] md:h-24 h-8 w-8 md:w-24 rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/mangodb.svg" className="" />
                    </div>
                </div>
                <div class="absolute transform md:translate-y-20 translate-y-28 md:left-[calc(50%+36rem)] left-[calc(50%+10rem)] md:h-20 h-6 w-6 md:w-20  rounded-full bg-white mt-20 shadow-xl transition duration-500 hover:scale-110 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/f.svg" className="" />
                    </div>
                </div>
            </div>

        </div>

    )
}