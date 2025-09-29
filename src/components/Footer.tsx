import { Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react";
import harrierBadge from "@/assets/harrier-badge-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Column - Expanded Width */}
            <div className="space-y-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={harrierBadge} 
                    alt="Harrier Trail Running Logo" 
                    className="h-12 w-12 transition-transform duration-300 hover:scale-110"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-white font-secondary font-bold text-lg tracking-secondary uppercase">HARRIER</h2>
                    <p className="text-newsletter font-secondary font-medium text-xs tracking-secondary uppercase">TRAIL RUNNING</p>
                  </div>
                </div>
              </div>
              {/* Expanded UK brand description - removed max-w-sm constraint */}
              <p className="text-white leading-relaxed font-body tracking-body text-sm">
                THE UK'S FASTEST GROWING BRAND FOR TRAIL RUNNERS. MADE BY TRAIL RUNNERS, FOR TRAIL RUNNERS. OVER 50,000 ORDERS SHIPPED ACROSS THE UK AND BEYOND.
              </p>
            </div>

            {/* Quick Links Column - Centered */}
            <div className="flex flex-col items-center md:items-center text-center">
              <h4 className="text-newsletter font-secondary font-bold mb-4 tracking-secondary text-sm uppercase">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://harrierrunfree.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    Main Website
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://harrierrunfree.co.uk/collections/trail-gear" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    Shop Trail Gear
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://harrierrunfree.co.uk/pages/training-plans" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    Training Plans
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://harrierrunfree.co.uk/pages/race-calendar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    Race Calendar
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-newsletter font-secondary font-bold mb-4 tracking-secondary text-sm uppercase">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://harrierrunfree.co.uk/pages/privacy-notice" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-newsletter text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                  >
                    Privacy Policy
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* JOIN OUR TRAIL COMMUNITY Section */}
        <div className="bg-newsletter py-8 -mx-6 lg:-mx-8 mb-8">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Community Text */}
              <div className="text-center md:text-left">
                <h3 className="text-primary font-secondary font-black text-2xl lg:text-3xl tracking-secondary uppercase">
                  JOIN OUR TRAIL COMMUNITY
                </h3>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-6">
                <a 
                  href="https://www.instagram.com/harrier_trail_running/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 group"
                >
                  <Instagram className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.facebook.com/harriertrailrunning" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 group"
                >
                  <Facebook className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/harrier-trail-running" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 group"
                >
                  <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-8">
          <div className="text-center">
            <p className="text-white text-sm font-body tracking-body">
              © 2025 harrier trail running. all rights reserved. made by trail runners, for trail runners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;