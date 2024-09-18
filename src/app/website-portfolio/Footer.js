
'use client'
import React, { useState } from "react";


import Link from "next/link";
import Logo from "@/components/ui/logo";

export default function Footer() {

    const[hover,setHover] = useState(false);
    const content = 'Begin Here'



    return (
        <section className="">
           
       

            <footer className="w-full bg-[#F3F3F3] justify-center text-[#242628]  ">
                <div className="md:max-w-6xl mx-auto flex flex-col md:flex-row justify-evenly items-center text-center md:text-left">
                <div className=" mt-8 md:mt-0 ">
            <img

              className="lg:w-full md:w-8/12 w-6/12 lg:mx-0 mx-auto h-auto object-cover  "
              src="/images/footer-img.png"
              alt="Example"
            />
          </div>
                <div className="md:w-1/2  relative " >
            <h2 className="lg:text-6xl md:text-3xl text-2xl md:mr-4 font-extrabold ">
                  Transform Your <br/> Vision into Reality   
            </h2>
            <p className="mt-4   md:font-semibold md:w-full md:text-start md:ml-2 text-center md:text-base mb-4">
             Start building your dream website!
            </p>
            <button
     className={`button ${hover ? 'hover' : ''}`}
     onMouseEnter={() => setHover(true)}
     onMouseLeave={() => setHover(false)}
     style={{ '--button-content': `"${content}"` }}
    >

    </button>
          </div>
                </div>
                <Logo/>
            </footer>
          
        </section>
    )
}