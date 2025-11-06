import { Instagram, Facebook, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Elaichi
            </h3>
            <p className="text-background/80 mb-4">
              Experience the authentic flavors of India in a modern, elegant setting. Pure vegetarian cuisine crafted
              with love and tradition.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/elaichi_raipur/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:scale-110 transition-[var(--transition-smooth)]"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:scale-110 transition-[var(--transition-smooth)]"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:scale-110 transition-[var(--transition-smooth)]"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-[var(--transition-smooth)]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary transition-[var(--transition-smooth)]">
                  Menu
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-primary transition-[var(--transition-smooth)]">
                  Specialties
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-[var(--transition-smooth)]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-background/80">
              <li>Near Clock Tower, Civil Lines</li>
              <li>Raipur, Chhattisgarh 492001</li>
              <li>Phone: +91 771 234 5678</li>
              <li>Email: info@elaichiraipur.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for food lovers
          </p>
          <p className="mt-2">© 2024 Elaichi Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
