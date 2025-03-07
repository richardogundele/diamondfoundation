import { Users, BookOpen, Heart, Globe } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "1M+",
      label: "Children Impacted",
      description: "Target impact over 10 years",
    },
    {
      icon: BookOpen,
      number: "30+",
      label: "States Reached",
      description: "Across Nigeria",
    },
    {
      icon: Heart,
      number: "7",
      label: "Core Objectives",
      description: "Focused on holistic development",
    },
    {
      icon: Globe,
      number: "6",
      label: "Countries",
      description: "Expanding across Africa",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-accent2 bg-opacity-50 hover:bg-opacity-70 transition-colors"
            >
              <div className="inline-block p-3 bg-primary rounded-full text-white mb-4">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </h3>
              <p className="text-lg font-semibold text-textPrimary mb-1">
                {stat.label}
              </p>
              <p className="text-textSecondary">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;