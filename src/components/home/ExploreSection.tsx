
import { motion } from "framer-motion";
import PreviewSection from "./PreviewSection";
import previewImage from "../../images/1.png";
import dpImage from "../../images/DP.png";
import projectImage from "../../images/Project.png";

const ExploreSection = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <PreviewSection
              key={index}
              title={section.title}
              description={section.description}
              link={section.link}
              image={section.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
