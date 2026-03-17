import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const footerColumns = [
  {
    title: "Study Abroad",
    links: [
      { label: "Why Study Abroad", to: "/about" },
      { label: "How to Apply", to: "/services" },
      { label: "Visa Guidance", to: "/services" },
      { label: "Student Accommodation", to: "/services" },
      { label: "Pre-Departure Support", to: "/services" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Career Counselling", to: "/services" },
      { label: "University Admissions", to: "/services" },
      { label: "Visa Processing", to: "/services" },
      { label: "SOP & LOR Assistance", to: "/services" },
      { label: "Education Loans", to: "/services" },
    ],
  },
  {
    title: "Scholarships",
    links: [
      { label: "Merit-Based", to: "/scholarships" },
      { label: "Need-Based", to: "/scholarships" },
      { label: "Government Funded", to: "/scholarships" },
      { label: "University Grants", to: "/scholarships" },
      { label: "Find Scholarships", to: "/scholarships" },
    ],
  },
  {
    title: "Test Preparation",
    links: [
      { label: "IELTS Preparation", to: "/services" },
      { label: "TOEFL Coaching", to: "/services" },
      { label: "GRE / GMAT", to: "/services" },
      { label: "PTE Academic", to: "/services" },
      { label: "SAT Preparation", to: "/services" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Our Team", to: "/about" },
      { label: "Success Stories", to: "/success-stories" },
      { label: "Blog & News", to: "/blog" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
];

const regionCountries = [
  "India", "Bangladesh", "Nepal", "Sri Lanka", "Malaysia", "Singapore", "Thailand", "Nigeria",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main columns */}
      <div className="container py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-4 font-sans text-sm uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Country row */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-3 font-sans">Our Offices & Regions</p>
          <div className="flex flex-wrap gap-3">
            {regionCountries.map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/70 text-xs hover:bg-accent/20 hover:text-accent transition-colors cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Global Minds Education. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {[
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms of Use", to: "/terms" },
                { label: "Disclaimer", to: "/terms" },
              ].map((link) => (
                <Link key={link.label} to={link.to} className="text-xs text-primary-foreground/50 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex gap-2">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "https://www.youtube.com/channel/UCn2HSKpn6e4mbClSnqQQS8g" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.displayName}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
