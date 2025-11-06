import { UtensilsCrossed } from "lucide-react";

const Menu = () => {
  const categories = [
    {
      name: "Thalis",
      items: [
        { name: "Special Thali", description: "A complete meal with dal, sabzi, roti, rice, and dessert", price: "₹299" },
        { name: "Deluxe Thali", description: "Premium selection with paneer, special dal, and more", price: "₹399" },
        { name: "Royal Thali", description: "Our signature thali with exotic preparations", price: "₹499" },
      ],
    },
    {
      name: "Starters",
      items: [
        { name: "Paneer Tikka", description: "Marinated cottage cheese grilled to perfection", price: "₹249" },
        { name: "Samosa Platter", description: "Crispy samosas served with chutneys", price: "₹149" },
        { name: "Hara Bhara Kabab", description: "Spinach and green peas patties", price: "₹199" },
      ],
    },
    {
      name: "Main Course",
      items: [
        { name: "Paneer Butter Masala", description: "Cottage cheese in rich tomato gravy", price: "₹279" },
        { name: "Dal Makhani", description: "Black lentils in creamy sauce", price: "₹229" },
        { name: "Veg Biryani", description: "Fragrant basmati rice with mixed vegetables", price: "₹249" },
      ],
    },
    {
      name: "Breads & Rice",
      items: [
        { name: "Butter Naan", description: "Soft leavened bread with butter", price: "₹59" },
        { name: "Garlic Naan", description: "Naan topped with garlic and herbs", price: "₹79" },
        { name: "Jeera Rice", description: "Basmati rice tempered with cumin", price: "₹149" },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium">Our Menu</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our
            <span className="block text-primary">Culinary Delights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From traditional thalis to contemporary Indian cuisine, every dish is a celebration of flavor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] hover-lift"
              style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">{category.name}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="border-b border-border/50 pb-4 last:border-0 last:pb-0 group/item hover:bg-muted/30 -mx-4 px-4 py-2 rounded-lg transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg group-hover/item:text-primary transition-colors">{item.name}</h4>
                      <span className="text-primary font-bold text-lg group-hover/item:scale-110 transition-transform inline-block">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
