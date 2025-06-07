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
      { id: "1-1", title: "Set up Flutter environment", description: "Install Flutter SDK and configure your development environment for mobile app development.", type: "video",
        resources: [
          { id: "1-1-resource-1", title: "Flutter Installation Guide (General)", type: "video", url: "https://www.youtube.com/watch?v=mMeQhLGD-og&t=11s" },
          { id: "1-1-resource-2", title: "Flutter Docs: Install", type: "documentation", url: "https://docs.flutter.dev/get-started/install" },
          { id: "1-1-resource-3", title: "Flutter Installation Guide (Mac)", type: "video", url: "https://youtu.be/QG9bw4rWqrg?si=cUDGUh7ieg3BSQAJ" },
          { id: "1-1-resource-4", title: "FlutterMapp: Install Flutter Mac", type: "article", url: "https://www.fluttermapp.com/articles/install-flutter-mac" }
        ]
      },
      { id: "1-2", title: "Learn Dart basics", description: "Understand the fundamental syntax and features of the Dart programming language.", type: "reading",
        resources: [
          { id: "1-2-resource-1", title: "FlutterMapp: Install Flutter Mac", type: "article", url: "https://www.fluttermapp.com/articles/install-flutter-mac" }, // This seems like a typo in original data, keeping for now
          { id: "1-2-resource-2", title: "Flutter Docs: Install", type: "documentation", url: "https://docs.flutter.dev/get-started/install" } // This seems like a typo in original data, keeping for now
        ]
      },
      { id: "1-3", title: "Practice Dart programming", description: "Solve coding exercises to solidify your understanding of Dart concepts.", type: "assignment",
        resources: [
          { id: "1-3-resource-1", title: "Dart Official Site: Get Dart", type: "documentation", url: "https://dart.dev/get-dart" },
          { id: "1-3-resource-2", title: "Dart Programming Tutorial", type: "video", url: "https://www.youtube.com/watch?v=Ej_Pcr4uC2Q" },
          { id: "1-3-resource-3", title: "DartPad (Online Editor)", type: "documentation", url: "https://dartpad.dev/?sample=hello-world" }
        ]
      },
      { id: "1-4", title: "Understand Flutter widgets", description: "Explore the core concepts of Flutter widgets, including StatelessWidget and StatefulWidget.", type: "video",
        resources: [
          { id: "1-4-resource-1", title: "Flutter Widgets Explained", type: "video", url: "https://www.youtube.com/watch?v=D4nhaszNW4o" }
        ]
      },
      { id: "1-5", title: "Build a static app with name and button", description: "Create a simple Flutter application with basic UI elements and user interaction.", type: "assignment",
        resources: [] // Corrected: No specific resources provided for this task in the original data
      }
    ],
    resources: [] // Main resources for Week 1 are implicitly task resources in the provided data
  },
  {
    id: 2,
    title: "Widgets and Navigation",
    tasks: [
      { id: "2-1", title: "Learn Flutter widgets in detail", description: "Dive deeper into various Flutter widgets for building complex user interfaces.", type: "video",
        resources: [
          { id: "2-1-resource-1", title: "Flutter Widgets Deep Dive", type: "video", url: "https://www.youtube.com/watch?v=5lDJNFSWUD8" }
        ]
      },
      { id: "2-2", title: "Understand layout in Flutter", description: "Master Flutter's layout system using widgets like Row, Column, Container, and Expanded.", type: "reading",
        resources: [
          { id: "2-2-resource-1", title: "Flutter Docs: Layout", type: "documentation", url: "https://flutter.dev/docs/development/ui/layout" }
        ]
      },
      { id: "2-3", title: "Implement navigation patterns", description: "Learn to navigate between different screens and pass data using Flutter's routing system.", type: "assignment",
        resources: [
          { id: "2-3-resource-1", title: "Flutter Docs: Navigation", type: "documentation", url: "https://docs.flutter.dev/ui/navigation" },
          { id: "2-3-resource-2", title: "Flutter Navigation Patterns Playlist", type: "video", url: "https://www.youtube.com/playlist?list=PLybADvIp2cxiVOEHi9ooCHP2tAAihHQPX" },
          { id: "2-3-resource-3", title: "Flutter For Beginners: Navigation Patterns", type: "article", url: "https://codezup.com/flutter-for-beginners-effective-navigation-patterns/" }
        ]
      },
      { id: "2-4", title: "Build a project with widgets and navigation", description: "Develop a multi-screen Flutter application incorporating various widgets and navigation techniques.", type: "assignment",
        resources: [] // "evaluate based on project from the video" - no direct resource provided
      }
    ],
    resources: [] // Main resources for Week 2 are implicitly task resources in the provided data
  },
  {
    id: 3,
    title: "State Management and APIs",
    tasks: [
      { id: "3-1", title: "Learn state management in Flutter", description: "Explore different state management solutions in Flutter, such as Provider, BLoC, or GetX.", type: "reading",
        resources: [
          { id: "3-1-resource-1", title: "Flutter Docs: State Management Intro", type: "documentation", url: "https://flutter.dev/docs/development/data-and-backend/state-mgmt/intro" }
        ]
      },
      { id: "3-2", title: "Make API requests using JSONPlaceholder", description: "Learn how to fetch data from RESTful APIs using the http package.", type: "reading",
        resources: [
          { id: "3-2-resource-1", title: "Flutter Docs: Networking", type: "documentation", url: "https://docs.flutter.dev/cookbook/networking" }
        ]
      },
      { id: "3-3", title: "Practice Parsing API Responses", description: "Parse JSON responses and display fetched data in your Flutter application.", type: "reading",
        resources: [
          { id: "3-3-resource-1", title: "JSONPlaceholder Guide", type: "documentation", url: "https://jsonplaceholder.typicode.com/guide/" }
        ]
      },
      { id: "3-4", title: "Build a weather app with API", description: "Create a weather application that fetches and displays real-time weather data from API.", type: "video",
        resources: [
          { id: "3-4-resource-1", title: "Flutter Weather App Tutorial", type: "video", url: "https://www.youtube.com/watch?v=6wTl0yqgBzU" }
        ]
      }
    ],
    resources: []
  },
  {
    id: 4,
    title: "Firebase and Deployment",
    tasks: [
      { id: "4-1", title: "Integrate Firebase", description: "Learn to integrate Firebase services like authentication, Firestore, and storage into your Flutter app.", type: "video",
        resources: [
          { id: "4-1-resource-1", title: "Flutter Firebase Tutorial", type: "video", url: "https://www.youtube.com/watch?v=LFlE8yV7lJY" }
        ]
      },
      { id: "4-2", title: "Deploy a Flutter app", description: "Understand the process of deploying your Flutter application to Android Play Store and Apple App Store.", type: "assignment",
        resources: [
          { id: "4-2-resource-1", title: "Flutter Docs: Android Deployment", type: "documentation", url: "https://flutter.dev/docs/deployment/android" },
          { id: "4-2-resource-2", title: "Flutter Docs: iOS Deployment", type: "documentation", url: "https://flutter.dev/docs/deployment/ios" }
        ]
      }
    ],
    resources: []
  }
]; 