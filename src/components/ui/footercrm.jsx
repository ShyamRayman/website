import React,{useState} from 'react'
import "./footercrm.css"


const Footercrm = props => {

    const [hover, setHover] = useState(false);
  const content = "Travel with Us";

  const [hovered, setHovered] = useState(false);
  const contents = "Make a call";

  const [isHovered, setIsHovered] = useState(false);
  const contentt = "Email Us";


  return (
    <>
        <div className="relative ">
        <div className="md:absolute bottom-0 left-0 w-full">
          <img
            src="/images/bg.svg"
            alt="bg"
            className="w-full hidden sm:hidden md:block "
          />
        </div>
        <section className="py-4 mt-16 w-full flex justify-center ">
          <div className="bg-[#FFD100] lg:w-8/12 md:w-9/12 w-11/12 h-auto md:h-48 lg:h-64 rounded-xl relative max-w-7xl flex flex-col-reverse gap-5 items-center justify-center">
            <div className="md:absolute bottom-0 lg:left-12 md:left-8 left-16 w-7/12 lg:w-96 md:w-96 sm:w-80">
              <img
                src="/images/partner.svg"
                className="w-full lg:w-full md:w-3/4 sm:w-full crm-img"
              />
            </div>
            <div className="md:absolute top-5 lg:right-22 md:right-16 right-12 text-center flex md:block flex-col justify-center">
              <p className="text-l md:text-2xl text-left  sm:text-9xl lg:ms-2 font-bold tracking-wide leading-relaxed relative  crm-1">
                Struggling with <br /> CRM Challenges?
              </p>

              <p className="text-xs md:text-base lg:text-base sm:text-base sm:mt-1 text-center relative crm-2">
                Let's solve your CRM challenges together.
              </p>

              <button
                className={`button   relative  mt-3 ${
                  hover ? "hover" : ""
                } crm-3`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ "--button-content": `"${content}"` }}
              ></button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}



export default Footercrm



