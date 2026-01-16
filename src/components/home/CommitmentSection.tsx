import { ExternalLink, Heart, Users, Globe, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CommitmentSection = () => {
  const logoImagePath = "/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png";

  const commitments = [
    {
      icon: BookOpen,
      title: "Education + Digital Skills",
      description: "School renovations, scholarships, and tech training for future-ready children",
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Globe,
      title: "Enterprise Pathways",
      description: "Freelancing, entrepreneurship support, and job readiness programs",
      gradient: "from-accent to-accent-light"
    },
    {
      icon: Heart,
      title: "Faith in Action",
      description: "Christian love and compassion reflected through sustainable community impact",
      gradient: "from-coral to-primary"
    }
  ];

  const stats = [
    { value: "500+", label: "Lives Changed" },
    { value: "10+", label: "States" },
    { value: "6+", label: "Countries" }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground">Our Promise to Africa</span>
          </motion.div>
          
          <h2 className="font-display font-bold text-foreground mb-6">
            Beyond Charity. <span className="text-gradient">Building Futures.</span>
          </h2>
          <div className="w-24 h-1.5 gradient-primary rounded-full mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe charity alone cannot create lasting change. By merging compassion with innovation, 
            we create spaces where children can learn, dream, and lead their communities into the future.
          </p>
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-premium group">
              <img 
                src={logoImagePath} 
                alt="Diamond Foundation" 
                loading="lazy"
                className="w-full object-cover h-[500px] lg:h-[600px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              
              {/* Floating Stats Card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="glass-card rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 gradient-gold rounded-3xl -z-10 opacity-50 blur-sm" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 gradient-primary rounded-3xl -z-10 opacity-30 blur-sm" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                Empowering Children Through 
                <span className="block text-gradient">Education & Enterprise</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Diamond Foundation creates sustainable solutions that enable children to break free from poverty 
                and thrive in the digital age. Through education, digital skills, and enterprise pathways, we build 
                systems that transform lives while reflecting the love of Jesus Christ through tangible impact.
              </p>
            </div>

            {/* Commitment Cards */}
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  className="glass-card rounded-2xl p-6 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${commitment.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <commitment.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{commitment.title}</h4>
                      <p className="text-muted-foreground">{commitment.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/about">
                <button className="btn-premium text-primary-foreground px-10 py-4 rounded-full flex items-center gap-4 text-lg font-bold group">
                  <Users className="w-6 h-6" />
                  Learn More About Our Mission
                  <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;