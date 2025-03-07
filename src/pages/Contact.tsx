import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-textPrimary mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              We'd love to hear from you! Reach out to us for inquiries, partnerships, or ways to get involved.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-textPrimary mb-2">Email</h3>
              <p className="text-textSecondary">contact@diamondfoundation.org</p>
            </div>
            <div className="text-center p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-textPrimary mb-2">Phone</h3>
              <p className="text-textSecondary">+1 (234) 567-8900</p>
            </div>
            <div className="text-center p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-textPrimary mb-2">Address</h3>
              <p className="text-textSecondary">123 Charity Lane<br />Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;