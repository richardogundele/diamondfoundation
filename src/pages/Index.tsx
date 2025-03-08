
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import previewImage from "../images/1.png";
import dpImage from "../images/DP.png";

const PreviewSection = ({ title, description, link, image }: {
  title: string;
  description: string;
  link: string;
  image: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover-card">
    <div className="relative group">
      <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-textSecondary mb-4">{description}</p>
      <Link to={link}>
        <button className="group text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all animated-button">
          Learn More
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Initialize animation for sections with class "fade-in-section"
    const observerOptions = {
      threshold: 0.1,
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
      image: previewImage // Using previewImage as a fallback
    },
    {
      title: "Volunteer",
      description: "Join our mission and help make a difference in the lives of those who need it most.",
      link: "/volunteer",
      image: previewImage // Using previewImage as a fallback
    },
    {
      title: "Donate",
      description: "Support our cause and help us continue our mission of transforming lives through love and compassion.",
      link: "/donate",
      image: previewImage // Using previewImage as a fallback
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
      
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-3xl font-bold text-textPrimary">Explore Our Work</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              Discover how Diamond Foundation is making a meaningful impact through various initiatives and programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
            {sections.map((section, index) => (
              <PreviewSection
                key={index}
                title={section.title}
                description={section.description}
                link={section.link}
                image={section.image}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-3xl font-bold text-textPrimary">Our Commitment</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center fade-in-section">
            <div>
              <img 
                src={logoImagePath} 
                alt="Diamond Foundation" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-textPrimary">Transforming Lives Through Love</h3>
              <p className="text-textSecondary">
                At Diamond Foundation, we believe that every child deserves access to quality education, 
                healthcare, and opportunities to thrive. Our commitment is to create sustainable change 
                that empowers communities and transforms lives across Africa.
              </p>
              <div className="pt-4">
                <Link to="/about">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 
                          transition-all flex items-center gap-2 animated-button">
                    Learn More About Our Mission
                    <ExternalLink size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
