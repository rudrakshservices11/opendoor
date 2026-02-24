import { Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 section-darker relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div ref={ref} className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className={`reveal ${isVisible ? "visible" : ""} text-center`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Make Your Next Property Decision with{" "}
            <span className="gold-text">Strategy & Alignment</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-2">Don't rely on guesswork.</p>
          <p className="text-secondary-foreground font-body mb-10">
            Choose structured advisory backed by corporate discipline, banking expertise, and scientific Vastu insight.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#" className="gold-gradient text-primary-foreground px-8 py-4 rounded-md font-body font-semibold hover:opacity-90 transition-opacity">
              Book Your Strategy Call Today
            </a>
            <a href="#" className="border-2 border-primary text-primary px-8 py-4 rounded-md font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Schedule a Vastu Consultation
            </a>
            <a href="#" className="border border-border text-foreground px-8 py-4 rounded-md font-body font-semibold hover:border-primary hover:text-primary transition-colors inline-flex items-center justify-center gap-2">
              <Phone size={16} />
              Speak to an Advisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const taglines = [
    "Strategic Property. Structured Decisions.",
    "Invest with Clarity. Align with Confidence.",
    "Where Finance Meets Spatial Intelligence.",
  ];

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="OpenDoor 360" className="h-10 w-10 rounded-md object-cover" />
            <span className="font-heading text-xl font-bold text-primary">OPENDOOR 360</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {taglines.map((t, i) => (
              <span key={i} className="text-muted-foreground font-body text-xs tracking-wide">{t}</span>
            ))}
          </div>

          <p className="text-muted-foreground font-body text-xs">
            © {new Date().getFullYear()} OpenDoor 360 Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { CTASection, Footer };
