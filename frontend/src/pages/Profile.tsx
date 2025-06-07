import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, LogOut, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { apiService } from "@/services/api";
import { webDevCurriculum, WeekData as WebDevWeekData } from "@/data/webDevCurriculum";
import { dsaCurriculum } from "@/data/dsaCurriculum";
import { aimlCurriculum } from "@/data/aimlCurriculum";
import { appDevCurriculum } from "@/data/appDevCurriculum";
import { cybersecCurriculum } from "@/data/cybersecCurriculum";
import { designCurriculum } from "@/data/designCurriculum";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout: authLogout, isLoading } = useAuth();
  const [progressData, setProgressData] = useState<any>(null);
  console.log("Profile.tsx: Initial user object:", user);
  console.log("Profile.tsx: Initial isLoading:", isLoading);

  useEffect(() => {
    console.log("Profile.tsx: useEffect triggered. Current user:", user);
    if (!user) {
      console.log("Profile.tsx: No user found, navigating to login.");
      navigate('/login');
      return;
    }
    console.log("Profile.tsx: User found. Enrolled domains:", user.enrolledDomains);

    // Fetch progress data for all enrolled domains
    const fetchProgressData = async () => {
      try {
        const progressPromises = user.enrolledDomains.map(domain => 
          apiService.getProgress(user._id, domain).catch(err => {
            console.error(`Failed to fetch progress for domain ${domain}:`, err);
            return null;
          })
        );
        const results = await Promise.all(progressPromises);
        
        const progressMap: { [key: string]: any } = {};
        results.forEach((progress, index) => {
          if (progress) {
            progressMap[user.enrolledDomains[index]] = progress;
          }
        });
        
        setProgressData(progressMap);
        console.log("Profile.tsx: Fetched progress data:", progressMap);
      } catch (error) {
        console.error('Profile.tsx: Failed to fetch progress data in useEffect:', error);
      }
    };

    fetchProgressData();
  }, [user, navigate]);

  const handleLogout = async () => {
    console.log("Profile.tsx: Logging out.");
    await authLogout();
    navigate('/dashboard');
  };

  const getDomainProgress = (domainId: string) => {
    console.log(`Profile.tsx: Calculating progress for domain: ${domainId}`);
    console.log("Profile.tsx: Full progressData passed to getDomainProgress:", progressData);

    if (!progressData?.[domainId]) {
      console.log(`Profile.tsx: No progress data found for ${domainId} in progressData, returning 0.`);
      return 0;
    }
    
    const backendProgress = progressData[domainId];
    const weeks = backendProgress.weeks;
    console.log(`Profile.tsx: Backend progress for ${domainId}:`, backendProgress);
    console.log(`Profile.tsx: Backend weeks for ${domainId}:`, weeks);

    let curriculum: any[];
    switch (domainId) {
      case "webdev":
        curriculum = webDevCurriculum;
        break;
      case "dsa":
        curriculum = dsaCurriculum;
        break;
      case "aiml":
        curriculum = aimlCurriculum;
        break;
      case "appdev":
        curriculum = appDevCurriculum;
        break;
      case "cybersec":
        curriculum = cybersecCurriculum;
        break;
      case "design":
        curriculum = designCurriculum;
        break;
      default:
        console.log(`Profile.tsx: No curriculum found for domain: ${domainId}, returning 0.`);
        return 0; // Return 0 if curriculum is not found
    }
    console.log(`Profile.tsx: Loaded curriculum for ${domainId}:`, curriculum);

    if (!curriculum || curriculum.length === 0) {
      console.log(`Profile.tsx: Curriculum is empty or null for ${domainId}, returning 0.`);
      return 0;
    }

    const totalProgressPercentage = curriculum.reduce((sum, curriculumWeek) => {
      const backendWeek = weeks.find((w: any) => w.weekNumber === curriculumWeek.id);
      // console.log(`Profile.tsx: Processing week ${curriculumWeek.id} for ${domainId}:`);
      // console.log("Profile.tsx:   Curriculum week data:", curriculumWeek);
      // console.log("Profile.tsx:   Backend week data:", backendWeek);

      const completedTasksCount = backendWeek ? backendWeek.tasksCompleted.length : 0;
      const totalTasksInWeek = curriculumWeek.tasks.length;
      // console.log("Profile.tsx:   Completed tasks for week:", completedTasksCount);
      // console.log("Profile.tsx:   Total tasks in week from curriculum:", totalTasksInWeek);
      
      const weekProgress = totalTasksInWeek > 0 ? (completedTasksCount / totalTasksInWeek) * 100 : 0;
      // console.log("Profile.tsx:   Week progress for week:", weekProgress);
      return sum + weekProgress;
    }, 0);

    const averageProgress = totalProgressPercentage / curriculum.length;
    // console.log(`Profile.tsx: Total progress percentage for ${domainId}:`, totalProgressPercentage);
    // console.log(`Profile.tsx: Average progress for ${domainId}:`, averageProgress);

    return isNaN(averageProgress) ? 0 : Math.round(averageProgress);
  };

  const getDomainName = (domainId: string) => {
    const domainNames: { [key: string]: string } = {
      webdev: "Web Development",
      aiml: "AI & Machine Learning",
      cybersec: "Cybersecurity",
      design: "UI/UX Design",
      appdev: "App Development",
      dsa: "Data Structures & Algorithms"
    };
    return domainNames[domainId] || domainId;
  };

  if (isLoading || !user) {
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
      <nav className="border-b border-blue-800/50 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/dashboard')}
              className="text-blue-300 hover:text-blue-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <img src="/ISTE.png" alt="ISTE" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-semibold">ISTE Summer School</span>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-red-500 text-red-300 hover:bg-red-500/20"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <Card className="bg-black/40 backdrop-blur-sm border-blue-800/50">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">{user.name}</CardTitle>
                  <p className="text-gray-300">Email: {user.email}</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Enrolled Domains */}
          <Card className="bg-black/40 backdrop-blur-sm border-blue-800/50">
            <CardHeader>
              <CardTitle className="text-white">Enrolled Domains</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.enrolledDomains.map((domainId: string) => {
                  const progress = getDomainProgress(domainId);
                  return (
                    <div key={domainId} className="space-y-3 p-4 bg-gray-800/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">
                          {getDomainName(domainId)}
                        </h3>
                        <Badge variant="secondary" className="bg-blue-900/50 text-blue-200">
                          {progress}% Complete
                        </Badge>
                      </div>
                      <Progress value={progress} className="h-2 bg-gray-700" />
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Progress</span>
                        <span>{progress}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {user.enrolledDomains.length === 0 && (
                <p className="text-gray-400 text-center py-8">
                  No domains enrolled yet. Go back to the home page to select your learning tracks.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Overall Progress Summary */}
          <Card className="bg-black/40 backdrop-blur-sm border-blue-800/50">
            <CardHeader>
              <CardTitle className="text-white">Learning Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {user.enrolledDomains.length}
                  </div>
                  <div className="text-gray-300">Domains Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {user.enrolledDomains.filter((domainId: string) => getDomainProgress(domainId) === 100).length}
                  </div>
                  <div className="text-gray-300">Domains Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {user.enrolledDomains.length > 0 
                      ? Math.round(user.enrolledDomains.reduce((sum: number, domainId: string) => sum + getDomainProgress(domainId), 0) / user.enrolledDomains.length)
                      : 0}%
                  </div>
                  <div className="text-gray-300">Average Progress</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
