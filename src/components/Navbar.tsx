import logo from "@/assets/logo.jpeg";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="OpenDoor 360" className="h-12 w-12 rounded-md object-cover" />
          <div>
            <span className="font-heading text-xl font-bold text-primary">OPENDOOR 360</span>
            <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Real Estate</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-body font-medium text-secondary-foreground">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#founders" className="hover:text-primary transition-colors">About Us</a>
          <a href="#process" className="hover:text-primary transition-colors">Process</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold hover:bg-gold-light transition-colors">
            <Phone size={14} />
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
