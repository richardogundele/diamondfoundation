import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Users, Heart, Globe, DollarSign, Calendar } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      icon: Heart,
      question: "How can I get involved as a volunteer?",
      answer: "We welcome volunteers from all backgrounds! You can apply through our volunteer application form, attend our orientation sessions, or join specific outreach programs. We offer both local and remote volunteer opportunities including mentoring, event planning, social media support, and field work during our community outreaches."
    },
    {
      id: "item-2", 
      icon: DollarSign,
      question: "Where does my donation go?",
      answer: "100% of your donation goes directly to our programs. We maintain complete transparency with detailed financial reports published quarterly. Your donations fund education scholarships, healthcare initiatives, clean water projects, emergency relief, and community development programs across Africa. Administrative costs are covered separately through grants and partnerships."
    },
    {
      id: "item-3",
      icon: Globe,
      question: "Which countries do you operate in?",
      answer: "We currently have active programs in Nigeria, Ghana, Kenya, Uganda, and Tanzania, with plans to expand to 5 more African countries by 2026. Our work focuses on underserved communities in both rural and urban areas, with projects tailored to each region's specific needs and challenges."
    },
    {
      id: "item-4",
      icon: Users,
      question: "How do you measure your impact?",
      answer: "We use comprehensive monitoring and evaluation frameworks to track our impact. This includes beneficiary feedback, third-party assessments, and data-driven metrics such as: number of students supported through education programs, healthcare services provided, clean water access improved, and community development projects completed. We publish annual impact reports with detailed statistics."
    },
    {
      id: "item-5",
      icon: Calendar,
      question: "How often do you organize outreaches?",
      answer: "We organize major community outreaches quarterly in each operational country, with smaller targeted programs monthly. Our flagship 'Mega Outreach' happens annually and serves thousands of beneficiaries. Additionally, we run ongoing programs like scholarship distributions, health camps, and educational workshops throughout the year."
    },
    {
      id: "item-6",
      icon: HelpCircle,
      question: "Can I sponsor a specific child or project?",
      answer: "Yes! We offer both child sponsorship programs and project-specific funding options. Child sponsorship includes education, healthcare, and mentoring support with regular updates and communication opportunities. For projects, you can sponsor water wells, school buildings, medical equipment, or entire community programs with full progress tracking and completion reports."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our mission, programs, and how you can get involved
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={faq.id} 
                  className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline group">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                        <faq.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="ml-14 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">Contact Us</Link>
            </motion.div>
            <motion.a
              href="mailto:info@diamondfoundation.org"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;