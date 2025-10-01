import HeroSection from '@/components/HeroSection';
import SEO from '@/components/SEO';

const Home = () => {
  

  return (
    <div className="min-h-screen">
      <SEO 
        title="Exclusive - Premium Ghanaian Streetwear | C25 Collection"
        description="Discover premium Ghanaian streetwear with our exclusive C25 collection. Bold designs that celebrate African culture and heritage. Free shipping on all orders."
        keywords="Ghanaian streetwear, C25 collection, African fashion, premium clothing, Ghana streetwear, exclusive fashion"
      />
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