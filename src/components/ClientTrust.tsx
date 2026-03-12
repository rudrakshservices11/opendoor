import { CheckCircle, Shield, TrendingUp, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ClientTrust = () => {
  const trust = useScrollReveal();
  const results = useScrollReveal();

  const reasons = [
    "Transparent advisory model",
    "No pressure selling",
    "Curated property options",
    "Vastu-integrated property decisions",
    "Strong negotiation representation",
    "End-to-end transaction support",
  ];

  const resultItems = [
    { icon: <Shield size={20} />, text: "Helped investors avoid low-potential inventory" },
    { icon: <TrendingUp size={20} />, text: "Structured resale negotiations saving significant margins" },
    { icon: <CheckCircle size={20} />, text: "Assisted families in selecting Vastu-aligned homes" },
    { icon: <BarChart3 size={20} />, text: "Guided commercial clients on energy-efficient layout decisions" },
  ];

  return (
    <>
      <section className="py-24 section-dark">
        <div ref={trust.ref} className="container mx-auto px-6 max-w-5xl">
          <div className={`reveal ${trust.isVisible ? "visible" : ""} text-center mb-16`}>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Client Trust</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Why Clients{" "}
              <span className="gold-text">Choose Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className={`reveal-scale ${trust.isVisible ? "visible" : ""} flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-4 hover:border-primary/40 transition-colors`}
                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
              >
                <CheckCircle className="text-primary flex-shrink-0" size={16} />
                <span className="font-body text-sm text-secondary-foreground">{reason}</span>
              </div>
            ))}
          </div>
          <p className={`reveal ${trust.isVisible ? "visible" : ""} text-center text-muted-foreground font-body text-sm mt-8`} style={{ transitionDelay: "0.6s" }}>
            Our clients include end-users, investors, business owners, and NRI buyers.
          </p>
        </div>
      </section>

      <section className="py-24 section-darker">
        <div ref={results.ref} className="container mx-auto px-6 max-w-5xl">
          <div className={`reveal ${results.isVisible ? "visible" : ""} text-center mb-16`}>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Real Results</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Advisory That{" "}
              <span className="gold-text">Protects Your Investment</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {resultItems.map((result, i) => (
              <div
                key={i}
                className={`reveal ${results.isVisible ? "visible" : ""} flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors`}
                style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
              >
                <div className="text-primary mt-0.5">{result.icon}</div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{result.text}</p>
              </div>
            ))}
          </div>
          <p className={`reveal ${results.isVisible ? "visible" : ""} text-center text-primary font-body font-semibold text-sm mt-10 tracking-wide`} style={{ transitionDelay: "0.6s" }}>
            We prioritise outcome over commission.
          </p>
        </div>
      </section>
    </>
  );
};

export default ClientTrust;
