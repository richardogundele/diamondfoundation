
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExploreSection from "../components/home/ExploreSection";
import CommitmentSection from "../components/home/CommitmentSection";
import AnimationObserver from "../components/home/AnimationObserver";
import NewsFlash from "../components/home/NewsFlash";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AnimationObserver />
      <NewsFlash />
      <ExploreSection />
      <CommitmentSection />
    </div>
  );
};

export default Index;
