import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our most popular pieces that embody the essence of premium Ghanaian streetwear
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-3 rounded-sm tracking-wide"
              >
                VIEW ALL PRODUCTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our Story.
                <br />
                <span className="text-gold">Our Heritage.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Exclusive represents the intersection of traditional Ghanaian culture and contemporary streetwear. 
                Each piece in our collection tells a story of pride, heritage, and the bold spirit of Ghana.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe in creating premium fashion that celebrates our roots while pushing the boundaries 
                of modern design. Every stitch, every pattern, every detail is crafted with purpose and passion.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg" className="font-heading font-semibold">
                  LEARN MORE ABOUT US
                </Button>
              </Link>
            </div>
            
            <div className="animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🇬🇭</div>
                  <p className="font-heading text-xl font-semibold text-foreground">Made with Pride</p>
                  <p className="text-muted-foreground">Authentic Ghanaian Heritage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Stay Exclusive
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Be the first to know about new drops, exclusive releases, and special events.
              Join our community of style enthusiasts.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-primary-foreground text-primary border-0 placeholder:text-primary/60"
                />
                <Button 
                  type="submit" 
                  className="bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-semibold px-8"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;