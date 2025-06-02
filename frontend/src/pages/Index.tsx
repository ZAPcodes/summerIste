import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Clock, ChevronRight, Code, Brain, Shield, Palette, Smartphone, Database, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { user, logout: authLogout, isLoading } = useAuth();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const handleLogout = async () => {
    await authLogout();
  };

  const domains = [
    {
      id: "webdev",
      title: "Web Development",
      description: "Master modern web technologies with HTML, CSS, JavaScript, React",
      icon: Code,
      color: "from-blue-600 to-cyan-600",
      weeks: 6,
      progress: 0
    },
    {
      id: "aiml",
      title: "AI & Machine Learning",
      description: "Dive into artificial intelligence and machine learning fundamentals",
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      weeks: 6
      
    },
    {
      id: "cybersec",
      title: "Cybersecurity",
      description: "Learn ethical hacking, network security, and digital forensics",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      weeks: 5,
      progress: 0
    },
    {
      id: "design",
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly digital experiences",
      icon: Palette,
      color: "from-pink-600 to-purple-600",
      weeks: 5,
      progress: 0
    },
    {
      id: "appdev",
      title: "App Development",
      description: "Build mobile applications for iOS and Android platforms",
      icon: Smartphone,
      color: "from-green-600 to-blue-600",
      weeks: 6,
      progress: 0
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      description: "Master programming fundamentals and problem-solving skills",
      icon: Database,
      color: "from-yellow-600 to-red-600",
      weeks: 6,
      progress: 0
    }
  ];

  const stats = [
    { icon: Users, label: "Active Students", value: "250+" },
    { icon: BookOpen, label: "Course Domains", value: "6" },
    { icon: Award, label: "Completion Rate", value: "85%" },
    { icon: Clock, label: "Duration", value: "5-6 Weeks" }
  ];

  const handleStartLearning = (domainId: string) => {
    setSelectedDomain(domainId);
    if (domainId === "webdev") {
      navigate("/webdevelopment");
    } else if (domainId === "aiml") {
      navigate("/aiml");
    } else if (domainId === "design") {
      navigate("/design");
    } else if (domainId === "cybersec") {
      navigate("/cybersecurity");
    } else if (domainId === "appdev") {
      navigate("/appdev");
    } else if (domainId === "dsa") {
      navigate("/dsa");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navigation */}
      <nav className="border-b border-blue-800/50 backdrop-blur-sm bg-black/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">ISTE Summer School 2025</h1>
                <p className="text-blue-200 text-sm">Manipal's Best Tech Club</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => navigate('/profile')}
                    className="text-blue-300 hover:text-blue-200"
                  >
                    <User className="w-4 h-4 mr-2" />
                    {user.name}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="border-red-500 text-red-300 hover:bg-red-500/20"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    className="border-blue-500 text-blue-300 hover:bg-blue-500/20"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                    onClick={() => navigate('/signup')}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Master Technology This Summer
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join our intensive 5-6 week ISTE summer school program. Learn from industry experts, 
            complete weekly challenges, and track your progress through interactive quizzes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm border border-blue-800/50 rounded-lg p-4 min-w-[140px]">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Choose Your Domain</h3>
          <p className="text-gray-300 text-lg">Select from 6 specialized tracks designed by industry professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain) => (
            <Card key={domain.id} className="bg-black/40 backdrop-blur-sm border-blue-800/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${domain.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <domain.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{domain.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {domain.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Duration</span>
                    <Badge variant="secondary" className="bg-blue-900/50 text-blue-200">
                      {domain.weeks} weeks
                    </Badge>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 group"
                    onClick={() => handleStartLearning(domain.id)}
                  >
                    Start Learning
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">How It Works</h3>
          <p className="text-gray-300 text-lg">A structured learning approach with progress tracking</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Weekly Content</h4>
            <p className="text-gray-300">
              Access curated learning materials, YouTube videos, and hands-on projects each week.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Complete Tasks</h4>
            <p className="text-gray-300">
              Finish weekly assignments and check off completed tasks to track your progress.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Pass Quizzes</h4>
            <p className="text-gray-300">
              Complete time-limited quizzes to unlock the next week's content and advance your learning.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-800/50 bg-black/40 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">ISTE Summer School 2025</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of tech professionals
            </p>
            <p className="text-sm text-gray-500">
              © 2025 College Tech Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
