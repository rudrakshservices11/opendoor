import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  const benefits = [
    "Expert guidance backed by 35+ years of legacy",
    "Proven advisory framework for real estate success",
    "Integrated Vastu insights for optimal alignment"
  ];

  return (
    <section id="contact" className="py-32 section-darker relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -z-10" />

      <div ref={ref} className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header Section */}
        <div className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-body text-sm font-semibold tracking-wide">READY TO DECIDE WITH CONFIDENCE?</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-foreground">
            Transform Your Property<br/>
            <span className="gold-text">Strategy Today</span>
          </h2>
          
          <p className="text-secondary-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Let our expert advisors combine corporate discipline, banking expertise, and scientific Vastu insight to guide your next investment decision.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className={`reveal ${isVisible ? "visible" : ""} grid md:grid-cols-3 gap-6 mb-16`}>
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-lg bg-primary-foreground/5 border border-border/50 hover:border-primary/30 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm text-secondary-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={`reveal ${isVisible ? "visible" : ""} flex flex-col sm:flex-row gap-6 justify-center mb-12`}>
          <a 
            href="tel:+919871015096" 
            className="group flex items-center justify-center gap-3 gold-gradient text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-base hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Phone size={18} />
            Call Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="tel:+919871015096" 
            className="group flex items-center justify-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded-lg font-body font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Schedule Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Direct Contact Card */}
        <div className={`reveal ${isVisible ? "visible" : ""} bg-gradient-to-r from-primary-foreground/[0.08] to-primary-foreground/[0.02] border border-primary/20 rounded-2xl p-8 text-center`}>
          <p className="text-secondary-foreground font-body text-sm mb-4">Or reach us directly</p>
          <a 
            href="tel:+919871015096"
            className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
          >
            <Phone size={24} className="text-primary" />
            <div className="flex flex-col items-start">
              <span className="font-heading font-bold text-2xl group-hover:text-primary transition-colors">+91 9871015096</span>
              <span className="font-body text-xs text-muted-foreground">Available 9 AM - 6 PM, Monday - Friday</span>
            </div>
          </a>
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
