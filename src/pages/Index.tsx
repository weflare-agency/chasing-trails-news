import NewsletterHero from "@/components/NewsletterHero";
import AboutAlecsa from "@/components/AboutAlecsa";
import Testimonials from "@/components/Testimonials";
import TrustSignals from "@/components/TrustSignals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
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
