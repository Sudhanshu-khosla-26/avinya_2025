import React from 'react'
import GlareHover from './GlareHover'
import Image from 'next/image'
import BlurText from "./BlurText";

const About = () => {
    return (
        <div className="min-h-screen w-full text-white bg-[#09011A] py-8 lg:py-12">
            {/* Container with responsive padding */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 max-w-7xl mx-auto">

                {/* Title */}
                <div className="relative w-full mb-6 sm:mb-8 lg:mb-12">
                    <BlurText
                        text="About अVINYA"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-2xl w-fit mx-auto lg:mx-0 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left"
                    />
                    {/* Underline decoration */}
                    <div className="mt-2 sm:mt-4 mx-auto lg:mx-0 w-32 sm:w-48 h-1 bg-gradient-to-r from-[#5936e5] via-[#d966ff] to-[#5936e5] rounded-full"></div>
                </div>

                {/* Main content container - responsive flex layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 xl:gap-8 items-center lg:items-start">

                    {/* Image Section - Left side on desktop, top on mobile */}
                    <div className="w-full lg:w-1/2 xl:w-3/6 flex-shrink-0">
                        <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                            {/* Responsive image container */}
                            <div className="relative w-full max-h-[200px] md:max-h-[300px]">
                                {/* Glow background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#5936e5]/40 to-[#d966ff]/40 rounded-2xl blur-xl"></div>

                                {/* GlareHover wrapper */}
                                <GlareHover
                                    glareColor="#ffffff"
                                    glareOpacity={0.3}
                                    glareAngle={-30}
                                    glareSize={300}
                                    transitionDuration={800}
                                    playOnce={false}
                                    className="relative z-10 w-full h-full"
                                >
                                    <img
                                        alt="अVINYA Tech Fest Poster"
                                        src="/mainPoster.webp"
                                        className="w-full h-full max-h-[200px] md:max-h-[300px] object-cover  tech-glow"
                                    />
                                </GlareHover>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Section - Right side on desktop, bottom on mobile */}
                    <div className="w-full lg:w-1/2 xl:w-3/5 space-y-4 sm:space-y-6">

                        {/* Main description */}
                        <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200">
                            <p className="mb-4 sm:mb-6">
                                <span className="text-[#d966ff] font-semibold text-lg sm:text-xl">अVINYA</span>, The Annual Tech Fest of Guru Tegh Bahadur 4th Centenary Engineering College, is a distinguished event celebrating innovation, knowledge, and creativity. Derived from Sanskrit, अVINYA means "Innovation," embodying the fest's mission to offer a platform for students to engage with emerging technologies through a range of exciting events.
                            </p>

                            <p className="mb-4 sm:mb-6">
                                Guided by our college motto, <em className="text-[#5936e5]">'Fostering Dreams, Forging Futures,'</em> अVINYA focuses on developing technical, communication, and presentation skills. This year marks the second edition, now an inter-college event, welcoming participants from various institutions to collaborate and showcase their abilities.
                            </p>
                        </div>

                        {/* Events section */}
                        <div className="bg-gradient-to-br from-[#5936e5]/10 to-[#d966ff]/10 rounded-xl p-4 sm:p-6 border border-[#5936e5]/20">
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#d966ff]">Featured Events:</h3>

                            {/* Events grid - responsive */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
                                {[
                                    "Ideathon",
                                    "Poster Making",
                                    "Tech Quiz",
                                    "AI Creative Clash ",
                                    " Zero Day Apocalypse",
                                    "E-Waste Art",
                                    "Bits N Bytes",
                                    "Debate ",
                                    "Open Innovation",
                                    "Debugging "
                                ].map((event, index) => (
                                    <div key={index} className="flex items-center space-x-2 text-gray-200">
                                        <span className="w-2 h-2 bg-gradient-to-r from-[#5936e5] to-[#d966ff] rounded-full flex-shrink-0"></span>
                                        <span>{event}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Closing statement */}
                        <div className="text-sm sm:text-base lg:text-lg text-center lg:text-left">
                            <p className="text-gray-200 italic">
                                अVINYA fosters a collaborative environment where young innovators can explore and present advancements in technology, preparing them for future challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
