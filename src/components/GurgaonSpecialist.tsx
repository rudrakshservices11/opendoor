import { MapPin, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GurgaonSpecialist = () => {
  const { ref, isVisible } = useScrollReveal();
  const areas = ["New Gurgaon", "Dwarka Expressway", "Golf Course Extension Road", "Prime Commercial Hubs"];
  const insights = ["Builder credibility", "Micro-market growth trends", "Rental yield analysis", "Long-term appreciation potential"];

  return (
    <section className="py-24 section-darker">
      <div ref={ref} className="container mx-auto px-6 max-w-5xl">
        <div className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Gurgaon Market Specialists</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Deep Understanding of Gurgaon's{" "}
            <span className="gold-text">Growth Corridors</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`reveal-left ${isVisible ? "visible" : ""} bg-card border border-border rounded-xl p-8`} style={{ transitionDelay: "0.2s" }}>
            <h3 className="font-heading text-xl font-bold mb-6 text-foreground flex items-center gap-3">
              <MapPin className="text-primary" size={22} />
              We Specialize In
            </h3>
            <div className="space-y-3">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 bg-secondary rounded-lg px-5 py-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-body text-secondary-foreground font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal-right ${isVisible ? "visible" : ""} bg-card border border-border rounded-xl p-8`} style={{ transitionDelay: "0.3s" }}>
            <h3 className="font-heading text-xl font-bold mb-6 text-foreground">Our Insights Include</h3>
            <div className="space-y-4">
              {insights.map((insight, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span className="font-body text-muted-foreground">{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GurgaonSpecialist;
