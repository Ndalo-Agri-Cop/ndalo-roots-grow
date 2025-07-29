import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Ndalo Agri Cop
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            <em>"Rooted in Tradition, Growing the Future."</em>
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/90">
            Empowering South African communities through sustainable agriculture, 
            permaculture education, and environmental stewardship. From traditional 
            farming wisdom to innovative food systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="text-lg px-8 py-4 h-auto"
            >
              Explore Our Services
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={() => window.open('https://wa.me/27123456789?text=Hello%20Ndalo%20Agri%20Cop!%20I%27m%20interested%20in%20learning%20more%20about%20your%20services.', '_blank')}
            >
              Get In Touch
            </Button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce cursor-pointer group"
            aria-label="Scroll to about section"
          >
            <ArrowDown 
              size={32} 
              className="text-white/70 group-hover:text-white transition-colors" 
            />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;