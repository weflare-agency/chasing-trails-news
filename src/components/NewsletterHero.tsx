import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@/assets/hero-background.jpg";

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
      title: "Welcome to Chasing Trails!",
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          SIGN UP TO OUR FREE
          <span className="block text-secondary mt-2">CHASING TRAILS</span>
          <span className="block">NEWSLETTER</span>
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-xl md:text-2xl mb-6 font-medium opacity-90">
            What's Inside:
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Weekly Insights</h3>
              <p className="text-sm opacity-80">Into the trail running world</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Race Reports</h3>
              <p className="text-sm opacity-80">Event coverage from our independent reporter</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Pro Scene News</h3>
              <p className="text-sm opacity-80">From the professional trail running scene</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-strong">
          <h3 className="text-2xl font-bold text-foreground mb-2">Get Free Access</h3>
          <p className="text-muted-foreground mb-6">
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
                className="h-12 text-lg"
              />
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-lg"
              />
            </div>
            <Button 
              type="submit" 
              variant="newsletter" 
              size="xl"
              disabled={isSubmitting}
              className="w-full"
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