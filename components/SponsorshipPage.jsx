"use client"
import BlurText from "./BlurText";

export default function SponsorCarousel() {
    const sponsors = [
        { name: "TechCorp", logo: "/sponsor-techcorp.jpg" },
        { name: "InnovateLabs", logo: "/sponsor-innovatelabs.jpg" },
        { name: "DataSystems", logo: "/sponsor-datasystems.jpg" },
        { name: "CloudNet", logo: "/sponsor-cloudnet.jpg" },
        { name: "AI Solutions", logo: "/sponsor-aisolutions.jpg" },
        { name: "CyberSec", logo: "/sponsor-cybersec.jpg" },
        { name: "DevTools", logo: "/sponsor-devtools.jpg" },
        { name: "CodeBase", logo: "/sponsor-codebase.jpg" },
        { name: "CodeBase", logo: "/sponsor-codebase.jpg" },
        { name: "CodeBase", logo: "/sponsor-codebase.jpg" },
    ]

    const sponsormobile = [
        { name: "Reskill", logo: "/reskill.webp" }]

    // Duplicate sponsors for seamless loop
    const duplicatedSponsors = [...sponsors, ...sponsors]

    return (
        <section className="relative overflow-hidden bg-[#09011A] py-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-purple-500 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="relative w-full mb-6 sm:mb-8 lg:mb-12">
                    <BlurText
                        text="Sponsorship Partners"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-2xl w-fit mx-auto text-white lg:mx-0 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left"
                    />
                    {/* Underline decoration */}
                    <div className="mt-2 sm:mt-4 mx-auto lg:mx-0 w-32 sm:w-48 h-1 bg-gradient-to-r from-[#5936e5] via-[#d966ff] to-[#5936e5] rounded-full"></div>
                </div>

                {/* Scrolling Container */}
                <div className="relative">
                    {/* Desktop: Horizontal Scrolling Carousel - Row 1 */}
                    <div className="hidden md:block ">
                        <div className="flex gap-8 animate-scroll items-center whitespace-nowrap">
                            {duplicatedSponsors.map((sponsor, index) => (
                                <div
                                    key={`${sponsor.name}-${index}`}
                                    className="group flex-shrink-0 w-56 perspective-1000"
                                >
                                    <div className="relative h-16 w-full transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:-translate-y-2">
                                        {/* Glowing effect on hover */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"></div>

                                        {/* Card */}
                                        <div className="relative h-full w-full rounded-2xl  backdrop-blur-sm p-6 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-slate-700/70 group-hover:border-purple-500/50 group-hover:shadow-2xl">
                                            {/* Shine effect */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                                            {/* Logo */}
                                            <img
                                                loading="lazy"
                                                src={"/reskill.webp"}
                                                alt={sponsor.name}
                                                className="relative z-10 h-auto max-h-16 w-auto max-w-full object-contain filter grayscale-50 opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Horizontal Scrolling Carousel - Row 2 */}
                    <div className="hidden md:block  mt-4">
                        <div className="flex gap-8 animate-scroll-reverse items-center whitespace-nowrap">
                            {duplicatedSponsors.map((sponsor, index) => (
                                <div
                                    key={`${sponsor.name}-reverse-${index}`}
                                    className="group flex-shrink-0 w-56 perspective-1000"
                                >
                                    <div className="relative h-16 w-full transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:-translate-y-2">
                                        {/* Glowing effect on hover */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"></div>

                                        {/* Card */}
                                        <div className="relative h-full w-full rounded-2xl  backdrop-blur-sm p-6 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-slate-700/70 group-hover:border-purple-500/50 group-hover:shadow-2xl">
                                            {/* Shine effect */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                                            {/* Logo */}
                                            <img
                                                src={"/reskill.webp"}
                                                alt={sponsor.name}
                                                className="relative z-10 h-auto max-h-16 w-auto max-w-full object-contain filter grayscale-0 opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile: Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6">
                        {sponsormobile.map((sponsor, index) => (
                            <div
                                key={`${sponsor.name}-mobile-${index}`}
                                className="group perspective-1000"
                            >
                                <div className="relative h-24 w-full transition-all duration-500 ease-out transform group-hover:scale-105">
                                    {/* Glowing effect on hover */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"></div>

                                    {/* Card */}
                                    <div className="relative h-full w-full rounded-2xl  backdrop-blur-sm p-6 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-slate-700/70 group-hover:border-purple-500/50 group-hover:shadow-2xl">
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                                        {/* Logo */}
                                        <img
                                            src={"/reskill.webp"}
                                            alt={sponsor.name}
                                            className="relative z-10 h-auto max-h-16 w-auto max-w-full object-contain filter grayscale-0 opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                @keyframes scroll-reverse {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }

                .animate-scroll-reverse {
                    animation: scroll-reverse 30s linear infinite;
                }
                
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
                
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    )
}