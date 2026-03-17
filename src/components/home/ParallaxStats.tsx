import { useEffect, useRef, useState } from "react";
import heroStudents from "@/assets/hero-students.jpg";

const stats = [
  { number: 1000, suffix: "+", label: "Students Placed" },
  { number: 200, suffix: "+", label: "Partner Universities" },
  { number: 10, suffix: "+", label: "Countries" },
  { number: 98, suffix: "%", label: "Visa Success Rate" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary-foreground font-serif">
      {count}{suffix}
    </div>
  );
};

const ParallaxStats = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${heroStudents})` }}
      />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-4">
          Helping Students Achieve Global Education Dreams
        </h2>
        <p className="text-primary-foreground/70 text-center mb-14 max-w-xl mx-auto">
          Trusted by thousands of students across Africa to guide their international education journey.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter target={stat.number} suffix={stat.suffix} />
              <div className="text-primary-foreground/60 text-sm mt-2 font-sans">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxStats;
