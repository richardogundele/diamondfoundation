
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
      description: "Learn about our mission, vision, and the impact we're making in communities across Africa.",
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
      description: "Discover how we're making a difference in education, healthcare, and community development.",
      link: "/impact",
      image: projectImage
    },
    {
      title: "Volunteer",
      description: "Join our mission and help make a difference in the lives of those who need it most.",
      link: "/volunteer",
      image: projectImage
    },
    {
      title: "Donate",
      description: "Support our cause and help us continue our mission of transforming lives through love and compassion.",
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

  const itemsPerView = 3; // Show 3 items at once on desktop
  const maxIndex = Math.max(0, sections.length - itemsPerView);

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
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-textPrimary mb-4">Explore Our Work</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Discover how Diamond Foundation is making a meaningful impact through various initiatives and programs.
          </p>
        </motion.div>
        
        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Previous items"
          >
            <ChevronLeft size={24} className="text-blue-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Next items"
          >
            <ChevronRight size={24} className="text-blue-600" />
          </button>

          {/* Carousel Track */}
          <div className="px-12">
            <motion.div 
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {sections.map((section, index) => (
                <div 
                  key={index} 
                  className="flex-none w-full md:w-1/2 lg:w-1/3"
                  style={{ minWidth: `${100 / itemsPerView}%` }}
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
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
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
