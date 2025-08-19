import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isHome ? 'bg-transparent' : 'bg-primary'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">


          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-gold-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            {/* Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        {isMenuOpen && (
          <div className={`absolute left-0 right-0 top-16 ${isHome ? 'bg-background/95 backdrop-blur' : 'bg-primary'} border-t z-40`}>
            <div className="py-4 space-y-4">
              <Link 
                to="/" 
                className={`block px-4 py-2 font-medium ${isHome ? 'text-foreground' : 'text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className={`block px-4 py-2 font-medium ${isHome ? 'text-foreground' : 'text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link 
                to="/shop" 
                className={`block px-4 py-2 font-medium ${isHome ? 'text-foreground' : 'text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP NOW
              </Link>
              <Link 
                to="/contact" 
                className={`block px-4 py-2 font-medium ${isHome ? 'text-foreground' : 'text-white'}`}
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