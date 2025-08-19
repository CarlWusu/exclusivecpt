import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            Shop <span className="text-white">Exclusive</span>
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Discover our exclusive concepts
          </p>
        </div>
      </section>



      {/* Concepts Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="text-center">
                <div className="space-y-6">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <div className="text-2xl font-bold text-foreground">
                      ₵{product.price}
                    </div>
                    
                    <Button
                      size="lg"
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-black hover:bg-white/90 font-heading font-semibold px-8"
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Shop;