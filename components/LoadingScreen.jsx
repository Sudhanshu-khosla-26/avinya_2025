// Save this file as: components/LoadingScreen.js
"use client";
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - adjust as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Half Brain Half Machine */}
        <div className="relative w-64 h-64 mb-8">
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Left side - Organic Brain */}
            <g opacity="0.95">
              {/* Main brain outline - left hemisphere */}
              <path
                d="M 100 30 C 70 30, 50 45, 45 65 C 43 72, 42 80, 43 88 C 40 92, 38 97, 38 103 C 38 115, 45 125, 55 132 C 60 145, 70 155, 85 160 C 90 162, 95 163, 100 163 L 100 30 Z"
                fill="none"
                stroke="white"
                strokeWidth="3"
                className="animate-pulse"
              />

              {/* Brain folds and details - left side */}
              <path
                d="M 60 50 Q 65 55, 62 60 Q 60 65, 65 68"
                stroke="white"
                strokeWidth="2"
                opacity="0.8"
              />
              <path
                d="M 70 45 Q 75 48, 73 53 Q 71 58, 76 62"
                stroke="white"
                strokeWidth="2"
                opacity="0.8"
              />
              <path
                d="M 50 75 Q 55 78, 53 83 Q 51 88, 56 92"
                stroke="white"
                strokeWidth="2"
                opacity="0.8"
              />
              <path
                d="M 60 95 Q 65 98, 63 103 Q 61 108, 66 112"
                stroke="white"
                strokeWidth="2"
                opacity="0.8"
              />
              <path
                d="M 55 115 Q 60 120, 58 125 Q 56 130, 61 134"
                stroke="white"
                strokeWidth="2"
                opacity="0.8"
              />
              <path
                d="M 70 130 Q 75 133, 73 138 Q 71 143, 76 147"
                stroke="white"
                strokeWidth="2"
                opacity="0.8"
              />

              {/* Small brain detail dots */}
              <circle cx="58" cy="70" r="1.5" fill="white" opacity="0.6" />
              <circle cx="68" cy="85" r="1.5" fill="white" opacity="0.6" />
              <circle cx="52" cy="105" r="1.5" fill="white" opacity="0.6" />
            </g>

            {/* Center dividing line */}
            <line x1="100" y1="25" x2="100" y2="168" stroke="white" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />

            {/* Right side - Mechanical/Robotic */}
            <g>
              {/* Main mechanical outline - right hemisphere */}
              <path
                d="M 100 30 C 130 30, 150 45, 155 65 C 157 72, 158 80, 157 88 C 160 92, 162 97, 162 103 C 162 115, 155 125, 145 132 C 140 145, 130 155, 115 160 C 110 162, 105 163, 100 163 L 100 30 Z"
                fill="none"
                stroke="white"
                strokeWidth="3"
              />

              {/* Circuit board patterns */}
              <line x1="110" y1="45" x2="135" y2="45" stroke="white" strokeWidth="2" />
              <line x1="135" y1="45" x2="135" y2="55" stroke="white" strokeWidth="2" />
              <circle cx="135" cy="55" r="3" fill="white" />

              <line x1="115" y1="65" x2="140" y2="65" stroke="white" strokeWidth="2" />
              <line x1="140" y1="65" x2="140" y2="75" stroke="white" strokeWidth="2" />
              <circle cx="140" cy="75" r="3" fill="white" />

              <line x1="110" y1="85" x2="145" y2="85" stroke="white" strokeWidth="2" />
              <line x1="145" y1="85" x2="145" y2="95" stroke="white" strokeWidth="2" />
              <rect x="142" y="95" width="6" height="6" fill="white" />

              <line x1="115" y1="110" x2="140" y2="110" stroke="white" strokeWidth="2" />
              <line x1="140" y1="110" x2="140" y2="120" stroke="white" strokeWidth="2" />
              <circle cx="140" cy="120" r="3" fill="white" />

              <line x1="110" y1="130" x2="130" y2="130" stroke="white" strokeWidth="2" />
              <line x1="130" y1="130" x2="130" y2="140" stroke="white" strokeWidth="2" />
              <circle cx="130" cy="140" r="3" fill="white" />

              {/* Small circuit details */}
              <rect x="118" y="52" width="4" height="4" fill="white" />
              <rect x="122" y="95" width="4" height="4" fill="white" />
              <rect x="115" y="125" width="4" height="4" fill="white" />
            </g>
          </svg>

          {/* Large rotating gear - top right */}
          <div className="absolute -top-2 right-12 w-16 h-16 animate-spin-slow">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="22" fill="none" stroke="white" strokeWidth="3" />
              <circle cx="50" cy="50" r="10" fill="black" stroke="white" strokeWidth="2" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <rect
                  key={i}
                  x="45"
                  y="12"
                  width="10"
                  height="18"
                  fill="white"
                  rx="2"
                  style={{
                    transformOrigin: '50px 50px',
                    transform: `rotate(${angle}deg)`
                  }}
                />
              ))}
              <circle cx="50" cy="50" r="4" fill="white" />
            </svg>
          </div>

          {/* Medium rotating gear - right side */}
          <div className="absolute top-20 right-4 w-14 h-14 animate-spin-reverse">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="3" />
              <circle cx="50" cy="50" r="9" fill="black" stroke="white" strokeWidth="2" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <rect
                  key={i}
                  x="44"
                  y="14"
                  width="12"
                  height="16"
                  fill="white"
                  rx="2"
                  style={{
                    transformOrigin: '50px 50px',
                    transform: `rotate(${angle}deg)`
                  }}
                />
              ))}
              <circle cx="50" cy="50" r="3" fill="white" />
            </svg>
          </div>

          {/* Small rotating gear - bottom right */}
          <div className="absolute bottom-8 right-16 w-12 h-12 animate-spin-slow">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="18" fill="none" stroke="white" strokeWidth="3" />
              <circle cx="50" cy="50" r="8" fill="black" stroke="white" strokeWidth="2" />
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <rect
                  key={i}
                  x="44"
                  y="16"
                  width="12"
                  height="14"
                  fill="white"
                  rx="2"
                  style={{
                    transformOrigin: '50px 50px',
                    transform: `rotate(${angle}deg)`
                  }}
                />
              ))}
              <circle cx="50" cy="50" r="3" fill="white" />
            </svg>
          </div>

          {/* Connecting rods/pistons */}
          <div className="absolute top-12 right-24 w-1 h-12 bg-white opacity-70 animate-pulse"></div>
          <div className="absolute top-28 right-14 w-1 h-8 bg-white opacity-70 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute bottom-16 right-24 w-1 h-10 bg-white opacity-70 animate-pulse" style={{ animationDelay: '0.6s' }}></div>

          {/* Orbiting energy particles */}
          <div className="absolute inset-0 animate-spin-slow-reverse">
            {[45, 135, 225, 315].map((angle, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${angle}deg) translateX(110px) translateY(-50%)`
                }}
              >
                <div className="w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50" />
              </div>
            ))}
          </div>
        </div>

        {/* Loading text */}
        <h2 className="text-2xl font-bold text-white mb-4 tracking-wider">
          Initializing Website
        </h2>

        {/* Subtle loading indicator */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-reverse 8s linear infinite;
        }
      `}</style>
    </div>
  );
}