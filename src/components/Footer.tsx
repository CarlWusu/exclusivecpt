import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">EXCLUSIVE</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Premium Ghanaian streetwear celebrating culture with bold designs and authentic heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@exclusive.gh" className="text-primary-foreground/80 hover:text-gold transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-primary-foreground/80 hover:text-gold transition-colors">All Products</Link></li>
              <li><a href="/shop?category=t-shirts" className="text-primary-foreground/80 hover:text-gold transition-colors">T-Shirts</a></li>
              <li><a href="/shop?category=hoodies" className="text-primary-foreground/80 hover:text-gold transition-colors">Hoodies</a></li>
              <li><a href="/shop?category=accessories" className="text-primary-foreground/80 hover:text-gold transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors">Contact</Link></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">Returns</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Exclusive Ghana. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
            Made with ❤️ in Ghana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;