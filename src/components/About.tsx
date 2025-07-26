import { Leaf, Users, BookOpen, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Committed to regenerative farming practices that heal the earth while feeding communities."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Empowering local communities through education, training, and sustainable food systems."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education",
      description: "Sharing knowledge of traditional and modern agricultural techniques for future generations."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Driven by love for the land and dedication to creating a better future for all."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            About Ndalo Agri Cop
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            What began as a small family farm has blossomed into a permaculture hub 
            supporting local markets, schools, and food programs across South Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the principles of sustainable agriculture and community empowerment, 
              Ndalo Agri Cop has grown from humble beginnings to become a leader in 
              South Africa's sustainable farming movement.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in honoring traditional farming wisdom while embracing innovative 
              techniques that protect our environment and ensure food security for future 
              generations. Our holistic approach encompasses organic production, permaculture 
              education, and community development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From our base in Gauteng, we serve communities across South Africa, 
              providing fresh organic produce, educational programs, and consulting 
              services that make sustainable agriculture accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-heading font-semibold mb-2 text-card-foreground">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-medium max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-heading font-semibold mb-4 text-card-foreground">
            Our Mission
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To create resilient food systems that nourish communities while protecting 
            our environment, bridging traditional agricultural wisdom with modern 
            sustainable practices to ensure a prosperous future for all South Africans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;