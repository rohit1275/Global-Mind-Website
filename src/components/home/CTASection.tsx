import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ctaImg from "@/assets/cta-graduation.jpg";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <img src={ctaImg} alt="Students celebrating graduation" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/60" />
      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 max-w-3xl mx-auto">
          Ready to Start Your Study Abroad Journey?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          Book a free consultation with our expert counsellors and take the first step towards your dream university.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base px-10 rounded-full">
              Book Free Consultation
            </Button>
          </Link>
          <a href="https://forms.gle/La6HbiUMCF94F9SF6" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="lg" className="text-base px-10 rounded-full">
              Apply Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
