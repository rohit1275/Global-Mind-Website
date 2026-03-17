import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import destCanada from "@/assets/dest-canada.jpg";
import destUk from "@/assets/dest-uk.jpg";
import destAustralia from "@/assets/dest-australia.jpg";
import destUsa from "@/assets/dest-usa.jpg";
import destEurope from "@/assets/dest-europe.jpg";
import destIndia from "@/assets/dest-india.jpg";

const destinations = [
  { country: "Canada", slug: "canada", image: destCanada, desc: "Affordable tuition, post-study work permits, and a welcoming multicultural environment.", unis: "96+" },
  { country: "United Kingdom", slug: "uk", image: destUk, desc: "World-renowned universities with shorter degree programs and rich cultural heritage.", unis: "130+" },
  { country: "Australia", slug: "australia", image: destAustralia, desc: "High quality of life, excellent research facilities, and post-study work opportunities.", unis: "43+" },
  { country: "United States", slug: "usa", image: destUsa, desc: "Home to the world's top-ranked universities with diverse program offerings.", unis: "200+" },
  { country: "Europe", slug: "europe", image: destEurope, desc: "Affordable or free tuition in many countries with rich cultural experiences.", unis: "150+" },
  { country: "India", slug: "india", image: destIndia, desc: "Rapidly growing education hub with affordable programs and diverse specializations.", unis: "50+" },
];

const DestinationCards = () => {
  return (
    <section className="py-20 section-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Study Destinations</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Explore Your Dream Destination</h2>
          <p className="text-muted-foreground">Choose from top study destinations worldwide, each offering world-class education and exciting career opportunities.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              to={`/destinations/${dest.slug}`}
              className="group relative rounded-2xl overflow-hidden h-[320px] block"
            >
              <img
                src={dest.image}
                alt={`Study in ${dest.country}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-xs text-accent font-semibold font-sans mb-1">{dest.unis} Universities</div>
                <h3 className="text-xl font-bold text-primary-foreground font-serif mb-2">Study in {dest.country}</h3>
                <p className="text-sm text-primary-foreground/70 mb-3 line-clamp-2">{dest.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationCards;
