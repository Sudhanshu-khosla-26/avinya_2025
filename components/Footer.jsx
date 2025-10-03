"use client"
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    const socialLinks = [
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/the_empirical_society/', color: 'hover:text-pink-500' },
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/the-empirical-society/', color: 'hover:text-blue-500' },
        // { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-sky-400' },
        { name: 'Mail', icon: Mail, url: 'societytheempirical@gmail.com', color: 'hover:text-red-500' },
    ];

    return (
        <footer className="relative bg-black border-t border-gray-800 overflow-visible">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none"></div>

            <div className="relative mx-auto max-w-7xl px-4 py-6">
                <div className="flex flex-col  md:flex-row items-center rokkitt-bold justify-between gap-6 md:gap-4">
                    {/* Made with love */}
                    <div className="text-gray-400 text-sm order-1 relative">
                        Designed and Developed with <span className="text-red-500 animate-pulse inline-block">❤</span> by{' '}
                        <br />
                        <span
                            className="text-white font-semibold justify-center md:justify-start hover:text-purple-400 flex items-center gap-2 mt-1 transition-colors duration-300 cursor-pointer relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Small image - always visible */}
                            <div className={`relative transition-all duration-500 ${isHovered ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                                <Image
                                    loading="lazy"
                                    src="/SK.png"
                                    alt="Sudhanshu Khosla"
                                    width={30}
                                    height={30}
                                    className="rounded-full mr-1"
                                    quality={100}
                                />
                            </div>

                            {/* Large image - shows on hover */}
                            <div
                                className={`absolute left-0 transition-all duration-500 ease-out z-50 ${isHovered
                                    ? 'bottom-10 opacity-100 scale-100'
                                    : 'bottom-0 opacity-0 scale-0'
                                    }`}
                                style={{ transformOrigin: 'bottom left' }}
                            >
                                <div className="relative rounded-full overflow-hidden shadow-2xl shadow-purple-500/50 ring-4 ring-purple-500/30">
                                    <Image
                                        src="/SK.png"
                                        alt="Sudhanshu Khosla"
                                        width={160}
                                        height={160}
                                        className="rounded-full"
                                        quality={100}
                                        priority
                                    />
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 to-pink-500/10"></div>
                                </div>
                            </div>

                            <Link
                                href="https://www.linkedin.com/in/sudhanshu-khosla-a05b4a298/"
                                target="_blank"
                                className='cursor-pointer hover:underline decoration-purple-400'
                            >
                                Sudhanshu Khosla
                            </Link>
                        </span>
                    </div>

                    {/* Organized by */}
                    <div className="text-gray-400 flex text-sm order-2 items-center ">
                        <div className="rokkitt-bold text-[18px] text-center">
                            Organised
                            <br />
                            by{' '}
                        </div>
                        <Image
                            loading="lazy"
                            src="/THE_EMPHIRICAL_LOGO.webp"
                            alt="The Empherical Society"
                            width={110}
                            height={40}
                            className="ml-4 inline-block mr-1"
                        />
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4 order-3">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </footer>
    );
}