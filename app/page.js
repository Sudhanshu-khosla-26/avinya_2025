"use client"
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingScreen from "@/components/LoadingScreen";

// Lazy load components with dynamic imports
const Home = dynamic(() => import('@/components/Home'), {
  loading: () => <LoadingScreen />,
  ssr: true, // Enable SSR for better SEO
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <LoadingScreen />,
  ssr: true,
});

const Event = dynamic(() => import('@/components/Event'), {
  loading: () => <LoadingScreen />,
  ssr: true,
});

const SponsorCarousel = dynamic(() => import('@/components/SponsorshipPage'), {
  loading: () => <LoadingScreen />,
  ssr: false, // Can defer non-critical sections
});

const Gallery = dynamic(() => import('@/components/Gallery.jsx'), {
  loading: () => <LoadingScreen />,
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer.jsx'), {
  loading: () => <LoadingScreen />,
  ssr: false,
});

// Blur divider component
// const BlurDivider = () => (
//   <div className="relative h-32 -my-16 pointer-events-none z-10">
//     <div className="absolute inset-0 bg-gradient-to-b from-[#09011A] via-transparent to-[#09011A]"
//       style={{
//         backdropFilter: 'blur(20px)',
//         WebkitBackdropFilter: 'blur(20px)',
//       }}
//     />
//   </div>
// );

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#09011A]">
      {/* Home Section */}
      <section id="Home" className="scroll-mt-20">
        <Suspense fallback={<LoadingScreen />}>
          <Home />
        </Suspense>
      </section>

      {/* <BlurDivider /> */}

      {/* About Section */}
      <section id="About" className="scroll-mt-20">
        <Suspense fallback={<LoadingScreen />}>
          <About />
        </Suspense>
      </section>

      {/* <BlurDivider /> */}

      {/* Event Section */}
      <section id="Event" className="scroll-mt-20">
        <Suspense fallback={<LoadingScreen />}>
          <Event />
        </Suspense>
      </section>
      {/* 
      <BlurDivider /> */}

      {/* Sponsors Section */}
      <section id="Sponsors" className="scroll-mt-20">
        <Suspense fallback={<LoadingScreen />}>
          <SponsorCarousel />
        </Suspense>
      </section>

      {/* <BlurDivider /> */}

      {/* Gallery Section */}
      <section id="Gallery" className="scroll-mt-20">
        <Suspense fallback={<LoadingScreen />}>
          <Gallery />
        </Suspense>
      </section>

      {/* <BlurDivider /> */}

      {/* Footer Section */}
      <section id="Footer" className="scroll-mt-20">
        <Suspense fallback={<LoadingScreen />}>
          <Footer />
        </Suspense>
      </section>
    </div>
  );
}