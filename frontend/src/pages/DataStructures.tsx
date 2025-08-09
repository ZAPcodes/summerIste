import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Calendar, CheckCircle, PlayCircle, FileText, Brain, ChevronDown, ChevronRight, ExternalLink, Video, BookOpen, Database, ArrowLeft, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuizInterface from "@/components/QuizInterface";
import QuizResults from "@/components/QuizResults";
import { dsaQuizzes, WeekQuiz } from "@/data/dsaQuizzes";
import { useProgress } from "@/hooks/useProgress";
// Scheduling checks disabled in public mode
import { toast } from "react-toastify";
import { dsaCurriculum, Resource as CurriculumResource, TaskData as CurriculumTaskData, WeekData as CurriculumWeekData } from "@/data/dsaCurriculum";

interface Resource {
  id: string;
  title: string;
  type: "video" | "article" | "documentation";
  url: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
  type: "video" | "assignment" | "reading";
  resources?: Resource[];
}

interface Week {
  id: number;
  title: string;
  tasks: Task[];
  resources: Resource[];
  isUnlocked: boolean;
  quizCompleted: boolean;
  quizScore?: number;
  progress: number;
  quizAvailable: boolean;
  isExpanded: boolean;
}

const DataStructures = () => {
  const navigate = useNavigate();
  const { progress, loading, error, toggleTask, updateQuizProgress } = useProgress("dsa");
  const [currentView, setCurrentView] = useState<'course' | 'quiz' | 'results'>('course');
  const [currentQuizWeek, setCurrentQuizWeek] = useState<number | null>(null);
  const [quizState, setQuizState] = useState<"not_started" | "in_progress" | "completed">("not_started");
  const [quizResults, setQuizResults] = useState<any>(null);
  const [weeks, setWeeks] = useState<Week[]>([]);
  // const { status: quizStatus, loading: scheduleLoading } = useQuizSchedule("dsa", currentQuizWeek || 1);

  const staticCurriculum: CurriculumWeekData[] = dsaCurriculum;

  useEffect(() => {
    if (!loading) {
      const updatedWeeks: Week[] = staticCurriculum.map((weekData, index) => {
        const backendWeek = progress?.weeks.find((w) => w.weekNumber === weekData.id);
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

  // Make all weeks unlocked for public access
  const isUnlocked = true;

        return {
          ...weekData,
          tasks: tasksWithCompletion,
          isUnlocked,
          quizCompleted: quizPassed,
          quizScore: backendWeek?.quizScore || 0,
          progress: progressPercentage,
          // Make quiz always available; remove dependency on tasks completion
          quizAvailable: true,
          isExpanded: index === 0,
        };
      });
      setWeeks(updatedWeeks);
    }
  }, [progress, loading, staticCurriculum]);

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

  const getResourceTitle = (url: string, type: string) => {
    if (type === "video") {
      return 'Video Lecture';
    }
    if (type === "article") {
      return 'Article';
    }
    if (type === "documentation") {
      return 'Documentation';
    }
    return 'Resource Link';
  };

  const getTaskIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-5 h-5" />;
      case "assignment":
        return <FileText className="w-5 h-5" />;
      case "reading":
        return <BookOpen className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "video":
        return <PlayCircle className="w-4 h-4 text-orange-400" />;
      case "article":
        return <FileText className="w-4 h-4 text-orange-400" />;
      case "documentation":
        return <BookOpen className="w-4 h-4 text-orange-400" />;
      default:
        return <ExternalLink className="w-4 h-4 text-orange-400" />;
    }
  };

  const startQuiz = (weekId: number) => {
    setCurrentQuizWeek(weekId);
    const quizData = dsaQuizzes.find((q) => q.weekId === weekId);
    if (quizData) {
      (quizData as WeekQuiz).domain = "dsa";
    }
    setQuizState("in_progress");
  };

  const handleQuizComplete = async (score: number, totalQuestions: number, answers: { [key: string]: number }, timeUsed: number) => {
    const quizData = dsaQuizzes.find((q) => q.weekId === currentQuizWeek);
    if (!quizData) return;

    setQuizResults({ score, totalQuestions, answers, quizData, timeUsed });
    setQuizState("completed");
    setCurrentView('results');

    const passed = true;

    try {
      await updateQuizProgress("dsa", currentQuizWeek!, passed, score);
    } catch (err) {
      toast.error("Failed to update quiz progress");
    }
  };

  const retakeQuiz = () => {
    setQuizState("in_progress");
    setQuizResults(null);
  };

  const backToCourse = () => {
    setCurrentView('course');
    setCurrentQuizWeek(null);
    setQuizState("not_started");
    setQuizResults(null);
  };

  const resetQuizStatus = async (weekId: number) => {
    try {
      await updateQuizProgress("dsa", weekId, false, 0); // Set quizPassed to false and score to 0
      toast.info(`Quiz status for Week ${weekId} reset.`);
      // Re-fetch progress to update the UI
      // You might need to call fetchProgress if it's not automatically triggered by state changes
      // For now, let's rely on the useEffect that listens to 'progress' changes.
    } catch (err) {
      toast.error("Failed to reset quiz status");
    }
  };

  const toggleWeekExpansion = (weekIndex: number) => {
    setWeeks(prevWeeks =>
      prevWeeks.map((week, index) =>
        index === weekIndex ? { ...week, isExpanded: !week.isExpanded } : week
      )
    );
  };

  const getQuizButtonContent = (week: Week) => {
    if (week.quizCompleted) {
      return { text: "Quiz Passed", disabled: true, variant: "secondary" as const };
    }
    return { text: "Start Quiz", disabled: false, variant: "default" as const };
  };

  const QuizSection = ({ week }: { week: Week }) => {
    return (
      <div className="border-t border-gray-700 pt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-orange-400" />
            <span className="font-medium">Week {week.id} Quiz</span>
            {week.quizCompleted && (
              <Badge className="bg-green-900 text-green-300">
                Completed ({Math.round(week.quizScore || 0)}%)
              </Badge>
            )}
          </div>
          <div className="flex gap-2">
            {(() => {
              const buttonConfig = getQuizButtonContent(week);
              return (
                <Button
                  disabled={buttonConfig.disabled}
                  onClick={() => {
                    startQuiz(week.id);
                  }}
                  className={`${
                    buttonConfig.variant === "default"
                      ? "bg-orange-600 hover:bg-orange-700"
                      : "bg-gray-600"
                  }`}
                >
                  {buttonConfig.text}
                </Button>
              );
            })()}
          </div>
        </div>
        {/* Scheduling/status panel removed in public mode */}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white p-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p>Loading progress...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white p-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-red-400">{error}</p>
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="mt-4 text-orange-400 hover:text-orange-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  if (quizState === "in_progress" && currentQuizWeek) {
    const quizData = dsaQuizzes.find((q) => q.weekId === currentQuizWeek);
    if (quizData) {
      return <QuizInterface quiz={quizData} onComplete={handleQuizComplete} />;
    }
  }

  if (quizState === "completed" && quizResults && currentQuizWeek) {
    return (
      <QuizResults
        score={quizResults.score}
        totalQuestions={quizResults.totalQuestions}
        passingScore={70}
        timeUsed={quizResults.timeUsed || 0}
        timeLimit={quizResults.quizData.timeLimit}
        answers={quizResults.answers}
        questions={quizResults.quizData.questions}
        domain="dsa"
        week={currentQuizWeek}
        onRetake={retakeQuiz}
        onBackToCourse={backToCourse}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/dashboard")}
            className="mb-4 text-orange-400 hover:text-orange-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold mb-2">ISTE Data Structures Course</h1>
          <p className="text-gray-300">Master fundamental data structures and algorithms with ISTE</p>
        </div>

        <Card className="bg-black/40 backdrop-blur-sm border-orange-800/50 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Target className="w-5 h-5" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Course Completion</span>
                <span className="text-orange-400">
                  {progress ? `Week ${progress.weeks.length} of ${staticCurriculum.length}` : `Week 1 of ${staticCurriculum.length}`}
                </span>
              </div>
              <Progress 
                value={progress ? (progress.weeks.length / staticCurriculum.length) * 100 : 0} 
                className="h-3 bg-gray-800" 
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">
                    {progress ? progress.weeks.length : 0}
                  </div>
                  <div className="text-sm text-gray-400">Weeks Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">
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
                  <div className="text-2xl font-bold text-orange-400">35</div>
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
                  ? "bg-black/40 backdrop-blur-sm border-orange-800/50" 
                  : "bg-gray-900/40 backdrop-blur-sm border-gray-700/50 opacity-60"
              } transition-all duration-300`}            >
              <Collapsible 
                open={week.isExpanded} 
                onOpenChange={() => week.isUnlocked && toggleWeekExpansion(weekIndex)}
              >
                <CardHeader>
                  <div className={`flex items-center justify-between ${week.isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${week.quizCompleted ? "bg-green-500" : week.isUnlocked ? "bg-orange-500" : "bg-gray-600"}`}>
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
                      <div className="text-lg font-semibold text-orange-400">{Math.round(week.progress)}%</div>
                      {week.quizScore !== undefined && (
                        <div className="text-sm text-green-400">Quiz: {Math.round(week.quizScore || 0)}%</div>
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
                              <div key={task.id} className="flex flex-col gap-3 p-3 rounded-lg border border-gray-600/30 bg-gray-800/40">
                                <div className="flex items-center gap-3">
                                  <Checkbox 
                                    checked={task.completed}
                                    onCheckedChange={() => handleToggleTask(week.id, task.id)}
                                    className="border-gray-400"
                                  />
                                  {getTaskIcon(task.type)}
                                  <span className={`flex-1 ${task.completed ? "text-green-400" : "text-white"}`}>
                                    {task.title}
                                  </span>
                                </div>
                                {task.resources && task.resources.length > 0 && (
                                  <div className="ml-8 space-y-2">
                                    {task.resources.map((resource) => (
                                      <div key={resource.id} className="flex items-center gap-3 p-2 bg-gray-800/20 rounded border border-gray-700/30">
                                        {getResourceIcon(resource.type)}
                                        <span className="text-sm text-gray-300 flex-1">{resource.title}</span>
                                        <Button 
                                          size="sm" 
                                          variant="ghost" 
                                          className="h-8 px-3 text-orange-400 hover:text-orange-300"
                                          onClick={() => window.open(resource.url, '_blank')}
                                        >
                                          Open
                                          <ExternalLink className="w-3 h-3 ml-1" />
                                        </Button>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {week.resources.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
                            <div className="space-y-2">
                              {week.resources.map((resource, resourceIndex) => (
                                <div key={resource.id} className="flex items-center gap-3 p-3 bg-gray-800/20 rounded border border-gray-700/30">
                                  {getResourceIcon(resource.type)}
                                  <span className="text-sm text-gray-300 flex-1">{getResourceTitle(resource.url, resource.type)}</span>
                                  <Button 
                                    size="sm" 
                                    variant="ghost" 
                                    className="h-8 px-3 text-orange-400 hover:text-orange-300"
                                    onClick={() => window.open(resource.url, '_blank')}
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

export default DataStructures;
