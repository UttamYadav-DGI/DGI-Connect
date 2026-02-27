import React from "react";
import { 
  BookOpen, 
  FileText, 
  Code, 
  Users, 
  ChevronRight, 
  Bell, 
  Award 
} from "lucide-react";

const HomePage = () => {
  // Navigation categories for the platform
  const resources = [
    {
      title: "Academics",
      description: "Access syllabus, notes, and study materials for all semesters.",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      link: "/academics",
      color: "bg-blue-50",
    },
    {
      title: "Tests & Exams",
      description: "Sessional, PUT (Pre-University), and Semester papers.",
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      link: "/exams",
      color: "bg-purple-50",
    },
    {
      title: "DSA Prep",
      description: "Data Structures, Algorithms, and coding interview resources.",
      icon: <Code className="w-8 h-8 text-green-500" />,
      link: "/dsa",
      color: "bg-green-50",
    },
    {
      title: "Alumni Network",
      description: "Connect with seniors and get career guidance.",
      icon: <Users className="w-8 h-8 text-orange-500" />,
      link: "/alumni",
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-600">dgi-connect</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <Bell size={20} />
          </button>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold">
            JD
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-10">
        {/* Hero Section */}
        <header className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Welcome back, Student! 👋
          </h2>
          <p className="text-lg text-gray-600 italic">
            "Your one-stop destination for everything DGI."
          </p>
        </header>

        {/* Quick Access Resource Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((item, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer bg-white group`}
            >
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.description}</p>
              <button className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </section>

        {/* Bottom Section: Recent Updates & DSA Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Resources/Updates */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="text-yellow-500" /> Recent Uploads
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">CS-701 Sessional II Question Paper</p>
                    <p className="text-xs text-gray-400 text-uppercase">Uploaded 2 hours ago • CSE Department</p>
                  </div>
                  <button className="text-xs font-bold text-blue-600 uppercase tracking-wider">Download</button>
                </div>
              ))}
            </div>
          </div>

          {/* DSA Section Widget */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">DSA Problem of the Day</h3>
            <p className="text-gray-300 text-sm mb-4">
              Topic: Linked Lists <br />
              <span className="text-lg font-medium text-white">Reverse a Linked List in Groups of K</span>
            </p>
            <div className="bg-gray-700/50 p-3 rounded-lg text-xs font-mono mb-4 text-green-400">
              Difficulty: Hard | Points: 40
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-bold transition-colors">
              Solve Challenge
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;