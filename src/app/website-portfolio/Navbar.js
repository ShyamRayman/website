




'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";





export default function Navbar() {

  const[hover,setHover]= useState(false);
  const content = 'Contact us'

  return (
    <div className=" bg-gray-50   z-30 top-0 max-h-full w-full">
      <div className=" md:max-w-6xl w-full md:mx-auto p-2   flex justify-between items-center container  md:my-auto ">
        <div className="  flex items-center mt-1">
          <Image src="/images/hugeLogo.svg"
            width={50}
            height={12}
            className="h-8"
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-row gap-10">
        <button className=" bg-[#F9F9F9] border border-[#191919] md:px-5 px-2 py-1 md:py-2.5 font-semibold md:text-base  text-sm rounded-2xl ">Go Back to Site</button>
        <button
     className={`button hidden lg:flex ${hover ? 'hover' : ''}`}
     onMouseEnter={() => setHover(true)}
     onMouseLeave={() => setHover(false)}
     style={{ '--button-content': `"${content}"` }}
     
    >
    
    </button>
        {/* <button className=" hidden lg:flex bg-[#191919] text-white px-5 py-2.5 font-semibold text-base rounded-2xl scroll-button "><span className="scroll-text">Contact us</span></button> */}
       </div>
      </div>
    </div>
  )
}