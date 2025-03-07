import Navbar from "../components/Navbar";
import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      title: "CEO",
      name: "Richard Ogundele",
      description: "Oversees strategy, partnerships, and fundraising",
    },
    {
      title: "Head of Volunteers",
      name: "Blessing Adeoye",
      description: "Manages recruitment, training, and engagement of volunteers",
    },
    {
      title: "Head of Social Media/Publicity",
      name: "Ololade Gbadamosi",
      description: "Promotes the foundation's work through digital channels",
    },
    {
      title: "Head of Prayer Team",
      name: "Oluwaseun Asonibare",
      description: "Provides spiritual support and intercession for our mission",
    },
    {
      title: "Head of Finance Team",
      name: "Miracle Aina",
      description: "Ensures financial sustainability and transparency",
    },
    {
      title: "Head of Legal Team",
      name: "Lawrence Ogundele",
      description: "Handles legal compliance and governance matters",
    },
    {
      title: "Head of Education",
      name: "Kehinde Afolabi",
      description: "Develops training programs, scholarships, and mentorship initiatives",
    },
    {
      title: "Head of Fundraising Team",
      name: "Clement Ogundele",
      description: "Secures grants, sponsorships, and donations",
    },
    {
      title: "Head of Operations & Evaluation",
      name: "Kehinde Afolabi",
      description: "Monitors impact and ensures accountability",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-600">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-600/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-textPrimary mb-6">Our Team</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              Meet the dedicated individuals working tirelessly to transform lives and create lasting change.
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