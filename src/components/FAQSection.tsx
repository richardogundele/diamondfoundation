import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Users, Heart, Globe, DollarSign, Calendar, ArrowRight, Sparkles } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    { id: "item-1", icon: Heart, question: "How can I get involved as a volunteer?", answer: "We welcome volunteers from all backgrounds! You can apply through our volunteer application form, attend our orientation sessions, or join specific outreach programs. We offer both local and remote volunteer opportunities including mentoring, event planning, social media support, and field work during our community outreaches." },
    { id: "item-2", icon: DollarSign, question: "Where does my donation go?", answer: "100% of your donation goes directly to our programs. We maintain complete transparency with detailed financial reports published quarterly. Your donations fund education scholarships, healthcare initiatives, clean water projects, emergency relief, and community development programs across Africa." },
    { id: "item-3", icon: Globe, question: "Which countries do you operate in?", answer: "We currently have active programs in Nigeria, Ghana, Kenya, Uganda, and Tanzania, with plans to expand to 5 more African countries by 2026. Our work focuses on underserved communities in both rural and urban areas." },
    { id: "item-4", icon: Users, question: "How do you measure your impact?", answer: "We use comprehensive monitoring and evaluation frameworks to track our impact. This includes beneficiary feedback, third-party assessments, and data-driven metrics. We publish annual impact reports with detailed statistics." },
    { id: "item-5", icon: Calendar, question: "How often do you organize outreaches?", answer: "We organize major community outreaches quarterly in each operational country, with smaller targeted programs monthly. Our flagship 'Mega Outreach' happens annually and serves thousands of beneficiaries." },
    { id: "item-6", icon: HelpCircle, question: "Can I sponsor a specific child or project?", answer: "Yes! We offer both child sponsorship programs and project-specific funding options. Child sponsorship includes education, healthcare, and mentoring support with regular updates and communication opportunities." }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <motion.div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-6" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground">Got Questions?</span>
          </motion.div>
          <h2 className="font-display font-bold text-foreground mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <div className="w-24 h-1.5 gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about our mission and how you can get involved</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <AccordionItem value={faq.id} className="glass-card rounded-2xl px-6 border-0 overflow-hidden">
                  <AccordionTrigger className="text-left py-6 hover:no-underline group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <faq.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="ml-16 text-muted-foreground leading-relaxed">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Still have questions? We'd love to hear from you!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-premium text-primary-foreground px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group">
                Contact Us <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;