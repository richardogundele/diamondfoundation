import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-textPrimary mb-6 animate-fade-in">
            Transforming Lives Through
            <span className="text-primary"> Love & Compassion</span>
          </h1>
          <p className="text-lg md:text-xl text-textSecondary mb-8 max-w-3xl mx-auto animate-fade-in">
            Welcome to Diamond Foundation, where love, compassion, and empowerment come together to create lasting change. Join us in making a difference—one life at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
              Support Our Mission
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;