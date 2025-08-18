import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Product, useCart } from '@/context/CartContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card 
        className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          
          {/* Quick Add to Cart Button */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Button
              onClick={handleAddToCart}
              className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium px-6 py-2 transform transition-transform duration-200 hover:scale-105"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs uppercase font-medium">
              {product.category}
            </Badge>
          </div>
          
          <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          
          <p className="text-2xl font-bold text-foreground">
            ₵{product.price}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;