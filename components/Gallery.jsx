"use client";
import React from "react";
import CircularGallery from "./CircularGallery";
import BlurText from "./BlurText";

const Gallery = () => {
    return (
        <div className="relative w-full bg-[#09011A] text-white p-4 sm:p-6 md:px-0 md:pt-8 md:pb-14">
            {/* Heading */}
            <div className="relative w-full mb-6 sm:mb-8 md:px-8 lg:pl-4">
                <BlurText
                    text="Glimpses of the अVINYA 2024"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl w-fit mx-auto lg:mx-0 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left"
                />
                {/* Underline */}
                <div className="mt-2 sm:mt-4 mx-auto lg:mx-0 w-32 sm:w-48 h-1 bg-gradient-to-r from-[#5936e5] via-[#d966ff] to-[#5936e5] rounded-full"></div>
            </div>

            {/* Desktop: Circular Gallery */}
            <div className="hidden md:block" style={{ height: "600px", width: "100%", position: "relative" }}>
                <CircularGallery
                    className="absolute top-0"
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.02}
                />
            </div>

            {/* Mobile: Grid Gallery */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
                {[
                    { image: '/gallery01.jpg', text: '' },
                    { image: '/gallery02.webp', text: '' },
                    { image: '/gallery03.webp', text: '' },
                    { image: '/gallery04.webp', text: '' },
                    { image: '/gallery05.jpg', text: '' },
                    { image: '/gallery06.jpg', text: '' },
                    { image: '/gallery07.webp', text: '' },
                    { image: '/gallery08.webp', text: '' },
                    // { image: '/gallery09.webp', text: '' },
                    { image: '/gallery10.webp', text: '' },
                    { image: '/gallery11.jpg', text: '' },
                    // { image: '/gallery12.webp', text: '' },
                    { image: '/gallery13.webp', text: '' },
                    { image: '/gallery14.webp', text: '' },
                    { image: '/gallery15.webp', text: '' },
                    { image: '/gallery16.webp', text: '' }

                ].map((src, i) => (
                    <div
                        key={i}
                        className="relative overflow-hidden rounded-xl shadow-lg group"
                    >
                        <img
                            src={src.image}
                            alt={`Gallery ${i}`}
                            className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition duration-500 ease-out"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
