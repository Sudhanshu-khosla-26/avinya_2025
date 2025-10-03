"use client";
import Link from "next/link";

const EventCard = ({ title, description, timing, venue, imageUrl, RegistrationLink }) => {
    return (
        <div className="relative h-[380px] sm:h-[400px] md:h-[21.5rem] w-full max-w-[280px] sm:max-w-[280px] mx-auto">
            {/* Mobile Card - Simple, No Flip */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-pink-500/30 sm:hidden blur-2xl opacity-100 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"></div>

            <Link href={RegistrationLink} target="_blank" passHref className="sm:hidden">
                <div className="mobile-card relative w-full h-full border-2 border-purple-500/40 overflow-hidden shadow-2xl bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 active:scale-[0.98] transition-transform duration-200">
                    {/* Glow on active */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-pink-500/30 blur-xl opacity-0 active:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    <div className="relative flex items-center flex-col justify-between w-full h-full p-4">
                        <div className="relative w-full flex-1 flex items-center justify-center mt-0 mb-3 sm:mb-4">
                            <div className="relative w-66 h-80 sm:w-64 sm:h-64 md:w-72 md:h-[280px]">
                                <img
                                    loading="lazy"
                                    src={imageUrl}
                                    alt={title}
                                    className="w-full h-full drop-shadow-2xl"
                                />
                                <div className="absolute inset-0 -z-10 bg-white/20 w-full h-full blur-2xl" />
                            </div>
                        </div>
                        <div className="w-full text-center space-y-2">
                            <h3 className="text-purple-400 rokkitt-bold text-base font-bold truncate px-2">
                                {title}
                            </h3>

                        </div>
                    </div>
                </div>
            </Link>

            {/* Desktop/Tablet Card - With Flip */}
            <div
                tabIndex={0}
                className="flip-card-container hidden sm:block relative h-full w-full perspective-1000 group outline-none"
            >
                {/* Glow Layers */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-pink-500/30 blur-2xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-pink-500/30 blur-xl opacity-100 group-hover:opacity-0 group-focus-within:opacity-0 transition-opacity duration-500"></div>

                {/* Inner Card */}
                <div className="flip-card-inner-container relative w-full h-full transition-transform duration-500 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] transform-style-3d [will-change:transform] group-hover:rotate-y-180 group-focus-within:rotate-y-180">
                    {/* Front */}
                    <div className="flip-card-face absolute w-full h-full backface-hidden border-2 border-purple-500/40 overflow-hidden shadow-2xl bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950">
                        <div className="relative flex items-center flex-col justify-center w-full h-full p-4 sm:p-5">
                            <div className="relative w-full flex-1 flex items-center justify-center mt-3 mb-3 sm:mb-4">
                                <div className="relative w-54 h-60 sm:w-72 sm:h-80 md:w-72 md:h-[280px]">
                                    <img
                                        loading="lazy"
                                        src={imageUrl}
                                        alt={title}
                                        className="w-full h-full drop-shadow-2xl"
                                    />
                                    <div className="absolute inset-0 -z-10 bg-white/20 w-full h-full blur-2xl" />
                                </div>
                            </div>
                            <div className="w-full text-center space-y-1">
                                <h3 className="text-purple-400 rokkitt-bold text-base sm:text-lg md:text-xl font-bold truncate px-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="flip-card-face absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900 border-2 border-purple-500/40 p-4 sm:p-5 md:p-6 flex flex-col justify-between rotate-y-180 shadow-2xl">
                        <div className="flex-1 overflow-hidden">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2">
                                {title}
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-4">
                                {description}
                            </p>

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
            `}</style>
        </div>
    );
};

export default EventCard;