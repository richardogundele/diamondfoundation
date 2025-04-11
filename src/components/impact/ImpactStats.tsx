
import { motion } from "framer-motion";
import Stats, { stats } from "./Stats";
import Counter from "../Counter";

const ImpactStats = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-between items-center mb-8">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-textPrimary"
        >
          Impact Statistics
        </motion.h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.slice(4).map((stat, index) => (
          <Stats key={index} items={[stat]} />
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;
