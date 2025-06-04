
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Target, TrendingUp, ArrowLeft, Trophy, Award, Star, Zap } from "lucide-react";
import { QuizQuestion } from "@/data/webDevQuizzes";
import Leaderboard from "./Leaderboard";

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
  onBackToCourse
}: QuizResultsProps) => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  
  const passed = score >= passingScore;
  const correctAnswers = Math.round((score / 100) * totalQuestions);
  const incorrectAnswers = totalQuestions - correctAnswers;
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPerformanceLevel = (score: number) => {
    if (score >= 90) return { 
      level: "Excellent", 
      color: "text-green-400", 
      bgColor: "bg-green-900/30",
      borderColor: "border-green-500/50",
      icon: Star,
      description: "Outstanding performance!"
    };
    if (score >= 80) return { 
      level: "Good", 
      color: "text-blue-400", 
      bgColor: "bg-blue-900/30",
      borderColor: "border-blue-500/50",
      icon: Award,
      description: "Well done!"
    };
    if (score >= 70) return { 
      level: "Satisfactory", 
      color: "text-yellow-400", 
      bgColor: "bg-yellow-900/30",
      borderColor: "border-yellow-500/50",
      icon: Target,
      description: "Good effort!"
    };
    return { 
      level: "Needs Improvement", 
      color: "text-red-400", 
      bgColor: "bg-red-900/30",
      borderColor: "border-red-500/50",
      icon: TrendingUp,
      description: "Keep practicing!"
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
              <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 relative ${
                passed ? "bg-gradient-to-r from-green-500 to-emerald-500" : "bg-gradient-to-r from-red-500 to-pink-500"
              } shadow-2xl`}>
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
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              )}
            </div>
            <CardTitle className="text-5xl font-bold text-white mb-4">
              {Math.round(score)}%
            </CardTitle>
            <CardDescription className="text-xl mb-6">
              <Badge className={`${passed ? "bg-green-900/50 text-green-300 border-green-500/50" : "bg-red-900/50 text-red-300 border-red-500/50"} mr-3 px-4 py-2 text-lg font-semibold`}>
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
              <div className={`p-6 ${performance.bgColor} rounded-xl border ${performance.borderColor} hover:scale-105 transition-all duration-300 group`}>
                <performance.icon className={`w-10 h-10 ${performance.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <div className={`text-2xl font-bold ${performance.color}`}>{performance.level}</div>
                <div className="text-sm text-gray-400 font-medium">{performance.description}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analysis */}
        <Card className="bg-black/60 backdrop-blur-sm border-blue-800/50 mb-8">
          <CardHeader>
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-yellow-400 mr-3" />
              <CardTitle className="text-white text-2xl">Question-by-Question Analysis</CardTitle>
            </div>
            <CardDescription className="text-gray-300 text-lg">
              Review your answers and explanations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {questions.map((question, index) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className={`p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    isCorrect 
                      ? "bg-green-900/20 border-green-500/40 hover:border-green-400/60" 
                      : "bg-red-900/20 border-red-500/40 hover:border-red-400/60"
                  }`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2 rounded-full ${isCorrect ? 'bg-green-500' : 'bg-red-500'} flex-shrink-0`}>
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <XCircle className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="outline" className="text-xs font-medium">
                            Question {index + 1}
                          </Badge>
                          {isCorrect && <Badge className="bg-green-900/50 text-green-300 text-xs">Correct</Badge>}
                        </div>
                        <h3 className="font-semibold text-white mb-4 text-lg leading-relaxed">
                          {question.question}
                        </h3>
                        <div className="grid gap-3 mb-6">
                          {question.options.map((option, optionIndex) => {
                            const isUserAnswer = userAnswer === optionIndex;
                            const isCorrectAnswer = question.correctAnswer === optionIndex;
                            
                            return (
                              <div key={optionIndex} className={`p-4 rounded-lg border transition-all duration-200 ${
                                isCorrectAnswer 
                                  ? "bg-green-800/30 border-green-500/50 text-green-200" 
                                  : isUserAnswer 
                                    ? "bg-red-800/30 border-red-500/50 text-red-200" 
                                    : "bg-gray-800/30 border-gray-600/30 text-gray-300 hover:bg-gray-700/30"
                              }`}>
                                <div className="flex items-center justify-between">
                                  <span className="flex-1">{option}</span>
                                  <div className="flex items-center space-x-2 ml-3">
                                    {isCorrectAnswer && (
                                      <Badge className="bg-green-600 text-white text-xs px-2 py-1">
                                        ✓ Correct
                                      </Badge>
                                    )}
                                    {isUserAnswer && !isCorrectAnswer && (
                                      <Badge className="bg-red-600 text-white text-xs px-2 py-1">
                                        ✗ Your choice
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                          <div className="flex items-start gap-2">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">!</span>
                            </div>
                            <div>
                              <strong className="text-blue-200">Explanation:</strong>
                              <p className="text-blue-100 mt-1 leading-relaxed">{question.explanation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
              <ArrowLeft className="w-4 h-4 mr-2" />
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
