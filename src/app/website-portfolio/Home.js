




export default function Home() {
    return (
        <>
            <section className="bg-white flex items-center justify-center ">
    <div className="md:max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
        <div className="md:w-full w-11/12">
            <h2 className="md:text-6xl text-3xl font-extrabold relative">
                <img src="/images/line.png" className="relative lg:top-20 md:top-20 top-12 lg:w-[46%] md:w-[65%] lg:h-3 md:h-3 h-2 w-[75%] mx-auto" />
                <span className="absolute w-full flex justify-center md:top-9 top-6">Website Portfolio</span><br />
                {/* <span className="w-full flex justify-center  md:mt-6">Portfolio</span> */}
            </h2>
        </div>
        <div className="w-full flex justify-center">
        <p className=" lg:w-8/12 md:w-10/12 w-11/12 lg:text-base text-sm mt-10">
        Business individuality and owner tastes are our focus. We align with industry trends and have created various websites. You are currently viewing some of our work. Explore more to see how we can help your business stand out.
        </p></div>
    </div>
</section>

        </>
    )
}