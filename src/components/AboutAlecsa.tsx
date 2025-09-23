import alecsaImage from "@/assets/alecsa-stewart.png";
import trailRunnerImage from "@/assets/trail-runner-hero.jpg";

const AboutAlecsa = () => {
  return (
    <section className="py-20 bg-content-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What You'll Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The latest from the trail running world straight to your inbox every week. No sales, no promotions, 
            just pure trail news, stories, and race updates from someone who lives and breathes the sport.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              About Alecsa
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Every edition is written by <strong className="text-foreground">Freelance Race Reporter Alecsa Stewart</strong> - 
                a trail runner, journalist, and content writer living in the French Pyrenees.
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 py-4 bg-muted rounded-r-lg">
                <p className="italic text-foreground mb-4">
                  "I write about trail running and outdoor adventures, while also training and racing as a mountain ultra runner myself. 
                  I've been fortunate to experience some amazing events in the UK and abroad and to work closely with some of the top 
                  British and European athletes in our sport."
                </p>
                <p className="font-semibold text-foreground">
                  "All this comes through in the newsletter, plus on-the-ground insights wherever possible!"
                </p>
              </blockquote>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={alecsaImage} 
                alt="Alecsa Stewart - Freelance Race Reporter and Trail Runner in the French Pyrenees" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-xl overflow-hidden shadow-medium border-4 border-white">
              <img 
                src={trailRunnerImage} 
                alt="Trail running in mountain landscapes" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Newsletter Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-medium border border-border">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">Professional Journalism</h4>
            <p className="text-muted-foreground">
              In-depth race reports and event coverage from a qualified journalist who understands the sport.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-medium border border-border">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">European Insights</h4>
            <p className="text-muted-foreground">
              Unique perspective from the French Pyrenees, covering UK and European trail running scenes.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-medium border border-border">
            <div className="w-12 h-12 bg-newsletter rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-newsletter-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">Runner's Perspective</h4>
            <p className="text-muted-foreground">
              Written by an active trail runner who races and trains in the mountains, bringing authentic insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAlecsa;