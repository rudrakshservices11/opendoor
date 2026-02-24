import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "Do you charge separately for Vastu consultation?", a: "Vastu consultancy is available as a standalone service and also as an add-on during transactions." },
  { q: "Are you independent advisors or builders?", a: "We are independent consultants representing client interests." },
  { q: "Do you assist with loans and financial structuring?", a: "Yes. Banking expertise allows us to guide clients on loan feasibility and structuring." },
  { q: "Do you handle rental properties?", a: "Yes, both residential and commercial leasing services are available." },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="py-24 section-dark">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl">
        <div className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Frequently Asked{" "}
            <span className="gold-text">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
              <AccordionItem value={`item-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/40 transition-colors">
                <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
