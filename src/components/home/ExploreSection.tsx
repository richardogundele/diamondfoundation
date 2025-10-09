
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PreviewSection from "./PreviewSection";
import previewImage from "../../images/1.png";
import dpImage from "../../images/DP.png";
import projectImage from "../../images/Project.png";

const ExploreSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Use consistent image paths to avoid import issues
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

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = Math.max(0, sections.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, maxIndex]);

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-4">Explore Our Work</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-base sm:text-lg text-textSecondary max-w-3xl mx-auto px-4">
            Discover how Diamond Foundation is making a meaningful impact through various initiatives and programs.
          </p>
        </motion.div>
        
        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hidden sm:block"
            aria-label="Previous items"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-blue-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hidden sm:block"
            aria-label="Next items"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6 text-blue-600" />
          </button>

          {/* Carousel Track */}
          <div className="px-2 sm:px-12">
            <motion.div 
              className="flex gap-4 sm:gap-8 transition-transform duration-500 ease-in-out"
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
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-6 sm:w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
