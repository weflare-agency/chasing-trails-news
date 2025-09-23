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
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Readers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands who never miss their weekly trail running insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-medium border border-border hover:shadow-strong transition-smooth">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our community of trail running enthusiasts?
          </p>
          <a href="#signup" className="inline-block">
            <button className="bg-newsletter hover:bg-newsletter-hover text-newsletter-foreground font-semibold px-8 py-4 rounded-lg shadow-medium transition-smooth">
              Get Your Weekly Newsletter
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;