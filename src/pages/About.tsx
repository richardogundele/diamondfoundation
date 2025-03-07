import Navbar from "../components/Navbar";

const About = () => {
  const visionPoints = [
    "Educational Support: Provide scholarships, learning materials, and skill acquisition programs to ensure quality education for disadvantaged children.",
    "Healthcare Access: Offer basic health services, awareness programs, and medical support to improve the well-being of children in need.",
    "Spiritual Growth: Share messages of hope and faith through spiritual mentoring, prayer sessions, and outreach campaigns.",
    "Empowerment Programs: Equip children with life skills, mentorship, and leadership training to build confidence and independence.",
    "Community Outreach: Reach underserved communities through regular orphanage visits, donation drives, and care programs.",
    "Partnerships: Collaborate with local and international organizations to expand the foundation's impact and reach.",
    "Sustainability: Develop strategies to ensure long-term support and measurable outcomes for every project and initiative."
  ];

  return (
    <div className="min-h-screen bg-blue-600">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-600/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl font-bold text-textPrimary mb-6">About Us</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Diamond Foundation is dedicated to transforming lives through acts of love and compassion. We focus on providing educational support, digital literacy, and creating sustainable impact across Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-16 animate-fade-up delay-100">
            {/* Mission Statement */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
              <p className="text-textSecondary">
                To transform lives through love and compassion, creating lasting positive change in communities across Africa through education, digital literacy, and spiritual empowerment.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
              <p className="text-textSecondary">
                To be a leading force in creating self-sustaining communities where every individual has access to quality education, digital skills, and opportunities for personal growth.
              </p>
            </div>

            {/* Long-term Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Long-term Vision</h2>
              <p className="text-textSecondary">
                To establish a network of empowered communities across Africa, fostering sustainable development through education, healthcare initiatives, and spiritual growth programs.
              </p>
            </div>

            {/* Our Aim */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Aim</h2>
              <p className="text-textSecondary">
                To reach and positively impact one million lives by 2030 through our comprehensive programs, creating lasting change that spans generations.
              </p>
            </div>
          </div>

          {/* Core Objectives */}
          <div className="space-y-6 animate-fade-up delay-200">
            <h2 className="text-2xl font-semibold text-textPrimary text-center mb-8">Core Objectives</h2>
            <div className="grid gap-4">
              {visionPoints.map((point, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-textSecondary">
                    <span className="font-semibold text-blue-600">{index + 1}. </span>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;