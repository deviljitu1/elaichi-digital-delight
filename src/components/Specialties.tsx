import samosaImage from "@/assets/samosa.jpg";
import biryaniImage from "@/assets/biryani.jpg";
import paneerImage from "@/assets/paneer-tikka.jpg";

const Specialties = () => {
  const specialties = [
    {
      image: samosaImage,
      name: "Signature Samosas",
      description: "Crispy, golden perfection filled with spiced potatoes and peas, served with our special mint chutney",
    },
    {
      image: biryaniImage,
      name: "Royal Biryani",
      description: "Aromatic basmati rice layered with vegetables, herbs, and secret spices, slow-cooked to perfection",
    },
    {
      image: paneerImage,
      name: "Paneer Tikka",
      description: "Marinated cottage cheese chunks grilled with bell peppers, bursting with smoky tandoori flavors",
    },
  ];

  return (
    <section id="specialties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full mb-4">
            <span className="text-secondary font-medium">Chef's Special</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Signature
            <span className="block text-primary">Creations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked by our master chefs, these dishes represent the pinnacle of our culinary expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={specialty.image}
                  alt={specialty.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)] duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-[var(--transition-smooth)]" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-[var(--transition-smooth)]">
                  {specialty.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
