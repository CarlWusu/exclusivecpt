import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/photo.jpg';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            Our Story.
            <br />
            <span className="text-gold">Our Roots.</span>
            <br />
            Our Future.
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Exclusive was born from a vision to celebrate Ghanaian heritage through premium streetwear
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">
                Premium Quality.
                <br />
                <span className="text-gold">Authentic Heritage.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Exclusive, we believe that fashion is more than clothing—it's a statement of identity, 
                pride, and cultural connection. Our journey began with a simple yet powerful idea: 
                to create premium streetwear that honors Ghana's rich cultural heritage while speaking 
                to the global fashion community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece in our collection is carefully crafted to embody the boldness and creativity 
                that defines Ghanaian culture. From traditional Kente patterns reimagined for modern wear 
                to Adinkra symbols that carry deep meaning, we bridge the gap between tradition and 
                contemporary style.
              </p>
            </div>
            
            <div>
              <img 
                src={heroImage} 
                alt="Exclusive Ghanaian Streetwear" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">
              What We Stand For
            </h2>
            <p className="text-xl text-muted-foreground">
              Our values guide every decision we make and every product we create
            </p>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                <span className="text-gold">Authenticity</span> First
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We stay true to our Ghanaian roots while embracing innovation. Every design element 
                has meaning, every pattern tells a story, and every piece connects you to something greater.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                Uncompromising <span className="text-gold">Quality</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Premium isn't just a word—it's our promise. We source the finest materials, 
                work with skilled artisans, and ensure every piece meets our exacting standards.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                <span className="text-gold">Community</span> Connection
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fashion is a form of self-expression that brings people together. We're building 
                a global community united by appreciation for Ghanaian culture and premium style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-heading font-semibold text-lg mb-2">Authentic Design</h3>
              <p className="text-sm text-muted-foreground">Traditional patterns meet modern aesthetics</p>
            </div>
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-heading font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Only the finest materials and craftsmanship</p>
            </div>
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-heading font-semibold text-lg mb-2">Global Vision</h3>
              <p className="text-sm text-muted-foreground">Sharing Ghanaian culture worldwide</p>
            </div>
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-heading font-semibold text-lg mb-2">Cultural Pride</h3>
              <p className="text-sm text-muted-foreground">Celebrating heritage with every stitch</p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Ready to Join Our Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Explore our collection and become part of the Exclusive community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button 
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-semibold px-8"
                >
                  SHOP COLLECTION
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-heading font-semibold px-8"
                >
                  GET IN TOUCH
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;