import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesGrid />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Testimonials />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;