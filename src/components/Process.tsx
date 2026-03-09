import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Requirement & Goal Analysis" },
  { num: "02", title: "Market Based Competitive Pricing" },
  { num: "03", title: "Market-Based Property Shortlisting" },
  { num: "04", title: "Vastu Alignment Evaluation" },
  { num: "05", title: "Negotiation & Closure Assistance" },
];

const Process = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="py-24 section-dark">
      <div ref={ref} className="container mx-auto px-6 max-w-5xl">
        <div className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Our 5-Step Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Structured. Transparent.{" "}
            <span className="gold-text">Professional.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`reveal ${isVisible ? "visible" : ""} relative flex items-center gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
              >
                <div className={`flex-1 hidden md:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 inline-block hover:border-primary/40 transition-colors">
                    <p className="font-heading text-lg font-bold text-foreground">{step.title}</p>
                  </div>
                </div>

                <div className="relative z-10 w-16 h-16 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-lg font-bold text-primary-foreground">{step.num}</span>
                </div>

                <div className="flex-1 md:hidden">
                  <div className="bg-card border border-border rounded-xl p-5">
                    <p className="font-heading text-base font-bold text-foreground">{step.title}</p>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        <p className={`reveal ${isVisible ? "visible" : ""} text-center text-muted-foreground font-body text-sm mt-12 italic`} style={{ transitionDelay: "0.8s" }}>
          We ensure clarity at every stage — no rushed decisions.
        </p>
      </div>
    </section>
  );
};

export default Process;
