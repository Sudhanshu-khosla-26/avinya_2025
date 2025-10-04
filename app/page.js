
"use client";

import { useState, useEffect, Suspense, memo } from "react";
import dynamic from "next/dynamic";


const Robot = ({ className, color }) => (
  <svg
    viewBox="0 0 50 70"
    className={className}
    fill={color}
  >
    <rect x="10" y="20" width="30" height="30" rx="5" /> {/* Body */}
    <rect x="15" y="0" width="20" height="25" rx="5" /> {/* Head */}
    <circle cx="25" cy="10" r="4" fill="#09011A" /> {/* Eye */}
    <circle cx="25" cy="10" r="1.5" fill="white" /> {/* Eye shine */}
    <rect x="0" y="22" width="8" height="20" rx="3" /> {/* Left Arm */}
    <rect x="42" y="22" width="8" height="20" rx="3" /> {/* Right Arm */}
    <rect x="5" y="50" width="10" height="20" rx="3" /> {/* Left Leg */}
    <rect x="35" y="50" width="10" height="20" rx="3" /> {/* Right Leg */}
  </svg>
);

// Helper SVG for the Smash/Collision Effect
const SmashEffect = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="#FFD700" />
    <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="#FFA500" />
    <circle cx="50" cy="50" r="8" fill="#FF4500" />
  </svg>
);

const SplashLoader = memo(({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [hasCollided, setHasCollided] = useState(false);

  useEffect(() => {
    const collisionTimer = setTimeout(() => setHasCollided(true), 1500);
    const exitTimer = setTimeout(() => setIsExiting(true), 2500);
    const unmountTimer = setTimeout(() => onFinish?.(), 3000);

    return () => {
      clearTimeout(collisionTimer);
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, [onFinish]);

  return (
    <>
      <style jsx global>{`
        @keyframes move-in-left {
          0% { transform: translateX(-300%); }
          100% { transform: translateX(-10px); }
        }
        @keyframes move-in-right {
          0% { transform: translateX(300%); }
          100% { transform: translateX(10px); }
        }
        @keyframes explode-effect {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.2) rotate(90deg); opacity: 1; }
          100% { transform: scale(2) rotate(180deg); opacity: 0; }
        }
        @keyframes fade-in-pop {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-move-left {
          animation: move-in-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-move-right {
          animation: move-in-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-explode {
          animation: explode-effect 0.6s ease-out forwards;
        }
        .animate-fade-pop {
          animation: fade-in-pop 0.5s ease-out forwards;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09011A] overflow-hidden transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"
          }`}
      >
        <div className="flex flex-col items-center">
          {/* Animation Stage */}
          <div className="relative w-96 h-40 flex items-end justify-center">
            {!hasCollided && (
              <>
                {/* Left Robot - Vibrant Magenta/Pink */}
                <Robot
                  className="absolute w-20 h-20 left-0 bottom-0 animate-move-left drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]"
                  color="#EC4899"
                />
                {/* Right Robot - Electric Cyan/Blue */}
                <Robot
                  className="absolute w-20 h-20 right-0 bottom-0 animate-move-right drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                  color="#38BDF8"
                />
              </>
            )}

            {hasCollided && (
              <div className="absolute inset-0 flex items-center justify-center">
                <SmashEffect className="absolute w-56 h-56 animate-explode drop-shadow-[0_0_30px_rgba(255,215,0,0.9)]" />
                <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-pop tracking-wider drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                  अVINYA 2025
                </h1>
              </div>
            )}
          </div>

          {/* Floor Element with enhanced glow */}
          <div className="w-96 h-2 bg-gradient-to-t from-purple-500/70 via-purple-400/50 to-transparent blur-sm"></div>
          <div className="w-96 h-0.5 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
        </div>
      </div>
    </>
  );
});

SplashLoader.displayName = "SplashLoader";


function MicroLoader() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <div className="flex items-center gap-3 rounded-md bg-black/80 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm">
        <span>Loading...</span>
      </div>
    </div>
  );
}


const Home = dynamic(() => import("@/components/Home"));
const About = dynamic(() => import("@/components/About"));
const Event = dynamic(() => import("@/components/Event"));
const SponsorCarousel = dynamic(() => import("@/components/SponsorshipPage"));
const Gallery = dynamic(() => import("@/components/Gallery.jsx"));
const Timeline = dynamic(() => import("@/components/Timeline.jsx"));
const Footer = dynamic(() => import("@/components/Footer.jsx"));


export default function Page() {
  const [isSplashActive, setIsSplashActive] = useState(true);

  return (
    <>
      {isSplashActive && (
        <SplashLoader onFinish={() => setIsSplashActive(false)} />
      )}

      <main
        className={`min-h-screen overflow-x-hidden bg-[#09011A] transition-opacity duration-700 ${isSplashActive ? "opacity-0" : "opacity-100"
          }`}
      >
        <section id="Home">
          <Home />
        </section>
        <section id="About">
          <About />
        </section>

        <Suspense fallback={<MicroLoader />}>
          <section id="Event">
            <Event />
          </section>
          <section id="Sponsors">
            <SponsorCarousel />
          </section>
          <section id="Timeline">
            <Timeline />
          </section>
          <section id="Gallery">
            <Gallery />
          </section>
          <section id="Footer">
            <Footer />
          </section>
        </Suspense>
      </main>
    </>
  );
}