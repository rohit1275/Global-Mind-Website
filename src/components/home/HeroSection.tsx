import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, GraduationCap } from "lucide-react";
import heroStudent from "@/assets/hero-student-portrait.png";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full translate-y-1/2" />
      <div className="absolute top-1/3 right-1/3 w-[200px] h-[200px] border-2 border-accent/10 rounded-full" />
      <div className="absolute top-20 right-[40%] w-4 h-4 bg-accent/20 rounded-full" />
      <div className="absolute bottom-32 left-[10%] w-6 h-6 bg-primary/10 rounded-full" />

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-up">
              <Star className="h-4 w-4 fill-accent" />
              Trusted by 1000+ Students Across Africa
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.15] mb-6 animate-fade-up">
              Study Abroad With a{" "}
              <span className="text-gradient">Clear Career Outcome</span>{" "}
              in Mind
            </h1>

            <p
              className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              From personalized course recommendations and scholarship guidance to
              university applications and visa support — we help you navigate your
              entire study abroad journey with confidence.
            </p>

            {/* Quick stats */}
            <div
              className="flex flex-wrap gap-6 mb-10 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">1000+</p>
                  <p className="text-xs text-muted-foreground">Students Placed</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">200+</p>
                  <p className="text-xs text-muted-foreground">Partner Universities</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div
              className="bg-card rounded-2xl border border-border p-6 shadow-lg max-w-md animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Ready to get started?
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4 font-sans">
                Talk to a Trusted Expert
              </h3>
              <Link to="/contact">
                <Button
                  className="w-full h-12 text-base font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
                  size="lg"
                >
                  Book FREE Consultation
                  <ArrowRight className="h-5 w-5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.25s" }}>
            {/* Abstract background shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gradient-to-br from-accent/15 via-primary/8 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border-2 border-dashed border-accent/15 animate-[spin_30s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-primary/10" />

            {/* Abstract curved lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" viewBox="0 0 500 500">
              <path d="M100,250 Q250,50 400,250" fill="none" stroke="hsl(174 62% 42%)" strokeWidth="2" />
              <path d="M80,300 Q250,100 420,300" fill="none" stroke="hsl(215 80% 22%)" strokeWidth="1.5" />
              <path d="M120,350 Q250,150 380,350" fill="none" stroke="hsl(174 62% 42%)" strokeWidth="1" />
              <circle cx="400" cy="120" r="40" fill="none" stroke="hsl(174 62% 42%)" strokeWidth="1" />
              <circle cx="100" cy="380" r="25" fill="none" stroke="hsl(215 80% 22%)" strokeWidth="1" />
            </svg>

            {/* Floating dots */}
            <div className="absolute top-[15%] right-[10%] w-3 h-3 bg-accent/30 rounded-full animate-pulse" />
            <div className="absolute bottom-[25%] left-[8%] w-2 h-2 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-[40%] right-[5%] w-4 h-4 bg-accent/15 rounded-full" />

            <img
              src={heroStudent}
              alt="Happy international student ready to study abroad"
              className="relative z-10 w-[340px] sm:w-[400px] lg:w-[480px] h-auto object-contain drop-shadow-2xl"
            />

            {/* Floating badges */}
            <div className="absolute top-12 left-4 lg:left-0 z-20 bg-card rounded-xl shadow-xl border border-border px-4 py-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-xs text-muted-foreground">Countries</p>
              <p className="text-lg font-bold text-foreground">10+</p>
            </div>
            <div className="absolute bottom-16 right-4 lg:right-0 z-20 bg-card rounded-xl shadow-xl border border-border px-4 py-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-xs text-muted-foreground">Success Rate</p>
              <p className="text-lg font-bold text-accent">98%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
