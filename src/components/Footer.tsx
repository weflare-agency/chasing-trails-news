import { Instagram, Facebook, Check, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-secondary font-bold text-foreground mb-4 tracking-secondary uppercase">Harrier Trail Running</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed font-body tracking-body">
              Weekly insights into the trail running world from the French Pyrenees and beyond.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/harrier_trail_running/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/harriertrailrunning" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Benefits */}
          <div>
            <h4 className="text-lg font-secondary font-semibold text-foreground mb-4 tracking-secondary uppercase">Newsletter Benefits</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground font-body tracking-body">Weekly race reports and insights</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground font-body tracking-body">Professional scene coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground font-body tracking-body">European trail running news</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground font-body tracking-body">On-the-ground perspectives</span>
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
          <p className="text-muted-foreground text-sm font-subtext tracking-subtext">
            © 2024 Harrier Trail Running. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth font-subtext tracking-subtext">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth font-subtext tracking-subtext">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth font-subtext tracking-subtext">
              Unsubscribe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;