import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Instagram" className="text-foreground/70 hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-foreground/70 hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-foreground/70 hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="mailto:hello@exclusive.gh" aria-label="Email" className="text-foreground/70 hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">Shipping, returns and support: hello@exclusive.gh</p>
          <p className="text-sm text-muted-foreground">© 2025 Exclusive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;