import { Calendar, MapPin, Users, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface May2026OutreachProps {
  title: string;
  imageSrc?: string;
}

const May2026Outreach = ({ title }: May2026OutreachProps) => {
  const outreachStats = [
    { icon: Users, label: "Children Reached", value: "TBD", color: "from-blue-500 to-cyan-600" },
    { icon: MapPin, label: "Locations", value: "TBD", color: "from-green-500 to-emerald-600" },
    { icon: Heart, label: "Items Distributed", value: "TBD", color: "from-purple-500 to-violet-600" },
    { icon: Target, label: "Budget", value: "TBD", color: "from-rose-500 to-pink-600" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-blue-50 rounded-full px-6 py-3 mb-6">
          <Calendar className="text-blue-600" size={24} />
          <span className="text-blue-800 font-semibold">Upcoming Outreach</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Join us for our upcoming May 2026 outreach as we continue our mission to transform lives and bring hope to communities across Nigeria.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Left Column - Image */}
        <div className="space-y-6">
          <Card className="overflow-hidden shadow-xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Calendar size={64} className="mx-auto mb-4 text-blue-400" />
                <p className="text-lg">Outreach Image Coming Soon</p>
                <p className="text-sm mt-2">May 2026</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Outreach Overview</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                Our May 2026 outreach represents our continued commitment to reaching underserved communities with love, support, and essential resources.
              </p>
              <p className="text-lg leading-relaxed">
                This outreach will focus on providing educational materials, healthcare support, and spiritual encouragement to children and families in need.
              </p>
            </div>
          </div>

          {/* Planning Phase Notice */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Currently in Planning Phase</h3>
                  <p className="text-blue-800">
                    We are actively planning this outreach and will update this page with specific details, locations, and requirements as they become available.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {outreachStats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How to Get Involved */}
      <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-8 text-blue-100">
            Want to be part of this transformative outreach? Here's how you can help make a difference.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <Heart className="mx-auto mb-4 text-pink-300" size={32} />
              <h3 className="font-semibold mb-2">Volunteer</h3>
              <p className="text-blue-100 text-sm">Join our volunteer team and make a direct impact</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Target className="mx-auto mb-4 text-yellow-300" size={32} />
              <h3 className="font-semibold mb-2">Donate</h3>
              <p className="text-blue-100 text-sm">Support our mission with financial contributions</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Users className="mx-auto mb-4 text-green-300" size={32} />
              <h3 className="font-semibold mb-2">Spread the Word</h3>
              <p className="text-blue-100 text-sm">Share our mission with your community</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default May2026Outreach;