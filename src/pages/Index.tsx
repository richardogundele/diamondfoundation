
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import previewImage from "../images/1.png";
import dpImage from "../images/DP.png";
import volunteerImage from "../images/Volunteer.JPG";
import donateImage from "../images/Donate.JPG";
import projectImage from "../images/Project.png";

const PreviewSection = ({ title, description, link, image, index }: {
  title: string;
  description: string;
  link: string;
  image: string;
  index: number;
}) => (
  <motion.div 
    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:border-blue-100 border border-transparent"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <div className="relative group h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-textSecondary mb-4 line-clamp-3">{description}</p>
      <Link to={link}>
        <button className="group text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all animated-button">
          Learn More
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </div>
  </motion.div>
);

const Index = () => {
  useEffect(() => {
    // Initialize animation for sections with class "fade-in-section"
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

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
      image: volunteerImage
    },
    {
      title: "Donate",
      description: "Support our cause and help us continue our mission of transforming lives through love and compassion.",
      link: "/donate",
      image: donateImage
    },
    {
      title: "Contact Us",
      description: "Get in touch with us to learn more about our work or how you can get involved.",
      link: "/contact",
      image: logoImagePath
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
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
      
      <div className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16 fade-in-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-textPrimary mb-4">Our Commitment</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={logoImagePath} 
                alt="Diamond Foundation" 
                className="rounded-xl shadow-xl w-full object-cover h-[400px]"
              />
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-3xl font-semibold text-textPrimary">Transforming Lives Through Love</h3>
              <p className="text-lg text-textSecondary">
                At Diamond Foundation, we believe that every child deserves access to quality education, 
                healthcare, and opportunities to thrive. Our commitment is to create sustainable change 
                that empowers communities and transforms lives across Africa.
              </p>
              <p className="text-lg text-textSecondary">
                Through dedicated volunteer efforts and strategic partnerships, we're building a future where 
                no child is left behind due to circumstances beyond their control.
              </p>
              <div className="pt-6">
                <Link to="/about">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 
                          shadow-md hover:shadow-lg transition-all flex items-center gap-3 text-lg">
                    Learn More About Our Mission
                    <ExternalLink size={20} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
