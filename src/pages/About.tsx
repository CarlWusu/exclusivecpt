import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/photo.jpg';
import lpImage from '@/assets/numberplate.png';
import greaterLinesImage from '@/assets/greaterlines.png';

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

      {/* Concepts Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">
              Our Concepts
            </h2>
            <p className="text-xl text-muted-foreground">
              Two unique designs that celebrate Ghanaian culture and identity
            </p>
          </div>

          <div className="space-y-20">
            {/* Greater Lines Concept */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading text-3xl font-bold mb-6 text-foreground">
                  Greater Lines Concept
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The Greater Lines concept is a design deeply rooted in authentic Ghanaian culture. The 'Greater' in the concept name is a depiction of Ghana's capital region Greater Accra where this journey began.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The 'Lines' represent the intricate road networks that connect the various communities across the country, thus symbolizing connection, movement and unity. The iconic image of the tro-tro, the local public transport which for many years has served as a lifeline for many Ghanaians is a depiction of the resilience, hustle, and shared experiences many Ghanaians face in their journey through life.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Greater Lines is more than a concept. It is a way of showing Ghana's culture and identity through wearable art where urban streetwear and cultural heritage converge.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src={greaterLinesImage} 
                  alt="Greater Lines Concept Design" 
                  className="w-full max-w-md mx-auto rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Number Plate Concept */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:order-2">
                <img 
                  src={lpImage} 
                  alt="Ghanaian Number Plate Concept" 
                  className="w-full max-w-md mx-auto rounded-lg object-cover"
                />
              </div>
              <div className="lg:order-1">
                <h3 className="font-heading text-3xl font-bold mb-6 text-foreground">
                  Number Plate Concept
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The Number Plate concept is a design rooted in Ghanaian identity and authenticity. In Ghana, number plates are more than vehicle tags, they are markers of origin and individuality.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The design takes inspiration from the distinctive Ghanaian number plates seen on Ghanaian roads everyday. The '1957 - 06' is a tribute to the day Ghana gained independence becoming the first African country in West Africa to be free from colonial rule.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This design incorporates regional codes, color palettes and the intricate typography used on number plates in Ghana. The Number Plate concept is a badge of identity for wearer. It is uniquely Ghanaian and authentic allowing the wearer to feel grounded in the hustle and movement of life on Ghana's roads while wearing a piece that stands out everywhere.
                </p>
              </div>
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