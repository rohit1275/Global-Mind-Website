import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, MapPin, Calendar, MessageCircle, Globe, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const megaMenus: Record<string, { title: string; links: { label: string; to: string; desc?: string }[] }[]> = {
  "Study Abroad": [
    {
      title: "Why Study Abroad",
      links: [
        { label: "Why Choose Us", to: "/about", desc: "Expert guidance for your journey" },
        { label: "How It Works", to: "/services", desc: "Our step-by-step process" },
        { label: "Success Stories", to: "/success-stories", desc: "Hear from our students" },
      ],
    },
    {
      title: "Get Started",
      links: [
        { label: "Book Consultation", to: "/contact", desc: "Free expert advice" },
        { label: "Apply Now", to: "/contact", desc: "Start your application" },
      ],
    },
  ],
  Destinations: [
    {
      title: "Popular Destinations",
      links: [
        { label: "🇨🇦 Study in Canada", to: "/destinations/canada" },
        { label: "🇬🇧 Study in UK", to: "/destinations/uk" },
        { label: "🇦🇺 Study in Australia", to: "/destinations/australia" },
        { label: "🇺🇸 Study in USA", to: "/destinations/usa" },
        { label: "🇪🇺 Study in Europe", to: "/destinations/europe" },
        { label: "🇮🇳 Study in India", to: "/destinations/india" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "All Destinations", to: "/destinations", desc: "Compare countries" },
        { label: "Country Guides", to: "/blog", desc: "In-depth guides" },
      ],
    },
  ],
  Courses: [
    {
      title: "By Field",
      links: [
        { label: "Business & Management", to: "/destinations" },
        { label: "Engineering & Technology", to: "/destinations" },
        { label: "Health & Medicine", to: "/destinations" },
        { label: "Arts & Humanities", to: "/destinations" },
      ],
    },
    {
      title: "By Level",
      links: [
        { label: "Undergraduate", to: "/destinations" },
        { label: "Postgraduate", to: "/destinations" },
        { label: "PhD & Research", to: "/destinations" },
      ],
    },
  ],
  Scholarships: [
    {
      title: "Scholarships",
      links: [
        { label: "Available Scholarships", to: "/scholarships", desc: "Browse opportunities" },
        { label: "Eligibility Checker", to: "/scholarships", desc: "See if you qualify" },
        { label: "Application Tips", to: "/blog", desc: "Maximise your chances" },
      ],
    },
  ],
  "Student Services": [
    {
      title: "Our Services",
      links: [
        { label: "Education Counselling", to: "/services" },
        { label: "University Admissions", to: "/services" },
        { label: "Visa Assistance", to: "/services" },
        { label: "Accommodation", to: "/services" },
        { label: "Test Preparation", to: "/services" },
      ],
    },
  ],
};

const mainNavItems = ["Study Abroad", "Destinations", "Courses", "Scholarships", "Student Services"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
    setMobileSubmenu(null);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      {/* Top Utility Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between h-10 text-xs">
          <div className="hidden md:flex items-center gap-5">
            <Link to="/services" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Headphones className="h-3.5 w-3.5" />
              Advice
            </Link>
            <Link to="/blog" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Calendar className="h-3.5 w-3.5" />
              Events
            </Link>
            <Link to="/contact" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <MapPin className="h-3.5 w-3.5" />
              Find Us
            </Link>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+263771234567" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+263 77 123 4567</span>
            </a>
            <a
              href="https://wa.me/263771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <div className="flex items-center gap-1 border-l border-primary-foreground/20 pl-4">
              <Globe className="h-3.5 w-3.5" />
              <select className="bg-transparent text-primary-foreground text-xs outline-none cursor-pointer">
                <option value="ZW" className="text-foreground">🇿🇼 Zimbabwe</option>
                <option value="ZA" className="text-foreground">🇿🇦 South Africa</option>
                <option value="KE" className="text-foreground">🇰🇪 Kenya</option>
                <option value="NG" className="text-foreground">🇳🇬 Nigeria</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-24 lg:h-[104px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Global Minds Education" className="h-20 lg:h-24 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 h-full">
            {mainNavItems.map((item) => (
              <div
                key={item}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeMenu === item ? "text-accent" : "text-foreground/80 hover:text-accent"
                    }`}
                >
                  {item}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === item ? "rotate-180" : ""}`} />
                </button>

                {/* Mega dropdown */}
                {activeMenu === item && megaMenus[item] && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-2xl border border-border p-6 min-w-[400px] grid grid-cols-2 gap-6">
                      {megaMenus[item].map((col) => (
                        <div key={col.title}>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            {col.title}
                          </p>
                          <div className="space-y-1">
                            {col.links.map((link) => (
                              <Link
                                key={link.to + link.label}
                                to={link.to}
                                className="block px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors group"
                              >
                                <span className="font-medium">{link.label}</span>
                                {link.desc && (
                                  <span className="block text-xs text-muted-foreground group-hover:text-accent/70 mt-0.5">
                                    {link.desc}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/blog"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-md"
            >
              Blog
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 font-semibold shadow-md px-6">
                Book Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border shadow-xl animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container py-4 flex flex-col gap-1">
            {mainNavItems.map((item) => (
              <div key={item}>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === item ? null : item)}
                  className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-foreground/80 rounded-md hover:bg-muted transition-colors"
                >
                  {item}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === item ? "rotate-180" : ""}`} />
                </button>
                {mobileSubmenu === item && megaMenus[item] && (
                  <div className="ml-4 mb-2 space-y-1 animate-fade-in">
                    {megaMenus[item].flatMap((col) =>
                      col.links.map((link) => (
                        <Link
                          key={link.to + link.label}
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-accent rounded-md"
                        >
                          {link.label}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="px-3 py-3 text-sm font-medium text-foreground/80"
            >
              Blog
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2">
              <Button className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold">
                Book Free Consultation
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
