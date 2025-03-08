
import Navbar from "../components/Navbar";
import donateImage from "../images/Donate.JPG"; // Ensuring correct capitalization

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-600/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-textPrimary mb-6 animate-fade-up">
              Make a Difference Today
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up delay-100">
              <img
                src={donateImage}
                alt="Donation Impact"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="space-y-6 animate-fade-up delay-200">
              <h2 className="text-2xl font-semibold text-textPrimary">Your Donation Makes an Impact</h2>
              <p className="text-textSecondary">
                Your generous donation helps us:
              </p>
              <ul className="space-y-3 text-textSecondary list-disc list-inside">
                <li>Provide educational resources to underprivileged children</li>
                <li>Support community development programs</li>
                <li>Fund healthcare initiatives for those in need</li>
                <li>Create sustainable empowerment opportunities</li>
              </ul>
              
              <button 
                onClick={() => window.open('PAYMENT_GATEWAY_URL', '_blank')}
                className="mt-8 bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold
                         hover:scale-105 hover:shadow-lg transform transition-all duration-300
                         animate-pulse hover:animate-none"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
