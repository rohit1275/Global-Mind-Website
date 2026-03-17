import { Quote } from "lucide-react";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const testimonials = [
  {
    name: "Monica Sibanda",
    country: "India",
    flag: "🇮🇳",
    image: student1,
    text: "The team helped me in processing my admission at one of the top universities in North India and securing a solid 50% scholarship on my tuition fees. It is indeed a pleasure to thank the team for their comprehensive support.",
  },
  {
    name: "Antony Topi",
    country: "India",
    flag: "🇮🇳",
    image: student2,
    text: "My experience has been nothing short of transformative! The comprehensive support from the Global Minds team has made me feel valued and empowered. Thank you, Global Minds Education for being such an incredible support system!",
  },
  {
    name: "Grace Moyo",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: student3,
    text: "Global Minds Education guided me through every step — from choosing the right university to getting my visa approved. I couldn't have done it without their amazing team!",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Student Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Hear From Our Students
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Thousands of students have trusted Global Minds Education on their study abroad journey. Their success stories inspire us every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-8 text-primary-foreground overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, hsl(260 60% 45%) 0%, hsl(280 50% 35%) 50%, hsl(260 70% 25%) 100%)",
              }}
            >
              {/* Quote icon */}
              <Quote className="h-10 w-10 mb-6 opacity-40" />

              {/* Testimonial text */}
              <p className="text-sm md:text-base leading-relaxed opacity-90 mb-8 min-h-[120px]">
                "{t.text}"
              </p>

              {/* Student info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/15">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs opacity-70 flex items-center gap-1.5 mt-0.5">
                    <span>{t.flag}</span>
                    <span>{t.country}</span>
                  </div>
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
