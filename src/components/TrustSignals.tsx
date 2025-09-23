import awardsImage from "@/assets/awards.jpg";

const TrustSignals = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by Thousands of Trail Runners
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our growing community of weekly subscribers who rely on our insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Social Proof Stats */}
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
            <div className="text-muted-foreground">Weekly Subscribers</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Open Rate</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-newsletter mb-2">52</div>
            <div className="text-muted-foreground">Weeks Delivered</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
        </div>

        {/* Industry Awards */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Industry Recognition</h3>
          <div className="max-w-2xl mx-auto">
            <img 
              src={awardsImage} 
              alt="Harrier Trail Running Awards - Winner Retailer of the Year Outdoors 100 2023, Winner Best Running Accessory Running Show Awards 2022/23" 
              className="w-full h-auto rounded-lg shadow-medium"
            />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">SSL Secure</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">No Spam Promise</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Weekly Delivery</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Unsubscribe Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;