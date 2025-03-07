import Navbar from "../components/Navbar";
import { Heart, BookOpen, Users, MessageSquare } from "lucide-react";

const Volunteer = () => {
  const opportunities = [
    {
      icon: Heart,
      title: "Mentoring",
      description: "Guide and support children and young adults in their personal development",
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Support our programs and events in local communities",
    },
    {
      icon: BookOpen,
      title: "Professional Expertise",
      description: "Contribute your skills in education, healthcare, or fundraising",
    },
    {
      icon: MessageSquare,
      title: "Advocacy",
      description: "Spread awareness about our cause through social media and networking",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-textPrimary mb-6">Volunteer With Us</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              Become part of something bigger—volunteer with Diamond Foundation. Whether you want to donate your time, skills, or resources, you can help transform lives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <opportunity.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  {opportunity.title}
                </h3>
                <p className="text-textSecondary">{opportunity.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;