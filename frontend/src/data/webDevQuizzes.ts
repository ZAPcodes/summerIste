
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
  passingScore: number;
  questions: QuizQuestion[];
}

export const webDevQuizzes: WeekQuiz[] = [
  {
    weekId: 1,
    title: "Web Development Fundamentals Quiz",
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: "w1q1",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlink and Text Markup Language"
        ],
        correctAnswer: 0,
        explanation: "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages."
      },
      {
        id: "w1q2",
        question: "Which CSS property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "foreground-color"],
        correctAnswer: 2,
        explanation: "The 'color' property in CSS is used to set the color of text content."
      },
      {
        id: "w1q3",
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
        correctAnswer: 0,
        explanation: "In JavaScript, you can declare variables using 'var', 'let', or 'const' keywords."
      },
      {
        id: "w1q4",
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1,
        explanation: "The <a> tag (anchor tag) is used to create hyperlinks in HTML."
      },
      {
        id: "w1q5",
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Colorful Style Sheets"
        ],
        correctAnswer: 1,
        explanation: "CSS stands for Cascading Style Sheets, used for styling HTML documents."
      },
      {
        id: "w1q6",
        question: "Which Git command is used to save changes to the local repository?",
        options: ["git save", "git commit", "git push", "git store"],
        correctAnswer: 1,
        explanation: "The 'git commit' command saves changes to the local repository with a commit message."
      },
      {
        id: "w1q7",
        question: "What is the purpose of the <head> section in HTML?",
        options: [
          "To display the main content",
          "To contain metadata about the document",
          "To create navigation links",
          "To add images"
        ],
        correctAnswer: 1,
        explanation: "The <head> section contains metadata, title, links to stylesheets, and other information not displayed on the page."
      },
      {
        id: "w1q8",
        question: "Which CSS selector targets elements with a specific class?",
        options: ["#classname", ".classname", "*classname", "classname"],
        correctAnswer: 1,
        explanation: "The dot notation (.classname) is used to select elements with a specific CSS class."
      },
      {
        id: "w1q9",
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: [
          "No difference",
          "=== checks type and value, == only checks value",
          "== checks type and value, === only checks value",
          "=== is faster than =="
        ],
        correctAnswer: 1,
        explanation: "=== (strict equality) checks both type and value, while == (loose equality) only compares values after type coercion."
      },
      {
        id: "w1q10",
        question: "Which protocol is primarily used for web communication?",
        options: ["FTP", "SMTP", "HTTP", "SSH"],
        correctAnswer: 2,
        explanation: "HTTP (HyperText Transfer Protocol) is the primary protocol used for communication between web browsers and servers."
      }
    ]
  },
  {
    weekId: 2,
    title: "Advanced JavaScript and DOM Quiz",
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: "w2q1",
        question: "What does DOM stand for?",
        options: [
          "Document Object Model",
          "Data Object Management",
          "Dynamic Object Method",
          "Document Oriented Model"
        ],
        correctAnswer: 0,
        explanation: "DOM stands for Document Object Model, which represents the HTML document as a tree structure."
      },
      {
        id: "w2q2",
        question: "Which method is used to select an element by its ID in JavaScript?",
        options: [
          "document.querySelector()",
          "document.getElementById()",
          "document.getElement()",
          "document.findById()"
        ],
        correctAnswer: 1,
        explanation: "document.getElementById() is the specific method to select an element by its ID attribute."
      },
      {
        id: "w2q3",
        question: "What is closure in JavaScript?",
        options: [
          "A way to close the browser",
          "A function that has access to variables from its outer scope",
          "A method to end a loop",
          "A type of error handling"
        ],
        correctAnswer: 1,
        explanation: "A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has finished executing."
      },
      {
        id: "w2q4",
        question: "Which event is fired when a user clicks on an HTML element?",
        options: ["onmouseover", "onclick", "onload", "onchange"],
        correctAnswer: 1,
        explanation: "The 'onclick' event is triggered when a user clicks on an HTML element."
      },
      {
        id: "w2q5",
        question: "What is localStorage in web browsers?",
        options: [
          "Temporary storage that expires when browser closes",
          "Persistent storage that remains until manually cleared",
          "Server-side storage",
          "Cache memory"
        ],
        correctAnswer: 1,
        explanation: "localStorage provides persistent storage that remains available until manually cleared or the user clears browser data."
      },
      {
        id: "w2q6",
        question: "Which method is used to add an event listener to an element?",
        options: [
          "element.addEventListener()",
          "element.addEvent()",
          "element.bindEvent()",
          "element.on()"
        ],
        correctAnswer: 0,
        explanation: "addEventListener() is the standard method to attach event handlers to DOM elements."
      },
      {
        id: "w2q7",
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
          "The current function",
          "The global object",
          "The object that owns the method being executed",
          "The previous object"
        ],
        correctAnswer: 2,
        explanation: "'this' refers to the object that is currently executing the method or function."
      },
      {
        id: "w2q8",
        question: "Which method is used to convert a JSON string to a JavaScript object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.convert()",
          "JSON.toObject()"
        ],
        correctAnswer: 0,
        explanation: "JSON.parse() converts a JSON string into a JavaScript object."
      },
      {
        id: "w2q9",
        question: "What is event bubbling?",
        options: [
          "Events moving from child to parent elements",
          "Events moving from parent to child elements",
          "Events being duplicated",
          "Events being cancelled"
        ],
        correctAnswer: 0,
        explanation: "Event bubbling is when an event propagates from the target element up through its parent elements."
      },
      {
        id: "w2q10",
        question: "Which operator is used to check if a property exists in an object?",
        options: ["exists", "in", "has", "contains"],
        correctAnswer: 1,
        explanation: "The 'in' operator checks whether a property exists in an object or its prototype chain."
      }
    ]
  },
  {
    weekId: 3,
    title: "React and Tailwind CSS Quiz",
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: "w3q1",
        question: "What is React?",
        options: [
          "A CSS framework",
          "A JavaScript library for building user interfaces",
          "A database management system",
          "A web server"
        ],
        correctAnswer: 1,
        explanation: "React is a JavaScript library developed by Facebook for building user interfaces, particularly web applications."
      },
      {
        id: "w3q2",
        question: "What is JSX?",
        options: [
          "A new programming language",
          "JavaScript XML - a syntax extension for JavaScript",
          "A CSS preprocessor",
          "A testing framework"
        ],
        correctAnswer: 1,
        explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript."
      },
      {
        id: "w3q3",
        question: "Which hook is used to manage state in functional React components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: 1,
        explanation: "useState is the primary hook for managing state in functional React components."
      },
      {
        id: "w3q4",
        question: "What is Tailwind CSS?",
        options: [
          "A JavaScript framework",
          "A utility-first CSS framework",
          "A React component library",
          "A testing tool"
        ],
        correctAnswer: 1,
        explanation: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs."
      },
      {
        id: "w3q5",
        question: "What is the purpose of useEffect hook?",
        options: [
          "To manage component state",
          "To handle side effects in functional components",
          "To create custom hooks",
          "To optimize performance"
        ],
        correctAnswer: 1,
        explanation: "useEffect is used to handle side effects like API calls, timers, or DOM manipulation in functional components."
      },
      {
        id: "w3q6",
        question: "What are props in React?",
        options: [
          "Component state variables",
          "Properties passed from parent to child components",
          "CSS styling properties",
          "Event handlers"
        ],
        correctAnswer: 1,
        explanation: "Props (properties) are data passed from parent components to child components in React."
      },
      {
        id: "w3q7",
        question: "Which Tailwind class is used to make an element flex?",
        options: ["display-flex", "flex", "d-flex", "flexbox"],
        correctAnswer: 1,
        explanation: "The 'flex' class in Tailwind CSS applies display: flex to an element."
      },
      {
        id: "w3q8",
        question: "What is the virtual DOM in React?",
        options: [
          "A real DOM element",
          "A JavaScript representation of the real DOM",
          "A CSS selector",
          "A React component"
        ],
        correctAnswer: 1,
        explanation: "The virtual DOM is a JavaScript representation of the real DOM that React uses for efficient updates."
      },
      {
        id: "w3q9",
        question: "How do you conditionally render content in React?",
        options: [
          "Using if-else statements only",
          "Using ternary operators or logical AND (&&)",
          "Using switch statements only",
          "Using CSS display properties"
        ],
        correctAnswer: 1,
        explanation: "React supports conditional rendering using ternary operators (condition ? true : false) or logical AND (condition && element)."
      },
      {
        id: "w3q10",
        question: "Which Tailwind class adds responsive behavior?",
        options: [
          "Classes with prefixes like sm:, md:, lg:",
          "responsive-*",
          "mobile-*",
          "screen-*"
        ],
        correctAnswer: 0,
        explanation: "Tailwind uses breakpoint prefixes (sm:, md:, lg:, xl:) to apply styles at different screen sizes."
      }
    ]
  },
  {
    weekId: 4,
    title: "Backend with Node.js and Express Quiz",
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: "w4q1",
        question: "What is Node.js?",
        options: [
          "A web browser",
          "A JavaScript runtime built on Chrome's V8 engine",
          "A CSS framework",
          "A database"
        ],
        correctAnswer: 1,
        explanation: "Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server side."
      },
      {
        id: "w4q2",
        question: "What is Express.js?",
        options: [
          "A database management system",
          "A fast, minimalist web framework for Node.js",
          "A CSS preprocessor",
          "A testing framework"
        ],
        correctAnswer: 1,
        explanation: "Express.js is a minimal and flexible Node.js web application framework that provides robust features for web applications."
      },
      {
        id: "w4q3",
        question: "What does REST stand for?",
        options: [
          "Representational State Transfer",
          "Remote Execution of Server Tasks",
          "Reliable State Transmission",
          "Rapid Exchange of Structured Text"
        ],
        correctAnswer: 0,
        explanation: "REST stands for Representational State Transfer, an architectural style for designing networked applications."
      },
      {
        id: "w4q4",
        question: "Which HTTP method is used to retrieve data?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswer: 2,
        explanation: "GET is the HTTP method used to retrieve data from a server."
      },
      {
        id: "w4q5",
        question: "What is npm?",
        options: [
          "Node Package Manager",
          "New Programming Method",
          "Network Protocol Manager",
          "Node Process Monitor"
        ],
        correctAnswer: 0,
        explanation: "npm (Node Package Manager) is the default package manager for Node.js."
      },
      {
        id: "w4q6",
        question: "Which Express method is used to handle POST requests?",
        options: ["app.post()", "app.get()", "app.put()", "app.delete()"],
        correctAnswer: 0,
        explanation: "app.post() is the Express method used to handle HTTP POST requests."
      },
      {
        id: "w4q7",
        question: "What is middleware in Express?",
        options: [
          "Database connections",
          "Functions that execute during the request-response cycle",
          "CSS styling functions",
          "Error handling only"
        ],
        correctAnswer: 1,
        explanation: "Middleware functions are functions that have access to the request and response objects and can execute code during the request-response cycle."
      },
      {
        id: "w4q8",
        question: "Which status code indicates a successful HTTP request?",
        options: ["404", "500", "200", "401"],
        correctAnswer: 2,
        explanation: "Status code 200 indicates that the HTTP request was successful."
      },
      {
        id: "w4q9",
        question: "What is JSON?",
        options: [
          "JavaScript Object Notation",
          "Java Serialized Object Network",
          "JavaScript Oriented Node",
          "Java Standard Object Method"
        ],
        correctAnswer: 0,
        explanation: "JSON (JavaScript Object Notation) is a lightweight data interchange format."
      },
      {
        id: "w4q10",
        question: "Which method is used to parse JSON in Express middleware?",
        options: [
          "express.json()",
          "express.parse()",
          "express.body()",
          "express.data()"
        ],
        correctAnswer: 0,
        explanation: "express.json() is the built-in middleware function to parse JSON payloads in Express."
      }
    ]
  },
  {
    weekId: 5,
    title: "Full-Stack Capstone and Deployment Quiz",
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: "w5q1",
        question: "What is full-stack development?",
        options: [
          "Only frontend development",
          "Only backend development",
          "Development of both frontend and backend",
          "Database management only"
        ],
        correctAnswer: 2,
        explanation: "Full-stack development involves working on both frontend (client-side) and backend (server-side) parts of an application."
      },
      {
        id: "w5q2",
        question: "What is Vercel primarily used for?",
        options: [
          "Backend hosting",
          "Database management",
          "Frontend deployment and hosting",
          "Email services"
        ],
        correctAnswer: 2,
        explanation: "Vercel is a cloud platform that specializes in frontend deployment and hosting, particularly for React and Next.js applications."
      },
      {
        id: "w5q3",
        question: "What are environment variables?",
        options: [
          "CSS variables",
          "JavaScript variables",
          "Configuration values stored outside the code",
          "HTML attributes"
        ],
        correctAnswer: 2,
        explanation: "Environment variables are configuration values stored outside of the application code, often used for sensitive information like API keys."
      },
      {
        id: "w5q4",
        question: "What is the purpose of a README file?",
        options: [
          "To store database credentials",
          "To provide documentation and instructions for the project",
          "To configure the server",
          "To store CSS styles"
        ],
        correctAnswer: 1,
        explanation: "A README file provides documentation, setup instructions, and important information about the project."
      },
      {
        id: "w5q5",
        question: "Which platform is commonly used for backend deployment?",
        options: ["Vercel", "Netlify", "Render", "GitHub Pages"],
        correctAnswer: 2,
        explanation: "Render is a cloud platform commonly used for backend deployment, supporting various backend technologies."
      },
      {
        id: "w5q6",
        question: "What is the difference between frontend and backend?",
        options: [
          "Frontend is server-side, backend is client-side",
          "Frontend is client-side (user interface), backend is server-side (data processing)",
          "There is no difference",
          "Frontend handles databases, backend handles UI"
        ],
        correctAnswer: 1,
        explanation: "Frontend refers to the client-side (user interface) that users interact with, while backend refers to server-side logic and data processing."
      },
      {
        id: "w5q7",
        question: "What is continuous deployment?",
        options: [
          "Deploying code manually every time",
          "Automatic deployment when code is pushed to a repository",
          "Deploying only on weekends",
          "Testing code before deployment"
        ],
        correctAnswer: 1,
        explanation: "Continuous deployment is a practice where code changes are automatically deployed to production when pushed to a repository."
      },
      {
        id: "w5q8",
        question: "Why are environment variables important for deployment?",
        options: [
          "They make the code run faster",
          "They help separate configuration from code and protect sensitive information",
          "They are required by all hosting platforms",
          "They reduce file size"
        ],
        correctAnswer: 1,
        explanation: "Environment variables help separate configuration from code and protect sensitive information like API keys and database credentials."
      },
      {
        id: "w5q9",
        question: "What is a production environment?",
        options: [
          "The environment where developers write code",
          "The live environment where users access the application",
          "The testing environment",
          "The backup environment"
        ],
        correctAnswer: 1,
        explanation: "A production environment is the live environment where the application is deployed and accessible to end users."
      },
      {
        id: "w5q10",
        question: "What should be included in a good project README?",
        options: [
          "Only the project title",
          "Installation instructions, usage examples, and project description",
          "Only screenshots",
          "Only the author's name"
        ],
        correctAnswer: 1,
        explanation: "A good README should include project description, installation instructions, usage examples, and other helpful information for users and contributors."
      }
    ]
  }
];
