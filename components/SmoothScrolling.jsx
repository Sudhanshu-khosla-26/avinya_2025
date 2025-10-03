"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrolling({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            smoothTouch: false,
        });

        // RAF loop
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Handle anchor clicks smoothly
        const handleAnchorClick = (e) => {
            const target = e.target.closest("a[href^='#']");
            if (target) {
                e.preventDefault();
                const id = target.getAttribute("href").slice(1);
                const el = document.getElementById(id);
                if (el) lenis.scrollTo(el);
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener("click", handleAnchorClick);
        };
    }, []);

    return <>{children}</>;
}
