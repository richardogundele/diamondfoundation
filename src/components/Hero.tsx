import { ArrowRight } from "lucide-react";
import Carousel from "./Carousel";
import Counter from "./Counter";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  const carouselImages = [image1, image2];

  return (
    <div className="relative min-h-screen">
      <div className="relative min-h-[600px] bg-gradient-to-b from-blue-600/10 to-white pt-24 pb-16">
        <Carousel images={carouselImages} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-textPrimary mb-12 animate-fade-up">
              Transforming Lives Through
              <span className="text-blue-600 hover:text-opacity-80 transition-colors duration-300"> Love & Compassion</span>
            </h1>

            {/* Single button */}
            <div className="flex justify-center mb-16 animate-fade-up delay-100">
              <Link to="/about">
                <button className="group bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Support Our Mission
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-up delay-200">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">
                <Counter end={1000} suffix="+" duration={2500} />
              </h3>
              <p className="text-base md:text-lg font-semibold text-gray-800 mt-2">Children Impacted</p>
              <p className="text-sm md:text-base text-gray-600">Target impact over 10 years</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">
                <Counter end={30} suffix="+" duration={2000} />
              </h3>
              <p className="text-base md:text-lg font-semibold text-gray-800 mt-2">States Reached</p>
              <p className="text-sm md:text-base text-gray-600">Across Nigeria</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">
                <Counter end={7} suffix="+" duration={1500} />
              </h3>
              <p className="text-base md:text-lg font-semibold text-gray-800 mt-2">Core Objectives</p>
              <p className="text-sm md:text-base text-gray-600">Focused on holistic development</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">
                <Counter end={6} suffix="+" duration={1500} />
              </h3>
              <p className="text-base md:text-lg font-semibold text-gray-800 mt-2">Countries</p>
              <p className="text-sm md:text-base text-gray-600">Expanding across Africa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;