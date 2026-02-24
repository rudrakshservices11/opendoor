import { Building2, Landmark } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Founders = () => {
  const { ref, isVisible } = useScrollReveal();
  const founders = [
    {
      name: "Anuj Tomar",
      role: "Co-Founder",
      icon: <Building2 className="text-primary" size={28} />,
      description: "With over 15 years of corporate experience in reputed multinational organizations like Nestlé, Anuj brings structured negotiation skills, compliance-driven operations, and strategic thinking to every transaction.",
      highlight: "His approach ensures professionalism, transparency, and long-term client relationships.",
    },
    {
      name: "Ashish Kanojia",
      role: "Co-Founder",
      icon: <Landmark className="text-primary" size={28} />,
      description: "With 11 years of PSU banking experience at Bank of Baroda, Ashish understands financial risk, loan structures, investment feasibility, and asset evaluation in depth.",
      highlight: "He is also a Certified Vastu Consultant, offering scientific Vastu analysis for residential and commercial properties — helping clients align financial decisions with spatial harmony.",
    },
  ];

  return (
    <section id="founders" className="py-24 section-dark">
      <div ref={ref} className="container mx-auto px-6 max-w-5xl">
        <div className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Meet the Founders</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Built on Corporate Discipline &{" "}
            <span className="gold-text">Financial Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, i) => (
            <div
              key={i}
              className={`${i === 0 ? "reveal-left" : "reveal-right"} ${isVisible ? "visible" : ""} bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all duration-300 group`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {founder.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{founder.name}</h3>
                  <p className="text-primary font-body text-sm">{founder.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">{founder.description}</p>
              <p className="text-secondary-foreground font-body text-sm font-medium border-l-2 border-primary pl-4">
                {founder.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
