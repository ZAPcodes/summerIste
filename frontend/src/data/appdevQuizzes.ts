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
  },
  {
    "weekId": 4,
    "title": "Firebase",
    "timeLimit": 20,
    "passingScore": 70,
    "questions": [
      {
        "id": "firebase-1-1",
        "question": "What is Firebase Authentication primarily used for?",
        "options": [
          "Storing files",
          "Managing user sign-in and identity",
          "Querying NoSQL databases",
          "Hosting web apps"
        ],
        "correctAnswer": 1,
        "explanation": "Firebase Authentication helps manage user sign-in with email, password, and social providers like Google and Facebook."
      },
      {
        "id": "firebase-1-2",
        "question": "Which Firebase service is best suited for storing user-generated images?",
        "options": [
          "Cloud Firestore",
          "Realtime Database",
          "Firebase Hosting",
          "Firebase Storage"
        ],
        "correctAnswer": 3,
        "explanation": "Firebase Storage is used for uploading and storing large binary files like images, videos, and audio."
      },
      {
        "id": "firebase-1-3",
        "question": "What type of database is Firestore?",
        "options": [
          "Relational",
          "Key-Value",
          "Document-based NoSQL",
          "Graph"
        ],
        "correctAnswer": 2,
        "explanation": "Cloud Firestore is a scalable, flexible NoSQL cloud database that stores data in documents organized into collections."
      },
      {
        "id": "firebase-1-4",
        "question": "What does real-time update mean in Firestore?",
        "options": [
          "UI refreshes only after reloading",
          "Server manually pushes updates",
          "Clients instantly receive data updates when data changes",
          "Only admin gets updates"
        ],
        "correctAnswer": 2,
        "explanation": "Firestore enables real-time updates, meaning clients are notified instantly when data in the database changes."
      },
      {
        "id": "firebase-1-5",
        "question": "Before writing data to Firestore, what should be done first in most apps?",
        "options": [
          "Enable Firebase Analytics",
          "Deploy Firebase Hosting",
          "Authenticate the user",
          "Create a custom server"
        ],
        "correctAnswer": 2,
        "explanation": "Firebase recommends authenticating users before accessing Firestore to enforce security rules and user-based access."
      },
      {
        "id": "firebase-1-6",
        "question": "Which method is used to upload a file to Firebase Storage in Flutter?",
        "options": [
          "putFile()",
          "save()",
          "storeFile()",
          "upload()"
        ],
        "correctAnswer": 0,
        "explanation": "In Firebase Storage for Flutter, the putFile() method is used to upload files like images or videos."
      },
      {
        "id": "firebase-1-7",
      "question": "What is the purpose of Firebase Storage?",
      "options": [
        "Store user credentials",
        "Host web pages",
        "Store and serve user-generated files",
        "Manage database queries"
      ],
      "correctAnswer": 2,
      "explanation": "Firebase Storage is used to store and serve user-generated content such as images, videos, and other files."
      },
      {
        "id": "firebase-1-8",
        "question": "What happens if Firebase security rules are not configured properly?",
        "options": [
          "The app won’t compile",
          "Firebase blocks all reads and writes",
          "Data may be publicly accessible or restricted incorrectly",
          "Firebase shuts down your project"
        ],
        "correctAnswer": 2,
        "explanation": "Improperly set security rules may expose your database or prevent users from reading/writing data as needed."
      },
      {
        "id": "firebase-1-9",
        "question": "What is the purpose of Firebase Hosting?",
        "options": [
          "Running background tasks",
          "Hosting static assets like HTML, CSS, JS",
          "Sending push notifications",
          "Monitoring performance"
        ],
        "correctAnswer": 1,
        "explanation": "Firebase Hosting is used to host static websites and assets like HTML, CSS, JS, and images."
      },
      {
        "id": "firebase-1-10",
        "question": "Which Firebase combination is most suitable for building a chat app?",
        "options": [
          "Firebase Auth + Firestore + Storage",
          "Storage + Hosting",
          "Firestore + Analytics",
          "Auth + Hosting"
        ],
        "correctAnswer": 0,
        "explanation": "For a chat app, you typically use Firebase Auth for user identity, Firestore for chat data, and Storage for media."
      }
    ]
  }
  // Add more weeks following similar pattern
];
