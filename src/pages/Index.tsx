
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import previewImage from "../images/1.png";
import projectImage from "../images/Project.png"; // Corrected capitalization
import volunteerImage from "../images/Volunteer.JPG"; // Corrected capitalization and extension
import dpImage from "../images/DP.png";
import donateImage from "../images/Donate.JPG"; // Corrected capitalization and extension
import logoImage from "../images/LOGO.jpeg"; // Corrected capitalization

const PreviewSection = ({ title, description, link, image }: {
  title: string;
  description: string;
  link: string;
  image: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <div className="relative group">
      <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-textSecondary mb-4">{description}</p>
      <Link to={link}>
        <button className="group text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          Learn More
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </div>
  </div>
);

const Index = () => {
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
      image: logoImage
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-textPrimary">Explore Our Work</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
};

export default Index;
