
import { ExternalLink, Heart, Users, Globe, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CommitmentSection = () => {
  const logoImagePath = "/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png";

  const commitments = [
    {
      icon: BookOpen,
      title: "Education + Digital Skills",
      description: "School renovations, scholarships, and tech training for future-ready children",
      color: "text-blue-500"
    },
    {
      icon: Globe,
      title: "Enterprise Pathways",
      description: "Freelancing, entrepreneurship support, and job readiness programs",
      color: "text-green-500"
    },
    {
      icon: Heart,
      title: "Faith in Action",
      description: "Christian love and compassion reflected through sustainable community impact",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-3 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Our Promise to Africa</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Beyond Charity. <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Building Futures.</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe charity alone cannot create lasting change. By merging compassion with innovation, we create spaces where children can learn, dream, and lead their communities into the future.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              {/* Large decorative image is non-critical; lazy-load to improve mobile performance */}
              <img 
                src={logoImagePath} 
                alt="Diamond Foundation" 
                loading="lazy"
                decoding="async"
                className="w-full object-cover h-[500px] transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating stats overlay */}
              <motion.div
                className="absolute bottom-8 left-8 right-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-gray-600">Lives Changed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">10+</div>
                      <div className="text-sm text-gray-600">States</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">6+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-800 leading-tight">
                Empowering Children Through 
                <span className="block text-blue-600">Education & Enterprise</span>
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                The Diamond Foundation creates sustainable solutions that enable children to break free from poverty 
                and thrive in the digital age. Through education, digital skills, and enterprise pathways, we build 
                systems that transform lives while reflecting the love of Jesus Christ through tangible impact.
              </p>
            </div>

            {/* Enhanced commitment cards */}
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md`}>
                      <commitment.icon className={`w-6 h-6 ${commitment.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{commitment.title}</h4>
                      <p className="text-gray-600">{commitment.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/about">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-4 text-lg font-semibold transform hover:scale-105">
                  <Users className="w-6 h-6" />
                  Learn More About Our Mission
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
