import NewsletterHero from "@/components/NewsletterHero";
import AboutAlecsa from "@/components/AboutAlecsa";
import TrustSignals from "@/components/TrustSignals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main className="space-y-16 lg:space-y-24">
        <NewsletterHero />
        <AboutAlecsa />
        <TrustSignals />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
