
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
      description: "Meet the dedicated individuals working tirelessly to transform lives and build stronger communities.",
      link: "/team",
      image: logoImagePath
    },
    {
      title: "Impact Stories",
      description: "Discover the real stories of transformation and see how your support creates lasting change.",
      link: "/impact",
      image: previewImage
    },
    {
      title: "Project 2025",
      description: "Our ambitious plan to reach 10,000 children across 15 countries with sustainable development programs.",
      link: "/project-2025",
      image: projectImage
    },
    {
      title: "Volunteer",
      description: "Join our community of changemakers and contribute your skills to make a meaningful difference.",
      link: "/volunteer",
      image: logoImagePath
    },
    {
      title: "Donate",
      description: "Support our mission with a donation and help us continue transforming lives across Africa.",
      link: "/donate",
      image: logoImagePath
    }
  ];

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, sections.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  };

  const getVisibleSections = () => {
    const visibleCount = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % sections.length;
      result.push({ ...sections[index], index });
    }
    return result;
  };

  const [visibleSections, setVisibleSections] = useState(getVisibleSections());

  useEffect(() => {
    const handleResize = () => {
      setVisibleSections(getVisibleSections());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
            Explore Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
          </h2>
          <div className="w-24 sm:w-32 lg:w-40 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover how we're creating lasting change through education, healthcare, and community empowerment
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleSections.map((section, index) => (
              <PreviewSection
                key={`${section.title}-${section.index}`}
                title={section.title}
                description={section.description}
                link={section.link}
                image={section.image}
                index={index}
              />
            ))}
          </div>

          {/* Navigation buttons - responsive */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 lg:-left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2 sm:p-3 lg:p-4 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous slides"
          >
            <ChevronLeft size={20} className="text-blue-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 lg:-right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2 sm:p-3 lg:p-4 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next slides"
          >
            <ChevronRight size={20} className="text-blue-600" />
          </button>

          {/* Dots indicator - mobile optimized */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-6 sm:w-8' : 'bg-gray-300 hover:bg-gray-400'
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
