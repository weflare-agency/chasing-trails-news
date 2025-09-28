import { FileText, MapPin, Users } from "lucide-react";
import alecsaImage from "@/assets/alecsa-stewart.png";
import topoPattern1 from "@/assets/topo-pattern-1.png";

const AboutAlecsa = () => {
  return (
    <section className="py-24 bg-content-gradient relative overflow-hidden">
      {/* Subtle official topographic pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${topoPattern1})`,
          backgroundSize: '250px 250px',
          backgroundRepeat: 'repeat'
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-main font-bold text-foreground mb-6 tracking-main uppercase">
            What You'll Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body tracking-body">
            Weekly insights into the trail running world, delivered straight to your inbox.
            Professional journalism meets runner's perspective.
          </p>
        </div>

        {/* Newsletter Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 shadow-strong border-2 border-primary/20">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-secondary font-semibold text-foreground mb-3 tracking-secondary uppercase">
              Professional Journalism
            </h4>
            <p className="text-muted-foreground leading-relaxed font-body tracking-body">
              In-depth race reports and athlete interviews from someone who understands both the sport and storytelling.
            </p>
          </div>

          <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 shadow-strong border-2 border-secondary/20">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h4 className="text-xl font-secondary font-semibold text-foreground mb-3 tracking-secondary uppercase">
              European Insights
            </h4>
            <p className="text-muted-foreground leading-relaxed font-body tracking-body">
              Unique perspectives from the heart of European trail running, covering races and athletes you won't find elsewhere.
            </p>
          </div>

          <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 shadow-strong border-2 border-newsletter/20">
            <div className="w-12 h-12 bg-newsletter rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-newsletter-foreground" />
            </div>
            <h4 className="text-xl font-secondary font-semibold text-foreground mb-3 tracking-secondary uppercase">
              Runner's Perspective
            </h4>
            <p className="text-muted-foreground leading-relaxed font-body tracking-body">
              Content written by a trail runner, for trail runners. I understand the passion because I live it every day.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-secondary font-bold text-foreground mb-4 tracking-secondary uppercase">
              Meet Alecsa Stewart
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-body tracking-body">
              "I'm a freelance race reporter and journalist living in the French Pyrenees. 
              As both a trail runner and content writer, I bring you insider perspectives 
              on the European trail running scene and the athletes who make it so compelling."
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/50 rounded-r-lg">
              <p className="italic text-foreground mb-4 font-body tracking-body">
                "I write about trail running and outdoor adventures, while also training and racing as a mountain ultra runner myself. 
                I've been fortunate to experience some amazing events in the UK and abroad and to work closely with some of the top 
                British and European athletes in our sport."
              </p>
              <p className="font-secondary font-semibold text-foreground tracking-secondary">
                "All this comes through in the newsletter, plus on-the-ground insights wherever possible!"
              </p>
            </blockquote>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={alecsaImage} 
                alt="Alecsa Stewart - Freelance Race Reporter and Trail Runner in the French Pyrenees" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAlecsa;