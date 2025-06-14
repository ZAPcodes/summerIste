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

export const cybersecQuizzes: WeekQuiz[] = [
  {
    "weekId": 1,
    "title": "Linux Essentials for Cybersecurity",
    "timeLimit": 20,
    "passingScore": 70,
    "questions": [
      {
        "id": "cybersec-1-1",
        "question": "What does the 'man' command do in Linux?",
        "options": ["Displays the current user", "Opens a manual page for a command", "Shows system logs", "Starts the package manager"],
        "correctAnswer": 1,
        "explanation": "The 'man' command opens the manual page for a specified command, providing documentation."
      },
      {
        "id": "cybersec-1-2",
        "question": "Which command is used to view the contents of a text file in the terminal?",
        "options": ["edit", "see", "cat", "show"],
        "correctAnswer": 2,
        "explanation": "'cat' is used to concatenate and display the contents of files in the terminal."
      },
      {
        "id": "cybersec-1-3",
        "question": "What is the purpose of the 'top' command in Linux?",
        "options": ["Lists files in a folder", "Displays real-time system processes and resource usage", "Shuts down the system", "Shows disk space"],
        "correctAnswer": 1,
        "explanation": "'top' provides a dynamic view of running processes, CPU usage, memory usage, etc."
      },
      {
        "id": "cybersec-1-4",
        "question": "Which Linux command is used to install packages on Debian-based systems?",
        "options": ["yum", "apt", "rpm", "pacman"],
        "correctAnswer": 1,
        "explanation": "'apt' (Advanced Packaging Tool) is used for managing packages in Debian-based distributions like Ubuntu."
      },
      {
        "id": "cybersec-1-5",
        "question": "Which of the following commands can be used to display your IP address in Linux?",
        "options": ["ip a", "ping", "ifconfig all", "netstat ip"],
        "correctAnswer": 0,
        "explanation": "'ip a' or 'ip address' displays all network interfaces and their assigned IP addresses."
      },
      {
        "id": "cybersec-1-6",
        "question": "What does the 'touch' command do?",
        "options": ["Opens a file editor", "Creates a new empty file", "Copies a file", "Monitors file changes"],
        "correctAnswer": 1,
        "explanation": "'touch' is used to create empty files or update the timestamp of existing files."
      },
      {
        "id": "cybersec-1-7",
        "question": "How do you list hidden files in a directory?",
        "options": ["ls -a", "ls -h", "show hidden", "ls --hidden"],
        "correctAnswer": 0,
        "explanation": "'ls -a' lists all files, including hidden files that start with a dot (.)"
      },
      {
        "id": "cybersec-1-8",
        "question": "What does 'chmod +x script.sh' do?",
        "options": ["Deletes the script", "Compiles the script", "Makes the script executable", "Encrypts the script"],
        "correctAnswer": 2,
        "explanation": "'chmod +x' adds executable permission to a file, allowing it to be run as a program."
      },
      {
        "id": "cybersec-1-9",
        "question": "Which command shows disk space usage in human-readable format?",
        "options": ["du -h", "disk --space", "df -h", "ls -lh"],
        "correctAnswer": 2,
        "explanation": "'df -h' displays disk space usage for mounted filesystems in a human-readable format."
      },
      {
        "id": "cybersec-1-10",
        "question": "What does '|' (pipe) do in Linux command-line usage?",
        "options": [
          "Starts a background process",
          "Saves output to a file",
          "Passes output of one command as input to another",
          "Splits commands into multiple lines"
        ],
        "correctAnswer": 2,
        "explanation": "The pipe symbol '|' is used to pass the output of one command directly into another as input."
      }
    ]
  }
  // Add more weeks following similar pattern
];
