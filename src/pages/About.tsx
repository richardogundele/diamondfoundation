import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-textPrimary mb-6">About Us</h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-textSecondary mb-6">
              At Diamond Foundation, we believe in action-driven faith. Founded by Richard Ogundele, 
              our mission is to break the cycle of poverty through education, vocational training, 
              and community development.
            </p>
            <p className="text-lg text-textSecondary mb-6">
              We address both immediate and long-term challenges by equipping individuals with the 
              tools they need to thrive. Rooted in the teachings of Jesus Christ, our foundation 
              exemplifies love through tangible acts of kindness and generosity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;