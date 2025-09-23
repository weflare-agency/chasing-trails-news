const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Chasing Trails</h3>
            <p className="text-primary-foreground/80 mb-6">
              Weekly insights into the trail running world from the French Pyrenees.
              Professional journalism meets authentic runner experiences.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/harrier_trail_running" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Follow Harrier Trail Running on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.619 5.367 11.986 11.988 11.986s11.987-5.367 11.987-11.986C24.004 5.367 18.637.001 12.017.001zm5.568 16.794c-.353.146-.741.24-1.163.292-.422.053-.879.062-1.37.062H8.948c-.491 0-.948-.009-1.37-.062-.422-.052-.81-.146-1.163-.292-.353-.146-.673-.34-.96-.583-.287-.242-.527-.537-.72-.883-.193-.347-.336-.739-.429-1.176-.093-.437-.14-.907-.14-1.41V8.801c0-.503.047-.973.14-1.41.093-.437.236-.829.429-1.176.193-.346.433-.641.72-.883.287-.243.607-.437.96-.583.353-.146.741-.24 1.163-.292.422-.053.879-.062 1.37-.062h6.104c.491 0 .948.009 1.37.062.422.052.81.146 1.163.292.353.146.673.34.96.583.287.242.527.537.72.883.193.347.336.739.429 1.176.093.437.14.907.14 1.41v6.941c0 .503-.047.973-.14 1.41-.093.437-.236.829-.429 1.176-.193.346-.433.641-.72.883-.287.243-.607.437-.96.583z"/>
                  <path d="M15.6 12c0 1.988-1.612 3.6-3.6 3.6s-3.6-1.612-3.6-3.6 1.612-3.6 3.6-3.6 3.6 1.612 3.6 3.6zm1.2 0c0-2.651-2.149-4.8-4.8-4.8S7.2 9.349 7.2 12s2.149 4.8 4.8 4.8 4.8-2.149 4.8-4.8zm1.872-4.992c0 .619-.502 1.121-1.121 1.121s-1.121-.502-1.121-1.121.502-1.121 1.121-1.121 1.121.502 1.121 1.121z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/Harrierrunfree" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Follow Harrier Trail Running on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>✓ Weekly delivery every Friday</li>
              <li>✓ No spam, just trail running news</li>
              <li>✓ Unsubscribe anytime with one click</li>
              <li>✓ Mobile-friendly format</li>
              <li>✓ Archive of past newsletters</li>
            </ul>
          </div>

          {/* About Alecsa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Alecsa Stewart</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>📝 Freelance Race Reporter</li>
              <li>🏔️ Based in French Pyrenees</li>
              <li>🏃‍♀️ Active Trail Runner</li>
              <li>📰 Professional Journalist</li>
              <li>🌍 UK & European Coverage</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 Chasing Trails Newsletter. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#privacy" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary-foreground transition-smooth">Terms of Service</a>
            <a href="#unsubscribe" className="hover:text-primary-foreground transition-smooth">Unsubscribe</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;