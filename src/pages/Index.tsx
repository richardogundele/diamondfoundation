
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExploreSection from "../components/home/ExploreSection";
import CommitmentSection from "../components/home/CommitmentSection";
import AnimationObserver from "../components/home/AnimationObserver";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AnimationObserver />
      <ExploreSection />
      <CommitmentSection />
    </div>
  );
};

export default Index;
