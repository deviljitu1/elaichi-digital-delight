import { Leaf, Award, Users, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Vegetarian",
      description: "Pure vegetarian cuisine crafted with the finest ingredients",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in authentic Indian cuisine",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "A warm, welcoming space perfect for families and gatherings",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish prepared with passion and traditional recipes",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium">About Elaichi</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Where Tradition Meets
            <span className="block text-primary">Modern Dining</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Elaichi brings you the authentic flavors of India with a contemporary twist. Our menu features
            traditional recipes passed down through generations, prepared with locally sourced ingredients and
            served in a modern, elegant setting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-[var(--transition-smooth)]">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
