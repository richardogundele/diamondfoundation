import Navbar from "../components/Navbar";
import ImpactStats from "../components/Impact";
import { GraduationCap, Heart, BookOpen, Users, HandHelpingIcon, Globe } from "lucide-react";

const ImpactPage = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Educational Support",
      description: "Providing scholarships, learning materials, and digital skills training to empower the next generation.",
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Delivering medical support, awareness campaigns, and child welfare programs to communities in need.",
    },
    {
      icon: BookOpen,
      title: "Spiritual Growth",
      description: "Offering faith-based mentorship, prayer sessions, and community outreach programs.",
    },
    {
      icon: Users,
      title: "Empowerment Programs",
      description: "Facilitating life skills training, mentorship, and leadership development initiatives.",
    },
    {
      icon: HandHelpingIcon,
      title: "Community Outreach",
      description: "Conducting regular orphanage visits, food relief programs, and donation drives.",
    },
    {
      icon: Globe,
      title: "Sustainable Development",
      description: "Implementing long-term strategies to ensure lasting community impact and growth.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-textPrimary mb-6">Our Impact</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              We measure our success by the lives transformed through our initiatives
            </p>
          </div>
          <ImpactStats />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <initiative.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  {initiative.title}
                </h3>
                <p className="text-textSecondary">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;