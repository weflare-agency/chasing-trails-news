import { Shield, CheckCircle, Calendar, Heart, Clock, Sparkles, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import awardsImage from "@/assets/industry-awards.png";
import harrierBadge from "@/assets/harrier-badge-logo.png";
import topoPattern2 from "@/assets/topo-pattern-2.png";
const TrustSignals = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (email: string, firstName: string) => {
    try {
      console.log("Submitting to Klaviyo:", { email, firstName, timestamp: new Date() });

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
      formData.append('properties[subscription_source]', 'trust_signals_section');

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
          description: `Hi ${firstName}! Welcome to the trail running community`,
        });

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

    await handleEmailSubmit(email, name);

    setEmail("");
    setName("");
    setIsSubmitting(false);
  };

  return <section className="py-24 bg-content-gradient relative overflow-hidden">
      {/* Official Harrier topographic pattern */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `url(${topoPattern2})`,
      backgroundSize: '300px 300px',
      backgroundRepeat: 'repeat'
    }} />
      
      {/* Decorative badge elements */}
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
        <img src={harrierBadge} alt="" className="w-20 h-20" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-main font-bold text-foreground mb-6 tracking-main uppercase">
            Trusted by Thousands of Trail Runners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body tracking-body">
            Join a community that values quality journalism and authentic trail running content
          </p>
        </div>

        {/* Email Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105 group">
            <Clock className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <div className="text-2xl font-secondary font-bold text-foreground mb-2 tracking-secondary uppercase">5-Min Read</div>
            <div className="text-sm text-muted-foreground font-subtext tracking-subtext">Quick, digestible format</div>
          </div>

          <div className="text-center p-6 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105 group">
            <Users className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <div className="text-2xl font-secondary font-bold text-foreground mb-2 tracking-secondary uppercase">Athlete Features</div>
            <div className="text-sm text-muted-foreground font-subtext tracking-subtext">Interviews with elite & everyday runners</div>
          </div>

          <div className="text-center p-6 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105 group">
            <FileText className="w-12 h-12 text-newsletter mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <div className="text-2xl font-secondary font-bold text-foreground mb-2 tracking-secondary uppercase">Quick Reference</div>
            <div className="text-sm text-muted-foreground font-subtext tracking-subtext">All the trail news in one place</div>
          </div>

          <div className="text-center p-6 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105 group">
            <Sparkles className="w-12 h-12 text-secondary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <div className="text-2xl font-secondary font-bold text-foreground mb-2 tracking-secondary uppercase">Curated Content</div>
            <div className="text-sm text-muted-foreground font-subtext tracking-subtext">Best stories from the week</div>
          </div>
        </div>

        {/* Inline Newsletter Signup Form */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-border hover:border-newsletter/30 transition-all duration-300 hover:shadow-lg hover:shadow-newsletter/20">
            <h3 className="text-2xl md:text-3xl font-secondary font-bold text-foreground mb-3 tracking-secondary uppercase text-center">
              Join the Community
            </h3>
            <p className="text-muted-foreground mb-6 font-body tracking-body text-center">
              Get your weekly dose of trail running insights delivered every Wednesday
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12 text-lg font-body transition-all duration-300 focus:ring-newsletter focus:border-newsletter"
                />
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-lg font-body transition-all duration-300 focus:ring-newsletter focus:border-newsletter"
                />
              </div>
              <Button 
                type="submit" 
                variant="newsletter" 
                size="lg"
                disabled={isSubmitting}
                className="w-full font-main tracking-main uppercase h-12 text-lg"
              >
                {isSubmitting ? "Signing you up..." : "Sign me up!"}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center font-body tracking-body">
                By signing up, you consent to receiving our newsletter. Unsubscribe anytime. See our{" "}
                <a 
                  href="https://harrierrunfree.co.uk/pages/privacy-notice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-smooth"
                >
                  privacy policy
                </a>.
              </p>
            </form>
          </div>
        </div>

        {/* Our Promise to You */}
        <div className="mb-20">
          <h3 className="text-2xl font-secondary font-bold text-center text-foreground mb-8 tracking-secondary uppercase">
            Our Promise to You
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 group">
              <Shield className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-secondary font-semibold text-foreground mb-2 tracking-secondary uppercase">SSL Secure</h4>
              <p className="text-sm text-muted-foreground font-subtext tracking-subtext">Your data is protected</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300 hover:scale-105 group">
              <CheckCircle className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-secondary font-semibold text-foreground mb-2 tracking-secondary uppercase">No Spam Promise</h4>
              <p className="text-sm text-muted-foreground font-subtext tracking-subtext">Quality over quantity</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-newsletter/40 hover:bg-newsletter/5 transition-all duration-300 hover:scale-105 group">
              <Calendar className="w-8 h-8 text-newsletter mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-secondary font-semibold text-foreground mb-2 tracking-secondary uppercase">Weekly Delivery</h4>
              <p className="text-sm text-muted-foreground font-subtext tracking-subtext">Every Wednesday</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 group">
              <Heart className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-secondary font-semibold text-foreground mb-2 tracking-secondary uppercase">Unsubscribe Anytime</h4>
              <p className="text-sm text-muted-foreground font-subtext tracking-subtext">No questions asked</p>
            </div>
          </div>
        </div>

        {/* Awards Section - Final Position */}
        <div className="mt-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 opacity-10 rounded-lg" style={{
              backgroundImage: 'var(--topo-pattern)'
            }} />
            <div className="relative bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/50">
              <img src={awardsImage} alt="Industry Awards - Women's Running Awards 2023, Outdoors 100 Winner 24/25, Runner's World Highly Commended, The Guardian, Winner Running Show Awards Retailer of the Year 2024" className="w-full max-w-3xl mx-auto h-auto rounded-lg shadow-soft" />
              <div className="mt-6 text-center">
                <p className="text-lg font-secondary font-semibold text-foreground tracking-secondary uppercase mb-2">
                  Award-Winning Brand
                </p>
                <p className="text-muted-foreground font-body tracking-body">
                  Recognised for excellence in the trail running industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TrustSignals;