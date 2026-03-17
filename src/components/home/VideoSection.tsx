import { Play, GraduationCap, Globe, Users } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 section-light">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent font-sans">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Global Minds Education – Where Dreams Take Flight
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We empower students across Africa to achieve their international education dreams through expert guidance, 
            personalized support, and a commitment to transforming futures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Embed */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-foreground/5">
            <iframe
              src="https://www.youtube.com/embed/ZfZUnuauiiI"
              title="Global Minds Education"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Mission & Vision */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission & Vision</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Global Minds Education, we believe every student deserves access to world-class education regardless of 
              their background. Our experienced consultants work tirelessly to match students with the right universities, 
              courses, and scholarships — guiding them through every step from application to arrival.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: GraduationCap, label: "Expert Counselling", value: "10+ Years" },
                { icon: Globe, label: "Countries Covered", value: "15+" },
                { icon: Users, label: "Students Placed", value: "5,000+" },
              ].map((item) => (
                <div key={item.label} className="bg-card rounded-xl border border-border p-4 text-center hover:shadow-md transition-shadow">
                  <item.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-xl font-bold">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
