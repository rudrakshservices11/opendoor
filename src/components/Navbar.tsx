import { useState } from "react";
import logo from "@/assets/logo.jpeg";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#founders", label: "About Us" },
    { href: "#projects", label: "Projects" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="OpenDoor 360" className="h-10 w-10 sm:h-12 sm:w-12 rounded-md object-cover" />
          <div>
            <span className="font-heading text-lg sm:text-xl font-bold text-primary">OPENDOOR 360</span>
            <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Property Consultants</p>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-body font-medium text-secondary-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
          ))}
          <a href="tel:+919871015096" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold hover:bg-gold-light transition-colors">
            <Phone size={14} />
            <div className="flex flex-col items-start">
              <span className="text-sm">Call Now</span>
              <span className="text-xs font-bold">+91 9871015096</span>
            </div>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-secondary-foreground hover:text-primary transition-colors py-2 text-sm"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919871015096"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-body font-semibold text-sm mt-2"
              onClick={() => setOpen(false)}
            >
              <Phone size={14} />
              <div className="flex flex-col items-start">
                <span>Call Now</span>
                <span className="text-xs font-bold">+91 9871015096</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
