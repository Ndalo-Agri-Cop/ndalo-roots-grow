import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import ndaloLogo from "@/assets/ndalo-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "About Us", action: () => scrollToSection('about') },
    { name: "Our Services", action: () => scrollToSection('services') },
    { name: "Testimonials", action: () => scrollToSection('testimonials') },
    { name: "Gallery", action: () => scrollToSection('gallery') },
    { name: "Contact", action: () => scrollToSection('contact') }
  ];

  const services = [
    "Organic Produce",
    "Permaculture Training",
    "Agricultural Consulting",
    "Community Programs",
    "School Partnerships"
  ];

  const contactMethods = [
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "61 Patton Place, Tedderfield, Gauteng 1872",
      action: () => window.open("https://maps.google.com/?q=61+Patton+Place,+Tedderfield,+Gauteng+1872", "_blank")
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "ndaloagricop@gmail.com",
      action: () => window.open("mailto:ndaloagricop@gmail.com", "_blank")
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      text: "WhatsApp Us",
      action: () => window.open("https://wa.me/27123456789?text=Hello%20Ndalo%20Agri%20Cop!", "_blank")
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={ndaloLogo} 
                alt="Ndalo Agri Cop Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-heading font-bold">Ndalo Agri Cop</h3>
                <p className="text-sm opacity-80">PTY LTD</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              <em>"Rooted in Tradition, Growing the Future."</em>
            </p>
            <p className="text-sm leading-relaxed opacity-80">
              Empowering South African communities through sustainable agriculture, 
              permaculture education, and environmental stewardship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-sm opacity-80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 text-sm ${
                    method.action ? 'cursor-pointer hover:text-accent transition-colors' : ''
                  }`}
                  onClick={method.action}
                >
                  <div className="text-accent flex-shrink-0 mt-0.5">
                    {method.icon}
                  </div>
                  <span className="opacity-80 hover:opacity-100">
                    {method.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-6 pt-6 border-t border-secondary-foreground/20">
              <h5 className="font-medium mb-2">Business Hours</h5>
              <div className="text-sm opacity-80 space-y-1">
                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-70">
              © {currentYear} Ndalo Agri Cop (PTY) LTD. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <button 
                className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200"
                onClick={() => alert('Privacy Policy - Coming Soon')}
              >
                Privacy Policy
              </button>
              <button 
                className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200"
                onClick={() => alert('Terms & Conditions - Coming Soon')}
              >
                Terms & Conditions
              </button>
              <button 
                className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200"
                onClick={() => alert('POPIA Compliance - Coming Soon')}
              >
                POPIA
              </button>
              <button 
                className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200"
                onClick={() => alert('Cookie Policy - Coming Soon')}
              >
                Cookies
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs opacity-60">
              Proudly South African • Committed to Sustainable Agriculture • 
              Building Community Through Food
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;