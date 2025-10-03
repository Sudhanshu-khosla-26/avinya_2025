"use client"
import { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

export default function Timeline() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const timeline = [
        {
            title: "Opening Ceremony",
            timing: "09:00 AM - 10:00 AM",
            venue: "Main Auditorium"
        },
        {
            title: "Keynote Speech",
            timing: "10:00 AM - 11:00 AM",
            venue: "Conference Hall A"
        },
        {
            title: "Workshop Session 1",
            timing: "11:30 AM - 01:00 PM",
            venue: "Tech Lab 101"
        },
        {
            title: "Networking Lunch",
            timing: "01:00 PM - 02:00 PM",
            venue: "Cafeteria"
        },
        {
            title: "Panel Discussion",
            timing: "02:30 PM - 04:00 PM",
            venue: "Conference Hall B"
        },
        {
            title: "Closing Ceremony",
            timing: "04:30 PM - 05:30 PM",
            venue: "Main Auditorium"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.4) 1px, transparent 0)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Event Timeline
                    </h2>
                    <p className="text-gray-400 text-lg">Follow the journey through our event</p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 via-pink-500/30 to-purple-500/30"></div>
                        {/* Animated glow on line */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-32 bg-gradient-to-b from-purple-500 to-transparent blur-sm animate-pulse"></div>
                    </div>

                    {/* Timeline Items */}
                    <div className="space-y-0">
                        {timeline.map((item, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={index} className="relative h-64 md:h-48">
                                    {/* Desktop View */}
                                    <div className="hidden md:block">
                                        {/* Branch Line from center */}
                                        <div
                                            className={`absolute top-24 ${isLeft ? 'right-1/2 left-0' : 'left-1/2 right-0'
                                                } h-0.5 transition-all duration-500`}
                                            style={{
                                                background: hoveredIndex === index
                                                    ? 'linear-gradient(to ' + (isLeft ? 'left' : 'right') + ', rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.8))'
                                                    : 'rgba(75, 85, 99, 0.3)',
                                                width: hoveredIndex === index ? 'calc(50% - 40px)' : 'calc(50% - 60px)',
                                            }}
                                        ></div>

                                        {/* Center Node */}
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <div className={`relative transition-all duration-500 ${hoveredIndex === index ? 'scale-150' : 'scale-100'
                                                }`}>
                                                <div className={`w-5 h-5 rounded-full ${hoveredIndex === index
                                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                                                        : 'bg-purple-500/50 border-2 border-purple-400/30'
                                                    }`}></div>
                                                {hoveredIndex === index && (
                                                    <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping"></div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Event Card */}
                                        <div
                                            className={`absolute top-1/2 transform -translate-y-1/2 ${isLeft ? 'right-1/2 mr-12' : 'left-1/2 ml-12'
                                                } w-80`}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <div className={`relative transition-all duration-500 ${hoveredIndex === index ? 'scale-105 -translate-y-2' : 'scale-100'
                                                }`}>
                                                {/* Glow effect */}
                                                {hoveredIndex === index && (
                                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75"></div>
                                                )}

                                                {/* Card */}
                                                <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-500">
                                                    {/* Title */}
                                                    <h3 className="text-2xl font-bold mb-3 text-white">
                                                        {item.title}
                                                    </h3>

                                                    {/* Timing */}
                                                    <div className="flex items-center gap-2 mb-2 text-purple-400">
                                                        <Clock className="w-4 h-4" />
                                                        <span className="text-sm font-medium">{item.timing}</span>
                                                    </div>

                                                    {/* Venue */}
                                                    <div className="flex items-center gap-2 text-pink-400">
                                                        <MapPin className="w-4 h-4" />
                                                        <span className="text-sm font-medium">{item.venue}</span>
                                                    </div>

                                                    {/* Accent line */}
                                                    <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-lg transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                                        }`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile View */}
                                    <div className="md:hidden px-4">
                                        <div
                                            className="relative transition-all duration-500"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            {hoveredIndex === index && (
                                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75"></div>
                                            )}

                                            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
                                                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>

                                                <div className="flex items-center gap-2 mb-2 text-purple-400">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="text-sm">{item.timing}</span>
                                                </div>

                                                <div className="flex items-center gap-2 text-pink-400">
                                                    <MapPin className="w-4 h-4" />
                                                    <span className="text-sm">{item.venue}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}