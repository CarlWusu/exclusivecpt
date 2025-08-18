import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-heading font-bold tracking-wide">
            EXCLUSIVE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              ABOUT US
            </Link>
            <Link 
              to="/shop" 
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              SHOP NOW
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              CONTACT US
            </Link>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="hover:bg-gold/10">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-gold-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t animate-fade-in">
            <div className="py-4 space-y-4">
              <Link 
                to="/" 
                className="block px-4 py-2 text-foreground hover:text-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-2 text-foreground hover:text-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link 
                to="/shop" 
                className="block px-4 py-2 text-foreground hover:text-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP NOW
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-2 text-foreground hover:text-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;