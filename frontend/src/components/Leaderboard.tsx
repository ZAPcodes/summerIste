import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Clock, Target, Users, ArrowLeft, Crown, Star } from "lucide-react";
import { getLeaderboard } from "@/services/api";

interface LeaderboardEntry {
  _id: string;
  userId: {
    _id: string;
    name: string;
    email: string;
  };
  domain: string; // Added
  week: number;   // Added
  score: number;
  completionTime: number;
  completedAt: string;
}

interface LeaderboardProps {
  domain: string;
  week: number;
  onClose: () => void;
}

const Leaderboard = ({ domain, week, onClose }: LeaderboardProps) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const data = await getLeaderboard(domain, week);
        setLeaderboard(data);
      } catch (err) {
        setError("Failed to load leaderboard");
        console.error("Leaderboard error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [domain, week]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400" />;
      case 2:
        return <Trophy className="w-3 h-3 sm:w-5 sm:h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-3 h-3 sm:w-5 sm:h-5 text-amber-600" />;
      default:
        return <Award className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />;
    }
  };

  const getPositionBadge = (position: number) => {
    const baseClasses = "font-bold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full";
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

  const getDomainColor = (domain: string) => {
    const colors = {
      webdev: "from-blue-500 to-cyan-500",
      aiml: "from-purple-500 to-pink-500",
      cybersec: "from-red-500 to-orange-500",
      design: "from-green-500 to-teal-500",
      appdev: "from-indigo-500 to-purple-500",
      dsa: "from-yellow-500 to-orange-500",
    };
    return colors[domain as keyof typeof colors] || "from-gray-500 to-gray-700";
  };

  const getDomainName = (domain: string) => {
    const names = {
      webdev: "Web Development",
      aiml: "AI/ML",
      cybersec: "Cybersecurity",
      design: "Design",
      appdev: "App Development",
      dsa: "Data Structures & Algorithms",
    };
    return names[domain as keyof typeof names] || domain;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-sm sm:text-lg">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
        <Card className="bg-red-950/80 border-red-800 max-w-sm sm:max-w-md mx-auto">
          <CardContent className="text-center p-6 sm:p-8">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-red-400 mx-auto mb-4" />
            <p className="text-red-200 text-sm sm:text-lg mb-4">{error}</p>
            <Button
              onClick={onClose}
              variant="outline"
              className="border-red-400 text-red-400 hover:bg-red-400 hover:text-red-900 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getDomainColor(domain)} text-white p-4 sm:p-6`}>
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Button
            onClick={onClose}
            variant="ghost"
            className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white/80 hover:text-white hover:bg-white/10 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Back to Course</span>
            <span className="sm:hidden">Back</span>
          </Button>

          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <Trophy className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400" />
            <h1 className="text-2xl sm:text-4xl font-bold bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounde

d-2xl">
              Leaderboard
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white/90 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium truncate">{getDomainName(domain)}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">Week {week}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">{leaderboard.length} Participants</span>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        {leaderboard.length > 0 && (
          <div className={`flex justify-center items-end gap-2 sm:gap-4 mb-6 sm:mb-8 ${leaderboard.length === 1 ? 'justify-center' : 'justify-between'}`}>
            {/* Second Place */}
            {leaderboard.length >= 2 && leaderboard[1] && (
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <Avatar className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 ring-2 sm:ring-4 ring-gray-400">
                    <AvatarFallback
                      className="bg-gray-400 text-gray-900 text-sm sm:text-lg font-bold"
                      aria-label={`Avatar for ${leaderboard[1].userId.name}`}
                    >
                      {leaderboard[1].userId.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className={getPositionBadge(2)}>2nd</div>
                  <h3 className="font-bold text-sm sm:text-lg mt-2 mb-1 truncate">{leaderboard[1].userId.name}</h3>
                  <p className="text-lg sm:text-2xl font-bold text-gray-300 mb-1">{leaderboard[1].score}%</p>
                  <p className="text-xs sm:text-sm text-white/70 flex items-center justify-center gap-1">
                    <Clock className="w-2 h-2 sm:w-3 sm:h-3" />
                    {formatTime(leaderboard[1].completionTime)}
                  </p>
                </div>
              </div>
            )}

            {/* First Place */}
            {leaderboard.length >= 1 && (
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-gradient-to-b from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-yellow-400/30 transform hover:scale-105 transition-transform duration-300 relative">
                  <div className="absolute -top-2 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" aria-hidden="true" />
                  </div>
                  <Avatar className="w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-4 ring-2 sm:ring-4 ring-yellow-400">
                    <AvatarFallback
                      className="bg-yellow-400 text-yellow-900 text-base sm:text-xl font-bold"
                      aria-label={`Avatar for ${leaderboard[0].userId.name}`}
                    >
                      {leaderboard[0].userId.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className={getPositionBadge(1)}>1st</div>
                  <h3 className="font-bold text-base sm:text-xl mt-2 sm:mt-3 mb-1 sm:mb-2 truncate">{leaderboard[0].userId.name}</h3>
                  <p className="text-xl sm:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">{leaderboard[0].score}%</p>
                  <p className="text-xs sm:text-sm text-white/70 flex items-center justify-center gap-1">
                    <Clock className="w-2 h-2 sm:w-3 sm:h-3" />
                    {formatTime(leaderboard[0].completionTime)}
                  </p>
                </div>
              </div>
            )}

            {/* Third Place */}
            {leaderboard.length >= 3 && leaderboard[2] && (
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <Avatar className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 ring-2 sm:ring-4 ring-amber-600">
                    <AvatarFallback
                      className="bg-amber-600 text-amber-900 text-sm sm:text-lg font-bold"
                      aria-label={`Avatar for ${leaderboard[2].userId.name}`}
                    >
                      {leaderboard[2].userId.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className={getPositionBadge(3)}>3rd</div>
                  <h3 className="font-bold text-sm sm:text-lg mt-2 mb-1 truncate">{leaderboard[2].userId.name}</h3>
                  <p className="text-lg sm:text-2xl font-bold text-amber-400 mb-1">{leaderboard[2].score}%</p>
                  <p className="text-xs sm:text-sm text-white/70 flex items-center justify-center gap-1">
                    <Clock className="w-2 h-2 sm:w-3 sm:h-3" />
                    {formatTime(leaderboard[2].completionTime)}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Complete Rankings */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-white flex items-center gap-2 text-lg sm:text-xl">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" aria-hidden="true" />
              Complete Rankings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {leaderboard.length === 0 ? (
              <div className="text-center py-8 sm:py-12 px-4">
                <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-white/40 mx-auto mb-4" aria-hidden="true" />
                <p className="text-white/70 text-base sm:text-lg mb-2">No submissions yet for this quiz.</p>
                <p className="text-white/50 text-sm sm:text-base">Be the first to take the quiz and claim the top spot!</p>
              </div>
            ) : (
              <div className="space-y-1 sm:space-y-2">
                {leaderboard.map((entry, index) => (
                  <div
                    key={entry._id}
                    className={`flex items-center justify-between p-3 sm:p-4 mx-2 sm:mx-4 mb-1 sm:mb-2 rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-white/10 ${
                      index < 3 ? 'bg-white/5' : 'bg-white/5'
                    } ${index === 0 ? 'ring-1 sm:ring-2 ring-yellow-400/50' : ''}`}
                    style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span aria-hidden="true">{getPositionIcon(index + 1)}</span>
                        <span className="text-lg sm:text-2xl font-bold text-white/80 min-w-[2rem] sm:min-w-[3rem]">
                          #{index + 1}
                        </span>
                      </div>

                      <Avatar className="w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0">
                        <AvatarFallback
                          className={`text-white font-bold text-sm sm:text-base ${
                            index === 0 ? 'bg-yellow-500' : 
                            index === 1 ? 'bg-gray-500' : 
                            index === 2 ? 'bg-amber-600' : 'bg-gray-600'
                          }`}
                          aria-label={`Avatar for ${entry.userId.name}`}
                        >
                          {entry.userId.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div className="min-w-0 flex-1 max-w-[150px] sm:max-w-[200px]">
                        <h4 className="font-bold text-white text-sm sm:text-lg truncate">{entry.userId.name}</h4>
                        <p className="text-white/70 text-xs sm:text-sm truncate">{entry.userId.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-6 flex-shrink-0">
                      <div className="text-right">
                        <p className="text-lg sm:text-2xl font-bold text-white">{entry.score}%</p>
                        <p className="text-white/70 text-xs sm:text-sm flex items-center gap-1">
                          <Clock className="w-2 h-2 sm:w-3 sm:h-3" />
                          {formatTime(entry.completionTime)}
                        </p>
                      </div>

                      <Badge
                        className={`${
                          entry.score >= 90 ? 'bg-green-500/80 text-green-100' :
                          entry.score >= 80 ? 'bg-blue-500/80 text-blue-100' :
                          entry.score >= 70 ? 'bg-yellow-500/80 text-yellow-100' :
                          'bg-red-500/80 text-red-100'
                        } font-medium text-xs sm:text-sm px-2 py-1`}
                      >
                        <span className="hidden sm:inline">
                          {entry.score >= 90 ? 'Excellent' :
                           entry.score >= 80 ? 'Great' :
                           entry.score >= 70 ? 'Good' : 'Needs Improvement'}
                        </span>
                        <span className="sm:hidden">
                          {entry.score >= 90 ? 'A+' :
                           entry.score >= 80 ? 'A' :
                           entry.score >= 70 ? 'B' : 'C'}
                        </span>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;