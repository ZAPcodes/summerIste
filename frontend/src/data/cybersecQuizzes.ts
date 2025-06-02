
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

export const cybersecQuizzes: WeekQuiz[] = [
  {
    weekId: 1,
    title: "Linux and CTF Basics Quiz",
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: "cybersec-1-1",
        question: "What command is used to list files and directories in Linux?",
        options: ["list", "ls", "dir", "show"],
        correctAnswer: 1,
        explanation: "The 'ls' command is used to list files and directories in Linux systems."
      },
      {
        id: "cybersec-1-2",
        question: "What does CTF stand for in cybersecurity?",
        options: [
          "Cyber Task Force",
          "Capture The Flag",
          "Computer Technical Framework",
          "Cryptographic Test Function"
        ],
        correctAnswer: 1,
        explanation: "CTF stands for Capture The Flag, a cybersecurity competition format."
      },
      {
        id: "cybersec-1-3",
        question: "Which command changes file permissions in Linux?",
        options: ["perm", "chmod", "access", "rights"],
        correctAnswer: 1,
        explanation: "The 'chmod' command is used to change file permissions in Linux."
      },
      {
        id: "cybersec-1-4",
        question: "What is the root directory in Linux represented by?",
        options: ["/", "\\", "root", "~"],
        correctAnswer: 0,
        explanation: "The root directory in Linux is represented by a forward slash (/)."
      },
      {
        id: "cybersec-1-5",
        question: "Which symbol represents the home directory in Linux?",
        options: ["/", "@", "~", "#"],
        correctAnswer: 2,
        explanation: "The tilde (~) symbol represents the current user's home directory in Linux."
      },
      {
        id: "cybersec-1-6",
        question: "What command is used to change directories in Linux?",
        options: ["move", "goto", "cd", "change"],
        correctAnswer: 2,
        explanation: "The 'cd' (change directory) command is used to navigate between directories."
      },
      {
        id: "cybersec-1-7",
        question: "What does the 'sudo' command do?",
        options: [
          "Switch user",
          "Super user do - execute commands with elevated privileges",
          "Show user details",
          "Secure user data"
        ],
        correctAnswer: 1,
        explanation: "'sudo' stands for 'super user do' and allows users to execute commands with elevated privileges."
      },
      {
        id: "cybersec-1-8",
        question: "Which file extension is commonly used for bash scripts?",
        options: [".bat", ".sh", ".script", ".bash"],
        correctAnswer: 1,
        explanation: "Bash scripts commonly use the '.sh' file extension."
      },
      {
        id: "cybersec-1-9",
        question: "What does the 'grep' command do?",
        options: [
          "Copy files",
          "Search for patterns in text",
          "Group files",
          "Generate reports"
        ],
        correctAnswer: 1,
        explanation: "'grep' is used to search for specific patterns or text within files."
      },
      {
        id: "cybersec-1-10",
        question: "Which command displays the current working directory?",
        options: ["cwd", "pwd", "where", "location"],
        correctAnswer: 1,
        explanation: "The 'pwd' (print working directory) command displays the current directory path."
      }
    ]
  }
  // Add more weeks following similar pattern
];
