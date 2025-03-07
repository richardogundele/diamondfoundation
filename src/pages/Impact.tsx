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
      icon: Globe,
      title: "Sustainable Development",
      description: "Implementing long-term strategies to ensure lasting community impact and growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-600">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-600/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-textPrimary mb-6">Our Impact</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              We measure our success by the lives transformed through our initiatives.
            </p>
          </div>
          <ImpactStats />
          <div className="grid grid-cols-2 gap-4">
            {initiatives.map((initiative, index) => (
              <div key={index} className="p-4 border rounded shadow">
                <div className="flex items-center">
                  <initiative.icon className="text-2xl" />
                  <h3 className="ml-2 font-bold">{initiative.title}</h3>
                </div>
                <p>{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;