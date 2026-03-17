import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

const posts = [
  {
    title: "How to Study Abroad: A Complete Guide for African Students",
    excerpt: "Everything you need to know about studying abroad — from choosing a country to getting your visa approved.",
    date: "March 2026",
    category: "Guide",
    slug: "#",
  },
  {
    title: "Student Visa Process: Step-by-Step Walkthrough",
    excerpt: "Navigate the visa application process with confidence using our detailed step-by-step guide.",
    date: "February 2026",
    category: "Visa",
    slug: "#",
  },
  {
    title: "Cost of Studying in Canada for International Students",
    excerpt: "A breakdown of tuition fees, living costs, and scholarship opportunities in Canada.",
    date: "February 2026",
    category: "Finance",
    slug: "#",
  },
  {
    title: "Best Countries for International Students in 2026",
    excerpt: "Compare the top study destinations based on education quality, cost, work opportunities, and more.",
    date: "January 2026",
    category: "Guide",
    slug: "#",
  },
  {
    title: "Why Study in India? Top Reasons for African Students",
    excerpt: "Discover why India is becoming a top choice for African students seeking quality education abroad.",
    date: "January 2026",
    category: "Destination",
    slug: "#",
  },
  {
    title: "IELTS vs TOEFL: Which Test Should You Take?",
    excerpt: "A detailed comparison to help you decide which English proficiency test is right for you.",
    date: "December 2025",
    category: "Test Prep",
    slug: "#",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-accent-foreground/80 text-sm font-semibold uppercase tracking-wider font-sans">Blog & Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">Study Abroad Resources</h1>
            <p className="text-primary-foreground/80 text-lg">Expert insights, guides, and tips to help you navigate your study abroad journey.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.title} className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">{post.category}</span>
                  <h2 className="text-lg font-bold mt-3 mb-2 font-serif group-hover:text-accent transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
