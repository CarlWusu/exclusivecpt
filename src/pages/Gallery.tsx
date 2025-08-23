import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import new1 from '@/assets/new1.jpg';
import new2 from '@/assets/new2.jpg';
import new3 from '@/assets/new3.jpg';
import muse2 from '@/assets/muse2.jpg';
import muse3 from '@/assets/muse3.jpg';
import gl from '@/assets/gl.jpg';
import glw from '@/assets/glw.jpg';
import lp from '@/assets/lp.jpg';
import plate from '@/assets/plate.jpg';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    { src: new3, alt: "Greater Lines Concept" },
    { src: new1, alt: "Number Plate Concept" },
    { src: new2, alt: "Number Plate Concept" },
    { src: muse2, alt: "Number Plate Concept Design" },
    { src: muse3, alt: "Greater Lines Concept Design" },
    { src: gl, alt: "Greater Lines Concept" },
    { src: glw, alt: "Greater Lines Concept" },
    { src: lp, alt: "Number Plate Concept" },
    { src: plate, alt: "Number Plate Design" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isModalOpen) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isModalOpen, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Explore our exclusive collection through stunning visuals
          </p>
        </div>
      </section>

      {/* Interactive Carousel */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Carousel */}
          <div className="relative group">
            <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
              <img 
                src={galleryImages[currentIndex].src} 
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Image Info */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{galleryImages[currentIndex].alt}</h3>
                <p className="text-lg opacity-90">{currentIndex + 1} of {galleryImages.length}</p>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Click to expand */}
              <button 
                onClick={() => openModal(currentIndex)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Click to Expand
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2 overflow-x-auto pb-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentIndex 
                        ? 'ring-4 ring-gold scale-110' 
                        : 'hover:scale-105'
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative max-w-7xl max-h-full">
              <img 
                src={galleryImages[currentIndex].src} 
                alt={galleryImages[currentIndex].alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white bg-black/50 px-4 py-2 rounded-lg">
                <h3 className="text-xl font-bold">{galleryImages[currentIndex].alt}</h3>
                <p className="text-sm opacity-90">{currentIndex + 1} of {galleryImages.length}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
