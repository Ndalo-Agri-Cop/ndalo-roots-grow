import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import produceImage from "@/assets/produce-image.jpg";
import coursesImage from "@/assets/courses-image.jpg";
import heroImage from "@/assets/hero-agriculture.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: gallery1,
      alt: "Students learning permaculture techniques",
      category: "Education"
    },
    {
      src: gallery2,
      alt: "Fresh organic harvest and indigenous plants",
      category: "Produce"
    },
    {
      src: gallery3,
      alt: "Community garden development project",
      category: "Community"
    },
    {
      src: produceImage,
      alt: "Organic vegetables and herbs",
      category: "Produce"
    },
    {
      src: coursesImage,
      alt: "Agricultural training courses",
      category: "Education"
    },
    {
      src: heroImage,
      alt: "Sustainable farming landscape",
      category: "Farming"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Our Work in Action
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Explore our journey through sustainable agriculture, community empowerment, 
            and environmental education across South Africa.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
              onClick={() => openModal(item.src)}
            >
              <img 
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium mb-1">{item.alt}</p>
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
            Want to be Part of Our Story?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join our community and help us grow sustainable food systems across South Africa.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://wa.me/27123456789?text=Hello%20Ndalo%20Agri%20Cop!%20I%27d%20love%20to%20visit%20your%20farm%20and%20learn%20more%20about%20your%20work.', '_blank')}
          >
            Visit Our Farm
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;