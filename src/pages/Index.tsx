import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyDifferent from "@/components/WhyDifferent";
import Founders from "@/components/Founders";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import GurgaonSpecialist from "@/components/GurgaonSpecialist";
import ClientTrust from "@/components/ClientTrust";
import FAQ from "@/components/FAQ";
import { CTASection, Footer } from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyDifferent />
      <Founders />
      <Services />
      <Projects />
      <GurgaonSpecialist />
      <ClientTrust />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
