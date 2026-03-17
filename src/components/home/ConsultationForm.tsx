import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarCheck, Phone, Mail, Globe } from "lucide-react";

const destinations = [
  "Canada", "United Kingdom", "Australia", "United States", "Germany", "Ireland", "India", "Other"
];

const ConsultationForm = () => {
  const { toast } = useToast();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast({ title: "Please agree to the privacy policy", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Consultation Booked!", description: "Our team will contact you within 24 hours." });
      (e.target as HTMLFormElement).reset();
      setAgreed(false);
    }, 1000);
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent font-sans">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Book Your FREE Consultation
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Take the first step towards your international education journey. Our expert counsellors will 
              guide you through university selection, application process, visa support, and scholarship opportunities.
            </p>

            <div className="space-y-4">
              {[
                { icon: CalendarCheck, text: "Personalized 1-on-1 counselling session" },
                { icon: Globe, text: "Expert advice on 15+ study destinations" },
                { icon: Mail, text: "Complete application & visa support" },
                { icon: Phone, text: "Dedicated counsellor assigned to you" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-accent" />
                  </div>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Talk to a Trusted Expert</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" placeholder="Enter your full name" required maxLength={100} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input id="mobile" name="mobile" type="tel" placeholder="+263 7X XXX XXXX" required maxLength={20} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email ID</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required maxLength={255} className="mt-1.5" />
              </div>
              <div>
                <Label>Preferred Destination</Label>
                <Select name="destination" required>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map((d) => (
                      <SelectItem key={d} value={d.toLowerCase()}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <Checkbox
                  id="privacy"
                  checked={agreed}
                  onCheckedChange={(v) => setAgreed(v === true)}
                />
                <Label htmlFor="privacy" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  I agree to the Privacy Policy and consent to being contacted by Global Minds Education regarding my enquiry.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity text-base py-6"
              >
                {loading ? "Submitting..." : "Book FREE Consultation"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
