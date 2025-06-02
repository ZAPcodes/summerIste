
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Calendar, Clock, CheckCircle, PlayCircle, FileText, Brain, ChevronDown, ChevronRight, ExternalLink, Video, BookOpen } from "lucide-react";

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
  completed: boolean;
  type: "video" | "assignment" | "reading";
  resources?: Resource[];
}

interface Week {
  id: number;
  title: string;
  isUnlocked: boolean;
  quizCompleted: boolean;
  progress: number;
  tasks: Task[];
  quizAvailable: boolean;
  isExpanded?: boolean;
}

const StudentDashboard = ({ domain }: { domain: string }) => {
  const [weeks, setWeeks] = useState<Week[]>([
    {
      id: 1,
      title: "Introduction to Web Development",
      isUnlocked: true,
      quizCompleted: false,
      progress: 75,
      quizAvailable: true,
      isExpanded: true,
      tasks: [
        { 
          id: "1-1", 
          title: "Watch: HTML Basics", 
          description: "Complete HTML fundamentals video", 
          completed: true, 
          type: "video",
          resources: [
            { id: "r1-1", title: "HTML Crash Course", type: "video", url: "https://youtube.com/watch?v=example1" },
            { id: "r1-2", title: "HTML Documentation", type: "documentation", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }
          ]
        },
        { 
          id: "1-2", 
          title: "Practice: Build Your First Webpage", 
          description: "Create a simple HTML page", 
          completed: true, 
          type: "assignment",
          resources: [
            { id: "r1-3", title: "HTML Template Guide", type: "article", url: "https://example.com/html-template" }
          ]
        },
        { 
          id: "1-3", 
          title: "Read: CSS Introduction", 
          description: "Study CSS basics documentation", 
          completed: true, 
          type: "reading",
          resources: [
            { id: "r1-4", title: "CSS Basics Tutorial", type: "video", url: "https://youtube.com/watch?v=example2" },
            { id: "r1-5", title: "CSS Reference", type: "documentation", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }
          ]
        },
        { 
          id: "1-4", 
          title: "Assignment: Portfolio Header", 
          description: "Design a personal portfolio header", 
          completed: false, 
          type: "assignment",
          resources: [
            { id: "r1-6", title: "Portfolio Design Ideas", type: "video", url: "https://youtube.com/watch?v=example3" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Advanced CSS & Responsive Design",
      isUnlocked: false,
      quizCompleted: false,
      progress: 0,
      quizAvailable: false,
      isExpanded: false,
      tasks: [
        { 
          id: "2-1", 
          title: "Watch: Flexbox Tutorial", 
          description: "Master CSS Flexbox layout", 
          completed: false, 
          type: "video",
          resources: [
            { id: "r2-1", title: "Complete Flexbox Guide", type: "video", url: "https://youtube.com/watch?v=example4" }
          ]
        },
        { 
          id: "2-2", 
          title: "Watch: Grid Layout", 
          description: "Learn CSS Grid system", 
          completed: false, 
          type: "video",
          resources: [
            { id: "r2-2", title: "CSS Grid Tutorial", type: "video", url: "https://youtube.com/watch?v=example5" }
          ]
        },
        { 
          id: "2-3", 
          title: "Practice: Responsive Layout", 
          description: "Build a responsive webpage", 
          completed: false, 
          type: "assignment",
          resources: [
            { id: "r2-3", title: "Responsive Design Principles", type: "article", url: "https://example.com/responsive" }
          ]
        },
        { 
          id: "2-4", 
          title: "Assignment: Mobile-First Design", 
          description: "Create mobile-first responsive design", 
          completed: false, 
          type: "assignment",
          resources: [
            { id: "r2-4", title: "Mobile-First Tutorial", type: "video", url: "https://youtube.com/watch?v=example6" }
          ]
        }
      ]
    }
  ]);

  const toggleTask = (weekId: number, taskId: string) => {
    setWeeks(prevWeeks =>
      prevWeeks.map(week => {
        if (week.id === weekId) {
          const updatedTasks = week.tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          );
          const completedTasks = updatedTasks.filter(task => task.completed).length;
          const progress = (completedTasks / updatedTasks.length) * 100;
          return { ...week, tasks: updatedTasks, progress, quizAvailable: progress === 100 };
        }
        return week;
      })
    );
  };

  const toggleWeekExpansion = (weekId: number) => {
    setWeeks(prevWeeks =>
      prevWeeks.map(week =>
        week.id === weekId ? { ...week, isExpanded: !week.isExpanded } : week
      )
    );
  };

  const getTaskIcon = (type: string) => {
    switch (type) {
      case "video": return PlayCircle;
      case "assignment": return FileText;
      case "reading": return BookOpen;
      default: return FileText;
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "video": return Video;
      case "article": return FileText;
      case "documentation": return BookOpen;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Web Development Progress</h1>
          <p className="text-gray-300">Track your weekly progress and complete assignments</p>
        </div>

        {/* Overall Progress */}
        <Card className="bg-black/40 backdrop-blur-sm border-blue-800/50 mb-8">
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
                <span className="text-blue-400">Week 1 of 6</span>
              </div>
              <Progress value={16.7} className="h-3 bg-gray-800" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">1</div>
                  <div className="text-sm text-gray-400">Weeks Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">75%</div>
                  <div className="text-sm text-gray-400">Current Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">0</div>
                  <div className="text-sm text-gray-400">Quizzes Passed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">5</div>
                  <div className="text-sm text-gray-400">Days Left</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Progress Tree */}
        <div className="space-y-6">
          {weeks.map((week) => (
            <Card 
              key={week.id} 
              className={`${
                week.isUnlocked 
                  ? "bg-black/40 backdrop-blur-sm border-blue-800/50" 
                  : "bg-gray-900/40 backdrop-blur-sm border-gray-700/50 opacity-60"
              } transition-all duration-300`}
            >
              <Collapsible 
                open={week.isExpanded} 
                onOpenChange={() => week.isUnlocked && toggleWeekExpansion(week.id)}
              >
                <CardHeader>
                  <CollapsibleTrigger asChild>
                    <div className={`flex items-center justify-between ${week.isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          week.quizCompleted ? "bg-green-500" : week.isUnlocked ? "bg-blue-500" : "bg-gray-600"
                        }`}>
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
                      <div className="text-right">
                        <div className="text-sm text-gray-400 mb-1">Progress</div>
                        <div className="text-lg font-semibold text-blue-400">{Math.round(week.progress)}%</div>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <Progress value={week.progress} className="h-2 bg-gray-800 mt-4" />
                </CardHeader>

                <CollapsibleContent>
                  {week.isUnlocked && (
                    <CardContent>
                      <div className="space-y-4">
                        {/* Tasks Tree */}
                        <div className="space-y-3">
                          {week.tasks.map((task) => {
                            const TaskIcon = getTaskIcon(task.type);
                            return (
                              <div key={task.id} className="border-l-2 border-gray-600 pl-4">
                                <div className={`flex items-center gap-3 p-3 rounded-lg border ${
                                  task.completed 
                                    ? "bg-green-900/20 border-green-500/30" 
                                    : "bg-gray-800/40 border-gray-600/30"
                                }`}>
                                  <Checkbox 
                                    checked={task.completed}
                                    onCheckedChange={() => toggleTask(week.id, task.id)}
                                    className="border-gray-400"
                                  />
                                  <TaskIcon className={`w-5 h-5 ${task.completed ? "text-green-400" : "text-gray-400"}`} />
                                  <div className="flex-1">
                                    <div className={`font-medium ${task.completed ? "text-green-400" : "text-white"}`}>
                                      {task.title}
                                    </div>
                                    <div className="text-sm text-gray-400">{task.description}</div>
                                  </div>
                                  <Badge variant={task.completed ? "default" : "secondary"}>
                                    {task.type}
                                  </Badge>
                                </div>
                                
                                {/* Resources */}
                                {task.resources && task.resources.length > 0 && (
                                  <div className="mt-2 ml-6 space-y-2">
                                    <div className="text-sm text-gray-400 font-medium">Resources:</div>
                                    {task.resources.map((resource) => {
                                      const ResourceIcon = getResourceIcon(resource.type);
                                      return (
                                        <div key={resource.id} className="flex items-center gap-2 p-2 bg-gray-800/20 rounded border border-gray-700/30">
                                          <ResourceIcon className="w-4 h-4 text-blue-400" />
                                          <span className="text-sm text-gray-300 flex-1">{resource.title}</span>
                                          <Button 
                                            size="sm" 
                                            variant="ghost" 
                                            className="h-6 px-2 text-blue-400 hover:text-blue-300"
                                            onClick={() => window.open(resource.url, '_blank')}
                                          >
                                            <ExternalLink className="w-3 h-3" />
                                          </Button>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Quiz Section */}
                        <div className="border-t border-gray-700 pt-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Brain className="w-5 h-5 text-purple-400" />
                              <span className="font-medium">Week {week.id} Quiz</span>
                              {week.quizCompleted && (
                                <Badge className="bg-green-900 text-green-300">Completed</Badge>
                              )}
                            </div>
                            <Button
                              disabled={!week.quizAvailable || week.quizCompleted}
                              className={`${
                                week.quizAvailable && !week.quizCompleted
                                  ? "bg-purple-600 hover:bg-purple-700"
                                  : "bg-gray-600"
                              }`}
                            >
                              {week.quizCompleted ? "Quiz Passed" : week.quizAvailable ? "Take Quiz" : "Complete Tasks First"}
                              <Clock className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                          {week.quizAvailable && !week.quizCompleted && (
                            <p className="text-sm text-gray-400 mt-2">
                              Time limit: 30 minutes | Passing score: 70%
                            </p>
                          )}
                        </div>
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

export default StudentDashboard;
