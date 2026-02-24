import { CheckCircle, Shield, TrendingUp, BarChart3 } from "lucide-react";

const ClientTrust = () => {
  const reasons = [
    "Transparent advisory model",
    "No pressure selling",
    "Financially structured guidance",
    "Vastu-integrated property decisions",
    "Strong negotiation representation",
  ];

  const results = [
    { icon: <Shield size={20} />, text: "Helped investors avoid low-potential inventory" },
    { icon: <TrendingUp size={20} />, text: "Structured resale negotiations saving significant margins" },
    { icon: <CheckCircle size={20} />, text: "Assisted families in selecting Vastu-aligned homes" },
    { icon: <BarChart3 size={20} />, text: "Guided commercial clients on energy-efficient layout decisions" },
  ];

  return (
    <>
      {/* Client Trust */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Client Trust</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Why Clients{" "}
              <span className="gold-text">Choose Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-4 hover:border-primary/40 transition-colors">
                <CheckCircle className="text-primary flex-shrink-0" size={16} />
                <span className="font-body text-sm text-secondary-foreground">{reason}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground font-body text-sm mt-8">
            Our clients include end-users, investors, business owners, and NRI buyers.
          </p>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-24 section-darker">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Real Results</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Advisory That{" "}
              <span className="gold-text">Protects Your Investment</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {results.map((result, i) => (
              <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
                <div className="text-primary mt-0.5">{result.icon}</div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{result.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-primary font-body font-semibold text-sm mt-10 tracking-wide">
            We prioritise outcome over commission.
          </p>
        </div>
      </section>
    </>
  );
};

export default ClientTrust;
