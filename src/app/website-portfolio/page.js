import Navbar from "./Navbar";

import Services from "./Services";
import Success from "./Success";
import Footer from "./Footer";
import Home from "./Home";



export default function Main() {
  return (

    <div className="relative">
      <Navbar />
      <Home />
      <Services />


      <Success />

     
      
      <div className=" absolute lg:bottom-[330px] md:bottom-[270px]  bottom-[466px] z-[-20] object-contain">
          <img src="/images/bg.svg" alt="bg" className=""/>

        </div>
        <Footer />
   

    
      <div className="fixed md:bottom-2 bottom-10 md:right-20 right-6">
      <div className=" animate-bounce border border-white drop-shadow-xl w-12 h-12 bg-[#FFFFFF] rounded-full absolute bottom-0 right-0 transform -translate-x-1/2">
        <img src='/images/whats.svg' alt='image' className="absolute inset-0 m-auto w-3/4 h-3/4" />
      </div>
      </div>
    </div>





  );
}
