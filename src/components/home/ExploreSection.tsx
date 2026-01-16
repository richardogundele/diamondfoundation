import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import PreviewSection from "./PreviewSection";
import previewImage from "../../images/1.png";
import dpImage from "../../images/DP.png";
import projectImage from "../../images/Project.png";

const ExploreSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const logoImagePath = "/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png";
  
  const sections = [
    {
      title: "About Us",
      description: "Discover our mission to transform lives through education, digital literacy, and enterprise pathways — meeting immediate needs while building long-term solutions.",
      link: "/about",
      image: dpImage
    },
    {
      title: "Our Team",
      description: "Meet the dedicated individuals working tirelessly to transform lives and create lasting change.",
      link: "/team",
      image: previewImage
    },
    {
      title: "Our Impact",
      description: "See our 5 Impact Pillars in action: Education Access & Equity, Digital Literacy & Innovation, Enterprise Pathways, Faith in Action, and Sustainability & Growth.",
      link: "/impact",
      image: projectImage
    },
    {
      title: "Careers",
      description: "Explore unpaid internship opportunities and start your impact journey with us.",
      link: "/careers",
      image: projectImage
    },
    {
      title: "Donate",
      description: "Partner, sponsor, or volunteer with us to redefine impact together. Beyond charity, building futures.",
      link: "/donate",
      image: dpImage
    },
    {
      title: "Contact Us",
      description: "Get in touch with us to learn more about our work or how you can get involved.",
      link: "/contact",
      image: logoImagePath
    }
  ];

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = Math.max(0, sections.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => prev >= maxIndex ? 0 : prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev <= 0 ? maxIndex : prev - 1);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering, maxIndex]);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground">Discover Our Work</span>
          </motion.div>
          
          <h2 className="font-display font-bold text-foreground mb-4">
            Explore Our <span className="text-gradient">Work</span>
          </h2>
          <div className="w-24 h-1.5 gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how Diamond Foundation is making a meaningful impact through various initiatives and programs.
          </p>
        </motion.div>
        
        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 z-10 glass-card w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hidden sm:flex"
            aria-label="Previous items"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 z-10 glass-card w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hidden sm:flex"
            aria-label="Next items"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Track */}
          <div className="px-0 sm:px-16 overflow-hidden">
            <motion.div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {sections.map((section, index) => (
                <div 
                  key={index} 
                  className="flex-none"
                  style={{ 
                    minWidth: `${100 / itemsPerView}%`,
                    width: `${100 / itemsPerView}%`
                  }}
                >
                  <PreviewSection
                    title={section.title}
                    description={section.description}
                    link={section.link}
                    image={section.image}
                    index={index}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 gradient-primary' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;