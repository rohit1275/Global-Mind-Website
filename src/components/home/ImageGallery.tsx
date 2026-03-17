import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroGraduation from "@/assets/hero-graduation.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const images = [
  { src: gallery1, label: "Campus Life" },
  { src: gallery2, label: "Graduation Ceremony" },
  { src: heroGraduation, label: "Celebrating Success" },
  { src: gallery3, label: "University Campus" },
  { src: gallery4, label: "Student Community" },
  { src: heroCampus, label: "International Students" },
];

const ImageGallery = () => {
  return (
    <section className="py-20 section-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Student Life</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Success Gallery</h2>
          <p className="text-muted-foreground">Glimpses of our students thriving at top universities around the world.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 || i === 5 ? "md:row-span-2 h-[300px] md:h-full" : "h-[200px] md:h-[250px]"
              }`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-serif">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
