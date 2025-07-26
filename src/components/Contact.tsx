import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting Ndalo Agri Cop. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Farm",
      details: ["61 Patton Place", "Tedderfield, Gauteng 1872", "South Africa"],
      action: () => window.open("https://maps.google.com/?q=61+Patton+Place,+Tedderfield,+Gauteng+1872", "_blank")
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["ndaloagricop@gmail.com"],
      action: () => window.open("mailto:ndaloagricop@gmail.com", "_blank")
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["Chat with us instantly", "Quick responses guaranteed"],
      action: () => window.open("https://wa.me/27123456789?text=Hello%20Ndalo%20Agri%20Cop!%20I%27m%20interested%20in%20your%20services.", "_blank")
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 2:00 PM", "Sunday: Closed"],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ready to start your sustainable agriculture journey? We're here to help 
            you grow, learn, and make a positive impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're interested in our organic produce, educational programs, 
                or partnership opportunities, we'd love to hear from you.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 ${
                    info.action ? 'cursor-pointer group hover:scale-105' : ''
                  }`}
                  onClick={info.action || undefined}
                >
                  <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-semibold text-card-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h4 className="text-lg font-heading font-semibold text-green-800 mb-2">
                Need Quick Answers?
              </h4>
              <p className="text-green-700 mb-4">
                Chat with us on WhatsApp for instant support and information.
              </p>
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={() => window.open("https://wa.me/27123456789?text=Hello%20Ndalo%20Agri%20Cop!%20I%20have%20a%20quick%20question%20about%20your%20services.", "_blank")}
                className="w-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg shadow-medium p-8">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-card-foreground">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+27 123 456 789"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What can we help you with?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, questions, or how we can help you..."
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;