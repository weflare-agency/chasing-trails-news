import NewsletterHero from "@/components/NewsletterHero";
import AboutAlecsa from "@/components/AboutAlecsa";
import Testimonials from "@/components/Testimonials";
import TrustSignals from "@/components/TrustSignals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main className="space-y-16 lg:space-y-24">
        <NewsletterHero />
        <AboutAlecsa />
        <Testimonials />
        <TrustSignals />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
