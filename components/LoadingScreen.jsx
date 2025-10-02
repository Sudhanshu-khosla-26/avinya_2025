// Save this file as: components/LoadingScreen.js
"use client";
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - adjust as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Brain with rotating gears */}
        <div className="relative w-32 h-32 mb-8">
          {/* Brain outline */}
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            {/* Brain path */}
            <path
              d="M50 10 C30 10 20 20 20 35 C20 40 22 45 25 48 C22 52 20 57 20 62 C20 75 30 85 45 88 C47 89 48 90 50 90 C52 90 53 89 55 88 C70 85 80 75 80 62 C80 57 78 52 75 48 C78 45 80 40 80 35 C80 20 70 10 50 10 Z"
              stroke="url(#brainGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            {/* Brain details */}
            <path
              d="M35 25 Q40 30 35 35 M45 22 Q50 27 45 32 M55 22 Q60 27 55 32 M65 25 Q70 30 65 35"
              stroke="url(#brainGradient)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M30 50 Q35 55 30 60 M40 48 Q45 53 40 58 M60 48 Q65 53 60 58 M70 50 Q75 55 70 60"
              stroke="url(#brainGradient)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
          </svg>

          {/* Rotating gear 1 - top right */}
          <div className="absolute top-2 right-0 w-10 h-10 animate-spin-slow">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="20" fill="#8b5cf6" opacity="0.8" />
              <circle cx="50" cy="50" r="12" fill="#1e293b" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <rect
                  key={i}
                  x="46"
                  y="15"
                  width="8"
                  height="15"
                  fill="#8b5cf6"
                  opacity="0.9"
                  style={{
                    transformOrigin: '50px 50px',
                    transform: `rotate(${angle}deg)`
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Rotating gear 2 - bottom left */}
          <div className="absolute bottom-0 left-2 w-12 h-12 animate-spin-reverse">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="25" fill="#ec4899" opacity="0.8" />
              <circle cx="50" cy="50" r="15" fill="#1e293b" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <rect
                  key={i}
                  x="45"
                  y="10"
                  width="10"
                  height="18"
                  fill="#ec4899"
                  opacity="0.9"
                  style={{
                    transformOrigin: '50px 50px',
                    transform: `rotate(${angle}deg)`
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Rotating screw in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 animate-spin">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" fill="#6366f1" opacity="0.9" />
              <circle cx="50" cy="50" r="30" fill="#1e293b" />
              <line x1="50" y1="20" x2="50" y2="80" stroke="#6366f1" strokeWidth="4" />
              <line x1="20" y1="50" x2="80" y2="50" stroke="#6366f1" strokeWidth="4" />
            </svg>
          </div>

          {/* Orbiting particles */}
          <div className="absolute inset-0 animate-spin-slow-reverse">
            {[0, 120, 240].map((angle, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${angle}deg) translateX(70px) translateY(-50%)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading text */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
          Initializing Systems
        </h2>



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

        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 4s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}