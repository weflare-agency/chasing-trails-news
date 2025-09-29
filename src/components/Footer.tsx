import { Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react";
import harrierBadge from "@/assets/harrier-badge-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={harrierBadge} 
                alt="Harrier Trail Running Logo" 
                className="h-10 w-10"
              />
              <span className="text-lg font-secondary font-bold tracking-secondary">HARRIER</span>
            </div>
            <p className="text-white text-sm font-body tracking-body leading-relaxed uppercase">
              THE UK'S FASTEST GROWING BRAND FOR TRAIL RUNNERS. MADE BY TRAIL RUNNERS, FOR TRAIL RUNNERS. OVER 50,000 ORDERS SHIPPED ACROSS THE UK AND BEYOND.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-newsletter font-secondary font-bold mb-4 tracking-secondary text-sm uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://harrierrunfree.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                >
                  Main Website
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="https://harrierrunfree.co.uk/shop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                >
                  Shop Trail Gear
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="https://harrierrunfree.co.uk/training" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                >
                  Training Plans
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="https://harrierrunfree.co.uk/races" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                >
                  Race Calendar
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-newsletter font-secondary font-bold mb-4 tracking-secondary text-sm uppercase">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://harrierrunfree.co.uk/pages/privacy-notice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                >
                  Privacy Policy
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="https://harrierrunfree.co.uk/pages/website-terms-of-use" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                >
                  Terms of Service
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="https://harrierrunfree.co.uk/pages/cookie-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                >
                  Cookie Policy
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="https://harrierrunfree.co.uk/pages/gdpr-compliance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                >
                  GDPR Compliance
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons - Positioned in top right */}
          <div className="absolute top-0 right-0 flex gap-4">
            <a 
              href="https://www.instagram.com/harrier_trail_running/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-newsletter transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/harriertrailrunning" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-newsletter transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#linkedin" 
              className="text-white hover:text-newsletter transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="text-center">
            <p className="text-white text-xs font-body tracking-body uppercase">
              © 2025 harrier trail running. all rights reserved. made by trail runners, for trail runners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;