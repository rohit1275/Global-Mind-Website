import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, FileCheck, Award, Home as HomeIcon, BookOpen, ArrowRight } from "lucide-react";

const services = [
  { icon: GraduationCap, title: "Education Counselling", desc: "Personalized guidance to help you choose the right course and university based on your goals and budget.", color: "bg-accent/10 text-accent" },
  { icon: Building2, title: "University Admissions", desc: "End-to-end support for your application to top global universities with expert SOP and essay guidance.", color: "bg-gold/10 text-gold" },
  { icon: FileCheck, title: "Visa Assistance", desc: "Expert visa guidance with a 98% success rate. We handle documentation and interview preparation.", color: "bg-accent/10 text-accent" },
  { icon: Award, title: "Scholarship Guidance", desc: "Find and apply for scholarships worth thousands. We help you maximize your funding opportunities.", color: "bg-gold/10 text-gold" },
  { icon: HomeIcon, title: "Accommodation", desc: "Safe and affordable housing options near your university campus, arranged before you arrive.", color: "bg-accent/10 text-accent" },
  { icon: BookOpen, title: "Test Preparation", desc: "IELTS, TOEFL, GRE and other test prep with experienced trainers to boost your scores.", color: "bg-gold/10 text-gold" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">End-to-End Study Abroad Support</h2>
          <p className="text-muted-foreground">From choosing the right course to settling in your new country, we're with you every step of the way.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${svc.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <svc.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              View All Services <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
