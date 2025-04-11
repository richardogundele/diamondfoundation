
import React from 'react';
import { motion } from "framer-motion";
import Counter from '../Counter';

interface OutreachStatsProps {
  title: string;
  description: string;
  imageCarousel: React.ReactNode;
}

const OutreachStats = ({ title, description, imageCarousel }: OutreachStatsProps) => {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-96 lg:h-auto rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {imageCarousel}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-textPrimary mb-4">Project Overview</h3>
            <div className="space-y-4 text-textSecondary">
              <p>
                In the joy of the Christmas season, the Diamond Foundation partnered to raise <span className="font-semibold">£1,030</span> to provide educational resources and food items to orphaned children.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-center p-6 bg-white rounded-lg shadow-lg"
                >
                  <h4 className="text-4xl font-bold text-primary mb-1">
                    <Counter end={100} suffix="+" />
                  </h4>
                  <p className="text-sm">Children Impacted</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-center p-6 bg-white rounded-lg shadow-lg"
                >
                  <h4 className="text-4xl font-bold text-primary mb-1">
                    <Counter end={60} suffix="+" />
                  </h4>
                  <p className="text-sm">Volunteers</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-center p-6 bg-white rounded-lg shadow-lg"
                >
                  <h4 className="text-4xl font-bold text-primary mb-1">
                    <Counter end={8} />
                  </h4>
                  <p className="text-sm">Orphanages</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-center p-6 bg-white rounded-lg shadow-lg"
                >
                  <h4 className="text-4xl font-bold text-primary mb-1">
                    <Counter end={6} />
                  </h4>
                  <p className="text-sm">Geopolitical Zones</p>
                </motion.div>
              </div>
              <motion.blockquote 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="italic border-l-4 border-primary pl-4 mt-6 bg-white/50 p-4 rounded-r-lg shadow-sm"
              >
                "The love of Christ has compelled us to reach out to orphaned kids this Christmas, showing them love, kindness, and compassion in His name."
                <footer className="text-sm mt-2 font-medium">- Director</footer>
              </motion.blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OutreachStats;
