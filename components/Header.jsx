"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const NAV_ITEMS = ["Home", "About", "Gallery", "Event", "Timeline", "Contact"]

const Header = () => {
    const [open, setOpen] = useState(false)
    const [showNav, setShowNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const scrollThreshold = window.innerHeight * 0.25

            // Hide navbar when scrolling down past 25vh
            if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
                setShowNav(false)
            }
            // Show navbar when scrolling up by at least 5px
            else if (currentScrollY < lastScrollY - 5) {
                setShowNav(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <>
            {/* Desktop navbar with scroll behavior */}
            <nav className={`fixed top-10 lg:block hidden z-50 text-white w-full transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-32"}`}>
                <div className="mx-auto w-fit flex px-8 py-2 items-center justify-between gap-16 bg-white/5 rounded-full shadow-lg backdrop-blur-md border border-white/50">
                    <div className="font-bold text-lg leading-11 flex items-center gap-2">
                        <img src="/logo.png" className="w-12 h-12" alt="" />
                        <span className="hidden xl:inline">Guru Tegh Bahadur 4th Centenary Engineering College</span>
                        <span className="xl:hidden">GTB4CEC</span>
                    </div>
                    <ul className="flex items-center gap-6 text-lg font-serif">
                        {NAV_ITEMS.map((item) => (
                            <Link href={`#${item}`}>
                                <li
                                    key={item}
                                    className="cursor-pointer hover:text-gray-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#b3b3b3] after:to-[#bc89ff] after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 px-1"
                                >
                                    {item}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile navbar with toggle */}
            <nav className="fixed top-0 block lg:hidden z-50 text-white w-full">
                <div className="mx-auto w-full flex px-4 py-3 items-center gap-4 bg-white/5 shadow-lg backdrop-blur-md">
                    <div className="font-bold flex flex-1 items-center gap-2">
                        <img src="/logo.png" className="w-12 h-12" alt="" />
                        Guru Tegh Bahadur 4th Centenary Engineering College
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        aria-label="Toggle navigation"
                        className="cursor-pointer p-1 rounded-md hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                        <svg viewBox="0 0 24 24" fill="none" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 17H21M3 12H21M3 7H21"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    id="mobile-nav"
                    className={`${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} transition-all duration-300 overflow-hidden bg-white/5 backdrop-blur-md border-t border-white/20`}
                >
                    <ul className="flex flex-col gap-3 px-4 py-3 text-base font-serif">
                        {NAV_ITEMS.map((item) => (
                            <Link href={`#${item}`}>
                                <li key={item} className="py-1 cursor-pointer hover:text-gray-300" onClick={() => setOpen(false)}>
                                    {item}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header