"use client"
import { Instagram, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const socialLinks = [
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/the_empirical_society/', color: 'hover:text-pink-500' },
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/the-empirical-society/', color: 'hover:text-blue-500' },
        { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-sky-400' },
        { name: 'Mail', icon: Mail, url: '#', color: 'hover:text-red-500' },
    ];

    return (
        <footer className="relative bg-black border-t border-gray-800">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none"></div>

            <div className="relative mx-auto max-w-7xl px-4 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Made with love */}
                    <div className="text-gray-400 text-sm order-2 md:order-1">
                        Designed and Developed with <span className="text-red-500 animate-pulse inline-block">❤</span> by{' '}
                        <br />
                        <span className="text-white font-semibold hover:text-purple-400 flex items-center gap-2 mt-1 transition-colors duration-300 cursor-pointer">
                            <Image  loading="lazy" src="/sudhanshukhosla.jpeg" alt="Sudhanshu Khosla" width={30} height={30} className="inline-block rounded-full  mr-1" />
                            Sudhanshu Khosla
                        </span>
                    </div>

                    {/* Organized by */}
                    <div className="text-gray-400 text-sm order-1 md:order-2">
                        Organised by{' '}
                        <br />
                        <span className="text-white font-semibold hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                            The Empherical Society
                        </span>
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