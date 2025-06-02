
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Target, TrendingUp, ArrowLeft } from "lucide-react";
import { QuizQuestion } from "@/data/webDevQuizzes";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  passingScore: number;
  timeUsed: number; // in seconds
  timeLimit: number; // in minutes
  answers: { [key: string]: number };
  questions: QuizQuestion[];
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
  onRetake,
  onBackToCourse
}: QuizResultsProps) => {
  const passed = score >= passingScore;
  const correctAnswers = Math.round((score / 100) * totalQuestions);
  const incorrectAnswers = totalQuestions - correctAnswers;
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPerformanceLevel = (score: number) => {
    if (score >= 90) return { level: "Excellent", color: "text-green-400", bgColor: "bg-green-900/30" };
    if (score >= 80) return { level: "Good", color: "text-blue-400", bgColor: "bg-blue-900/30" };
    if (score >= 70) return { level: "Satisfactory", color: "text-yellow-400", bgColor: "bg-yellow-900/30" };
    return { level: "Needs Improvement", color: "text-red-400", bgColor: "bg-red-900/30" };
  };

  const performance = getPerformanceLevel(score);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={onBackToCourse}
            className="mb-4 text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course
          </Button>
          <h1 className="text-3xl font-bold mb-2">ISTE Quiz Results</h1>
          <p className="text-gray-300">Detailed analysis of your performance</p>
        </div>

        {/* Overall Results */}
        <Card className="bg-black/40 backdrop-blur-sm border-blue-800/50 mb-8">
          <CardHeader className="text-center">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
              passed ? "bg-green-500" : "bg-red-500"
            }`}>
              {passed ? (
                <CheckCircle className="w-12 h-12 text-white" />
              ) : (
                <XCircle className="w-12 h-12 text-white" />
              )}
            </div>
            <CardTitle className="text-3xl text-white">
              {Math.round(score)}%
            </CardTitle>
            <CardDescription className="text-lg">
              <Badge className={`${passed ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"} mr-2`}>
                {passed ? "PASSED" : "FAILED"}
              </Badge>
              {correctAnswers} out of {totalQuestions} correct
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-blue-900/30 rounded-lg">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-lg font-semibold text-blue-400">{correctAnswers}</div>
                <div className="text-sm text-gray-400">Correct</div>
              </div>
              <div className="p-4 bg-red-900/30 rounded-lg">
                <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-lg font-semibold text-red-400">{incorrectAnswers}</div>
                <div className="text-sm text-gray-400">Incorrect</div>
              </div>
              <div className="p-4 bg-yellow-900/30 rounded-lg">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-lg font-semibold text-yellow-400">{formatTime(timeUsed)}</div>
                <div className="text-sm text-gray-400">Time Used</div>
              </div>
              <div className={`p-4 ${performance.bgColor} rounded-lg`}>
                <TrendingUp className={`w-8 h-8 ${performance.color} mx-auto mb-2`} />
                <div className={`text-lg font-semibold ${performance.color}`}>{performance.level}</div>
                <div className="text-sm text-gray-400">Performance</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analysis */}
        <Card className="bg-black/40 backdrop-blur-sm border-blue-800/50 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Question-by-Question Analysis</CardTitle>
            <CardDescription className="text-gray-300">
              Review your answers and explanations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {questions.map((question, index) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className={`p-4 rounded-lg border ${
                    isCorrect 
                      ? "bg-green-900/20 border-green-500/30" 
                      : "bg-red-900/20 border-red-500/30"
                  }`}>
                    <div className="flex items-start gap-3 mb-3">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-2">
                          Question {index + 1}: {question.question}
                        </h3>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => {
                            const isUserAnswer = userAnswer === optionIndex;
                            const isCorrectAnswer = question.correctAnswer === optionIndex;
                            
                            return (
                              <div key={optionIndex} className={`p-2 rounded text-sm ${
                                isCorrectAnswer 
                                  ? "bg-green-800/30 text-green-300" 
                                  : isUserAnswer 
                                    ? "bg-red-800/30 text-red-300" 
                                    : "bg-gray-800/30 text-gray-400"
                              }`}>
                                {option}
                                {isCorrectAnswer && <span className="ml-2 font-semibold">✓ Correct</span>}
                                {isUserAnswer && !isCorrectAnswer && <span className="ml-2 font-semibold">✗ Your answer</span>}
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-3 p-3 bg-blue-900/20 rounded text-sm text-blue-200">
                          <strong>Explanation:</strong> {question.explanation}
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
        <div className="flex gap-4 justify-center">
          <Button 
            variant="outline" 
            onClick={onBackToCourse}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Back to Course
          </Button>
          {!passed && (
            <Button 
              onClick={onRetake}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Retake Quiz
            </Button>
          )}
          {passed && (
            <Button 
              onClick={onBackToCourse}
              className="bg-green-600 hover:bg-green-700"
            >
              Continue to Next Week
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
