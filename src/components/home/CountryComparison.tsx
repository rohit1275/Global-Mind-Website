import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, GraduationCap, Home, Award, ArrowRight, TrendingUp, Wallet } from "lucide-react";

const countries = [
  {
    name: "Canada", slug: "canada", emoji: "🇨🇦",
    budget: "$15,000 – $35,000/yr",
    living: "$10,000 – $15,000/yr",
    topUnis: ["University of Toronto", "UBC", "McGill University"],
    scholarships: "Vanier CGS, Lester B. Pearson",
  },
  {
    name: "United Kingdom", slug: "uk", emoji: "🇬🇧",
    budget: "£12,000 – £38,000/yr",
    living: "£9,000 – £12,000/yr",
    topUnis: ["University of Oxford", "Imperial College", "UCL"],
    scholarships: "Chevening, Commonwealth, GREAT",
  },
  {
    name: "Australia", slug: "australia", emoji: "🇦🇺",
    budget: "A$20,000 – A$45,000/yr",
    living: "A$18,000 – A$25,000/yr",
    topUnis: ["University of Melbourne", "ANU", "University of Sydney"],
    scholarships: "Australia Awards, Destination Australia",
  },
  {
    name: "United States", slug: "usa", emoji: "🇺🇸",
    budget: "$20,000 – $55,000/yr",
    living: "$10,000 – $18,000/yr",
    topUnis: ["MIT", "Stanford", "Harvard"],
    scholarships: "Fulbright, Hubert Humphrey",
  },
  {
    name: "Germany", slug: "europe", emoji: "🇩🇪",
    budget: "€0 – €20,000/yr",
    living: "€8,000 – €12,000/yr",
    topUnis: ["TU Munich", "LMU Munich", "Heidelberg"],
    scholarships: "DAAD, Erasmus+, Deutschland",
  },
  {
    name: "Ireland", slug: "europe", emoji: "🇮🇪",
    budget: "€10,000 – €25,000/yr",
    living: "€7,000 – €12,000/yr",
    topUnis: ["Trinity College Dublin", "UCD", "NUI Galway"],
    scholarships: "Government of Ireland, Walsh Fellowship",
  },
  {
    name: "India", slug: "india", emoji: "🇮🇳",
    budget: "$2,000 – $10,000/yr",
    living: "$3,000 – $5,000/yr",
    topUnis: ["IIT Delhi", "IISc Bangalore", "JNU"],
    scholarships: "ICCR, Study in India",
  },
];

const CountryComparison = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent font-sans">Compare</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Compare Study Destinations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore tuition fees, living costs, top universities, and scholarships across popular study destinations to find your perfect match.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {countries.map((c) => (
            <div key={c.name} className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl">{c.emoji}</span>
                <h3 className="text-xl font-bold">{c.name}</h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Tuition Range</p>
                    <p className="text-muted-foreground">{c.budget}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Home className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Cost of Living</p>
                    <p className="text-muted-foreground">{c.living}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <GraduationCap className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Top Universities</p>
                    <p className="text-muted-foreground">{c.topUnis.join(", ")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Scholarships</p>
                    <p className="text-muted-foreground">{c.scholarships}</p>
                  </div>
                </div>
              </div>

              <Link to={`/destinations/${c.slug}`} className="mt-5 block">
                <Button variant="outline" size="sm" className="w-full group-hover:border-accent group-hover:text-accent">
                  Explore <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Suggestion Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20 p-8">
            <div className="flex items-center gap-3 mb-3">
              <Wallet className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-bold">Best for Low Budget Students</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Germany and India offer the most affordable options with free or low-cost tuition at top-ranked universities.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Germany", "India", "Ireland"].map((c) => (
                <span key={c} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">{c}</span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-8">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold">Best for Career Opportunities</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Canada, USA, and Australia offer the strongest post-study work visas and career pathways for international graduates.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Canada", "USA", "Australia"].map((c) => (
                <span key={c} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryComparison;
