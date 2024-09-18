'use client'

import React, { useState ,useEffect} from "react";
import Navbar from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import Footer from "@/components/ui/footer";
import { formatDate } from "@/lib/utils";




export default function Contact() {

    const [selected, setSelected] = useState(null);

    const buttons1 = [
        { id: 1, text: 'Branding', width: 'lg:w-24' },
        { id: 2, text: 'Digital Marketing', width: 'lg:w-36' },
        { id: 3, text: 'Design Services', width: 'lg:w-32' },
        { id: 4, text: 'Erp', width: 'lg:w-20' },
        { id: 5, text: 'CRM', width: 'lg:w-20' },
    ];

    const buttons2 = [
        { id: 6, text: 'Web Application', width: 'lg:w-36' },
        { id: 7, text: 'Mobile Application', width: 'lg:w-40' },
        { id: 8, text: 'Testing Services', width: 'lg:w-36' },
    ];

    const handleClick = (id) => {
        setSelected(id);
    };


    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
          const indianTime = new Date().toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit',
          });
          setTime(indianTime);
        };
    
        updateTime();
       
      }, []);
    

      const [usTime,setUsTime] = useState('')

      useEffect(() => {
        const updateUSTime = () => {
          const usaTime = new Date().toLocaleTimeString('en-US', {
            timeZone: 'America/New_York',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit',
          });
          setUsTime(usaTime);
        };
    
        updateUSTime();
       
      }, []);
      const [ukTime,setUKTime] = useState('')

      useEffect(() => {
        const updateUKTime = () => {
          const britanTime = new Date().toLocaleTimeString('en-US', {
            timeZone: 'Europe/London',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit',
          });
          setUKTime(britanTime);
        };
    
        updateUKTime();
       
      }, []);

    return (
        <>
            <div className="">
                <Navbar />

                <section className="bg-white py-12 ">
                    <div className="lg:max-w-6xl md:max-w-5xl w-11/12  mx-auto  flex flex-col lg:flex-row md:flex-row justify-evenly lg:gap-72   items-center">

                        <div className=" mt-8 md:mt-32  lg:mr-20 ">
                            <img

                                className="  lg:w-10/12 md:w-1/3 w-10/12 lg:mx-0 mx-auto h-auto object-cover  "
                                // src="/images/p1 2.png"
                                alt="Example"
                            />

                        </div>

                        <div className="lg:w-full md:w-1/2 lg:ml-5 md:ml-5 relative " >
                            <h2 className="lg:text-6xl text-4xl lg:mr-4 font-extrabold ">
                                <img src="/images/line.png" className="relative lg:top-14 top-9 lg:w-80 md:w-48 w-[210px] lg:ml-0 md:ml-0 ml-16" />     <span className="absolute w-full flex  md:justify-start justify-center">Reach Out</span>  <br /> <span className="w-full flex  md:justify-start justify-center">to Us</span>
                            </h2>

                            <div className="grid grid-cols-3 gap-3 md:flex md:flex-row mt-5 md:space-y-0 md:space-x-3">
                                {buttons1.map((button) => (
                                    <button
                                        key={button.id}
                                        className={`border border-[#191919] w-full ${button.width} h-10 font-semibold lg:text-sm text-xs text-center rounded-2xl ${selected === button.id ? 'bg-[#FFD100]' : 'bg-white'}`}
                                        onClick={() => handleClick(button.id)}
                                    >
                                        {button.text}
                                    </button>
                                ))}

                            </div>

                            <div className=" grid grid-cols-2 md:flex mt-3 space-y-1 md:space-y-0 md:flex-row md:space-x-3 lg:gap-0 gap-2">
                                {buttons2.map((button) => (
                                    <button
                                        key={button.id}
                                        className={`border border-[#191919] w-full ${button.width} h-10 font-semibold lg:text-sm text-xs text-center rounded-2xl ${selected === button.id ? 'bg-[#FFD100]' : 'bg-white'}`}
                                        onClick={() => handleClick(button.id)}
                                    >
                                        {button.text}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-4">
                                <div className="flex lg:flex-row flex-col gap-4">
                                    <input className="border-b-2 border-[#C5C5C5] focus:border-[#D3D3D3] placeholder:text-[#D3D3D3]  outline-none lg:w-1/2  w-full  py-2" type="text" placeholder=" Your Name" />
                                    <input className="border-b-2 border-[#C5C5C5] focus:border-[#D3D3D3] placeholder:text-[#D3D3D3]  outline-none lg:w-1/2 w-full py-2" type="text" placeholder=" Company" />
                                </div>
                                <div className="flex lg:flex-row flex-col gap-4">
                                    <input className="border-b-2 border-[#C5C5C5] focus:border-[#D3D3D3] placeholder:text-[#D3D3D3] outline-none lg:w-1/2 w-full py-2" type="text" placeholder=" Email" />

                                    <div className="flex items-center  border-b-2 border-[#C5C5C5] focus-within:border-blue-500 lg:w-1/2 w-full">
                                        <select className="bg-transparent border-none outline-none py-2 pr-4">
                                            <option value="option1">IND</option>
                                            <option value="option2">USA</option>
                                            <option value="option3">UK</option>
                                        </select>
                                        <input className="flex-1 bg-transparent border-none outline-none py-2 pl-4 placeholder:text-[#D3D3D3] " type="text" placeholder="Phone Number" />
                                    </div>

                                </div>

                                <div className="flex flex-row gap-4">
                                    <input className="border-b-2 border-[#C5C5C5] focus:border-[#D3D3D3] placeholder:text-[#D3D3D3] outline-none w-full py-2" type="text" placeholder=" Message" />
                                </div>
                            </div>
                            <button className="  bg-[#191919] mt-10 text-white w-full h-12 font-semibold text-base rounded-2xl scroll-button ">Send Message</button>
                        </div>

                    </div>
                </section>

                <section className="py-10 lg:max-w-6xl w-11/12 mx-auto">
                    <div class="flex-center">
                        <div class="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.291607945193!2d76.95867447452012!3d11.016733954716232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8598ae546b8e3%3A0xe9218cb1eddeb5fd!2sHUGE%20IT%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1720067065714!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-9">
                        <div className="lg:flex lg:flex-row flex-col justify-evenly gap-10 w-full max-w-screen-xl">
                            <div className="flex flex-col w-full items-center text-center lg:items-start lg:text-left">
                                <div className="flex flex-row gap-36">
                                    <h1 className="text-2xl font-semibold">India</h1>
                                    <p className="font-semibold text-xl mt-1">{time}</p>
                                </div>
                                <p className="lg:w-11/12 w-11/12  mt-2">No:416, Second Floor, Veejay Capella Building, Vivekananda Road, Ponnay Street, Coimbatore, Tamil Nadu 641012</p>
                                <p className="mt-3">+91 90920 90077</p>
                                <p className="mt-3">businesshead@thehugegroup.com</p>
                            </div>
                            <div className="flex flex-col w-full items-center text-center lg:items-start lg:text-left lg:mt-0 mt-10">
                               <div className="flex flex-row gap-40">
                                <h1 className="text-2xl font-semibold">USA</h1>
                                <p className="font-semibold text-xl mt-1">{usTime}</p>
                                </div>
                                <p className="lg:w-11/12 w-11/12 mt-2">#54, Berry Maud Lane, Shirley, Solihull, B90 1BZ</p>
                                <p className="mt-3">+1(802)000-0000</p>
                                <p className="mt-3">businesshead@thehugegroup.com</p>
                            </div>
                            <div className="flex flex-col w-full items-center text-center lg:items-start lg:text-left lg:mt-0 mt-10">
                               <div className="flex flex-row gap-44">
                                <h1 className="text-2xl font-semibold">UK</h1>
                                <p className="font-semibold text-xl mt-1">{ukTime}</p>
                                </div>
                                <p className="lg:w-11/12 w-11/12 mt-2">#54, Berry Maud Lane, Shirley, Solihull, B90 1BZ</p>
                                <p className="mt-3">+1(802)000-0000</p>
                                <p className="mt-3">businesshead@thehugegroup.com</p>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="relative lg:mt-16">
                    <div className=" absolute lg:bottom-[213px] md:bottom-[299px]  bottom-[815px] z-[-20]">
                        <img src="/images/bg.svg" alt="bg" className="" />

                    </div>
                    <Footer />
                </div>

            </div>
        </>
    )
}

