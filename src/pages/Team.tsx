import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Team = () => {
  const organizationData = {
    founder: {
      title: "CEO & Founder",
      name: "Richard Ogundele",
      description: "Visionary leader who established the foundation with a passion for transforming lives through education and compassion."
    },
    directors: [
      {
        title: "Director, Africa",
        name: "Kehinde Afolabi",
        description: "Handles operations and initiatives across Africa"
      },
      {
        title: "Director, Asia",
        name: "To be appointed",
        description: "Oversees expansion and operations in Asia"
      }
    ],
    departments: [
      {
        head: {
          title: "Head of Social Media/Publicity",
          name: "Ololade Gbadamosi",
          description: "Promotes the foundation's work through digital channels"
        },
        team: ["Graphic Designers", "Social Media Managers", "Content Creators"]
      },
      {
        head: {
          title: "Head of Volunteers",
          name: "Blessing Adeoye",
          description: "Manages recruitment, training, and engagement of volunteers"
        },
        team: ["Volunteer Coordinators", "Training Specialists"]
      },
      {
        head: {
          title: "Head of Prayer Team",
          name: "Oluwaseun Asonibare",
          description: "Provides spiritual support and intercession for our mission"
        },
        team: ["Prayer Coordinators", "Spiritual Support Team"]
      },
      {
        head: {
          title: "Legal Adviser",
          name: "Lawrence Ogundele",
          description: "Provides legal guidance and ensures compliance"
        },
        team: ["Legal Consultants", "Compliance Specialists"]
      },
      {
        head: {
          title: "Head of Finances",
          name: "To be appointed",
          description: "Manages financial planning and resource allocation"
        },
        team: ["Financial Analysts", "Accounting Specialists"]
      }
    ]
  };

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
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-600/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-textPrimary mb-6">Our Team</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              Meet the dedicated individuals working tirelessly to transform lives and create lasting change.
            </p>
          </motion.div>

          {/* Organizational Chart */}
          <div className="mt-16">
            {/* Founder Level */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-72 text-center relative mb-12">
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-8 w-0.5 bg-blue-600"></div>
                <h3 className="text-xl font-bold text-blue-600">{organizationData.founder.name}</h3>
                <p className="text-gray-600 font-medium mt-1">{organizationData.founder.title}</p>
              </div>
            </motion.div>

            {/* Directors Level */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-8 justify-items-center mt-12 relative"
            >
              <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-blue-600"></div>
              {organizationData.directors.map((director, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute top-0 left-1/2 h-8 w-0.5 bg-blue-600 -translate-x-1/2 -translate-y-full"></div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-64 text-center">
                    <h3 className="text-lg font-bold text-blue-600">{director.name}</h3>
                    <p className="text-gray-600 font-medium mt-1">{director.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Department Heads Level */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-8 mt-16 relative"
            >
              <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-blue-600"></div>
              {organizationData.departments.map((dept, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <div className="relative">
                    <div className="absolute top-0 left-1/2 h-8 w-0.5 bg-blue-600 -translate-x-1/2 -translate-y-full"></div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-64 text-center mb-8">
                      <h3 className="text-lg font-bold text-blue-600">{dept.head.name}</h3>
                      <p className="text-gray-600 font-medium mt-1">{dept.head.title}</p>
                    </div>
                  </div>
                  
                  {/* Team Members */}
                  <div className="bg-gray-50 p-4 rounded-lg w-full">
                    <ul className="space-y-2">
                      {dept.team.map((member, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">{member}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
