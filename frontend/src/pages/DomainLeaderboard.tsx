
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, ArrowLeft, Calendar, Clock, Users, Star, Crown, Medal, Award } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getLeaderboard, LeaderboardEntry } from "@/services/api";
import { toast } from "react-toastify";

const DomainLeaderboard = () => {
  const { domain } = useParams<{ domain: string }>();
  const navigate = useNavigate();
  const [selectedWeek, setSelectedWeek] = useState("1");
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const domainNames = {
    webdev: "Web Development",
    aiml: "AI/ML",
    cybersec: "Cybersecurity",
    design: "Design",
    appdev: "App Development",
    dsa: "Data Structures & Algorithms"
  };

  const domainColors = {
    webdev: "from-purple-500 to-blue-500",
    aiml: "from-pink-500 to-purple-500",
    cybersec: "from-red-500 to-orange-500",
    design: "from-green-500 to-teal-500",
    appdev: "from-indigo-500 to-purple-500",
    dsa: "from-yellow-500 to-orange-500"
  };

  useEffect(() => {
    if (domain && selectedWeek) {
      fetchLeaderboard();
    }
  }, [domain, selectedWeek]);

  const fetchLeaderboard = async () => {
    if (!domain) return;
    
    try {
      setLoading(true);
      setError(null);
      const data = await getLeaderboard(domain, parseInt(selectedWeek));
      setLeaderboard(data);
    } catch (err: any) {
      setError(err.message || "Failed to load leaderboard");
      if (err.message.includes("still ongoing")) {
        toast.info("Quiz is still ongoing. Leaderboard will be available after the quiz ends.");
      }
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Trophy className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />;
      default:
        return <Award className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPositionBadge = (position: number) => {
    const baseClasses = "font-bold text-sm px-3 py-1 rounded-full";
    switch (position) {
      case 1:
        return `${baseClasses} bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900`;
      case 2:
        return `${baseClasses} bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900`;
      case 3:
        return `${baseClasses} bg-gradient-to-r from-amber-400 to-amber-600 text-amber-900`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  if (!domain || !domainNames[domain as keyof typeof domainNames]) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
        <Card className="bg-red-950/80 border-red-800 max-w-md mx-auto">
          <CardContent className="text-center p-8">
            <Trophy className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <p className="text-red-200 text-lg mb-4">Invalid domain</p>
            <Button onClick={() => navigate("/dashboard")} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const domainColor = domainColors[domain as keyof typeof domainColors];
  const domainName = domainNames[domain as keyof typeof domainNames];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${domainColor} text-white p-6`}>
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button 
            onClick={() => navigate(`/${domain}`)} 
            variant="ghost" 
            className="mb-4 text-white/80 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {domainName}
          </Button>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Trophy className="w-12 h-12 text-yellow-400" />
            <h1 className="text-4xl font-bold bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
              {domainName} Leaderboard
            </h1>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Week {selectedWeek}</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">{leaderboard.length} Participants</span>
            </div>
          </div>

          {/* Week Selection */}
          <div className="flex justify-center">
            <Select value={selectedWeek} onValueChange={setSelectedWeek}>
              <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Select Week" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((week) => (
                  <SelectItem key={week} value={week.toString()}>
                    Week {week}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {loading && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading leaderboard...</p>
          </div>
        )}

        {error && (
          <Card className="bg-red-950/80 border-red-800 mb-8">
            <CardContent className="text-center p-8">
              {/* <Clock className="w-16 h-16 text-red-400 mx-auto mb-4" /> */}
              <p className="text-red-200 text-lg">LeaderBoard on the Way</p>
            </CardContent>
          </Card>
        )}

        {!loading && !error && (
          <>
            {/* Top 3 Podium */}
            {leaderboard.length > 0 && (
              <div className="mb-12">
                <div className="flex justify-center items-end gap-4 mb-8">
                  {/* Second Place */}
                  {leaderboard[1] && (
                    <div className="text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                        <Avatar className="w-16 h-16 mx-auto mb-3 ring-4 ring-gray-400">
                          <AvatarFallback className="bg-gray-400 text-gray-900 text-lg font-bold">
                            {leaderboard[1].userId.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className={getPositionBadge(2)}>2nd</div>
                        <h3 className="font-bold text-lg mt-2 mb-1">{leaderboard[1].userId.name}</h3>
                        <p className="text-2xl font-bold text-gray-300 mb-1">{leaderboard[1].score}%</p>
                        <p className="text-sm text-white/70 flex items-center justify-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatTime(leaderboard[1].completionTime)}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* First Place */}
                  <div className="text-center">
                    <div className="bg-gradient-to-b from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 transform hover:scale-105 transition-transform duration-300 relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Crown className="w-8 h-8 text-yellow-400" />
                      </div>
                      <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-yellow-400">
                        <AvatarFallback className="bg-yellow-400 text-yellow-900 text-xl font-bold">
                          {leaderboard[0].userId.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className={getPositionBadge(1)}>1st</div>
                      <h3 className="font-bold text-xl mt-3 mb-2">{leaderboard[0].userId.name}</h3>
                      <p className="text-3xl font-bold text-yellow-400 mb-2">{leaderboard[0].score}%</p>
                      <p className="text-sm text-white/70 flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTime(leaderboard[0].completionTime)}
                      </p>
                    </div>
                  </div>

                  {/* Third Place */}
                  {leaderboard[2] && (
                    <div className="text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                        <Avatar className="w-16 h-16 mx-auto mb-3 ring-4 ring-amber-600">
                          <AvatarFallback className="bg-amber-600 text-amber-900 text-lg font-bold">
                            {leaderboard[2].userId.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className={getPositionBadge(3)}>3rd</div>
                        <h3 className="font-bold text-lg mt-2 mb-1">{leaderboard[2].userId.name}</h3>
                        <p className="text-2xl font-bold text-amber-400 mb-1">{leaderboard[2].score}%</p>
                        <p className="text-sm text-white/70 flex items-center justify-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatTime(leaderboard[2].completionTime)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Complete Rankings */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  Complete Rankings - Week {selectedWeek}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {leaderboard.length === 0 ? (
                  <div className="text-center py-12">
                    <Trophy className="w-16 h-16 text-white/40 mx-auto mb-4" />
                    <p className="text-white/70 text-lg">No results available for Week {selectedWeek}</p>
                    <p className="text-white/50">Quiz may not have ended yet or no one has taken it.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {leaderboard.map((entry, index) => (
                      <div
                        key={entry._id}
                        className={`flex items-center justify-between p-4 mx-4 mb-2 rounded-xl transition-all duration-300 hover:bg-white/10 ${
                          index < 3 ? 'bg-white/5' : 'bg-white/5'
                        } ${index === 0 ? 'ring-2 ring-yellow-400/50' : ''}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3">
                            {getPositionIcon(index + 1)}
                            <span className="text-2xl font-bold text-white/80 min-w-[3rem]">
                              #{index + 1}
                            </span>
                          </div>
                          
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className={`text-white font-bold ${
                              index === 0 ? 'bg-yellow-500' : 
                              index === 1 ? 'bg-gray-500' : 
                              index === 2 ? 'bg-amber-600' : 'bg-gray-600'
                            }`}>
                              {entry.userId.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div>
                            <h4 className="font-bold text-white text-lg">{entry.userId.name}</h4>
                            <p className="text-white/70 text-sm">{entry.userId.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-2xl font-bold text-white">{entry.score}%</p>
                            <p className="text-white/70 text-sm flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatTime(entry.completionTime)}
                            </p>
                          </div>
                          
                          <Badge 
                            className={`${
                              entry.score >= 90 ? 'bg-green-500/80 text-green-100' :
                              entry.score >= 80 ? 'bg-blue-500/80 text-blue-100' :
                              entry.score >= 70 ? 'bg-yellow-500/80 text-yellow-100' :
                              'bg-red-500/80 text-red-100'
                            } font-medium`}
                          >
                            {entry.score >= 90 ? 'Excellent' :
                             entry.score >= 80 ? 'Great' :
                             entry.score >= 70 ? 'Good' : 'Needs Improvement'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default DomainLeaderboard;
