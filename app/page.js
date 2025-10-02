import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingScreen from "@/components/LoadingScreen";

// Lazy load components with dynamic imports
const Home = dynamic(() => import('@/components/Home'), {
  loading: () => <LoadingScreen />,
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <LoadingScreen />,
});

const Event = dynamic(() => import('@/components/Event'), {
  loading: () => <LoadingScreen />,
});

const SponsorCarousel = dynamic(() => import('@/components/SponsorshipPage'), {
  loading: () => <LoadingScreen />,
});
const Gallery = dynamic(() => import('@/components/Gallery.jsx'), {
  loading: () => <LoadingScreen />,
});




export default function Page() {
  return (
    <div className="h-fit overflow-x-hidden">
      <Suspense fallback={<LoadingScreen />}>
        <Home />
      </Suspense>

      <Suspense fallback={<LoadingScreen />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingScreen />}>
        <Event />
      </Suspense>

      <Suspense fallback={<LoadingScreen />}>
        <SponsorCarousel />
      </Suspense>

      <Suspense fallback={<LoadingScreen />}>
        <Gallery />
      </Suspense>
    </div>
  );
}