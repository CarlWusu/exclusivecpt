import { Product } from '@/context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="font-heading text-lg text-foreground">
          {product.name}
        </h3>
        <span className="text-lg text-foreground">₵{product.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;