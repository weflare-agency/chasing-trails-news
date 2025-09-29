import { Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react";
import harrierBadge from "@/assets/harrier-badge-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={harrierBadge} 
                  alt="Harrier Trail Running Logo" 
                  className="h-12 w-12 transition-transform duration-300 hover:scale-110"
                />
                <span className="text-xl font-secondary font-bold tracking-secondary">HARRIER</span>
              </div>
              <p className="text-muted-foreground leading-relaxed font-body tracking-body text-sm">
                The UK's fastest growing newsletter for trail runners. Weekly insights from the French Pyrenees and European racing scene.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-newsletter font-secondary font-bold mb-6 tracking-secondary text-sm uppercase">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://harrierrunfree.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-white text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                  >
                    Main Website
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#newsletter" 
                    className="text-muted-foreground hover:text-white text-sm font-body tracking-body transition-colors duration-300"
                  >
                    Newsletter Signup
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-muted-foreground hover:text-white text-sm font-body tracking-body transition-colors duration-300"
                  >
                    About Alecsa
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="text-muted-foreground hover:text-white text-sm font-body tracking-body transition-colors duration-300"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-newsletter font-secondary font-bold mb-6 tracking-secondary text-sm uppercase">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://harrierrunfree.co.uk/pages/privacy-notice" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-white text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
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
                    className="text-muted-foreground hover:text-white text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                  >
                    Terms of Service
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://harrierrunfree.co.uk/pages/privacy-notice" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-white text-sm font-body tracking-body transition-colors duration-300 flex items-center gap-2 group"
                  >
                    Unsubscribe
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="text-newsletter font-secondary font-bold mb-6 tracking-secondary text-sm uppercase">Follow Us</h4>
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://www.instagram.com/harrier_trail_running/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-newsletter transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-body tracking-body">Instagram</span>
                </a>
                <a 
                  href="https://www.facebook.com/harriertrailrunning" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-newsletter transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-body tracking-body">Facebook</span>
                </a>
                <a 
                  href="#linkedin" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-newsletter transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-body tracking-body">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="border-t border-border py-8">
          <div className="text-center">
            <h3 className="text-2xl font-secondary font-bold text-newsletter mb-4 tracking-secondary">
              JOIN OUR TRAIL COMMUNITY
            </h3>
            <p className="text-muted-foreground font-body tracking-body mb-6 max-w-2xl mx-auto">
              Get exclusive insights from the European trail running scene delivered to your inbox every week.
            </p>
            <a 
              href="#newsletter" 
              className="inline-flex items-center px-8 py-3 bg-newsletter text-primary font-secondary font-semibold rounded-lg hover:bg-newsletter/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-newsletter/30"
            >
              Subscribe Now
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-6">
          <div className="text-center">
            <p className="text-muted-foreground text-sm font-subtext tracking-subtext">
              © 2025 Harrier Trail Running. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;