import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Building2, FileCheck, Award, Home, BookOpen, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Education Counselling",
    desc: "Our experienced counsellors work with you to understand your academic goals, interests, and career aspirations. We help you choose the right course, university, and country that aligns with your future plans.",
    features: ["Personalized career assessment", "Course and university shortlisting", "Country comparison guidance", "Application timeline planning"],
  },
  {
    icon: Building2,
    title: "University Admissions",
    desc: "We handle the entire admissions process — from preparing your documents to submitting applications to top universities worldwide. Our team ensures your application stands out.",
    features: ["Document preparation & review", "Statement of Purpose guidance", "Application submission", "Offer letter management"],
  },
  {
    icon: FileCheck,
    title: "Visa Application Assistance",
    desc: "With a 98% visa success rate, our expert team guides you through the entire visa application process, ensuring all documentation is in order for a smooth approval.",
    features: ["Visa documentation checklist", "Interview preparation", "Financial documentation support", "Visa application tracking"],
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    desc: "We help you identify and apply for scholarships and financial aid to make your education abroad more affordable. Many of our students have secured 50-100% tuition scholarships.",
    features: ["Scholarship research & matching", "Application preparation", "Essay and statement support", "Financial aid guidance"],
  },
  {
    icon: Home,
    title: "Student Accommodation",
    desc: "Finding safe and affordable accommodation near your university is essential. We help you explore options and secure the best housing before you arrive.",
    features: ["On-campus housing support", "Off-campus options", "Homestay arrangements", "Pre-arrival setup"],
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    desc: "Prepare for IELTS, TOEFL, GRE, GMAT, and other standardized tests with our expert guidance and resources to achieve the scores you need.",
    features: ["IELTS & TOEFL coaching", "Practice tests & materials", "Score improvement strategies", "Test registration support"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-accent-foreground/80 text-sm font-semibold uppercase tracking-wider font-sans">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">Comprehensive Study Abroad Support</h1>
            <p className="text-primary-foreground/80 text-lg">From counselling to accommodation, we provide end-to-end support for your international education journey.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {services.map((svc, i) => (
              <div key={svc.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <svc.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{svc.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>
                  <div className="space-y-2.5">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-muted rounded-xl p-10 flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <svc.icon className="h-24 w-24 text-accent/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need Help Choosing the Right Service?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Talk to our expert counsellors for a free consultation.</p>
          <Link to="/contact">
            <Button variant="hero" size="lg">Book Free Consultation</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
