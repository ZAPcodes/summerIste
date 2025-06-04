import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Calendar, Clock, CheckCircle, PlayCircle, FileText, Brain, ChevronDown, ChevronRight, ExternalLink, Video, BookOpen, ArrowLeft, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuizInterface from "@/components/QuizInterface";
import QuizResults from "@/components/QuizResults";
import { webDevCurriculum, Task as CurriculumTask, WeekData as CurriculumWeekData } from "@/data/webDevCurriculum";
import { useProgress } from "@/hooks/useProgress";
import { useQuizSchedule } from "@/hooks/useQuizSchedule";
import { webDevQuizzes } from "@/data/webDevQuizzes";
import { toast } from "react-toastify";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface Week {
  id: number;
  title: string;
  tasks: Task[];
  resources: string[];
  isUnlocked: boolean;
  quizCompleted: boolean;
  quizScore?: number;
  progress: number;
  quizAvailable: boolean;
  isExpanded: boolean;
}

const WebDevelopment = () => {
  const navigate = useNavigate();
  const { progress, loading, error, toggleTask, updateQuizProgress } = useProgress("webdev");
  const [currentView, setCurrentView] = useState<'course' | 'quiz' | 'results'>('course');
  const [currentQuizWeek, setCurrentQuizWeek] = useState<number | null>(null);
  const [quizState, setQuizState] = useState<"not_started" | "in_progress" | "completed">("not_started");
  const [quizResults, setQuizResults] = useState<any>(null);
  const [weeks, setWeeks] = useState<Week[]>([]);

  const staticCurriculum: CurriculumWeekData[] = webDevCurriculum;

  useEffect(() => {
    if (progress && !loading) {
      const updatedWeeks: Week[] = staticCurriculum.map((weekData, index) => {
        const backendWeek = progress.weeks.find((w) => w.weekNumber === weekData.id);
        const completedTaskIndices = backendWeek?.tasksCompleted || [];
        const quizPassed = backendWeek?.quizPassed || false;

        const tasksWithCompletion = weekData.tasks.map((task) => {
          const taskIndex = parseInt(task.id.split("-")[1]) - 1;
          return {
            ...task,
            completed: completedTaskIndices.includes(taskIndex),
          };
        });

        const completedTasksCount = tasksWithCompletion.filter((task) => task.completed).length;
        const progressPercentage = tasksWithCompletion.length > 0 ? (completedTasksCount / tasksWithCompletion.length) * 100 : 0;

        const isUnlocked = weekData.id === 1 || (progress.weeks.some(w => w.weekNumber === weekData.id - 1 && w.quizPassed));

        return {
          ...weekData,
          tasks: tasksWithCompletion,
          isUnlocked,
          quizCompleted: quizPassed,
          quizScore: backendWeek?.quizScore,
          progress: progressPercentage,
          quizAvailable: progressPercentage === 100 && !quizPassed,
          isExpanded: index === 0,
        };
      });
      setWeeks(updatedWeeks);
    }
  }, [progress, loading]);

  const toggleWeekExpansion = (weekIndex: number) => {
    setWeeks(prevWeeks =>
      prevWeeks.map((week, index) =>
        index === weekIndex ? { ...week, isExpanded: !week.isExpanded } : week
      )
    );
  };

  const isTaskCompleted = (weekNumber: number, taskIndex: number) => {
    if (!progress) return false;
    const weekProgress = progress.weeks.find(w => w.weekNumber === weekNumber);
    return weekProgress ? weekProgress.tasksCompleted.includes(taskIndex) : false;
  };

  const handleToggleTask = async (weekId: number, taskId: string) => {
    const taskIndex = parseInt(taskId.split("-")[1]) - 1;
    const week = weeks.find(w => w.id === weekId);
    if (!week) return;
    const isCurrentlyCompleted = week.tasks[taskIndex]?.completed || false;
    try {
      await toggleTask(weekId, taskIndex, !isCurrentlyCompleted);
    } catch (err) {
      toast.error("Failed to update task status");
    }
  };

  const getResourceTitle = (url: string) => {
    if (url.includes('youtu.be') || url.includes('youtube.com')) {
      return 'YouTube Video/Playlist';
    }
    return 'Resource Link';
  };

  const handleTakeQuiz = (weekNumber: number) => {
    setCurrentQuizWeek(weekNumber);
    setCurrentView('quiz');
  };

  const handleQuizComplete = async (score: number, totalQuestions: number, answers: { [key: string]: number }, timeUsed: number) => {
    const quizData = webDevQuizzes.find((q) => q.weekId === currentQuizWeek);
    if (!quizData) return;

    setQuizResults({ score, totalQuestions, answers, quizData, timeUsed });
    setQuizState("completed");
    setCurrentView('results');

    const passed = score >= quizData.passingScore;

    try {
      await updateQuizProgress("webdev", currentQuizWeek!, passed, score);
    } catch (err) {
      toast.error("Failed to update quiz progress");
    }
  };

  const handleRetakeQuiz = () => {
    setQuizState("in_progress");
    setQuizResults(null);
  };

  const handleBackToCourse = () => {
    setCurrentView('course');
    setCurrentQuizWeek(null);
    setQuizState("not_started");
    setQuizResults(null);
  };

  const QuizSection = ({ week }: { week: Week }) => {
    const { status, loading: scheduleLoading } = useQuizSchedule("webdev", week.id);

    const getQuizButtonText = () => {
      if (week.quizCompleted) return "Quiz Passed";
      if (!week.quizAvailable) return "Complete Tasks First";
      if (scheduleLoading) return "Checking...";
      if (!status.schedule) return "Quiz Not Scheduled";
      if (status.hasEnded) return "Quiz Ended";
      if (!status.hasStarted) return `Starts ${new Date(status.schedule.startTime).toLocaleString()}`;
      if (status.isLive) return "Take Quiz";
      return "Quiz Not Available";
    };

    const isQuizDisabled = () => {
      return !week.quizAvailable || week.quizCompleted || !status.isLive || scheduleLoading;
    };

    return (
      <div className="border-t border-gray-700 pt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="font-medium">Week {week.id} Quiz</span>
            {week.quizCompleted && (
              <Badge className="bg-green-900 text-green-300">
                Completed ({Math.round(week.quizScore || 0)}%)
              </Badge>
            )}
            {status.isLive && week.quizAvailable && !week.quizCompleted && (
              <Badge className="bg-green-600 text-white animate-pulse">LIVE</Badge>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(`/leaderboard/webdev/${week.id}`)}
              className="text-purple-400 border-purple-400 hover:bg-purple-400/10"
            >
              <Trophy className="w-4 h-4 mr-1" />
              Leaderboard
            </Button>
            <Button
              disabled={isQuizDisabled()}
              onClick={() => handleTakeQuiz(week.id)}
              className={`${
                week.quizAvailable && status.isLive && !week.quizCompleted
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-600"
              }`}
            >
              {getQuizButtonText()}
              <Clock className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        {status.schedule && (
          <div className="text-sm text-gray-400">
            {status.isLive && status.timeRemaining && (
              <p className="text-green-400">
                Time remaining: {Math.floor(status.timeRemaining / 60)}m {status.timeRemaining % 60}s
              </p>
            )}
            {!status.hasStarted && status.timeUntilStart && (
              <p className="text-yellow-400">
                Starts in: {Math.floor(status.timeUntilStart / 60)}m {status.timeUntilStart % 60}s
              </p>
            )}
            {!status.isLive && status.hasStarted && !status.hasEnded && (
              <p className="text-red-400">Quiz is not currently active</p>
            )}
            <p>Duration: {status.schedule.duration} minutes | Passing score: 70%</p>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return <div className="text-white text-center">Loading progress...</div>;
  }

  if (error) {
    return <div className="text-red-400 text-center">Error: {error}</div>;
  }

  if (currentView === 'quiz' && currentQuizWeek) {
    const quizData = webDevQuizzes.find((q) => q.weekId === currentQuizWeek);
    if (quizData) {
      // Add domain and weekId to quiz data
      const enhancedQuizData = {
        ...quizData,
        domain: "webdev",
        weekId: currentQuizWeek
      };
      
      return (
        <QuizInterface 
          quiz={enhancedQuizData} 
          onComplete={handleQuizComplete}
        />
      );
    }
  }

  if (currentView === 'results' && currentQuizWeek && quizResults) {
    const quizData = webDevQuizzes.find((q) => q.weekId === currentQuizWeek);
    if (quizData) {
      return (
        <QuizResults
          score={quizResults.score}
          totalQuestions={quizResults.totalQuestions}
          passingScore={quizData.passingScore}
          timeUsed={quizResults.timeUsed || 0}
          timeLimit={quizData.timeLimit}
          answers={quizResults.answers}
          questions={quizData.questions}
          domain="webdev"
          week={currentQuizWeek}
          onRetake={handleRetakeQuiz}
          onBackToCourse={handleBackToCourse}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-4 text-purple-400 hover:text-purple-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold mb-2">ISTE Web Development Course</h1>
          <p className="text-gray-300">Master web development through 5 comprehensive weeks with ISTE</p>
        </div>

        <Card className="bg-black/40 backdrop-blur-sm border-purple-800/50 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Course Completion</span>
                <span className="text-purple-400">
                  {progress ? `Week ${progress.weeks.length} of 5` : 'Week 1 of 5'}
                </span>
              </div>
              <Progress 
                value={progress ? (progress.weeks.length / 5) * 100 : 0} 
                className="h-3 bg-gray-800" 
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {progress ? progress.weeks.length : 0}
                  </div>
                  <div className="text-sm text-gray-400">Weeks Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {Math.round(weeks[0]?.progress || 0)}%
                  </div>
                  <div className="text-sm text-gray-400">Current Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    {weeks.filter(w => w.quizCompleted).length}
                  </div>
                  <div className="text-sm text-gray-400">Quizzes Passed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">35</div>
                  <div className="text-sm text-gray-400">Days Left</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {weeks.map((week, weekIndex) => (
            <Card 
              key={week.id} 
              className={`${
                week.isUnlocked 
                  ? "bg-black/40 backdrop-blur-sm border-purple-800/50" 
                  : "bg-gray-900/40 backdrop-blur-sm border-gray-700/50 opacity-60"
              } transition-all duration-300`}
            >
              <Collapsible 
                open={week.isExpanded} 
                onOpenChange={() => week.isUnlocked && toggleWeekExpansion(weekIndex)}
              >
                <CardHeader>
                  <div className={`flex items-center justify-between ${week.isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${week.quizCompleted ? "bg-green-500" : week.isUnlocked ? "bg-purple-500" : "bg-gray-600"}`}>
                          {week.quizCompleted ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <span className="text-white font-bold">{week.id}</span>
                          )}
                        </div>
                        {week.isUnlocked && (
                          week.isExpanded ? 
                            <ChevronDown className="w-5 h-5 text-gray-400" /> : 
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                        <div>
                          <CardTitle className="text-white">{week.title}</CardTitle>
                          <CardDescription className="text-gray-300">
                            {week.isUnlocked ? "Available now" : "Locked - Complete previous week"}
                          </CardDescription>
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">Progress</div>
                      <div className="text-lg font-semibold text-purple-400">{Math.round(week.progress)}%</div>
                      {week.quizScore && (
                        <div className="text-sm text-green-400">Quiz: {Math.round(week.quizScore)}%</div>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CollapsibleContent>
                  {week.isUnlocked && (
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Tasks</h4>
                          <div className="space-y-3">
                            {week.tasks.map((task, taskIndex) => (
                              <div key={task.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-600/30 bg-gray-800/40">
                                <Checkbox 
                                  checked={week.tasks[taskIndex].completed}
                                  onCheckedChange={() => handleToggleTask(week.id, task.id)}
                                  className="border-gray-400"
                                />
                                <BookOpen className={`w-5 h-5 ${week.tasks[taskIndex].completed ? "text-green-400" : "text-gray-400"}`} />
                                <span className={`flex-1 ${week.tasks[taskIndex].completed ? "text-green-400" : "text-white"}`}>
                                  {task.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {week.resources.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
                            <div className="space-y-2">
                              {week.resources.map((resource, resourceIndex) => (
                                <div key={resourceIndex} className="flex items-center gap-3 p-3 bg-gray-800/20 rounded border border-gray-700/30">
                                  <PlayCircle className="w-4 h-4 text-purple-400" />
                                  <span className="text-sm text-gray-300 flex-1">{getResourceTitle(resource)}</span>
                                  <Button 
                                    size="sm" 
                                    variant="ghost" 
                                    className="h-8 px-3 text-purple-400 hover:text-purple-300"
                                    onClick={() => window.open(resource, '_blank')}
                                  >
                                    Open
                                    <ExternalLink className="w-3 h-3 ml-1" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <QuizSection week={week} />
                      </div>
                    </CardContent>
                  )}
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
