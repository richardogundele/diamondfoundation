import Hero from "../components/Hero";
import ExploreSection from "../components/home/ExploreSection";
import CommitmentSection from "../components/home/CommitmentSection";
import AnimationObserver from "../components/home/AnimationObserver";
import TestimonialSection from "../components/home/TestimonialSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden"
    >
      <Navbar />
      <Hero />
      <AnimationObserver />
      <ExploreSection />
      <TestimonialSection />
      <CommitmentSection />
      <FAQSection />
      <Footer />
    </motion.div>
  );
};

export default Index;