import { Header } from "@/components/header"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;