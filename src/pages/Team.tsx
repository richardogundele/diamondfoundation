import Navbar from "../components/Navbar";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
  const leadershipTeam = [
    {
      title: "CEO & Founder",
      name: "Richard Ogundele",
      description: "Visionary leader who established the foundation with a passion for transforming lives through education and compassion.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    }
  ];

  const teamMembers = [
    {
      title: "Head of Volunteers",
      name: "Blessing Adeoye",
      description: "Manages recruitment, training, and engagement of volunteers",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      title: "Head of Social Media/Publicity",
      name: "Ololade Gbadamosi",
      description: "Promotes the foundation's work through digital channels",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      title: "Head of Prayer Team",
      name: "Oluwaseun Asonibare",
      description: "Provides spiritual support and intercession for our mission",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      title: "Head of Finance Team",
      name: "Miracle Aina",
      description: "Ensures financial sustainability and transparency",
      image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      title: "Head of Legal Team",
      name: "Lawrence Ogundele",
      description: "Handles legal compliance and governance matters",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      title: "Head of Education",
      name: "Kehinde Afolabi",
      description: "Develops training programs, scholarships, and mentorship initiatives",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      title: "Head of Fundraising Team",
      name: "Clement Ogundele",
      description: "Secures grants, sponsorships, and donations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      title: "Head of Operations & Evaluation",
      name: "Kehinde Afolabi",
      description: "Monitors impact and ensures accountability",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
  ];

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

          {/* Leadership Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-textPrimary text-center mb-8">Leadership</h2>
            <div className="max-w-3xl mx-auto">
              {leadershipTeam.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-100">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{leader.name}</h3>
                    <p className="text-lg font-medium text-gray-700 mb-4">{leader.title}</p>
                    <p className="text-gray-600">{leader.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Members Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16"
          >
            <h2 className="text-3xl font-semibold text-textPrimary text-center mb-8">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-textPrimary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;