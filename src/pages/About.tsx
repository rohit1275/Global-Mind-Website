import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Globe, Users, Award, CheckCircle } from "lucide-react";

const values = [
  { icon: Heart, title: "Student-First Approach", desc: "Every decision we make is guided by what's best for our students' future." },
  { icon: Award, title: "Excellence", desc: "We maintain the highest standards in counselling and university partnerships." },
  { icon: Globe, title: "Global Perspective", desc: "We connect African students to world-class education opportunities globally." },
  { icon: Users, title: "Community", desc: "Building a supportive community of students, alumni, and education partners." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-accent-foreground/80 text-sm font-semibold uppercase tracking-wider font-sans">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">Empowering Africa's Future Through Education</h1>
            <p className="text-primary-foreground/80 text-lg">At Global Minds Education, we believe education is more than just earning a degree — it's about opening doors to global opportunities and shaping brighter futures.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Who We Are</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Your Trusted International Education Partner</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are an International Education consulting company committed to guiding students on their journey to world-class Universities. We go beyond admissions — we are your long-term partner.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From university placements to helping students secure scholarships and stay supported throughout their studies, Global Minds Education is there on every step of the way.
              </p>
              <div className="space-y-3">
                {["University placements at 200+ partner institutions", "Scholarship application support", "Comprehensive visa assistance", "Pre-departure and arrival support"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-accent/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent font-serif">1000+</div>
                <div className="text-sm text-muted-foreground mt-1">Students Placed</div>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary font-serif">200+</div>
                <div className="text-sm text-muted-foreground mt-1">Partner Universities</div>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary font-serif">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Countries</div>
              </div>
              <div className="bg-accent/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent font-serif">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Visa Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower African students with access to world-class education by providing comprehensive counselling, scholarship guidance, visa assistance, and continuous support throughout their academic journey.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading international education consultancy in Africa, transforming lives through education and creating a generation of globally competitive professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Our Values</span>
            <h2 className="text-3xl font-bold mt-2">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold mb-2 font-serif">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Let our expert team guide you to your dream university.</p>
          <Link to="/contact">
            <Button variant="hero" size="lg">Book Free Consultation</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
