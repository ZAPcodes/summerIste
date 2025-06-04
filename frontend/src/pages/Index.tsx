
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Clock, ChevronRight, Code, Brain, Shield, Palette, Smartphone, Database, User, LogOut, Star, Zap, TrendingUp } from "lucide-react";
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
      color: "from-blue-500 via-blue-600 to-cyan-600",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400/60",
      glowColor: "group-hover:shadow-blue-500/25",
      weeks: 6,
      progress: 0,
      difficulty: "Beginner Friendly",
      popular: true
    },
    {
      id: "aiml",
      title: "AI & Machine Learning",
      description: "Dive into artificial intelligence and machine learning fundamentals",
      icon: Brain,
      color: "from-purple-500 via-violet-600 to-blue-600",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400/60",
      glowColor: "group-hover:shadow-purple-500/25",
      weeks: 6,
      difficulty: "Beginner Friendly",
      popular: false
    },
    {
      id: "cybersec",
      title: "Cybersecurity",
      description: "Learn ethical hacking, network security, and digital forensics",
      icon: Shield,
      color: "from-red-500 via-orange-500 to-yellow-600",
      borderColor: "border-red-500/30",
      hoverBorder: "hover:border-red-400/60",
      glowColor: "group-hover:shadow-red-500/25",
      weeks: 5,
      progress: 0,
      difficulty: "Beginner Friendly",
      popular: false
    },
    {
      id: "design",
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly digital experiences",
      icon: Palette,
      color: "from-pink-500 via-purple-500 to-violet-600",
      borderColor: "border-pink-500/30",
      hoverBorder: "hover:border-pink-400/60",
      glowColor: "group-hover:shadow-pink-500/25",
      weeks: 5,
      progress: 0,
      difficulty: "Beginner Friendly",
      popular: true
    },
    {
      id: "appdev",
      title: "App Development",
      description: "Build mobile applications for Android platforms",
      icon: Smartphone,
      color: "from-green-500 via-emerald-600 to-teal-600",
      borderColor: "border-green-500/30",
      hoverBorder: "hover:border-green-400/60",
      glowColor: "group-hover:shadow-green-500/25",
      weeks: 6,
      progress: 0,
      difficulty: "Beginner Friendly",
      popular: false
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      description: "Master programming fundamentals and problem-solving skills",
      icon: Database,
      color: "from-yellow-500 via-orange-500 to-red-600",
      borderColor: "border-yellow-500/30",
      hoverBorder: "hover:border-yellow-400/60",
      glowColor: "group-hover:shadow-yellow-500/25",
      weeks: 6,
      progress: 0,
      difficulty: "Beginner Friendly",
      popular: true
    }
  ];

  const stats = [
    { icon: Users, label: "Active Students", value: "250+", color: "text-blue-400" },
    { icon: BookOpen, label: "Course Domains", value: "6", color: "text-green-400" },
    { icon: Award, label: "Completion Rate", value: "85%", color: "text-purple-400" },
    { icon: Clock, label: "Duration", value: "5-6 Weeks", color: "text-orange-400" }
  ];

  const handleStartLearning = (domainId: string) => {
    setSelectedDomain(domainId);
    if (domainId === "webdev") {
      navigate("/webdev");
    } else if (domainId === "aiml") {
      navigate("/aiml");
    } else if (domainId === "design") {
      navigate("/design");
    } else if (domainId === "cybersec") {
      navigate("/cybersec");
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
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>
          <div className="space-y-2">
            <div className="h-2 w-32 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-2 w-24 bg-gray-700 rounded animate-pulse mx-auto"></div>
          </div>
          <p className="text-gray-300 mt-4 animate-pulse">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navigation */}
      <nav className="border-b border-blue-800/30 backdrop-blur-xl bg-black/40 sticky top-0 z-50 shadow-lg shadow-blue-900/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <img className="h-25 w-1000" src="/ISTE.png"  alt="ISTE logo" />
                </div>
                {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div> */}
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  ISTE Summer School 2025
                </h1>
                <p className="text-blue-300 text-sm font-medium">Manipal's Premier Tech Club</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => navigate('/profile')}
                    className="text-blue-300 hover:text-white hover:bg-blue-500/20 transition-all duration-200 group"
                  >
                    <User className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {user.name}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="border-red-500/50 text-red-300 hover:bg-red-500/20 hover:border-red-400 transition-all duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-200"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
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
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 px-4 py-1">
              Summer 2025
            </Badge>
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight">
            Master Technology
            <br />
            <span className="text-5xl">This Summer</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join our intensive 5-6 week ISTE summer school program. Learn from industry experts, 
            complete weekly challenges, and track your progress through interactive quizzes.
          </p>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/60 backdrop-blur-sm border border-blue-800/30 rounded-xl p-6 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105">
                  <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-yellow-400 mr-3" />
            <h3 className="text-4xl font-bold">Choose Your Domain</h3>
            <Zap className="w-8 h-8 text-yellow-400 ml-3" />
          </div>
          <p className="text-gray-300 text-xl">Select from 6 specialized tracks designed by your esteemed Seniors </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain) => (
            <Card key={domain.id} className={`group relative bg-black/60 backdrop-blur-sm border ${domain.borderColor} ${domain.hoverBorder} transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden ${domain.glowColor} hover:shadow-2xl`}>
              {domain.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50 animate-pulse">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${domain.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <domain.icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white text-xl group-hover:text-blue-200 transition-colors">
                    {domain.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-gray-800/50 text-gray-300 text-xs">
                    {domain.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {domain.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration
                    </span>
                    <Badge variant="secondary" className="bg-blue-900/50 text-blue-200">
                      {domain.weeks} weeks
                    </Badge>
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${domain.color} hover:scale-105 hover:shadow-lg transition-all duration-300 group-hover:animate-pulse`}
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
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
            How It Works
          </h3>
          <p className="text-gray-300 text-xl">A structured learning approach with progress tracking</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/25">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              
            </div>
            <h4 className="text-2xl font-semibold mb-4 text-blue-200">Weekly Content</h4>
            <p className="text-gray-300 leading-relaxed">
              Access curated learning materials, YouTube videos, and hands-on projects each week.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/25">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold mb-4 text-purple-200">Complete Tasks</h4>
            <p className="text-gray-300 leading-relaxed">
              Finish weekly assignments and check off completed tasks to track your progress.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-green-500/25">
                <Clock className="w-12 h-12 text-white" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold mb-4 text-green-200">Pass Quizzes</h4>
            <p className="text-gray-300 leading-relaxed">
              Complete time-limited quizzes to unlock the next week's content and advance your learning.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-800/30 bg-black/60 backdrop-blur-xl mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                ISTE Summer School 2025
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Empowering the next generation of tech professionals
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <span>© 2025 ISTE Manipal</span>
              <span>•</span>
              <span>All rights reserved</span>
              <span>•</span>
              <span className="flex items-center">
                Made with <span className="text-red-400 mx-1">♥</span> for students
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
