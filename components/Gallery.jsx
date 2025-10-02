"use client"
import React from 'react'
import CircularGallery from './CircularGallery'
import BlurText from './BlurText'

const Gallery = () => {
    return (
        <div className="relative  bg-[#09011A] text-white p-4 sm:p-6 md:p-8 md:pb-14">
            <div className="relative w-full mb-6 sm:mb-8 lg:mb-12">
                <BlurText
                    text="Glimpses of the अVINYA 2024"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl w-fit mx-auto lg:mx-0 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left"
                />
                {/* Underline decoration */}
                <div className="mt-2 sm:mt-4 mx-auto lg:mx-0 w-32 sm:w-48 h-1 bg-gradient-to-r from-[#5936e5] via-[#d966ff] to-[#5936e5] rounded-full"></div>
            </div>
            <div style={{ height: '600px', position: 'relative' }}>

                <CircularGallery className="absolute top-0" bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
            </div>
        </div>
    )
}

export default Gallery