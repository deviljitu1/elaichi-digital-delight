import { Button } from "@/components/ui/button";
import { MapPin, Phone, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-thali.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/75 via-foreground/85 to-foreground/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10" />
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Decorative Circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" />

        {/* Bottom Left Decorative Circle */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s", animationDuration: "4s" }} />

        {/* Geometric Accent Shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />

        {/* Sparkle Elements */}
        <div className="absolute top-1/3 left-1/3 text-primary/30 animate-pulse" style={{ animationDuration: "3s" }}>
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute top-2/3 right-1/3 text-accent/30 animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "1s" }}>
          <Sparkles className="w-8 h-8" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Premium Badge with Enhanced Glassmorphism */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary/25 to-accent/25 backdrop-blur-md rounded-full border border-secondary/40 shadow-lg shadow-primary/10 mb-4 animate-fade-in animate-float">
            <span className="text-2xl">🌱</span>
            <span className="text-background font-semibold tracking-wide">100% Pure Vegetarian</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>

          {/* Enhanced Typography with Better Hierarchy */}
          <h1 className="text-6xl md:text-8xl font-extrabold text-background leading-[1.1] animate-fade-in-up tracking-tight">
            Experience
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Authentic Indian
            </span>
            <span className="block text-5xl md:text-7xl mt-2 text-background/95">
              Flavors
            </span>
          </h1>

          {/* Enhanced Description with Better Readability */}
          <p className="text-xl md:text-2xl text-background/95 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: "0.2s" }}>
            From traditional thalis to modern fusion, savor the taste of India in every bite at
            <span className="font-semibold text-primary"> Elaichi</span>, Raipur
          </p>

          {/* Enhanced CTA Buttons with Better Spacing */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="tel:+917712345678">
              <Button
                variant="hero"
                size="lg"
                className="group text-lg px-10 py-7 hover-scale shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Reserve Your Table
              </Button>
            </a>
            <a href="https://www.google.com/maps/search/Elaichi+Restaurant+Raipur" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="group text-lg px-10 py-7 text-background hover:text-foreground border-2 border-background/40 hover:border-primary/60 backdrop-blur-sm bg-background/5 hover:bg-background hover-scale shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Find Us
              </Button>
            </a>
          </div>

          {/* Enhanced Stats Section with Glassmorphism Cards */}
          <div className="pt-12 flex flex-wrap justify-center gap-6 md:gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="group px-8 py-4 bg-background/10 backdrop-blur-md rounded-2xl border border-background/20 hover:border-primary/40 hover-lift cursor-default transition-all duration-300">
              <div className="text-4xl font-extrabold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">10+</div>
              <div className="text-sm text-background/90 font-medium mt-1">Years Experience</div>
            </div>

            <div className="group px-8 py-4 bg-background/10 backdrop-blur-md rounded-2xl border border-background/20 hover:border-primary/40 hover-lift cursor-default transition-all duration-300">
              <div className="text-4xl font-extrabold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-background/90 font-medium mt-1">Signature Dishes</div>
            </div>

            <div className="group px-8 py-4 bg-background/10 backdrop-blur-md rounded-2xl border border-background/20 hover:border-primary/40 hover-lift cursor-default transition-all duration-300">
              <div className="text-4xl font-extrabold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">1000+</div>
              <div className="text-sm text-background/90 font-medium mt-1">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-background/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-background/5 shadow-lg">
          <div className="w-2 h-4 bg-gradient-to-b from-primary to-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
