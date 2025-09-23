import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@/assets/trail-runner-hero.jpg";
import harrierLogoWhite from "@/assets/harrier-logo-white.png";

const NewsletterHero = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Harrier Trail Running!",
      description: "You've successfully subscribed to our weekly newsletter.",
    });

    setEmail("");
    setName("");
    setIsSubmitting(false);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay with topographic pattern */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'var(--topo-pattern)' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* Harrier Logo */}
        <div className="mb-8">
          <img 
            src={harrierLogoWhite} 
            alt="Harrier Trail Running" 
            className="h-16 md:h-20 mx-auto"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-main font-bold mb-6 leading-tight tracking-main uppercase">
          SIGN UP TO OUR FREE<br />
          <span className="text-newsletter">
            CHASING TRAILS
          </span><br />
          NEWSLETTER
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-body tracking-body">
          Get weekly insights into the trail running world with race reports,
          news from the professional scene, and on-the-ground perspectives from
          the French Pyrenees and beyond.
        </p>

        {/* Newsletter Signup Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-strong">
          <h3 className="text-2xl font-secondary font-bold text-foreground mb-2 tracking-secondary uppercase">Get Free Access</h3>
          <p className="text-muted-foreground mb-6 font-body tracking-body">
            Drop your name and email below and we'll send the weekly newsletter straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 text-lg font-body"
              />
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-lg font-body"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3 font-body">
                What's your experience level?
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="p-3 text-sm font-medium border-2 border-muted rounded-lg hover:border-primary transition-colors text-foreground bg-background"
                >
                  Beginner
                </button>
                <button
                  type="button"
                  className="p-3 text-sm font-medium border-2 border-muted rounded-lg hover:border-primary transition-colors text-foreground bg-background"
                >
                  Regular
                </button>
                <button
                  type="button"
                  className="p-3 text-sm font-medium border-2 border-muted rounded-lg hover:border-primary transition-colors text-foreground bg-background"
                >
                  Ultra Veteran
                </button>
              </div>
            </div>
            <Button 
              type="submit" 
              variant="newsletter" 
              size="xl"
              disabled={isSubmitting}
              className="w-full font-main tracking-main uppercase"
            >
              {isSubmitting ? "Signing you up..." : "Sign me up!"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterHero;