import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-tight mb-6 tracking-tight">
            Premium.
          </h1>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-tight mb-6 tracking-tight">
            Bold.
          </h1>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-tight mb-8 tracking-tight text-gold">
            Ghanaian.
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed max-w-2xl mx-auto opacity-90">
            Discover exclusive streetwear that celebrates Ghanaian culture with premium quality and bold design.
          </p>
          
          <Link to="/shop">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-bold text-lg px-12 py-4 h-auto rounded-sm tracking-wide transition-all duration-300 hover:scale-105"
            >
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;