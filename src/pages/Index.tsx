
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExploreSection from "../components/home/ExploreSection";
import CommitmentSection from "../components/home/CommitmentSection";
import AnimationObserver from "../components/home/AnimationObserver";
import TestimonialSection from "../components/home/TestimonialSection";
import FAQSection from "../components/FAQSection";
import InteractiveShowcase from "../components/interactive/InteractiveShowcase";
import BackToTop from "../components/ui/back-to-top";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <Navbar />
      <Hero />
      <AnimationObserver />
      
      <ExploreSection />
      <TestimonialSection />
      <CommitmentSection />
      <InteractiveShowcase />
      <FAQSection />
      <BackToTop />
    </motion.div>
  );
};

export default Index;
