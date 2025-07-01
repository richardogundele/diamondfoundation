
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { organizationData } from "../../data/teamData";

const DepartmentsSection = () => {
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Department Leaders</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Department Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {organizationData.departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${dept.head.color} flex items-center justify-center mr-4 text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {dept.head.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800">{dept.head.name}</h3>
                      <p className="text-blue-600 font-semibold text-sm">{dept.head.title}</p>
                    </div>
                    {dept.head.icon && (
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <dept.head.icon className="text-blue-600" size={20} />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{dept.head.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Team Members:</h4>
                    <ul className="space-y-2">
                      {dept.team.map((member, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentsSection;
