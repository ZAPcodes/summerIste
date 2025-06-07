import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Target, TrendingUp, ArrowLeft, Trophy, Award, Star, Zap } from "lucide-react";
import { QuizQuestion } from "@/data/webDevQuizzes";
import Leaderboard from "./Leaderboard";
import { apiService } from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "react-toastify";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  passingScore: number;
  timeUsed: number; // in seconds
  timeLimit: number; // in minutes
  answers: { [key: string]: number };
  questions: QuizQuestion[];
  domain: string;
  week: number;
  onRetake: () => void;
  onBackToCourse: () => void;
}

const QuizResults = ({
  score,
  totalQuestions,
  passingScore,
  timeUsed,
  timeLimit,
  answers,
  questions,
  domain,
  week,
  onRetake,
  onBackToCourse,
}: QuizResultsProps) => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const { user } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const submitResult = async () => {
      if (!user?._id || isSubmitted) {
        return;
      }

      try {
        await apiService.submitQuizResult({
          domain,
          week,
          answers: Object.values(answers),
          score,
          completionTime: timeUsed,
        });
        toast.success("Quiz results submitted successfully!");
        setIsSubmitted(true);
      } catch (error: any) {
        console.error("Error submitting quiz result:", error);
        toast.error(`Failed to submit quiz results: ${error.message || "Unknown error"}`);
      }
    };

    submitResult();
  }, [domain, week, answers, score, timeUsed, user, isSubmitted]);

  const referenceScore = 0; // For display purposes only
  const passed = score >= referenceScore;
  const correctAnswers = Math.round((score / 100) * totalQuestions);
  const incorrectAnswers = totalQuestions - correctAnswers;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPerformanceLevel = (score: number) => {
    if (score >= 90)
      return {
        level: "Excellent",
        color: "text-green-400",
        bgColor: "bg-green-900/30",
        borderColor: "border-green-500/50",
        icon: Star,
        description: "Outstanding performance!",
      };
    if (score >= 80)
      return {
        level: "Good",
        color: "text-blue-400",
        bgColor: "bg-blue-900/30",
        borderColor: "border-blue-500/50",
        icon: Award,
        description: "Well done!",
      };
    if (score >= 70)
      return {
        level: "Satisfactory",
        color: "text-yellow-400",
        bgColor: "bg-yellow-900/30",
        borderColor: "border-yellow-500/50",
        icon: Target,
        description: "Good effort!",
      };
    return {
      level: "Needs Improvement",
      color: "text-red-400",
      bgColor: "bg-red-900/30",
      borderColor: "border-red-500/50",
      icon: TrendingUp,
      description: "Keep practicing!",
    };
  };

  const performance = getPerformanceLevel(score);

  if (showLeaderboard) {
    return (
      <Leaderboard
        domain={domain}
        week={week}
        onClose={() => setShowLeaderboard(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBackToCourse}
            className="mb-6 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 transition-all duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Course
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quiz Results
            </h1>
            <p className="text-gray-300 text-lg">Detailed analysis of your performance</p>
          </div>
        </div>

        {/* Overall Results */}
        <Card className="bg-black/60 backdrop-blur-sm border-blue-800/50 mb-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
          <CardHeader className="text-center relative z-10">
            <div className="relative mb-6">
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 relative ${
                  passed
                    ? "bg-gradient-to-r from-green-500 to-emerald-500"
                    : "bg-gradient-to-r from-red-500 to-pink-500"
                } shadow-2xl`}
              >
                {passed ? (
                  <CheckCircle className="w-16 h-16 text-white" />
                ) : (
                  <XCircle className="w-16 h-16 text-white" />
                )}
                <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current"></div>
              </div>
              {passed && (
                <div className="flex justify-center space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
            <CardTitle className="text-5xl font-bold text-white mb-4">
              {Math.round(score)}%
            </CardTitle>
            <CardDescription className="text-xl mb-6">
              <Badge
                className={`${
                  passed
                    ? "bg-green-900/50 text-green-300 border-green-500/50"
                    : "bg-red-900/50 text-red-300 border-red-500/50"
                } mr-3 px-4 py-2 text-lg font-semibold`}
              >
                {passed ? "PASSED" : "FAILED"}
              </Badge>
              <span className="text-gray-300">
                {correctAnswers} out of {totalQuestions} correct
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="p-6 bg-blue-900/30 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
                <Target className="w-10 h-10 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-blue-400">{correctAnswers}</div>
                <div className="text-sm text-gray-400 font-medium">Correct</div>
              </div>
              <div className="p-6 bg-red-900/30 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300 group">
                <XCircle className="w-10 h-10 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-red-400">{incorrectAnswers}</div>
                <div className="text-sm text-gray-400 font-medium">Incorrect</div>
              </div>
              <div className="p-6 bg-yellow-900/30 rounded-xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
                <Clock className="w-10 h-10 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-yellow-400">{formatTime(timeUsed)}</div>
                <div className="text-sm text-gray-400 font-medium">Time Used</div>
              </div>
              <div
                className={`p-6 ${performance.bgColor} rounded-xl border ${performance.borderColor} hover:scale-105 transition-all duration-300 group`}
              >
                <performance.icon
                  className={`w-10 h-10 ${performance.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}
                />
                <div className={`text-2xl font-bold ${performance.color}`}>{performance.level}</div>
                <div className="text-sm text-gray-400 font-medium">{performance.description}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            variant="outline"
            onClick={onBackToCourse}
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course
          </Button>
          <Button
            onClick={() => setShowLeaderboard(true)}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-yellow-500/25 transition-all duration-200"
          >
            <Trophy className="w-4 h-4 mr-2" />
            View Leaderboard
          </Button>
          {!passed && (
            <Button
              onClick={onRetake}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
            >
              Retake Quiz
            </Button>
          )}
          {passed && (
            <Button
              onClick={onBackToCourse}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-green-500/25 transition-all duration-200"
            >
              <Star className="w-4 h-4 mr-2" />
              Continue to Next Week
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizResults;