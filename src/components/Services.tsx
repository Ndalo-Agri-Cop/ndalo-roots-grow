import { Button } from "@/components/ui/button";
import { Sprout, GraduationCap, Truck, Users2 } from "lucide-react";
import produceImage from "@/assets/produce-image.jpg";
import coursesImage from "@/assets/courses-image.jpg";

const Services = () => {
  const services = [
    {
      icon: <Sprout className="w-12 h-12" />,
      title: "Organic Produce",
      subtitle: "Fresh vegetables & herbs",
      description: "Sustainably grown organic vegetables, herbs, and indigenous plants. Our produce is cultivated using permaculture principles, ensuring the highest quality while protecting the environment.",
      features: ["Certified organic vegetables", "Fresh herbs and medicinal plants", "Indigenous nursery plants", "Seasonal variety boxes"],
      image: produceImage,
      cta: "View Our Produce"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Education & Training", 
      subtitle: "Permaculture & agriculture courses",
      description: "Comprehensive training programs in sustainable agriculture, permaculture design, and organic farming techniques. Empowering the next generation of environmental stewards.",
      features: ["Permaculture Design Certificate", "Organic farming workshops", "School partnership programs", "Community education initiatives"],
      image: coursesImage,
      cta: "Explore Courses"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Food Programs",
      subtitle: "Wholesale & feeding schemes",
      description: "Supporting community feeding schemes, schools, and wholesale partners with reliable supply of fresh, nutritious produce. Building sustainable food systems for all.",
      features: ["School feeding programs", "Community nutrition initiatives", "Wholesale partnerships", "Food security consulting"],
      image: null,
      cta: "Partner With Us"
    },
    {
      icon: <Users2 className="w-12 h-12" />,
      title: "Consulting Services",
      subtitle: "Sustainable agriculture guidance",
      description: "Expert consulting in sustainable agriculture, permaculture design, and community food system development. Helping organizations and communities build resilient food systems.",
      features: ["Farm design consultation", "Sustainability audits", "Community garden planning", "Agricultural training programs"],
      image: null,
      cta: "Get Consultation"
    }
  ];

  const handleServiceInquiry = (serviceName: string) => {
    const message = `Hello Ndalo Agri Cop! I'm interested in learning more about your ${serviceName} services. Could you please provide more information?`;
    window.open(`https://wa.me/27123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From farm to table, from education to empowerment. Discover how we're 
            cultivating sustainable futures across South Africa.
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-start space-x-4">
                  <div className="text-primary flex-shrink-0 mt-1">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-4">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center space-x-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button 
                    variant="default" 
                    size="lg"
                    onClick={() => handleServiceInquiry(service.title)}
                    className="font-semibold"
                  >
                    {service.cta}
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {service.image ? (
                  <div className="relative rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 group">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                ) : (
                  <div className="bg-gradient-earth rounded-lg h-80 flex items-center justify-center shadow-medium">
                    <div className="text-center">
                      <div className="text-primary mb-4 flex justify-center">
                        {service.icon}
                      </div>
                      <p className="text-lg font-medium text-foreground">
                        {service.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;