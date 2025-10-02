"use client";
import { useState } from 'react';
import Link from 'next/link';

const EventCard = ({ title, description, timing, venue, imageUrl, RegistrationLink }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="flip-card-container h-[300px]  sm:h-80 md:h-[21.5rem] w-full max-w-[240px] sm:max-w-[280px]  md:max-w-[sm] mx-auto perspective-1000 group "
            onClick={() => {
                if (window.innerWidth < 768) {
                    handleClick();
                }
            }}
        >
            {/* Glowing gradient background */}

            <div className={`absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-pink-500/30 blur-2xl transition-opacity duration-500 ${isFlipped ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
            <div className={`absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-pink-500/30 blur-xl transition-opacity duration-500 ${!isFlipped ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
            {/* <div className={`absolute inset-0 bg-white/20 blur-xl transition-opacity opacity-100 duration-500 group-hover:opacity-0`}></div> */}

            <div className={`flip-card-inner-container  relative w-full h-full transition-transform duration-700 ease-in-out transform-style-3d ${isFlipped ? 'rotate-y-180' : ''} md:group-hover:rotate-y-180`}>
                {/* Front of card */}
                <div className="flip-card-face flip-card-front absolute w-full h-full backface-hidden  border-2 border-purple-500/40 overflow-hidden shadow-2xl bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950">
                    <div className="relative flex items-center flex-col justify-center w-full h-full p-4 sm:p-5">
                        {/* Image container with proper centering */}
                        <div className="relative w-full flex-1 flex items-center justify-center mt-3 mb-3 sm:mb-4">
                            <div className="relative w-54 h-60  sm:w-64 sm:h-64 md:w-72 md:h-[280px]">
                                <img
                                     loading="lazy"
                                    src={imageUrl}
                                    alt={title}
                                    className=" w-full h-full drop-shadow-2xl"
                                />

                                <div className="absolute inset-0 -z-10 bg-white/20 w-full h-full blur-2xl  "></div>
                            </div>
                        </div>

                        {/* Title section */}
                        <div className="w-full text-center space-y-1">
                            <h3 className="text-purple-400 rokkitt-bold text-base sm:text-lg md:text-xl font-bold truncate px-2">
                                {title}
                            </h3>


                        </div>
                    </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-face flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900  border-2 border-purple-500/40 p-4 sm:p-5 md:p-6 flex flex-col justify-between rotate-y-180 shadow-2xl">
                    <div className="flex-1 overflow-hidden">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2">{title}</h3>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-4">{description}</p>

                        <div className="space-y-2 sm:space-y-2.5">
                            <div className="flex items-start text-xs sm:text-sm">
                                <span className="text-purple-400 font-semibold mr-2 shrink-0">⏰</span>
                                <div>
                                    <span className="text-purple-400 font-semibold">Time: </span>
                                    <span className="text-white font-medium">{timing}</span>
                                </div>
                            </div>
                            <div className="flex items-start text-xs sm:text-sm">
                                <span className="text-purple-400 font-semibold mr-2 shrink-0">📅</span>
                                <div>
                                    <span className="text-purple-400 font-semibold">Venue: </span>
                                    <span className="text-white font-medium">{venue}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={RegistrationLink} target="_blank" passHref>
                        <button className="w-full mt-4 cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-2.5 sm:py-3 px-4 rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs sm:text-sm">
                            Register Now 🚀
                        </button>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
               
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
               
                .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
               
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .line-clamp-4 {
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                @media (hover: none) {
                    .md\:group-hover\:rotate-y-180 {
                        transform: none !important;
                    }
                }
            `}</style>
        </div>
    );
};
export default EventCard;