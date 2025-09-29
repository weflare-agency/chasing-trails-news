import { Instagram, Facebook, Check, MapPin } from "lucide-react";
import harrierLogo from "@/assets/harrier-main-logo.png";
import harrierBadge from "@/assets/harrier-badge-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={harrierBadge} 
                alt="Harrier Trail Running Logo" 
                className="h-12 w-12 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed font-body tracking-body">
              Weekly insights into the trail running world from the French Pyrenees and beyond.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/harrier_trail_running/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-newsletter transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-newsletter/30"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/harriertrailrunning" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-newsletter transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-newsletter/30"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Benefits */}
          <div>
            <h4 className="text-lg font-secondary font-semibold text-foreground mb-4 tracking-secondary uppercase">Newsletter Benefits</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 hover:bg-white/5 p-2 rounded-lg transition-all duration-300 cursor-default group">
                <Check className="w-5 h-5 text-newsletter mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground group-hover:text-white font-body tracking-body transition-colors duration-300">Weekly race reports and insights</span>
              </li>
              <li className="flex items-start gap-3 hover:bg-white/5 p-2 rounded-lg transition-all duration-300 cursor-default group">
                <Check className="w-5 h-5 text-newsletter mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground group-hover:text-white font-body tracking-body transition-colors duration-300">Professional scene coverage</span>
              </li>
              <li className="flex items-start gap-3 hover:bg-white/5 p-2 rounded-lg transition-all duration-300 cursor-default group">
                <Check className="w-5 h-5 text-newsletter mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground group-hover:text-white font-body tracking-body transition-colors duration-300">European trail running news</span>
              </li>
              <li className="flex items-start gap-3 hover:bg-white/5 p-2 rounded-lg transition-all duration-300 cursor-default group">
                <Check className="w-5 h-5 text-newsletter mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground group-hover:text-white font-body tracking-body transition-colors duration-300">On-the-ground perspectives</span>
              </li>
            </ul>
          </div>

          {/* About Alecsa */}
          <div>
            <h4 className="text-lg font-secondary font-semibold text-foreground mb-4 tracking-secondary uppercase">About Alecsa Stewart</h4>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body tracking-body">
              Freelance race reporter and journalist living in the French Pyrenees. 
              Trail runner covering UK and European athletes.
            </p>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground font-subtext tracking-subtext">French Pyrenees</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-base font-subtext tracking-subtext">
            © 2025 Harrier Trail Running. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://harrierrunfree.co.uk/pages/privacy-notice" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-newsletter text-sm font-medium transition-all duration-300 hover:scale-105 underline underline-offset-4 font-subtext tracking-subtext"
            >
              Privacy Policy
            </a>
            <a 
              href="https://harrierrunfree.co.uk/pages/website-terms-of-use" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-newsletter text-sm font-medium transition-all duration-300 hover:scale-105 underline underline-offset-4 font-subtext tracking-subtext"
            >
              Terms of Service
            </a>
            <a 
              href="https://harrierrunfree.co.uk/pages/privacy-notice" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-newsletter text-sm font-medium transition-all duration-300 hover:scale-105 underline underline-offset-4 font-subtext tracking-subtext"
            >
              Unsubscribe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;