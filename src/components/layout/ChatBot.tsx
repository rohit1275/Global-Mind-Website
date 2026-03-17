import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  from: "bot" | "user";
  text: string;
  links?: { label: string; to: string }[];
}

const initialMessage: Message = {
  from: "bot",
  text: "Hello 👋\nWelcome to Global Minds Education.\nIf you need help choosing a country, university, or course, feel free to ask.",
  links: [
    { label: "Study Destinations", to: "/destinations" },
    { label: "Our Services", to: "/services" },
    { label: "Book Consultation", to: "/contact" },
  ],
};

const quickReplies = [
  { text: "I want to study in Canada", response: "Canada is one of our top destinations! We can help with university selection, scholarships, and visa support. Would you like to book a free consultation?", links: [{ label: "Study in Canada", to: "/destinations/canada" }, { label: "Book Consultation", to: "/contact" }] },
  { text: "Tell me about scholarships", response: "We help students find and apply for scholarships worldwide. Many of our partner universities offer partial to full scholarships.", links: [{ label: "View Scholarships", to: "/scholarships" }] },
  { text: "How do I apply?", response: "Our application process is simple:\n1. Book a free consultation\n2. Get personalized course & university recommendations\n3. We handle your application & visa process", links: [{ label: "Book Free Consultation", to: "/contact" }] },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcomeBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");

    const match = quickReplies.find((qr) =>
      userMsg.toLowerCase().includes(qr.text.toLowerCase().split(" ").slice(0, 3).join(" "))
    );

    setTimeout(() => {
      if (match) {
        setMessages((prev) => [...prev, { from: "bot", text: match.response, links: match.links }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Thank you for your interest! For personalized guidance, I'd recommend speaking with one of our expert counsellors.",
            links: [{ label: "Book Free Consultation", to: "/contact" }],
          },
        ]);
      }
    }, 800);
  };

  return (
    <>
      {/* Welcome bubble */}
      {showWelcomeBubble && !isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 max-w-[260px] bg-card rounded-xl shadow-xl border border-border p-4 animate-fade-in cursor-pointer"
          onClick={() => { setIsOpen(true); setShowWelcomeBubble(false); }}
        >
          <button onClick={(e) => { e.stopPropagation(); setShowWelcomeBubble(false); }} className="absolute top-2 right-2 text-muted-foreground hover:text-foreground">
            <X className="h-3 w-3" />
          </button>
          <p className="text-sm text-foreground">👋 Need help with studying abroad? Chat with us!</p>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => { setIsOpen(!isOpen); setShowWelcomeBubble(false); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
        aria-label="Chat with us"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] h-[480px] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent px-5 py-4 text-primary-foreground">
            <p className="font-bold text-base">Global Minds Education</p>
            <p className="text-xs text-primary-foreground/80">We typically reply instantly</p>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.text}
                  {msg.links && (
                    <div className="mt-3 space-y-1.5">
                      {msg.links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          <div className="px-4 pb-2 flex gap-2 flex-wrap">
            {messages.length <= 2 &&
              quickReplies.slice(0, 2).map((qr) => (
                <button
                  key={qr.text}
                  onClick={() => {
                    setMessages((prev) => [...prev, { from: "user", text: qr.text }]);
                    setTimeout(() => {
                      setMessages((prev) => [...prev, { from: "bot", text: qr.response, links: qr.links }]);
                    }, 800);
                  }}
                  className="text-xs px-3 py-1.5 rounded-full border border-border text-foreground hover:bg-accent/10 transition-colors"
                >
                  {qr.text}
                </button>
              ))}
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 text-sm bg-muted rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-accent/30 text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
