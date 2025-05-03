
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CommitmentSection = () => {
  const logoImagePath = "/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png";

  return (
    <div className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 fade-in-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-textPrimary mb-4">Our Commitment</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={logoImagePath} 
              alt="Diamond Foundation" 
              className="rounded-xl shadow-xl w-full object-cover h-[400px]"
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-textPrimary">Transforming Lives Through Love</h3>
            <p className="text-lg text-textSecondary">
              At Diamond Foundation, we believe that every child deserves access to quality education, 
              healthcare, and opportunities to thrive. Our commitment is to create sustainable change 
              that empowers communities and transforms lives across Africa.
            </p>
            <p className="text-lg text-textSecondary">
              Through dedicated volunteer efforts and strategic partnerships, we're building a future where 
              no child is left behind due to circumstances beyond their control.
            </p>
            <div className="pt-6">
              <Link to="/about">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 
                        shadow-md hover:shadow-lg transition-all flex items-center gap-3 text-lg">
                  Learn More About Our Mission
                  <ExternalLink size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
