import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { GraduationCap, BookOpen, DollarSign, FileCheck, Users, ArrowRight } from "lucide-react";

const destinationData: Record<string, {
  country: string; emoji: string; intro: string;
  universities: string[]; courses: string[]; fees: string; visa: string; studentLife: string;
}> = {
  canada: {
    country: "Canada", emoji: "🇨🇦",
    intro: "Canada is one of the most sought-after study destinations in the world, known for its high-quality education system, multicultural society, and excellent post-study work opportunities.",
    universities: ["University of Toronto", "University of British Columbia", "McGill University", "University of Waterloo", "University of Alberta"],
    courses: ["Computer Science", "Business Administration", "Engineering", "Health Sciences", "Environmental Studies"],
    fees: "Tuition fees range from CAD 20,000–40,000 per year for international students. Living costs average CAD 10,000–15,000 per year.",
    visa: "You'll need a Study Permit. Requirements include acceptance letter, proof of funds, and a valid passport. Processing typically takes 4–8 weeks.",
    studentLife: "Canada offers a safe, inclusive environment with diverse student communities, part-time work opportunities (up to 20hrs/week), and a 3-year post-graduation work permit.",
  },
  uk: {
    country: "United Kingdom", emoji: "🇬🇧",
    intro: "The UK is home to some of the world's most prestigious universities, offering internationally recognized qualifications and a rich cultural experience.",
    universities: ["University of Oxford", "University of Cambridge", "Imperial College London", "UCL", "University of Edinburgh"],
    courses: ["Business & Management", "Law", "Medicine", "Arts & Design", "Engineering"],
    fees: "Tuition fees range from £12,000–£35,000 per year. London living costs average £12,000–£15,000 per year; outside London £9,000–£12,000.",
    visa: "Student visa (Tier 4) requires CAS from university, proof of funds, and English proficiency. The 2-year Graduate Route allows post-study work.",
    studentLife: "The UK offers world-class cultural experiences, diverse student communities, part-time work (up to 20hrs/week), and easy access to travel across Europe.",
  },
  australia: {
    country: "Australia", emoji: "🇦🇺",
    intro: "Australia is a top study destination offering excellent academic standards, strong research output, and a high quality of life.",
    universities: ["University of Melbourne", "University of Sydney", "Australian National University", "UNSW Sydney", "Monash University"],
    courses: ["Engineering", "IT & Computer Science", "Business", "Health Sciences", "Environmental Science"],
    fees: "Tuition fees range from AUD 20,000–45,000 per year. Living costs average AUD 21,000 per year.",
    visa: "Student visa (subclass 500) requires CoE, health insurance (OSHC), and proof of funds. Post-study work visa available for up to 6 years.",
    studentLife: "Australia offers a relaxed lifestyle, beautiful beaches, part-time work (up to 48hrs/fortnight), and strong support for international students.",
  },
  usa: {
    country: "United States", emoji: "🇺🇸",
    intro: "The USA has the world's largest number of international students, with diverse institutions ranging from Ivy League universities to innovative tech hubs.",
    universities: ["MIT", "Stanford University", "Harvard University", "Caltech", "University of Michigan"],
    courses: ["Computer Science & IT", "Business & MBA", "Engineering", "Biomedical Sciences", "Arts & Humanities"],
    fees: "Tuition fees range from USD 20,000–60,000 per year. Living costs vary from USD 10,000–20,000 depending on location.",
    visa: "F-1 student visa requires I-20 form, proof of funds, and SEVIS fee payment. OPT allows 12 months (36 for STEM) of post-study work.",
    studentLife: "The USA offers unmatched campus life, research opportunities, diverse communities, and on-campus employment (up to 20hrs/week).",
  },
  europe: {
    country: "Europe", emoji: "🇪🇺",
    intro: "Europe offers diverse study options across many countries, with several nations offering free or low-cost tuition even for international students.",
    universities: ["TU Munich (Germany)", "Sorbonne University (France)", "Delft University (Netherlands)", "KTH Stockholm (Sweden)", "ETH Zurich (Switzerland)"],
    courses: ["Engineering", "Business", "Arts & Design", "Social Sciences", "Natural Sciences"],
    fees: "Many European countries offer free or low tuition (€0–€3,000/year). Living costs average €8,000–€15,000 per year depending on the country.",
    visa: "Requirements vary by country. Generally need acceptance letter, proof of funds, and health insurance. Schengen visa allows travel across 27 countries.",
    studentLife: "Europe offers rich cultural experiences, multilingual environments, and the opportunity to travel across borders easily with a Schengen visa.",
  },
  india: {
    country: "India", emoji: "🇮🇳",
    intro: "India offers world-class education at remarkably affordable costs, with globally accredited degrees in Engineering, Medicine, Business, IT, and more.",
    universities: ["IIT Delhi", "IIT Bombay", "University of Delhi", "AIIMS", "IIM Ahmedabad"],
    courses: ["Engineering & Technology", "Medicine (MBBS)", "Business Administration", "IT & Computer Science", "Arts & Sciences"],
    fees: "Tuition fees range from USD 2,000–10,000 per year. Living costs average USD 3,000–5,000 per year — one of the most affordable globally.",
    visa: "Student visa requires admission letter, proof of funds, and valid passport. Processing takes 2–4 weeks. India offers a safe, welcoming environment for African students.",
    studentLife: "India offers vibrant campus life, incredible cultural diversity, English-medium instruction, and an affordable lifestyle. Many universities have dedicated international student support.",
  },
};

const sections = [
  { key: "universities" as const, icon: GraduationCap, title: "Top Universities" },
  { key: "courses" as const, icon: BookOpen, title: "Popular Courses" },
  { key: "fees" as const, icon: DollarSign, title: "Tuition & Living Costs" },
  { key: "visa" as const, icon: FileCheck, title: "Visa Process" },
  { key: "studentLife" as const, icon: Users, title: "Student Life" },
];

const DestinationDetail = () => {
  const { slug } = useParams();
  const data = destinationData[slug || ""];

  if (!data) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
          <Link to="/destinations"><Button>View All Destinations</Button></Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-5xl mb-4 block">{data.emoji}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">Study in {data.country}</h1>
            <p className="text-primary-foreground/80 text-lg">{data.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl space-y-16">
          {sections.map((sec) => (
            <div key={sec.key} className="scroll-mt-24" id={sec.key}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <sec.icon className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">{sec.title}</h2>
              </div>
              {sec.key === "universities" || sec.key === "courses" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(data[sec.key] as string[]).map((item: string) => (
                    <div key={item} className="flex items-center gap-2 p-3 bg-muted rounded-lg text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground leading-relaxed">{data[sec.key]}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Want to Study in {data.country}?</h2>
          <p className="text-primary-foreground/80 mb-8">Get expert guidance from our team today.</p>
          <Link to="/contact">
            <Button variant="hero" size="lg">Book Free Consultation</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationDetail;
