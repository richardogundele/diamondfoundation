
import Navbar from "../components/Navbar";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
  const organizationData = {
    founder: {
      title: "CEO & Founder",
      name: "Richard Ogundele",
      description: "Visionary leader who established the foundation with a passion for transforming lives through education and compassion.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    directors: [
      {
        title: "Director, Africa",
        name: "Lawrence Ogundele",
        description: "Handles legal compliance and governance matters",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      }
    ],
    departments: [
      {
        head: {
          title: "Head of Social Media/Publicity",
          name: "Ololade Gbadamosi",
          description: "Promotes the foundation's work through digital channels",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        team: ["Graphic Designers", "Social Media Managers", "Content Creators"]
      },
      {
        head: {
          title: "Head of Volunteers",
          name: "Blessing Adeoye",
          description: "Manages recruitment, training, and engagement of volunteers",
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        team: ["Volunteer Coordinators", "Training Specialists"]
      },
      {
        head: {
          title: "Head of Prayer Team",
          name: "Oluwaseun Asonibare",
          description: "Provides spiritual support and intercession for our mission",
          image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        team: ["Prayer Coordinators", "Spiritual Support Team"]
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
          <div className="mt-16 flex flex-col items-center">
            {/* Founder Level */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mb-16"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-72 text-center relative">
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-8 w-0.5 bg-blue-600"></div>
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                  <img src={organizationData.founder.image} alt={organizationData.founder.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-blue-600">{organizationData.founder.name}</h3>
                <p className="text-gray-600 font-medium mt-1">{organizationData.founder.title}</p>
              </div>
            </motion.div>

            {/* Directors Level */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mb-16"
            >
              <div className="relative">
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-8 w-0.5 bg-blue-600"></div>
                {organizationData.directors.map((director, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-64 text-center">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                      <img src={director.image} alt={director.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-600">{director.name}</h3>
                    <p className="text-gray-600 font-medium mt-1">{director.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Department Heads Level */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
            >
              {organizationData.departments.map((dept, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-64 text-center">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                      <img src={dept.head.image} alt={dept.head.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-600">{dept.head.name}</h3>
                    <p className="text-gray-600 font-medium mt-1">{dept.head.title}</p>
                  </div>
                  
                  {/* Team Members */}
                  <div className="mt-8 bg-gray-50 p-4 rounded-lg w-full">
                    <ul className="space-y-2">
                      {dept.team.map((member, idx) => (
                        <li key={idx} className="text-gray-600 text-sm text-center">{member}</li>
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
