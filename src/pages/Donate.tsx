
import Navbar from "../components/Navbar";
import { Heart, DollarSign, Coffee, Gift, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Donate = () => {
  const { toast } = useToast();
  
  // For demonstration purposes, we'll load an image from public folder
  const donateImagePath = "/lovable-uploads/0e8e87f4-a80c-4066-b2a2-f333c416a9bd.png";
  
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
  
  const handleDonateClick = (amount: string) => {
    toast({
      title: "Thank you for your generosity!",
      description: `Your donation of ${amount} will help us make a difference.`,
    });
    // In a real scenario, you would redirect to a payment gateway
  };

  const donationOptions = [
    {
      amount: "$10",
      title: "Basic Support",
      description: "Provides educational materials for one child",
      icon: Coffee,
    },
    {
      amount: "$50",
      title: "Friend of the Foundation",
      description: "Supports a community outreach program for a week",
      icon: Heart,
    },
    {
      amount: "$100",
      title: "Community Champion",
      description: "Funds a scholarship for a deserving student",
      icon: Gift,
    },
    {
      amount: "Custom",
      title: "Your Choice",
      description: "Make a donation of any amount you choose",
      icon: DollarSign,
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-600/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-section">
            <h1 className="text-4xl font-bold text-textPrimary mb-6">
              Make a Difference Today
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              Your donation helps us continue our mission to transform lives through love and compassion in communities across Africa.
            </p>
          </div>

          {/* GoFundMe Section */}
          <div className="my-12 fade-in-section">
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-blue-700 mb-3">Support Our GoFundMe Campaign</h2>
                    <p className="text-blue-600 mb-4">Help us reach more children and communities through our crowdfunding campaign.</p>
                    <Button className="bg-blue-700 hover:bg-blue-800" size="lg" asChild>
                      <a href="https://gofund.me/50d855ef" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Donate on GoFundMe <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <img 
                      src={donateImagePath} 
                      alt="Children benefiting from donations" 
                      className="h-48 w-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 fade-in-section">
              <img
                src={donateImagePath}
                alt="Donation Impact"
                className="rounded-lg shadow-lg w-full hover-card"
              />
            </div>

            <div className="space-y-6 fade-in-section">
              <h2 className="text-2xl font-semibold text-textPrimary">Your Donation Makes an Impact</h2>
              <p className="text-textSecondary">
                Every contribution, regardless of size, helps us make a meaningful difference in the lives of children and communities in need.
              </p>
              <ul className="space-y-3 text-textSecondary">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-1">
                    <DollarSign size={14} />
                  </span>
                  Provide educational resources to underprivileged children
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-1">
                    <DollarSign size={14} />
                  </span>
                  Support community development programs
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-1">
                    <DollarSign size={14} />
                  </span>
                  Fund healthcare initiatives for those in need
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-1">
                    <DollarSign size={14} />
                  </span>
                  Create sustainable empowerment opportunities
                </li>
              </ul>
            </div>
          </div>
          
          <div className="fade-in-section">
            <h2 className="text-2xl font-semibold text-textPrimary text-center mb-8">Choose Your Donation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationOptions.map((option, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover-card"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <option.icon className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{option.title}</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">{option.amount}</p>
                    <p className="text-textSecondary mb-4">{option.description}</p>
                    <button 
                      onClick={() => handleDonateClick(option.amount)}
                      className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors animated-button"
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16 fade-in-section">
            <p className="text-textSecondary max-w-3xl mx-auto mb-6">
              For corporate donations or other inquiries, please contact us at <a href="mailto:thediamondfoundation2020@gmail.com" className="text-blue-600 hover:underline">thediamondfoundation2020@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
