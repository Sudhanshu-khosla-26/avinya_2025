"use client"
import dynamic from 'next/dynamic';
// import { Suspense } from 'react';
import LazySection from '@/components/LazySection';
import LoadingScreen from '@/components/LoadingScreen';

// Lazy load components with dynamic imports
const Home = dynamic(() => import('@/components/Home'), {
  ssr: true,
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

const Timeline = dynamic(() => import('@/components/Timeline.jsx'), {
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
        <Home />
      </section>

      {/* <BlurDivider /> */}

      {/* About Section */}
      <section id="About" className="scroll-mt-20">
        {/* <Suspense fallback={<LoadingScreen />}> */}
        <About />
        {/* </Suspense> */}
      </section>

      {/* <BlurDivider /> */}

      {/* Event Section */}
      <section id="Event" className="scroll-mt-20">
        {/* <Suspense fallback={<LoadingScreen />}> */}
        <LazySection>
          <Event />
        </LazySection>
        {/* </Suspense> */}
      </section>
      {/* 
      <BlurDivider /> */}

      {/* Sponsors Section */}
      <section id="Sponsors" className="scroll-mt-20">
        <LazySection>
          <SponsorCarousel />
        </LazySection>
      </section>

      <section id="Timeline" className="scroll-mt-20">
        <LazySection>
          <Timeline />
        </LazySection>
      </section>

      {/* <BlurDivider /> */}

      {/* Gallery Section */}
      <section id="Gallery" className="scroll-mt-20">
        <LazySection>
          <Gallery />
        </LazySection>
      </section>

      {/* <BlurDivider /> */}

      {/* Footer Section */}
      <section id="Contact" className="scroll-mt-20">
        <LazySection>
          <Footer />
        </LazySection>
      </section>
    </div>
  );
}

