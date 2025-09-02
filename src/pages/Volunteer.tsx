
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VolunteerHero from "../components/volunteer/VolunteerHero";
import OpportunitiesSection from "../components/volunteer/OpportunitiesSection";
import OpenPositionsSection from "../components/volunteer/OpenPositionsSection";
import OutreachHostSection from "../components/volunteer/OutreachHostSection";
import VolunteerCTA from "../components/volunteer/VolunteerCTA";
import { motion } from "framer-motion";

const Volunteer = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <VolunteerHero />
      
      {/* Main Content */}
      <main role="main">
        {/* Outreach Host Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <OutreachHostSection />
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                How You Can <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Make a Difference</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from various volunteering opportunities that match your skills and passion
              </p>
            </motion.div>
            <OpportunitiesSection />
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Open <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Leadership Positions</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our leadership team and help shape the future of our foundation
              </p>
            </motion.div>
            <OpenPositionsSection />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Make a <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Difference?</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
                Join our community of passionate volunteers dedicated to transforming lives across Africa. Your journey of impact starts here.
              </p>
              <VolunteerCTA />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Volunteer;
