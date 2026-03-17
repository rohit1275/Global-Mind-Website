import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-accent-foreground/80 text-sm font-semibold uppercase tracking-wider font-sans">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">Get in Touch</h1>
            <p className="text-primary-foreground/80 text-lg">Have questions about studying abroad? We're here to help. Reach out to us and our team will respond within 24 hours.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block font-sans">Full Name *</label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block font-sans">Email *</label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block font-sans">Phone</label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+263 77 123 4567"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block font-sans">Subject *</label>
                    <Input
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g., Study in Canada"
                      maxLength={200}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block font-sans">Message *</label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your study abroad plans..."
                    rows={5}
                    maxLength={2000}
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm font-sans">Office Address</div>
                    <div className="text-sm text-muted-foreground">Harare, Zimbabwe</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm font-sans">Phone</div>
                    <div className="text-sm text-muted-foreground">+263 77 123 4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm font-sans">Email</div>
                    <div className="text-sm text-muted-foreground">info@globalmindsstudy.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm font-sans">Working Hours</div>
                    <div className="text-sm text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241318.0!2d31.0!3d-17.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b17161%3A0x2df8b25890a0a32f!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
