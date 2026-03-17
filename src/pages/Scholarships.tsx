import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, CheckCircle, ArrowRight, BookOpen, FileText, Users, Star, Globe } from "lucide-react";

const scholarshipTypes = [
  {
    icon: Award,
    name: "Merit-Based Scholarships",
    desc: "Awarded to students with outstanding academic achievements, leadership qualities, or extracurricular accomplishments.",
    coverage: "Up to 100% tuition",
  },
  {
    icon: Users,
    name: "Need-Based Financial Aid",
    desc: "Designed for students who demonstrate financial need. Covers tuition, accommodation, and living costs.",
    coverage: "Partial to full funding",
  },
  {
    icon: Globe,
    name: "Government Scholarships",
    desc: "Funded by governments to promote international education. Often covers tuition, travel, and monthly stipends.",
    coverage: "Full tuition + stipend",
  },
  {
    icon: BookOpen,
    name: "University-Specific Scholarships",
    desc: "Offered by individual universities to attract top international talent. Requirements and amounts vary.",
    coverage: "25–75% tuition",
  },
  {
    icon: Star,
    name: "Country-Specific Scholarships",
    desc: "Available for students from specific regions or countries, encouraging diversity and cross-cultural exchange.",
    coverage: "Varies by program",
  },
  {
    icon: FileText,
    name: "Research & Fellowship Grants",
    desc: "For postgraduate and doctoral students contributing to research in science, technology, humanities, and more.",
    coverage: "Full funding + research costs",
  },
];

const eligibility = [
  "Strong academic record (GPA typically above 3.0 or equivalent)",
  "Valid English language proficiency score (IELTS 6.0+ / TOEFL 80+)",
  "Completed application for admission at the target university",
  "Statement of Purpose (SOP) or personal essay",
  "Letters of recommendation from academic or professional referees",
  "Proof of extracurricular achievements or community involvement",
  "Financial documents (for need-based scholarships)",
];

const applicationSteps = [
  { step: "1", title: "Research & Shortlist", desc: "Identify scholarships matching your profile, destination, and field of study." },
  { step: "2", title: "Prepare Documents", desc: "Gather transcripts, test scores, SOP, recommendations, and financial proof." },
  { step: "3", title: "Apply Early", desc: "Submit applications well before deadlines. Many scholarships close 6–12 months in advance." },
  { step: "4", title: "Interview Prep", desc: "Some scholarships require interviews. Our team provides mock sessions and coaching." },
  { step: "5", title: "Acceptance & Enrollment", desc: "Accept your scholarship offer, confirm enrollment, and prepare for departure." },
];

const featured = [
  { name: "Chevening Scholarship (UK)", value: "Full funding", country: "🇬🇧" },
  { name: "Australia Awards", value: "Full tuition + living", country: "🇦🇺" },
  { name: "Vanier Canada Graduate", value: "$50,000/yr", country: "🇨🇦" },
  { name: "Fulbright Program (USA)", value: "Full funding", country: "🇺🇸" },
  { name: "DAAD Scholarship (Germany)", value: "Full tuition + stipend", country: "🇩🇪" },
  { name: "Erasmus Mundus (Europe)", value: "Full funding", country: "🇪🇺" },
  { name: "Commonwealth Scholarship", value: "Full funding", country: "🇬🇧" },
  { name: "Lester B. Pearson (Canada)", value: "Full tuition + living", country: "🇨🇦" },
];

const Scholarships = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-accent-foreground/80 text-sm font-semibold uppercase tracking-wider font-sans">Scholarships</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">Fund Your Education Abroad</h1>
            <p className="text-primary-foreground/80 text-lg">
              Discover hundreds of scholarships and financial aid opportunities to make your international education dreams a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Scholarships */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent font-sans">Types</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Types of Scholarships</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We help you identify and apply for the right scholarship based on your academic profile, destination, and financial situation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarshipTypes.map((s) => (
              <div key={s.name} className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">{s.coverage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 section-light">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent font-sans">Requirements</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Eligibility Requirements</h2>
            <p className="text-muted-foreground">While specific criteria vary by scholarship, most require the following:</p>
          </div>
          <div className="space-y-4">
            {eligibility.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-xl border border-border p-4 hover:shadow-sm transition-shadow">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent font-sans">Process</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Application Process</h2>
            <p className="text-muted-foreground">Follow these steps to maximize your scholarship chances with our guidance.</p>
          </div>
          <div className="space-y-6">
            {applicationSteps.map((s) => (
              <div key={s.step} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center shrink-0 font-bold text-sm">
                  {s.step}
                </div>
                <div className="flex-1 bg-card rounded-xl border border-border p-5">
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="py-20 section-light">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent font-sans">Featured</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Featured Scholarships</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Top scholarships our students have successfully secured with our guidance.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((f) => (
              <div key={f.name} className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow text-center">
                <span className="text-3xl mb-3 block">{f.country}</span>
                <h3 className="font-bold text-sm mb-1">{f.name}</h3>
                <span className="text-xs text-accent font-semibold">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need Help Finding Scholarships?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Our team has helped students secure scholarships worth millions. Let us help you too.</p>
          <Link to="/contact">
            <Button variant="hero" size="lg">Get Scholarship Guidance <ArrowRight className="h-4 w-4 ml-2" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarships;
