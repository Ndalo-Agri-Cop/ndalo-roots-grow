import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nomsa Mthembu",
      role: "School Nutrition Coordinator",
      organization: "Gauteng Primary School",
      rating: 5,
      quote: "Ndalo Agri Cop has transformed our school feeding program. The fresh, organic vegetables have improved our students' nutrition and the educational workshops have inspired our teachers to start their own school garden.",
      image: "👩🏾‍🏫"
    },
    {
      name: "David van der Merwe",
      role: "Community Garden Leader",
      organization: "Tedderfield Community Project",
      rating: 5,
      quote: "The permaculture training I received from Ndalo Agri Cop completely changed how I approach farming. Our community garden now produces three times more food using sustainable methods that actually improve our soil.",
      image: "👨🏼‍🌾"
    },
    {
      name: "Thandi Mokone",
      role: "Restaurant Owner",
      organization: "Ubuntu Kitchen",
      rating: 5,
      quote: "As a chef focused on local, sustainable ingredients, Ndalo Agri Cop has been an invaluable partner. Their organic herbs and vegetables are not only delicious but also help us tell the story of South African agriculture to our customers.",
      image: "👩🏾‍🍳"
    },
    {
      name: "Johannes Malan",
      role: "Emerging Farmer",
      organization: "Sunrise Organic Farm",
      rating: 5,
      quote: "The mentorship and training from Ndalo Agri Cop helped me transition from conventional to organic farming. My yields are better, my costs are lower, and most importantly, I'm contributing to a healthier environment.",
      image: "👨🏼‍🌾"
    },
    {
      name: "Lerato Sithole",
      role: "NGO Director",
      organization: "Food Security Network",
      rating: 5,
      quote: "Ndalo Agri Cop's commitment to community empowerment aligns perfectly with our mission. Their food programs have helped us reach more families while their training programs are creating lasting change in our communities.",
      image: "👩🏾‍💼"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            What Our Community Says
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hear from the farmers, educators, and community leaders who are part of our 
            sustainable agriculture movement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-strong p-8 md:p-12 relative overflow-hidden">
            {/* Background Quote Icon */}
            <Quote className="absolute top-6 right-6 w-20 h-20 text-primary/10" />
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-medium text-card-foreground leading-relaxed mb-8 text-center italic">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="text-4xl mb-4">{currentTestimonial.image}</div>
                <h4 className="text-xl font-heading font-bold text-card-foreground mb-1">
                  {currentTestimonial.name}
                </h4>
                <p className="text-primary font-medium mb-1">
                  {currentTestimonial.role}
                </p>
                <p className="text-muted-foreground">
                  {currentTestimonial.organization}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
            Ready to Join Our Community?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Become part of South Africa's sustainable agriculture movement.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://wa.me/27123456789?text=Hello%20Ndalo%20Agri%20Cop!%20I%27d%20love%20to%20learn%20more%20about%20joining%20your%20community%20and%20programs.', '_blank')}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;