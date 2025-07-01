
import { User, Users, Heart, Shield, Target, Globe } from "lucide-react";

export const organizationData = {
  founder: {
    title: "CEO & Founder",
    name: "Richard Ogundele",
    description: "Visionary leader who established the foundation with a passion for transforming lives through education and compassion.",
    avatar: "RO",
    color: "from-blue-600 to-purple-600"
  },
  directors: [
    {
      title: "Director, Africa",
      name: "Kehinde Afolabi",
      description: "Handles operations and initiatives across Africa",
      avatar: "KA",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Director, Asia",
      name: "To be appointed",
      description: "Oversees expansion and operations in Asia",
      avatar: "?",
      color: "from-gray-400 to-gray-600"
    }
  ],
  departments: [
    {
      head: {
        title: "Head of Social Media/Publicity",
        name: "Ololade Gbadamosi",
        description: "Promotes the foundation's work through digital channels",
        avatar: "OG",
        color: "from-pink-500 to-rose-600",
        icon: Globe
      },
      team: ["Graphic Designers", "Social Media Managers", "Content Creators"]
    },
    {
      head: {
        title: "Head of Volunteers",
        name: "Blessing Adeoye",
        description: "Manages recruitment, training, and engagement of volunteers",
        avatar: "BA",
        color: "from-amber-500 to-orange-600",
        icon: Users
      },
      team: ["Volunteer Coordinators", "Training Specialists"]
    },
    {
      head: {
        title: "Head of Prayer Team",
        name: "Oluwaseun Asonibare",
        description: "Provides spiritual support and intercession for our mission",
        avatar: "OA",
        color: "from-purple-500 to-indigo-600",
        icon: Heart
      },
      team: ["Prayer Coordinators", "Spiritual Support Team"]
    },
    {
      head: {
        title: "Legal Adviser",
        name: "Lawrence Ogundele",
        description: "Provides legal guidance and ensures compliance",
        avatar: "LO",
        color: "from-slate-600 to-slate-800",
        icon: Shield
      },
      team: ["Legal Consultants", "Compliance Specialists"]
    },
    {
      head: {
        title: "Head of Finances",
        name: "To be appointed",
        description: "Manages financial planning and resource allocation",
        avatar: "?",
        color: "from-emerald-500 to-green-600",
        icon: Target
      },
      team: ["Financial Analysts", "Accounting Specialists"]
    }
  ]
};
