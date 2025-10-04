"use client"
import LiquidEther from "./LiquidEther"
import Spline from "@splinetool/react-spline"




const Home = () => {

    return (
        <div className="relative  min-h-[100svh] overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 z-0 bg-[#09011A]">
                <LiquidEther
                    colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={200}
                    autoRampDuration={0.6}
                />
            </div>



            <main className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:py-16 h-full max-h-screen w-full  flex items-center justify-center ">
                <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 text-center md:text-left w-full mt-20 lg:mt-0">
                    <div className="order-2 md:order-1 w-full flex items-center justify-center ">
                        <div className="group relative w-full max-w-[520px] md:max-w-[640px] lg:max-w-[720px] h-[300px] sm:h-[380px] md:h-[460px] lg:h-[600px] lg:mt-24 mt-0">
                            <div className="absolute inset-0 rounded-full transition duration-500 opacity-100 left-12 md:left-0 md:opacity-0 group-hover:opacity-100 right-20 blur-2xl bg-purple-500/40"></div>

                            <Spline
                                className="absolute inset-0 pl-12 lg:pl-0 "
                                style={{ width: "100%", height: "100%" }}
                                scene="https://prod.spline.design/gsE8xu03UCTC4KFO/scene.splinecode"
                            />

                        </div>
                    </div>

                    {/* Text content */}
                    <div className="order-1 relative right-0 md:right-[70px] lg:[80px] md:order-2  flex flex-col items-center md:items-start md:mt-14 ">
                        <div className="mx-auto animate-pulse duration-300 w-fit px-4 py-1 my-4 md:my-0 flex items-center text-white bg-white/5 rounded-full shadow-lg backdrop-blur-md border border-white/50">
                            <span className="text-sm text-muted-foreground">Inter-College Tech Fest 2025</span>
                        </div>

                        <h1 className="whitespace-nowrap text-balance md:text-7xl lg:text-8xl text-5xl  md:pt-6 md:pb-4 z-10 [text-shadow:_7px_5px_16px_rgba(230,59,219,0.45)] allura-regular tracking-wider text-white select-none ">
                            <span className="kalam-regular">अ</span>VINYA 2025
                        </h1>

                        <h5 className="text-lg md:text-xl pt-3 mx-auto rokkitt-regular text-white">
                            {"Let's Be A Part Of An Exciting Journey On"}
                        </h5>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-[#FFD400] rokkitt-regular">October 13, 2025</h2>

                        <a
                            href="#Event"
                            aria-label="Register yourself to the event"
                            className="mt-8 w-fit p-3 md:p-4 md:px-10 px-6 rounded-full text-white animate-bounce mx-auto font-bold bg-white/5 shadow-lg backdrop-blur-md border border-white/50 hover:scale-105 transform transition duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09011A]"
                        >
                            Register Yourself To The Event
                        </a>
                    </div>
                </section>
            </main>
            <div className="relative bottom-0 left-0 right-0 h-10 mt-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-sm z-20 pointer-events-none"></div>

        </div>
    )
}

export default Home
