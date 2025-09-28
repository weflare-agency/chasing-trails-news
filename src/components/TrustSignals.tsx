import { Shield, CheckCircle, Calendar, Heart } from "lucide-react";
import awardsImage from "@/assets/industry-awards.png";
import harrierBadge from "@/assets/harrier-badge-logo.png";
import topoPattern2 from "@/assets/topo-pattern-2.png";

const TrustSignals = () => {
  return (
    <section className="py-24 bg-content-gradient relative overflow-hidden">
      {/* Official Harrier topographic pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${topoPattern2})`,
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat'
        }}
      />
      
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

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-main font-bold text-primary mb-2 tracking-main">2,500+</div>
            <div className="text-lg font-secondary font-semibold text-foreground mb-1 tracking-secondary uppercase">Weekly Subscribers</div>
            <div className="text-sm text-muted-foreground font-subtext tracking-subtext">Active readers worldwide</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-main font-bold text-primary mb-2 tracking-main">87%</div>
            <div className="text-lg font-secondary font-semibold text-foreground mb-1 tracking-secondary uppercase">Open Rate</div>
            <div className="text-sm text-muted-foreground font-subtext tracking-subtext">Above industry average</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-main font-bold text-primary mb-2 tracking-main">156</div>
            <div className="text-lg font-secondary font-semibold text-foreground mb-1 tracking-secondary uppercase">Weeks Delivered</div>
            <div className="text-sm text-muted-foreground font-subtext tracking-subtext">3+ years of consistency</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-main font-bold text-primary mb-2 tracking-main">47</div>
            <div className="text-lg font-secondary font-semibold text-foreground mb-1 tracking-secondary uppercase">Countries</div>
            <div className="text-sm text-muted-foreground font-subtext tracking-subtext">Global trail running community</div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-secondary font-bold text-center text-foreground mb-12 tracking-secondary uppercase">
            Industry Recognition
          </h3>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 opacity-10 rounded-lg" style={{ backgroundImage: 'var(--topo-pattern)' }} />
            <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border">
              <img 
                src={awardsImage} 
                alt="Industry Awards - Women's Running Awards 2023, Outdoors 100 Winner 24/25, Runner's World Highly Commended, The Guardian, Winner Running Show Awards Retailer of the Year 2024" 
                className="w-full h-auto rounded-lg shadow-soft"
              />
              <div className="mt-6 text-center">
                <p className="text-lg font-secondary font-semibold text-foreground tracking-secondary uppercase mb-2">
                  Award-Winning Brand
                </p>
                <p className="text-muted-foreground font-body tracking-body">
                  Recognized for excellence in the trail running industry
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-secondary font-bold text-center text-foreground mb-8 tracking-secondary uppercase">
            Our Promise to You
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-secondary font-semibold text-foreground mb-2 tracking-secondary uppercase">SSL Secure</h4>
              <p className="text-sm text-muted-foreground font-subtext tracking-subtext">Your data is protected</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <CheckCircle className="w-8 h-8 text-secondary mb-3" />
              <h4 className="font-secondary font-semibold text-foreground mb-2 tracking-secondary uppercase">No Spam Promise</h4>
              <p className="text-sm text-muted-foreground font-subtext tracking-subtext">Quality over quantity</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <Calendar className="w-8 h-8 text-newsletter mb-3" />
              <h4 className="font-secondary font-semibold text-foreground mb-2 tracking-secondary uppercase">Weekly Delivery</h4>
              <p className="text-sm text-muted-foreground font-subtext tracking-subtext">Every Thursday</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <Heart className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-secondary font-semibold text-foreground mb-2 tracking-secondary uppercase">Unsubscribe Anytime</h4>
              <p className="text-sm text-muted-foreground font-subtext tracking-subtext">No questions asked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;