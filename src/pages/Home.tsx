import HeroSection from '@/components/HeroSection';

const Home = () => {
  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Marquee under hero with black background */}
      <div className="w-full bg-black text-white">
        <div className="overflow-hidden whitespace-nowrap py-2 text-xs sm:text-sm">
          <div className="marquee-track inline-block">
            <span className="mx-8 uppercase tracking-wide font-bold">C25 AVAILABLE FOR PURCHASE NOW!!!</span>
            <span className="mx-8 uppercase tracking-wide font-bold">C25 AVAILABLE FOR PURCHASE NOW!!!</span>
            <span className="mx-8 uppercase tracking-wide font-bold">C25 AVAILABLE FOR PURCHASE NOW!!!</span>
            <span className="mx-8 uppercase tracking-wide font-bold">C25 AVAILABLE FOR PURCHASE NOW!!!</span>
          </div>
        </div>
      </div>

      {/* Intentionally minimal: no product grid below hero */}
    </div>
  );
};

export default Home;