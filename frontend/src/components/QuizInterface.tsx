
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Clock, CheckCircle, XCircle, ArrowRight, ArrowLeft } from "lucide-react";

interface QuizQuestion {
  id: number | string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface WeekQuiz {
  title: string;
  timeLimit: number;
  questions: QuizQuestion[];
}

interface QuizInterfaceProps {
  quiz?: WeekQuiz;
  quizData?: WeekQuiz;
  onComplete: (score: number, totalQuestions: number, answers: number[]) => void;
  onClose?: () => void;
}

const QuizInterface = ({ quiz, quizData, onComplete, onClose }: QuizInterfaceProps) => {
  const quizToUse = quiz || quizData;
  
  if (!quizToUse) {
    return <div>Quiz data not found</div>;
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(quizToUse.questions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(quizToUse.timeLimit * 60);
  const [quizStarted, setQuizStarted] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!quizStarted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizToUse.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let correctAnswers = 0;
    quizToUse.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    onComplete(correctAnswers, quizToUse.questions.length, answers);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white flex items-center justify-center p-6">
        <Card className="bg-black/40 backdrop-blur-sm border-blue-800/50 max-w-2xl w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">{quizToUse.title}</CardTitle>
            <CardDescription className="text-gray-300">
              Ready to test your knowledge with ISTE?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-blue-900/30 rounded-lg">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-lg font-semibold">{quizToUse.timeLimit} minutes</div>
                <div className="text-sm text-gray-400">Time Limit</div>
              </div>
              <div className="p-4 bg-purple-900/30 rounded-lg">
                <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-lg font-semibold">{quizToUse.questions.length} questions</div>
                <div className="text-sm text-gray-400">Total Questions</div>
              </div>
              <div className="p-4 bg-green-900/30 rounded-lg">
                <ArrowRight className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-lg font-semibold">70%</div>
                <div className="text-sm text-gray-400">Passing Score</div>
              </div>
            </div>
            
            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-400 mb-2">ISTE Quiz Instructions:</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• You have {quizToUse.timeLimit} minutes to complete the quiz</li>
                <li>• You can navigate between questions using the Previous/Next buttons</li>
                <li>• You need to score at least 70% to pass</li>
                <li>• Make sure you have a stable internet connection</li>
                <li>• Once started, the timer cannot be paused</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={startQuiz}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg py-6"
              >
                Start ISTE Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              {onClose && (
                <Button 
                  onClick={onClose}
                  variant="outline"
                  className="px-6 py-6 border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Cancel
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const progressPercentage = ((currentQuestion + 1) / quizToUse.questions.length) * 100;
  const currentQ = quizToUse.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
      <div className="container mx-auto max-w-4xl">
        {/* Quiz Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">ISTE - {quizToUse.title}</h1>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              timeLeft < 300 ? "bg-red-900/50 text-red-300" : "bg-blue-900/50 text-blue-300"
            }`}>
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Question {currentQuestion + 1} of {quizToUse.questions.length}</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-gray-800" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="bg-black/40 backdrop-blur-sm border-blue-800/50 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-white leading-relaxed">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              value={answers[currentQuestion] >= 0 ? answers[currentQuestion].toString() : ""} 
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {currentQ.options.map((option, index) => {
                const isSelected = answers[currentQuestion] === index;
                return (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-200 ${
                      isSelected 
                        ? "border-blue-500 bg-blue-900/30 shadow-lg" 
                        : "border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/40"
                    }`}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className={`flex-1 cursor-pointer leading-relaxed transition-colors ${
                        isSelected ? "text-blue-300 font-medium" : "text-gray-300"
                      }`}
                    >
                      {option}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex gap-2">
            {quizToUse.questions.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  index === currentQuestion
                    ? "bg-blue-500 text-white"
                    : answers[index] >= 0
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 text-gray-400"
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {currentQuestion === quizToUse.questions.length - 1 ? (
            <Button
              onClick={handleSubmitQuiz}
              className="bg-green-600 hover:bg-green-700"
              disabled={answers.some(answer => answer < 0)}
            >
              Submit Quiz
              <CheckCircle className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
