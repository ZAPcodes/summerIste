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
  domain?: string;
}

export const appdevQuizzes: WeekQuiz[] = [
  {
    "weekId": 1,
    "title": "Flutter Setup and Dart Basics Quiz",
    "timeLimit": 20,
    "passingScore": 70,
    "questions": [
      {
        "id": "appdev-1-1",
        "question": "Which IDE is primarily recommended for Flutter development with comprehensive Flutter support?",
        "options": [
          "Visual Studio Code",
          "IntelliJ IDEA",
          "Android Studio",
          "Eclipse"
        ],
        "correctAnswer": 2,
        "explanation": "Android Studio is the primary IDE recommended for Flutter development as it provides comprehensive Flutter and Dart support, along with Android development tools."
      },
      {
        "id": "appdev-1-2",
        "question": "Which command is used to verify that Flutter is properly installed and configured on your system?",
        "options": [
          "flutter --version",
          "flutter doctor",
          "flutter check",
          "flutter status"
        ],
        "correctAnswer": 1,
        "explanation": "The 'flutter doctor' command checks your environment and displays a report of the status of your Flutter installation, identifying any missing dependencies."
      },
      {
        "id": "appdev-1-3",
        "question": "What is the correct way to declare a variable in Dart that can hold any type of value?",
        "options": [
          "var myVariable;",
          "dynamic myVariable;",
          "Object myVariable;",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "In Dart, var, dynamic, and Object can all be used to declare variables that can hold any type of value, though they have slightly different behaviors regarding type inference and checking."
      },
      {
        "id": "appdev-1-4",
        "question": "Which of the following is NOT a built-in data type in Dart?",
        "options": [
          "int",
          "double",
          "char",
          "bool"
        ],
        "correctAnswer": 2,
        "explanation": "Dart does not have a 'char' data type. It uses String for text data, even for single characters. The built-in types include int, double, bool, and String."
      },
      {
        "id": "appdev-1-5",
        "question": "In Flutter, what is the key difference between StatelessWidget and StatefulWidget?",
        "options": [
          "StatelessWidget can change its appearance, StatefulWidget cannot",
          "StatelessWidget cannot change its appearance, StatefulWidget can",
          "There is no difference between them",
          "StatelessWidget is used for layouts, StatefulWidget for logic"
        ],
        "correctAnswer": 1,
        "explanation": "StatelessWidget represents widgets that don't change over time, while StatefulWidget can rebuild and change their appearance based on internal state changes."
      },
      {
        "id": "appdev-1-6",
        "question": "What is the correct syntax for defining a function in Dart?",
        "options": [
          "function myFunction() { }",
          "def myFunction() { }",
          "void myFunction() { }",
          "func myFunction() { }"
        ],
        "correctAnswer": 2,
        "explanation": "In Dart, functions are defined with their return type (like void) followed by the function name and parameters in parentheses, similar to Java or C# syntax."
      },
      {
        "id": "appdev-1-7",
        "question": "Which file is automatically created when you create a new Flutter project and serves as the entry point?",
        "options": [
          "index.dart",
          "app.dart",
          "main.dart",
          "flutter.dart"
        ],
        "correctAnswer": 2,
        "explanation": "main.dart is the entry point file in a Flutter application, containing the main() function where the app execution begins."
      },
      {
        "id": "appdev-1-8",
        "question": "Which collection type in Dart maintains insertion order and allows duplicate elements?",
        "options": [
          "Set",
          "Map",
          "List",
          "Queue"
        ],
        "correctAnswer": 2,
        "explanation": "List in Dart maintains insertion order and allows duplicate elements, similar to arrays in other languages. Sets don't allow duplicates, and Maps store key-value pairs."
      },
      {
        "id": "appdev-1-9",
        "question": "What is the root widget that typically wraps your entire Flutter application?",
        "options": [
          "Container",
          "MaterialApp",
          "Scaffold",
          "Column"
        ],
        "correctAnswer": 1,
        "explanation": "MaterialApp is typically the root widget that wraps the entire Flutter application, providing material design styling, theming, and navigation capabilities."
      },
      {
        "id": "appdev-1-10",
        "question": "Which operator in Dart is used to provide a default value when a variable might be null?",
        "options": [
          "??",
          "?.",
          "!",
          "??="
        ],
        "correctAnswer": 0,
        "explanation": "The ?? operator (null-coalescing operator) returns the left operand if it's not null, otherwise it returns the right operand, providing a default value for null cases."
      }
    ]
  }
  // Add more weeks following similar pattern
];
