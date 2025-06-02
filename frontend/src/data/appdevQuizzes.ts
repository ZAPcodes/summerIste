
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface WeekQuiz {
  weekId: number;
  title: string;
  timeLimit: number; // in minutes
  passingScore: number; // percentage
  questions: QuizQuestion[];
}

export const appdevQuizzes: WeekQuiz[] = [
  {
    weekId: 1,
    title: "Flutter Setup and Dart Basics Quiz",
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: "appdev-1-1",
        question: "What is Flutter?",
        options: [
          "A web browser",
          "A mobile app development framework",
          "A database system",
          "A programming language"
        ],
        correctAnswer: 1,
        explanation: "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop."
      },
      {
        id: "appdev-1-2",
        question: "What programming language is used with Flutter?",
        options: ["Java", "Swift", "Dart", "Kotlin"],
        correctAnswer: 2,
        explanation: "Dart is the programming language used with Flutter, developed by Google."
      },
      {
        id: "appdev-1-3",
        question: "Which company developed Flutter?",
        options: ["Facebook", "Google", "Microsoft", "Apple"],
        correctAnswer: 1,
        explanation: "Flutter was developed by Google and first released in 2017."
      },
      {
        id: "appdev-1-4",
        question: "What is a Widget in Flutter?",
        options: [
          "A small application",
          "A basic building block of Flutter UI",
          "A development tool",
          "A type of database"
        ],
        correctAnswer: 1,
        explanation: "In Flutter, everything is a widget - they are the basic building blocks of the user interface."
      },
      {
        id: "appdev-1-5",
        question: "Which IDE is commonly recommended for Flutter development?",
        options: ["Notepad", "Visual Studio Code", "MS Word", "Calculator"],
        correctAnswer: 1,
        explanation: "Visual Studio Code with Flutter extensions is one of the most popular IDEs for Flutter development."
      },
      {
        id: "appdev-1-6",
        question: "What command is used to create a new Flutter project?",
        options: [
          "flutter new",
          "flutter create",
          "flutter init",
          "flutter start"
        ],
        correctAnswer: 1,
        explanation: "The 'flutter create' command is used to create a new Flutter project."
      },
      {
        id: "appdev-1-7",
        question: "What does 'hot reload' mean in Flutter?",
        options: [
          "Restarting the phone",
          "Quickly updating the app during development without losing state",
          "Loading the app faster",
          "Clearing app cache"
        ],
        correctAnswer: 1,
        explanation: "Hot reload allows developers to see changes instantly during development without losing the current app state."
      },
      {
        id: "appdev-1-8",
        question: "Which of these is a valid Dart data type?",
        options: ["String", "Character", "Float", "Byte"],
        correctAnswer: 0,
        explanation: "String is a valid data type in Dart. Dart uses double for decimal numbers instead of float."
      },
      {
        id: "appdev-1-9",
        question: "What is the main function in a Flutter app?",
        options: [
          "The first function that runs",
          "The largest function",
          "The most important function",
          "The entry point of the application"
        ],
        correctAnswer: 3,
        explanation: "The main() function is the entry point of every Flutter application."
      },
      {
        id: "appdev-1-10",
        question: "Which widget is used as the top-level widget in most Flutter apps?",
        options: ["Container", "MaterialApp", "Text", "Button"],
        correctAnswer: 1,
        explanation: "MaterialApp is typically used as the top-level widget and provides material design styling and navigation."
      }
    ]
  }
  // Add more weeks following similar pattern
];
