
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "thediamondfoundation2020@gmail.com",
      action: "mailto:thediamondfoundation2020@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+234 (0) 123 456 7890",
      action: "tel:+2341234567890"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      contact: "Ilorin, Kwara State, Nigeria",
      action: "https://maps.google.com"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const socialLinks = [
    { platform: "Facebook", url: "https://www.facebook.com/tdiamondfoundation", color: "from-blue-600 to-blue-700" },
    { platform: "Twitter", url: "https://x.com/tdfoundation_", color: "from-sky-500 to-sky-600" },
    { platform: "Instagram", url: "https://www.instagram.com/diamondfoundation_/", color: "from-pink-500 to-purple-600" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/diamond-foundation/", color: "from-blue-700 to-blue-800" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <MessageCircle className="text-white" size={24} />
              <span className="text-white font-semibold text-lg">Get In Touch</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Create <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Change Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Whether you want to partner with us, volunteer, or learn more about our mission, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods */}
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
              How to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reach Us</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to answer your questions and explore ways we can work together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="font-semibold text-blue-600 mb-6">{method.contact}</p>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                      asChild
                    >
                      <a href={method.action}>Contact Now</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Office Hours & Social Links */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Clock className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Office Hours</h3>
                  </div>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                        <span className="text-blue-600 font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Globe className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Follow Our Journey</h3>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Stay updated with our latest outreach programs, success stories, and community impact.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link, index) => (
                      <Button
                        key={index}
                        className={`bg-gradient-to-r ${link.color} text-white border-0 hover:scale-105 transition-transform duration-300`}
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.platform}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Join us in transforming lives and communities across Africa. Every conversation starts with a simple message.
            </p>
            <Button 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-all duration-300" 
              size="lg"
              asChild
            >
              <a href="mailto:thediamondfoundation2020@gmail.com">
                Send Us a Message <Send className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
