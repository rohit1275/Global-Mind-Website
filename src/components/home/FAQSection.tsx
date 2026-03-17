import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the visa success rate?",
    a: "Global Minds Education has a 98% visa success rate across all destinations. Our experienced team ensures every application is thoroughly prepared with the right documentation and interview coaching.",
  },
  {
    q: "How do consultants help students study abroad?",
    a: "Our consultants guide you through every step — from choosing the right country and university, to preparing your application, securing scholarships, obtaining your visa, and arranging pre-departure support.",
  },
  {
    q: "Does Global Minds provide visa interview support?",
    a: "Yes. We offer comprehensive visa interview preparation including mock interviews, common question guides, and personalized coaching to boost your confidence and success chances.",
  },
  {
    q: "Is counselling free of cost?",
    a: "Your initial consultation is absolutely free. We believe in helping every student explore their options before making any commitments. Book a session today to get started.",
  },
  {
    q: "Which countries can students apply to?",
    a: "We support applications to Canada, United Kingdom, Australia, United States, Germany, Ireland, India, and many other destinations. Our counsellors help you pick the best fit for your goals and budget.",
  },
  {
    q: "What documents are required for study abroad?",
    a: "Typically you'll need academic transcripts, proof of English proficiency (IELTS/TOEFL), a valid passport, statement of purpose, letters of recommendation, and financial documents. Requirements vary by country and university.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 section-light">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent font-sans">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Got questions? We've got answers. Find everything you need to know about studying abroad.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
