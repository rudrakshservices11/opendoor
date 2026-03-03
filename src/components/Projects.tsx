import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Building2, TrendingUp, Home } from "lucide-react";

const projects = [
  {
    name: "DLF Ultima",
    location: "Sector 81, New Gurgaon",
    type: "Luxury Apartments",
    config: "3 & 4 BHK",
    highlight: "Neighbouring 1,000 acres of reserved greens with 27 water bodies & a grand waterfall entrance.",
    priceRange: "₹3.25 Cr onwards",
    icon: Building2,
  },
  {
    name: "Vatika India Next",
    location: "Sector 82, New Gurgaon",
    type: "Integrated Township",
    config: "3 & 4 BHK",
    highlight: "A 112-acre integrated township by Vatika Group with premium amenities, lush landscapes & excellent connectivity.",
    priceRange: "₹1.10 Cr – ₹2.08 Cr",
    icon: Home,
  },
  {
    name: "SS The Leaf",
    location: "Sector 85, Gurgaon",
    type: "Premium Residences",
    config: "3 & 4 BHK",
    highlight: "A nature-inspired residential project offering spacious floor plans with modern amenities on Dwarka Expressway.",
    priceRange: "₹1.50 Cr onwards",
    icon: TrendingUp,
  },
  {
    name: "Signature Global",
    location: "Multiple Sectors, Gurgaon",
    type: "Luxury & Affordable",
    config: "2, 3 & 4 BHK",
    highlight: "One of Gurgaon's fastest-growing developers offering projects across Dwarka Expressway & SPR with world-class design.",
    priceRange: "₹75 L – ₹3 Cr",
    icon: Building2,
  },
  {
    name: "Bestech",
    location: "Golf Course Extension Road",
    type: "Ultra-Luxury Living",
    config: "3 & 4 BHK",
    highlight: "Known for premium developments along Golf Course Extension Road with resort-style amenities & prime appreciation potential.",
    priceRange: "₹2 Cr onwards",
    icon: TrendingUp,
  },
  {
    name: "Mapsko",
    location: "Sector 37D, Gurgaon",
    type: "High-Rise Living",
    config: "2, 3 & 4 BHK",
    highlight: "Well-established Gurgaon developer delivering quality high-rise residences with strategic locations near NH-8 & Dwarka Expressway.",
    priceRange: "₹90 L onwards",
    icon: Home,
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 section-dark">
      <div ref={ref} className="container mx-auto px-6 max-w-6xl">
        <div className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Featured Projects
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Premium Properties We{" "}
            <span className="gold-text">Recommend</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Handpicked developments across Gurgaon's most promising growth corridors — evaluated for builder credibility, investment potential & Vastu compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={i}
                className={`reveal ${isVisible ? "visible" : ""} group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.25)]`}
                style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-body tracking-wider uppercase text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-body mb-3">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {project.location}
                </div>

                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {project.highlight}
                </p>

                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-body">Config</p>
                    <p className="text-sm font-body font-semibold text-foreground">{project.config}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground font-body">Starting</p>
                    <p className="text-sm font-heading font-bold text-primary">{project.priceRange}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className={`reveal ${isVisible ? "visible" : ""} text-center text-muted-foreground font-body text-sm mt-12 italic`}
          style={{ transitionDelay: "0.85s" }}
        >
          Every project is independently evaluated for investment merit & Vastu alignment before recommendation.
        </p>
      </div>
    </section>
  );
};

export default Projects;
