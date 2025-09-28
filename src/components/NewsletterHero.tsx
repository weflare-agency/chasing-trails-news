import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import heroBackground from "@/assets/trail-runner-hero.jpg";
import harrierLogoWhite from "@/assets/harrier-logo-white.png";

const NewsletterHero = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [runnerLevel, setRunnerLevel] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleEmailSubmit = async (email: string, firstName: string, runnerLevel?: string) => {
    try {
      console.log("Submitting to Klaviyo:", { email, firstName, runnerLevel, timestamp: new Date() });

      // Validate input
      if (!email || !firstName) {
        throw new Error('Email and full name are required');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Invalid email format');
      }

      // Use Klaviyo's simple form submission
      const formData = new FormData();
      formData.append('g', 'XjWFFg'); // EXACT List ID - DO NOT CHANGE
      formData.append('email', email.toLowerCase().trim());
      formData.append('first_name', firstName.trim());
      if (runnerLevel) {
        formData.append('properties[runner_level]', runnerLevel);
      }
      formData.append('properties[subscription_source]', 'main_landing_page');

      // Try the request with better error handling
      try {
        const response = await fetch('https://manage.kmail-lists.com/ajax/subscriptions/subscribe', {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // This is important for Klaviyo's form endpoint
        });

        // With no-cors mode, we can't check response status
        // So we'll add a delay to simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Klaviyo form submitted successfully', { listId: 'XjWFFg', email, firstName });

        // Show success message
        toast({
          title: "Success! Check your inbox",
          description: `Hi ${firstName}! Your guide is on its way to ${email}`,
        });

        setHasSubmitted(true);

      } catch (networkError) {
        console.error('Network error submitting to Klaviyo:', networkError);
        throw new Error('Network connection failed. Please check your internet connection and try again.');
      }

    } catch (error) {
      console.error('Klaviyo subscription error:', error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again or contact support if the problem persists.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await handleEmailSubmit(email, name, runnerLevel);

    setEmail("");
    setName("");
    setRunnerLevel("");
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
                  onClick={() => setRunnerLevel("Beginner")}
                  className={`p-3 text-sm font-medium border-2 rounded-lg transition-colors ${
                    runnerLevel === "Beginner" 
                      ? "border-primary bg-primary/10 text-primary" 
                      : "border-muted hover:border-primary text-foreground bg-background"
                  }`}
                >
                  Beginner
                </button>
                <button
                  type="button"
                  onClick={() => setRunnerLevel("Regular")}
                  className={`p-3 text-sm font-medium border-2 rounded-lg transition-colors ${
                    runnerLevel === "Regular" 
                      ? "border-primary bg-primary/10 text-primary" 
                      : "border-muted hover:border-primary text-foreground bg-background"
                  }`}
                >
                  Regular
                </button>
                <button
                  type="button"
                  onClick={() => setRunnerLevel("Ultra Veteran")}
                  className={`p-3 text-sm font-medium border-2 rounded-lg transition-colors ${
                    runnerLevel === "Ultra Veteran" 
                      ? "border-primary bg-primary/10 text-primary" 
                      : "border-muted hover:border-primary text-foreground bg-background"
                  }`}
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