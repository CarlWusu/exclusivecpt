import lpImage from '@/assets/numberplate.png';
import greaterLinesImage from '@/assets/greaterlines.png';

const OurConcepts = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            Our Concepts
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Two unique designs that celebrate Ghanaian culture and identity
          </p>
        </div>
      </section>

      {/* Concepts Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
};

export default OurConcepts;
