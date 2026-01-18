import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Heart, Calendar, MapPin } from "lucide-react";

const PartnershipsSection = () => {
  const partnerships = [
    {
      name: "The Sauced Academy",
      logo: "/lovable-uploads/partnership-sauced-academy.png", // Placeholder for logo
      description: "Partnering with The Sauced Academy to provide JAMB examination fees for 250 students across Nigeria. The Diamond Foundation is proudly sponsoring 20 students, empowering them with access to quality education and university opportunities.",
      impact: "20 Students Sponsored",
      totalBeneficiaries: "250 Students Total",
      date: "22nd January 2026",
      location: "Abuja, Nigeria",
      color: "from-blue-500 to-cyan-600",
      stats: [
        { icon: Users, label: "Students Sponsored", value: "20" },
        { icon: GraduationCap, label: "Total Beneficiaries", value: "250" },
        { icon: Calendar, label: "Event Date", value: "Jan 22, 2026" }
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Strategic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Partnerships</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together with our partners, we're creating pathways to education and opportunity for thousands of students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {partnerships.map((partnership, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl border-none hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Partnership Info */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${partnership.color} flex items-center justify-center shadow-lg`}>
                          <GraduationCap className="text-white" size={32} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800">{partnership.name}</h3>
                          <p className="text-blue-600 font-semibold">Education Partnership</p>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {partnership.description}
                      </p>

                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                          <MapPin className="text-blue-600" size={18} />
                          <span className="text-sm font-semibold text-gray-700">{partnership.location}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                          <Calendar className="text-purple-600" size={18} />
                          <span className="text-sm font-semibold text-gray-700">{partnership.date}</span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                        <Heart size={20} />
                        <span>{partnership.impact}</span>
                      </div>
                    </div>

                    {/* Partnership Stats */}
                    <div className="space-y-4">
                      {partnership.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${partnership.color} flex items-center justify-center`}>
                              <stat.icon className="text-white" size={24} />
                            </div>
                            <div>
                              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                              <p className={`text-2xl font-bold bg-gradient-to-r ${partnership.color} bg-clip-text text-transparent`}>
                                {stat.value}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 mb-4">
            Interested in partnering with us to make a difference?
          </p>
          <a
            href="mailto:admin@thediamondfoundation.org"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg hover:underline"
          >
            Contact us about partnership opportunities
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnershipsSection;
