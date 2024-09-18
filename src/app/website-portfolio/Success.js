'use client'

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



const images = [
    {
    logoSrc:'/images/infonet1.svg',
    title:'Infonet',
    star:'/images/star.svg',
    rating:5,
    content:'Delivered what we expected with Exceptional Quality'
},
    {
    logoSrc:'/images/global.svg',
    title:'Global Engineering',
    star:'/images/star.svg',
    rating:5,
    content:'Excellent Service and Support.Thank you Team.',
    
},
    {
    logoSrc:'/images/Ashford.svg',
    title:'Ashford Therapyhub',
    content:'Such a timely and great rapport with each steps , fabulous team.',
    star:'/images/star.svg',
    rating:5,
},
    {
    logoSrc:'/images/tamilan.svg',
    title:'Tamilan Tiles',
    content:'Gets the detailed requirements and gives the estimate clearly. Good team to work with.',
    star:'/images/star.svg',
    rating:5,
},
    {
    logoSrc:'/images/innovias.svg',
    title:'Innoviqs',
    content:'Such a timely and great rapport with each steps , fabulous team',
    star:'/images/star.svg',
    rating:5,
},
    {
    logoSrc:'/images/innovias.svg',
    title:'Innoviqs',
    content:'Such a timely and great rapport with each steps , fabulous team',
    star:'/images/star.svg',
    rating:5,
},
]


export default function Success() {
   

    

    return (
        <section className="md:py-0 lg:mb-32 md:mb-10 ">
            <div className="text-4xl text-center md:py-4  font-extrabold md:mb-0 mb-2" >
                <p class="">Success Stories</p>

            </div>
            <div className="w-full flex justify-center">
                <p className="text-sm md:text-base text-center md:w-8/12  md:mt-0 mt-1">
                    We understand how hard it is for you to find the perfect development partners.


                </p>
            </div>

            <div className="w-full flex justify-center py-10 relative">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="md:w-8/12 w-8/12 lg:max-w-5xl rounded-xl "
                >
                    <CarouselContent className="flex  ">
                         {images.map((item,index) => (
                        <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/4 rounded-xl drop-shadow-sm  ">
                       
                            <div className="p-1" key={index}>
                                <Card className='bg-gray-50 rounded-2xl  mt-4'>
                                        <div className="border  border-[#FFFFFF] z-40 shadow-xl md:w-24 md:h-24 w-20 h-20 bg-[#FFFFFF] rounded-full absolute lg:-top-4 md:left-36 md:-top-4 -top-4 left-36 transform -translate-x-1/2">
                                            <img src={item.logoSrc} alt={`Logo ${index}`} className="absolute inset-0 m-auto lg:w-16 lg:h-16 md:w-14 md:h-14 w-10 h-10" />
                                        </div>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6 ">
                                        <span className="text-md font-semibold lg:mt-8 mt-2">{item.title}</span>
                                        <div className="flex mt-2">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <img src={item.star} alt={`star ${i}`} key={i} className="w-5 h-5" />
                                    ))}
                                </div>
                                        <span className="text-sm mt-3 text-center">{item.content} </span>
                                    </CardContent>
                                </Card>
                            </div>
                       
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='' />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>



    )
}