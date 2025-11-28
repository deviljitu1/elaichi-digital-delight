import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Us
            <span className="block text-primary">At Elaichi</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-in-right">
            <div className="flex gap-4 group cursor-pointer hover-lift">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Elaichi Restaurant
                  <br />
                  Near Clock Tower, Civil Lines
                  <br />
                  Raipur, Chhattisgarh 492001
                </p>
              </div>
            </div>

            <a href="tel:+917712345678" className="flex gap-4 group hover-lift">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">Phone</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">+91 771 234 5678</p>
                <p className="text-muted-foreground">+91 77x xxx xxxx</p>
              </div>
            </a>

            <a href="mailto:info@elaichiraipur.com" className="flex gap-4 group hover-lift">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">Email</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">info@elaichiraipur.com</p>
                <p className="text-muted-foreground">xxxx@elaichiraipur.com</p>
              </div>
            </a>

            <div className="flex gap-4 group hover-lift cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Hours</h3>
                <p className="text-muted-foreground">Monday - Sunday</p>
                <p className="text-muted-foreground">11:00 AM - 11:00 PM</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="tel:+91xxx-xxx-xxxx">
                <Button variant="hero" size="lg" className="w-full sm:w-auto hover-scale">
                  <Phone className="w-5 h-5" />
                  Call to Reserve
                </Button>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.127!2d81.6296!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzA1LjAiTiA4McKwMzcnNDYuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elaichi Restaurant Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
