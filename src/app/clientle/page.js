import React from "react";
import Navbar from "@/components/ui/navbar";





export default function Clientle (){
    return(
        <div>
        <Navbar/>

        <section className="bg-white flex items-center justify-center lg:py-5">
    <div className="md:max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
        <div className="md:w-full w-11/12">
            <h2 className="md:text-6xl text-3xl font-extrabold relative">
                <img src="/images/line.png" className="relative lg:top-20 md:top-20 top-12 lg:w-[73%] md:w-[65%] lg:h-3 md:h-3 h-2 w-[75%] mx-auto" />
                <span className="absolute w-full flex justify-center md:top-9 top-6">Take a Look at</span><br />
                <span className="w-full flex justify-center  md:mt-6">Our Clients</span>
            </h2>
        </div>
        <div className="w-full flex justify-center">
        <p className=" lg:w-full md:w-10/12 w-11/12 lg:text-base text-sm mt-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p></div>
    </div>
</section>
        
        </div>
    )
}