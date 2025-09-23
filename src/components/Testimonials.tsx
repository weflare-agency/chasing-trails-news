import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Williams",
      location: "Lake District, UK",
      role: "Trail Runner",
      quote: "Alecsa's newsletter keeps me connected to the trail running world in ways I never imagined. Her race reports feel like I'm right there on the trails.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      location: "Edinburgh, Scotland",
      role: "Ultra Runner",
      quote: "The professional insights and European race coverage are unmatched. It's become my essential weekly read.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      location: "Devon, UK",
      role: "Mountain Runner",
      quote: "Finally, a newsletter written by someone who actually runs the trails! The authenticity comes through in every word.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-main font-bold text-foreground mb-6 tracking-main uppercase">
            What Readers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body tracking-body">
            Join thousands of trail runners who trust our weekly insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-xl p-8 shadow-medium border border-border hover:shadow-strong transition-smooth">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-newsletter" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-card-foreground mb-6 leading-relaxed italic font-body tracking-body">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex flex-col">
                <span className="font-semibold text-card-foreground font-secondary tracking-secondary">{testimonial.name}</span>
                <span className="text-sm text-muted-foreground font-subtext tracking-subtext">{testimonial.location}</span>
                <span className="text-sm text-muted-foreground font-subtext tracking-subtext">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-newsletter/10 rounded-2xl p-12 max-w-4xl mx-auto shadow-newsletter border-2 border-newsletter/30 text-foreground">
            <h3 className="text-3xl md:text-4xl font-secondary font-bold mb-4 tracking-secondary uppercase">
              Ready to Join the Community?
            </h3>
            <p className="text-xl text-foreground/80 mb-8 font-body tracking-body">
              Get your weekly dose of trail running insights delivered every Thursday
            </p>
            <Button variant="default" size="xl" className="text-xl font-main tracking-main uppercase">
              Sign me up!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;