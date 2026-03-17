import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    country: "Canada",
    emoji: "🇨🇦",
    slug: "canada",
    desc: "Canada is one of the most popular study destinations offering high-quality education, post-study work opportunities, and a welcoming multicultural environment.",
    highlights: ["3-year post-study work permit", "Affordable tuition fees", "Pathway to permanent residency"],
  },
  {
    country: "United Kingdom",
    emoji: "🇬🇧",
    slug: "uk",
    desc: "The UK is home to some of the world's oldest and most prestigious universities, offering internationally recognized degrees.",
    highlights: ["1-year master's programs", "2-year Graduate Route visa", "World-renowned universities"],
  },
  {
    country: "Australia",
    emoji: "🇦🇺",
    slug: "australia",
    desc: "Australia offers world-class education with excellent research opportunities and a high standard of living.",
    highlights: ["Post-study work visa up to 6 years", "Strong economy & job market", "Diverse & inclusive society"],
  },
  {
    country: "United States",
    emoji: "🇺🇸",
    slug: "usa",
    desc: "The USA leads in innovation and research, with the widest variety of programs and institutions globally.",
    highlights: ["OPT work authorization", "World's top-ranked universities", "Flexible education system"],
  },
  {
    country: "Europe",
    emoji: "🇪🇺",
    slug: "europe",
    desc: "European countries offer affordable or tuition-free education with rich cultural experiences across multiple countries.",
    highlights: ["Low or no tuition in many countries", "Schengen travel opportunities", "Multilingual environment"],
  },
  {
    country: "India",
    emoji: "🇮🇳",
    slug: "india",
    desc: "India provides world-class education at affordable costs, with globally recognized degrees and a rich cultural experience.",
    highlights: ["Very affordable education & living", "English-medium instruction", "Diverse & welcoming environment"],
  },
];

const Destinations = () => {
  return (
    <Layout>
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-accent-foreground/80 text-sm font-semibold uppercase tracking-wider font-sans">Study Destinations</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">Find Your Perfect Study Destination</h1>
            <p className="text-primary-foreground/80 text-lg">Explore top study destinations and discover the one that's right for your academic and career goals.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest) => (
              <div key={dest.slug} className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-8">
                  <div className="text-5xl mb-4">{dest.emoji}</div>
                  <h2 className="text-2xl font-bold mb-2">Study in {dest.country}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{dest.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {dest.highlights.map((h) => (
                      <li key={h} className="text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/destinations/${dest.slug}`}>
                    <Button variant="outline" size="sm" className="group-hover:border-accent group-hover:text-accent">
                      Learn More <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Not Sure Which Country Is Right for You?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Our expert counsellors will help you choose the best destination based on your goals and budget.</p>
          <Link to="/contact">
            <Button variant="hero" size="lg">Get Free Guidance</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
