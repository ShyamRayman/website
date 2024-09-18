'use client'
import React, { useState,useEffect } from "react";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/custom/customTab"
import Link from "next/link";


const imageData = [
    {
        href: 'https://infonetcomm.com',
        logoSrc: '/images/infonet.svg',
        contentSrc: '/images/info-img.png',
        hoverImgSrc: '/images/info-scroll.png'
    },
    {
        href: 'https://innoviqs.com',
        logoSrc: '/images/innovias.svg',
        contentSrc: '/images/inno-img.png',
        hoverImgSrc: '/images/innoviqs-scroll.png'
    },
    {
        href: 'http://agnifactors.com',
        logoSrc: '/images/Agni Factors.svg',
        contentSrc: '/images/agni.png',
         hoverImgSrc: '/images/agni-scroll.png'
    },
    {
       
        logoSrc: '/images/qatar.svg',
        contentSrc: '/images/qatar-factory.png',
      
    },
    {
        href: 'https://www.zaron.in',
        logoSrc: '/images/zaron.svg',
        contentSrc: '/images/zaron-img.png',
         hoverImgSrc: '/images/zaron-scroll.png'
    },
    {
        href: 'https://agarramtextiles.in',
        logoSrc: '/images/agaram.svg',
        contentSrc: '/images/agaram-img.png',
        
    },
    {
        href: 'https://teaniru.in',
        logoSrc: '/images/teaniru.svg',
        contentSrc: '/images/teaniru-img.png',
         hoverImgSrc: '/images/teaniru-scroll.png'
    },
    {
        href: 'http://www.panditashokbharrati.com',
        logoSrc: '/images/Pandit.svg',
        contentSrc: '/images/pandit-img.png',
         hoverImgSrc: '/images/pandit-scroll.png'
    },
    {
        href: 'https://vinausstructures.com',
        logoSrc: '/images/vinaus.svg',
        contentSrc: '/images/vinaus-img.png',
         hoverImgSrc: '/images/vinaus-scroll.png'
    },


];

export default function Services() {
    const [showMore, setShowMore] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setSmallScreen(window.innerWidth < 768);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const showMoreCards = () => {
        setShowMore(true);
    };

    const showLessCards = () => {
        setShowMore(false);
    };


    return (

        <section className=" md:py-8 md:my-16 py-6 relative w-full min-w-screen">
            <div className="md:max-w-6xl w-11/12 mx-auto ">
                <div className="md:flex md:flex-col flex-row justify-center items-center">


                    <Tabs defaultValue="account" className="">
                        <div className="w-full flex justify-center">
                            <TabsList className="grid w-full  grid-cols-4 ">
                                <TabsTrigger value="account" >All</TabsTrigger>
                                <TabsTrigger value="static" className='hover:bg-gray-50'>Static</TabsTrigger>
                                <TabsTrigger value="dynamic" className='hover:bg-gray-50'>Dynamic</TabsTrigger>
                                <TabsTrigger value="e-commerce" className='hover:bg-gray-50'>E-Commerce</TabsTrigger>
                            </TabsList></div>
                        <TabsContent value="account" className="mt-10">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {imageData.slice(0, smallScreen && !showMore ? 3 : imageData.length).map((item, index) => (
                    item.href ? (
                        <Link href={item.href} key={index}>
                            <Card className='bg-[#F9F9F9] rounded-xl shadow-md border-none w-full h-full card'>
                                <div className="card-container">
                                    <CardHeader>
                                        <div className="flex gap-5 w-full justify-center">
                                            <img src={item.logoSrc} alt={`Logo ${index}`} className="card-content-image" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <img src={item.contentSrc} className="drop-shadow-md card-content-image" alt={`Content ${index}`} />
                                    </CardContent>
                                    <img src={item.hoverImgSrc} alt={`Hover ${index}`} className="card-hover-image" />
                                </div>
                            </Card>
                        </Link>
                    ) : (
                        <Card className='bg-[#F9F9F9] rounded-xl shadow-md border-none md:w-full w-11/12 md:h-full mx-auto card' key={index}>
                            <div className="card-container">
                                <CardHeader>
                                    <div className="flex gap-5 w-full justify-center">
                                        <img src={item.logoSrc} alt={`Logo ${index}`} />
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <img src={item.contentSrc} className="drop-shadow-md" alt={`Content ${index}`} />
                                </CardContent>
                                <img src={item.hoverImgSrc} alt={`Hover ${index}`} className="card-hover-image" />
                            </div>
                        </Card>
                    )
                ))}
            </div>

            {smallScreen && (
                <div className="w-full flex justify-center md:mt-8 mt-3">
                    {!showMore ? (
                        <button onClick={showMoreCards} className="bg-[#191919] text-white md:px-5 md:py-2.5 px-3 py-2 font-semibold md:text-base text-sm rounded-2xl">
                            Show More
                        </button>
                    ) : (
                        <button onClick={showLessCards} className="bg-[#191919] text-white md:px-5 md:py-2.5 px-3 py-2 font-semibold md:text-base text-sm rounded-2xl">
                            Show Less
                        </button>
                    )}
                </div>
            )}
                        </TabsContent>
                        <TabsContent value="dynamic" className='mt-10'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {imageData.map((item, index) => (
                                    item.href ? (
                                        <Link href={item.href} key={index}>
                                            <Card className='bg-[#F9F9F9] rounded-xl shadow-md border-none md:w-full w-11/12 md:h-full mx-auto'>
                                                <CardHeader>
                                                    <div className="flex gap-5 w-full justify-center">
                                                        <img src={item.logoSrc} alt={`Logo ${index}`} />
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <img src={item.contentSrc} className="drop-shadow-md" alt={`Content ${index}`} />
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ) : (
                                        <Card className='bg-[#F9F9F9] rounded-xl shadow-md border-none' key={index}>
                                            <CardHeader>
                                                <div className="flex gap-5 w-full justify-center">
                                                    <img src={item.logoSrc} alt={`Logo ${index}`} />
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-2">
                                                <img src={item.contentSrc} className="drop-shadow-md" alt={`Content ${index}`} />
                                            </CardContent>
                                        </Card>
                                    )
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="e-commerce" className='mt-10'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {imageData.map((item, index) => (
                                    item.href ? (
                                        <Link href={item.href} key={index}>
                                            <Card className='bg-[#F9F9F9] rounded-xl shadow-md border-none md:w-full w-11/12 md:h-full mx-auto'>
                                                <CardHeader>
                                                    <div className="flex gap-5 w-full justify-center">
                                                        <img src={item.logoSrc} alt={`Logo ${index}`} />
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <img src={item.contentSrc} className="drop-shadow-md" alt={`Content ${index}`} />
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ) : (
                                        <Card className='bg-[#F9F9F9] rounded-xl shadow-md border-none' key={index}>
                                            <CardHeader>
                                                <div className="flex gap-5 w-full justify-center">
                                                    <img src={item.logoSrc} alt={`Logo ${index}`} />
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-2">
                                                <img src={item.contentSrc} className="drop-shadow-md" alt={`Content ${index}`} />
                                            </CardContent>
                                        </Card>
                                    )
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="static" className='mt-10'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {imageData.map((item, index) => (
                                    item.href ? (
                                        <Link href={item.href} key={index}>
                                            <Card className='bg-[#F9F9F9] rounded-xl shadow-md border-none md:w-full w-11/12 md:h-full mx-auto'>
                                                <CardHeader>
                                                    <div className="flex gap-5 w-full justify-center">
                                                        <img src={item.logoSrc} alt={`Logo ${index}`} />
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <img src={item.contentSrc} className="drop-shadow-md" alt={`Content ${index}`} />
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ) : (
                                        <Card className='bg-[#F9F9F9] rounded-xl shadow-md border-none' key={index}>
                                            <CardHeader>
                                                <div className="flex gap-5 w-full justify-center">
                                                    <img src={item.logoSrc} alt={`Logo ${index}`} />
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-2">
                                                <img src={item.contentSrc} className="drop-shadow-md" alt={`Content ${index}`} />
                                            </CardContent>
                                        </Card>
                                    )
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>



        </section>
    )
}