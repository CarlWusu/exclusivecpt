import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import heroImage from '@/assets/muse.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Bottom gradient to improve text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
        {/* Subtle left vignette for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left text-white">
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] mb-4 tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Premium.
          </h1>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] mb-4 tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Bold.
          </h1>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] mb-0 tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Ghanaian.
          </h1>

          {/* CTA under heading */}
          <Link to="/contact" className="mt-8 inline-block">
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-6 py-6 h-auto"
            >
              GET IN TOUCH
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;