
import About from '@/components/About';
import Home from '@/components/Home';
import Event from '@/components/Event';

export default function Page() {
  return (
    <div className="h-fit overflow-x-hidden  ">
      <Home />
      <About />
      <Event />
    </div>

  );
}

