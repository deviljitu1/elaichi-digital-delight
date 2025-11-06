import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Elaichi
          </div>
          <div className="hidden md:block text-sm text-muted-foreground">Pure Veg Restaurant</div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-[var(--transition-smooth)]"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="text-foreground hover:text-primary transition-[var(--transition-smooth)]"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("specialties")}
            className="text-foreground hover:text-primary transition-[var(--transition-smooth)]"
          >
            Specialties
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-[var(--transition-smooth)]"
          >
            Contact
          </button>
        </nav>

        <Button variant="hero" size="lg" onClick={() => scrollToSection("contact")}>
          <Phone className="w-4 h-4" />
          Book Table
        </Button>
      </div>
    </header>
  );
};

export default Header;
