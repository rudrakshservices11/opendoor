import { Home, Building, Key, Compass } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: <Home size={24} />,
    title: "Residential Advisory",
    items: ["Buying & Selling Support", "Luxury & Mid-Segment Homes", "Investor-Focused Selection", "Pre-Purchase Vastu Evaluation"],
  },
  {
    icon: <Building size={24} />,
    title: "Commercial Advisory",
    items: ["Office Spaces", "Retail Shops & SCO Plots", "Investment Assets", "Layout & Energy Assessment"],
  },
  {
    icon: <Key size={24} />,
    title: "Rental & Leasing Services",
    items: ["Tenant Sourcing", "Corporate Leasing", "Commercial Rentals", "Documentation Assistance"],
  },
  {
    icon: <Compass size={24} />,
    title: "Vastu Consultancy",
    badge: "Core Expertise",
    items: ["Pre-Purchase Vastu Analysis", "Residential Vastu Audit", "Commercial Vastu Consultation", "Energy Flow Assessment", "Practical Vastu Corrections"],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 section-darker">
      <div ref={ref} className="container mx-auto px-6 max-w-6xl">
        <div className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Comprehensive Real Estate &{" "}
            <span className="gold-text">Vastu Advisory</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`reveal-scale ${isVisible ? "visible" : ""} bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group relative`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              {service.badge && (
                <span className="absolute -top-3 right-4 gold-gradient text-primary-foreground text-[10px] font-body font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary mb-5 group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-heading text-lg font-bold mb-4 text-foreground">{service.title}</h3>
              <ul className="space-y-2.5">
                {service.items.map((item, j) => (
                  <li key={j} className="text-muted-foreground font-body text-sm flex items-start gap-2">
                    <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={`reveal ${isVisible ? "visible" : ""} text-center text-muted-foreground font-body text-sm mt-10 italic`} style={{ transitionDelay: "0.6s" }}>
          Every client has the option to include Vastu screening before finalising a transaction.
        </p>
      </div>
    </section>
  );
};

export default Services;
