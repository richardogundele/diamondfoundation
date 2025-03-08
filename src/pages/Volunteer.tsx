
import Navbar from "../components/Navbar";
import { Heart, BookOpen, Users, MessageSquare, Clock, Star, Award, Zap } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Volunteer = () => {
  const { toast } = useToast();
  
  // For demonstration purposes, we'll load an image from public folder
  const volunteerImagePath = "/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png";
  
  useEffect(() => {
    // Initialize animation for sections with class "fade-in-section"
    const observerOptions = {
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleVolunteerClick = () => {
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch with you soon about volunteering opportunities.",
    });
  };
  
  const opportunities = [
    {
      icon: Heart,
      title: "Mentoring",
      description: "Guide and support children and young adults in their personal development",
      commitment: "4-6 hours/week",
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Support our programs and events in local communities",
      commitment: "Flexible hours",
    },
    {
      icon: BookOpen,
      title: "Professional Expertise",
      description: "Contribute your skills in education, healthcare, or fundraising",
      commitment: "Project-based",
    },
    {
      icon: MessageSquare,
      title: "Advocacy",
      description: "Spread awareness about our cause through social media and networking",
      commitment: "2-3 hours/week",
    },
  ];
  
  const volunteerPositions = [
    {
      title: "Content Creator",
      skills: ["Writing", "Design", "Social Media"],
      icon: Zap,
    },
    {
      title: "Fundraising Manager",
      skills: ["Fundraising", "Communication", "Networking"],
      icon: Star,
    },
    {
      title: "Head of Education",
      skills: ["Teaching", "Curriculum Development", "Leadership"],
      icon: BookOpen,
    },
    {
      title: "Website Manager",
      skills: ["Web Development", "Design", "Content Management"],
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-600/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-section">
            <h1 className="text-4xl font-bold text-textPrimary mb-6">Volunteer With Us</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              Join our mission and help make a difference in the lives of those who need it most. 
              Your time and talents can create lasting impact.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden mb-16 fade-in-section">
            <img 
              src={volunteerImagePath} 
              alt="Volunteer" 
              className="w-full h-64 object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-transparent flex items-center">
              <div className="text-white p-8 max-w-lg">
                <h2 className="text-3xl font-bold mb-4">Make An Impact</h2>
                <p className="text-white/90 mb-6">
                  Volunteering with Diamond Foundation means joining a community dedicated to 
                  uplifting underprivileged children and communities across Africa.
                </p>
                <Button 
                  onClick={handleVolunteerClick}
                  className="bg-white text-blue-600 hover:bg-blue-50 animated-button"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mb-20 fade-in-section">
            <h2 className="text-2xl font-semibold text-textPrimary text-center mb-8">How You Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover-card"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <opportunity.icon className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{opportunity.title}</h3>
                    <p className="text-textSecondary mb-4">{opportunity.description}</p>
                    <div className="flex items-center text-sm text-blue-600">
                      <Clock size={16} className="mr-1" />
                      <span>{opportunity.commitment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16 fade-in-section">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-textPrimary text-center mb-8">Open Positions</h2>
              <p className="text-center text-textSecondary mb-8">
                We are currently looking for dedicated individuals to fill these important roles:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {volunteerPositions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover-card"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <position.icon className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-lg font-semibold">{position.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {position.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={handleVolunteerClick}
                      className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors animated-button"
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center fade-in-section">
            <p className="text-lg text-textSecondary max-w-3xl mx-auto mb-8">
              We are also in need of project managers and representatives from African countries to help us expand our reach and impact.
            </p>
            <Button 
              onClick={handleVolunteerClick}
              className="bg-primary text-white px-8 py-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors animated-button"
            >
              Join Our Team Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
