import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, MapPin, Quote } from "lucide-react";

const stories = [
  {
    name: "Monica Sibanda",
    country: "India",
    uni: "Top University, North India",
    story: "I would like to appreciate the warm welcome that the Global Minds team offered me from the very day I introduced myself to the board. The team helped me in processing my admission at one of the top universities in North India and securing a solid 50% scholarship on my tuition fees. It is indeed a pleasure to thank the team for their comprehensive support.",
  },
  {
    name: "Antony Topi",
    country: "India",
    uni: "University in India",
    story: "I'm grateful for the opportunity to be part of the Global Minds Community. My experience has been nothing short of transformative! The comprehensive support from the Global Minds team has made me feel valued and empowered. I've learned not only about my academic pursuits but also about building resilience and confidence. I appreciate how the community fosters a sense of belonging and encourages us to thrive. Thank you, Global Minds Education for being such an incredible support system!",
  },
  {
    name: "Grace Moyo",
    country: "India",
    uni: "Engineering University",
    story: "Global Minds Education made my dream of studying abroad a reality. From choosing the right university to getting my visa approved, they were with me every step of the way. I'm now pursuing my engineering degree and loving every moment of it!",
  },
  {
    name: "Tafadzwa Nyoni",
    country: "India",
    uni: "Medical University",
    story: "I was unsure about the process of studying medicine abroad, but the Global Minds team made everything so clear and simple. They helped me secure admission and a generous scholarship. I couldn't be happier with my decision!",
  },
];

const SuccessStories = () => {
  return (
    <Layout>
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-accent-foreground/80 text-sm font-semibold uppercase tracking-wider font-sans">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">Our Students, Our Pride</h1>
            <p className="text-primary-foreground/80 text-lg">Read inspiring stories from students who achieved their dream of studying abroad with Global Minds Education.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((s, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-8 relative">
                <Quote className="h-8 w-8 text-accent/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm">"{s.story}"</p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold font-sans">{s.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3" /> {s.uni} · {s.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Write Your Own Success Story</h2>
          <p className="text-primary-foreground/80 mb-8">Join hundreds of students who trusted Global Minds Education.</p>
          <Link to="/contact">
            <Button variant="hero" size="lg">Start Your Journey</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
