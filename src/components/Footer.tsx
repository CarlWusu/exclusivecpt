import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/exclusive.cpt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/70 hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://tiktok.com/@exclusive.cpt" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-foreground/70 hover:text-foreground transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://snapchat.com/add/exclusive.cpt" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="text-foreground/70 hover:text-foreground transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
              </svg>
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