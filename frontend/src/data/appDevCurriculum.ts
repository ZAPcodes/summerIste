export interface Resource {
  id: string;
  title: string;
  type: "video" | "article" | "documentation";
  url: string;
}

export interface CurriculumTaskData {
  id: string;
  title: string;
  description: string;
  type: "video" | "assignment" | "reading";
  resources?: Resource[];
}

export interface CurriculumWeekData {
  id: number;
  title: string;
  tasks: CurriculumTaskData[];
  resources: Resource[];
}

export const appDevCurriculum: CurriculumWeekData[] = [
  {
    id: 1,
    title: "Flutter Setup and Dart Basics",
    tasks: [
      { id: "1-1", title: "Set up Flutter environment", description: "Install Flutter SDK and configure your development environment for mobile app development.", type: "video" },
      { id: "1-2", title: "Learn Dart basics", description: "Understand the fundamental syntax and features of the Dart programming language.", type: "reading" },
      { id: "1-3", title: "Practice Dart programming", description: "Solve coding exercises to solidify your understanding of Dart concepts.", type: "assignment" },
      { id: "1-4", title: "Understand Flutter widgets", description: "Explore the core concepts of Flutter widgets, including StatelessWidget and StatefulWidget.", type: "video" },
      { id: "1-5", title: "Build a static app with name and button", description: "Create a simple Flutter application with basic UI elements and user interaction.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 2,
    title: "Widgets and Navigation",
    tasks: [
      { id: "2-1", title: "Learn Flutter widgets in detail", description: "Dive deeper into various Flutter widgets for building complex user interfaces.", type: "video" },
      { id: "2-2", title: "Understand layout in Flutter", description: "Master Flutter's layout system using widgets like Row, Column, Container, and Expanded.", type: "reading" },
      { id: "2-3", title: "Implement navigation patterns", description: "Learn to navigate between different screens and pass data using Flutter's routing system.", type: "assignment" },
      { id: "2-4", title: "Build a project with widgets and navigation", description: "Develop a multi-screen Flutter application incorporating various widgets and navigation techniques.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 3,
    title: "State Management and APIs",
    tasks: [
      { id: "3-1", title: "Learn state management in Flutter", description: "Explore different state management solutions in Flutter, such as Provider, BLoC, or GetX.", type: "video" },
      { id: "3-2", title: "Make API requests using JSONPlaceholder", description: "Learn how to fetch data from RESTful APIs using the http package.", type: "assignment" },
      { id: "3-3", title: "Handle API responses", description: "Parse JSON responses and display fetched data in your Flutter application.", type: "reading" },
      { id: "3-4", title: "Build a weather app with OpenWeather API", description: "Create a weather application that fetches and displays real-time weather data from OpenWeatherMap API.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 4,
    title: "Firebase and Deployment",
    tasks: [
      { id: "4-1", title: "Integrate Firebase", description: "Learn to integrate Firebase services like authentication, Firestore, and storage into your Flutter app.", type: "video" },
      { id: "4-2", title: "Deploy a Flutter app", description: "Understand the process of deploying your Flutter application to Android Play Store and Apple App Store.", type: "assignment" }
    ],
    resources: [],
  }
]; 