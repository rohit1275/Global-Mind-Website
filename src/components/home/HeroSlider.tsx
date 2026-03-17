import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import heroGraduation from "@/assets/hero-graduation.jpg";
import heroLibrary from "@/assets/hero-library.jpg";

const slides = [
  {
    image: heroCampus,
    title: "Start Your Study Abroad Journey with Global Minds Education",
    subtitle: "Expert guidance for university admissions, scholarships, and visa support across 10+ countries worldwide.",
  },
  {
    image: heroGraduation,
    title: "Your Dream University Is Closer Than You Think",
    subtitle: "Join 1000+ students who achieved their global education dreams with our personalized counselling.",
  },
  {
    image: heroLibrary,
    title: "World-Class Education Awaits You",
    subtitle: "Access 200+ partner universities and unlock scholarship opportunities worth thousands.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[85vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground backdrop-blur-sm text-sm font-medium mb-6 animate-fade-up border border-accent/30">
              ✈️ Empowering Africa's Future, One Student at a Time
            </span>
            <h1
              key={current}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
            >
              {slides[current].title}
            </h1>
            <p
              key={`sub-${current}`}
              className="text-base md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up max-w-xl"
              style={{ animationDelay: "0.15s" }}
            >
              {slides[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-8">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/destinations">
                <Button variant="hero-outline" size="lg" className="text-base px-8">
                  Explore Universities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-accent" : "w-2 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
