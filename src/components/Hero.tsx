import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-thali.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 mb-4">
            <span className="text-secondary-foreground font-medium">🌱 100% Pure Vegetarian</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-background leading-tight">
            Experience Authentic
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Indian Flavors
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-background/90 max-w-2xl mx-auto">
            From traditional thalis to modern fusion, savor the taste of India in every bite at Elaichi, Raipur
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
              <Phone className="w-5 h-5" />
              Reserve Your Table
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6 text-background hover:text-foreground border-background/30">
              <MapPin className="w-5 h-5" />
              Find Us
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-background/80">
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="w-px bg-background/30" />
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm">Signature Dishes</div>
            </div>
            <div className="w-px bg-background/30" />
            <div>
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
