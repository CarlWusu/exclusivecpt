import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import SEO from '@/components/SEO';
import new3 from '@/assets/new3.jpg';
import img5 from '@/assets/img5.jpg';

const Shop = () => {
  const { addItem } = useCart();
  const [selectedColors, setSelectedColors] = useState<{[key: string]: string}>({});

  const handleColorSelect = (productId: string, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color
    }));
  };

  const getProductImage = (product: any, color: string) => {
    if (product.id === 'greater-lines' && color === 'white') {
      return new3;
    } else if (product.id === 'number-plate' && color === 'white') {
      return img5;
    }
    return product.image; // Default/black images
  };

  const handleAddToCart = (product: any) => {
    const selectedColor = selectedColors[product.id] || 'white';
    addItem(product, undefined, selectedColor);
  };

  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="Shop Exclusive Ghanaian Streetwear | Greater Lines & Number Plate"
        description="Shop our exclusive Greater Lines and Number Plate collections. Premium Ghanaian streetwear in black and white. Free shipping, secure checkout with Mobile Money."
        keywords="buy Ghanaian streetwear, Greater Lines tshirt, Number Plate tshirt, Ghana fashion shop, African clothing online"
      />
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
                      src={getProductImage(product, selectedColors[product.id] || 'white')}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-300"
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
                    
                    {/* Color Selection */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-foreground">Choose Color:</p>
                      <div className="flex justify-center space-x-3">
                        <button
                          onClick={() => handleColorSelect(product.id, 'white')}
                          className={`w-8 h-8 rounded-full border-2 bg-white ${
                            (selectedColors[product.id] || 'white') === 'white' 
                              ? 'border-black ring-2 ring-offset-2 ring-black' 
                              : 'border-gray-300'
                          }`}
                          title="White"
                        />
                        <button
                          onClick={() => handleColorSelect(product.id, 'black')}
                          className={`w-8 h-8 rounded-full border-2 bg-black ${
                            selectedColors[product.id] === 'black' 
                              ? 'border-white ring-2 ring-offset-2 ring-gray-400' 
                              : 'border-gray-300'
                          }`}
                          title="Black"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Selected: {(selectedColors[product.id] || 'white').charAt(0).toUpperCase() + (selectedColors[product.id] || 'white').slice(1)}
                      </p>
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