
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { motion } from "framer-motion";
import VolunteerHero from "../components/volunteer/VolunteerHero";
import OpportunitiesSection from "../components/volunteer/OpportunitiesSection";
import OpenPositionsSection from "../components/volunteer/OpenPositionsSection";
import VolunteerCTA from "../components/volunteer/VolunteerCTA";

const Volunteer = () => {
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

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-600/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 fade-in-section"
          >
            <h1 className="text-4xl font-bold text-textPrimary mb-6">Volunteer With Us</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              Join our mission and help make a difference in the lives of those who need it most. 
              Your time and talents can create lasting impact.
            </p>
          </motion.div>
          
          <VolunteerHero />
          <OpportunitiesSection />
          <OpenPositionsSection />
          <VolunteerCTA />
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
