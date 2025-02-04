import Navbar from "../components/Navbar";
import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      title: "Founder/CEO",
      name: "Richard Ogundele",
      description: "Oversees strategy, partnerships, and fundraising",
    },
    {
      title: "Director (Africa)",
      description: "Leads outreach efforts across Africa, ensuring impact-driven programs",
    },
    {
      title: "Head of Volunteers",
      description: "Manages recruitment, training, and engagement of volunteers",
    },
    {
      title: "Head of Social Media/Publicity",
      description: "Promotes the foundation's work through digital channels",
    },
    {
      title: "Head of Prayer Team",
      description: "Provides spiritual support and intercession for our mission",
    },
    {
      title: "Head of Finance Team",
      description: "Ensures financial sustainability and transparency",
    },
    {
      title: "Head of Legal Team",
      description: "Handles legal compliance and governance matters",
    },
    {
      title: "Head of Education",
      description: "Develops training programs, scholarships, and mentorship initiatives",
    },
    {
      title: "Head of Fundraising Team",
      description: "Secures grants, sponsorships, and donations",
    },
    {
      title: "Head of Operations & Evaluation",
      description: "Monitors impact and ensures accountability",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-textPrimary mb-6">Our Team</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              Meet the passionate team leading Diamond Foundation in its mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-textPrimary mb-2 text-center">
                  {member.title}
                </h3>
                {member.name && (
                  <p className="text-primary font-medium text-center mb-2">{member.name}</p>
                )}
                <p className="text-textSecondary text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;