import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyDifferent = () => {
  const { ref, isVisible } = useScrollReveal();
  const points = [
    "Structured evaluation before recommendation",
    "Financial feasibility assessment before commitment",
    "Vastu alignment before finalisation",
    "Long-term investment perspective",
  ];

  return (
    <section className="py-24 section-darker">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl`}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`reveal-left ${isVisible ? "visible" : ""}`}>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Why We Are Different</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Not Just Property Dealers.{" "}
              <span className="gold-text">We Are Decision Advisors.</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Most real estate consultants focus on closing deals.
            </p>
            <p className="text-secondary-foreground font-body font-medium text-lg">
              We focus on protecting your decision.
            </p>
          </div>

          <div className="space-y-5">
            {points.map((point, i) => (
              <div
                key={i}
                className={`reveal ${isVisible ? "visible" : ""} flex items-start gap-4 bg-card p-5 rounded-lg border border-border hover:border-primary/50 transition-colors`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                <p className="font-body text-secondary-foreground">{point}</p>
              </div>
            ))}
            <p className={`reveal ${isVisible ? "visible" : ""} text-muted-foreground font-body text-sm italic mt-6 pl-2`} style={{ transitionDelay: "0.5s" }}>
              When you work with us, you don't just buy property — you make a calculated move.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
