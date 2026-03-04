import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 md:pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          Residential · Commercial · Vastu Advisory
        </p>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
          360° Real Estate Advisory in Gurgaon with{" "}
          <span className="gold-text">Scientific Vastu Alignment</span>
        </h1>

        <p className="text-lg md:text-xl text-secondary-foreground font-body font-light mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Led by Corporate & Banking Professionals.
        </p>
        <p className="text-base md:text-lg text-muted-foreground font-body mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          We Help You Buy, Sell & Invest with Financial Clarity and Energy Alignment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="#contact" className="gold-gradient text-primary-foreground px-8 py-4 rounded-md font-body font-semibold text-base hover:opacity-90 transition-opacity">
            Book a Free Consultation
          </a>
          <a href="#contact" className="border-2 border-primary text-primary px-8 py-4 rounded-md font-body font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-colors">
            Get Vastu Assessment
          </a>
          <a href="#projects" className="border border-border text-foreground px-8 py-4 rounded-md font-body font-semibold text-base hover:border-primary hover:text-primary transition-colors">
            Explore Properties
          </a>
        </div>

        {/* Trust strip */}
        <div className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-muted-foreground font-body tracking-wide border border-border/50 rounded-full px-8 py-4 bg-card/50 backdrop-blur-sm">
            <span>15+ Years Corporate Leadership</span>
            <span className="text-primary">•</span>
            <span>11+ Years PSU Banking</span>
            <span className="text-primary">•</span>
            <span>Certified Vastu Consultant</span>
            <span className="text-primary">•</span>
            <span>Gurgaon Specialists</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
