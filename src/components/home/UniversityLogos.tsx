import uniToronto from "@/assets/uni-toronto.png";
import uniMelbourne from "@/assets/uni-melbourne.png";
import uniSydney from "@/assets/uni-sydney.png";
import uniCoventry from "@/assets/uni-coventry.png";
import uniManchester from "@/assets/uni-manchester.png";
import uniMonash from "@/assets/uni-monash.png";
import uniQueensland from "@/assets/uni-queensland.png";
import uniUbc from "@/assets/uni-ubc.png";

const universities = [
  { name: "University of Toronto", logo: uniToronto },
  { name: "University of Melbourne", logo: uniMelbourne },
  { name: "University of Sydney", logo: uniSydney },
  { name: "Coventry University", logo: uniCoventry },
  { name: "University of Manchester", logo: uniManchester },
  { name: "Monash University", logo: uniMonash },
  { name: "University of Queensland", logo: uniQueensland },
  { name: "University of British Columbia", logo: uniUbc },
];

const UniversityLogos = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Our Partner Universities
        </h2>
        <p className="text-muted-foreground text-center mt-2">
          Partnered with 200+ world-class institutions
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-x gap-16 items-center">
          {[...universities, ...universities].map((uni, i) => (
            <div
              key={i}
              className="flex-shrink-0 group cursor-pointer"
            >
              <img
                src={uni.logo}
                alt={uni.name}
                className="h-16 md:h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityLogos;
