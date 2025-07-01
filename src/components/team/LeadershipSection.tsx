
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { organizationData } from "../../data/teamData";

const LeadershipSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-20"
        >
          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-none max-w-md hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${organizationData.founder.color} flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg`}>
                {organizationData.founder.avatar}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{organizationData.founder.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{organizationData.founder.title}</p>
              <p className="text-gray-600 leading-relaxed">{organizationData.founder.description}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Directors */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center"
        >
          {organizationData.directors.map((director, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="w-full max-w-sm"
            >
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-none hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${director.color} flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold shadow-lg`}>
                    {director.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{director.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{director.title}</p>
                  <p className="text-gray-600">{director.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LeadershipSection;
