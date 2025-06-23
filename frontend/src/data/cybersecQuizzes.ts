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
  },
  {
    "weekId": 2,
    "title": "Web Exploitation Essentials",
    "timeLimit": 25,
    "passingScore": 70,
    "questions": [
      {
        "id": "cybersec-2-1",
        "question": "What does an HTTP GET request do?",
        "options": ["Sends data to the server", "Retrieves data from the server", "Updates existing data", "Deletes data from the server"],
        "correctAnswer": 1,
        "explanation": "GET requests are used to retrieve information from a server without modifying it."
      },
      {
        "id": "cybersec-2-2",
        "question": "Which HTTP method is commonly used to send data to a server to create/update a resource?",
        "options": ["GET", "PUT", "POST", "DELETE"],
        "correctAnswer": 2,
        "explanation": "POST is used to send data to the server to create/update resources."
      },
      {
        "id": "cybersec-2-3",
        "question": "What does the HTTP status code 403 indicate?",
        "options": ["Resource not found", "Forbidden access", "Internal server error", "Request redirected"],
        "correctAnswer": 1,
        "explanation": "403 Forbidden means the server understood the request but refuses to authorize it."
      },
      {
        "id": "cybersec-2-4",
        "question": "Which Burp Suite tool is used for automating customized attacks with payloads?",
        "options": ["Repeater", "Proxy", "Intruder", "Decoder"],
        "correctAnswer": 2,
        "explanation": "Intruder allows you to automate customized attacks using payloads and various attack types."
      },
      {
        "id": "cybersec-2-5",
        "question": "What is the function of the 'Repeater' tool in Burp Suite?",
        "options": ["Intercept live traffic", "Repeat requests for manual testing", "Analyze sequences", "Decode data"],
        "correctAnswer": 1,
        "explanation": "Repeater is used to manually send modified requests to observe server responses."
      },
      {
        "id": "cybersec-2-6",
        "question": "What type of attack allows injection of SQL code into input fields?",
        "options": ["XSS", "SQL Injection", "CSRF", "SSRF"],
        "correctAnswer": 1,
        "explanation": "SQL Injection allows attackers to execute arbitrary SQL commands on a database."
      },
      {
        "id": "cybersec-2-7",
        "question": "Which vulnerability involves injecting malicious scripts into a trusted website?",
        "options": ["XXE", "XSS", "CSRF", "JWT manipulation"],
        "correctAnswer": 1,
        "explanation": "Cross-site scripting (XSS) allows attackers to inject malicious JavaScript into web pages viewed by others."
      },
      {
        "id": "cybersec-2-8",
        "question": "What is HTTP Request Smuggling?",
        "options": ["Interception of HTTP requests", "Combining multiple requests to confuse the server", "Replaying old requests", "Sniffing network traffic"],
        "correctAnswer": 1,
        "explanation": "Request smuggling manipulates HTTP headers to confuse front-end and back-end servers, leading to unexpected behavior."
      },
      {
        "id": "cybersec-2-9",
        "question": "Which attack involves tricking a user into clicking on something different than what they perceive?",
        "options": ["Clickjacking", "CORS bypass", "IDOR", "SSRF"],
        "correctAnswer": 0,
        "explanation": "Clickjacking uses hidden layers to trick users into clicking unintended buttons or links."
      },
      {
        "id": "cybersec-2-10",
        "question": "What is SSRF (Server-Side Request Forgery)?",
        "options": ["Forcing a server to make internal requests", "Spoofing an IP", "Exploiting JWTs", "Forcing client-side redirects"],
        "correctAnswer": 0,
        "explanation": "SSRF tricks the server into making requests to internal or external resources, possibly leaking sensitive data."
      },
      {
        "id": "cybersec-2-11",
        "question": "What does an IDOR (Insecure Direct Object Reference) vulnerability allow?",
        "options": ["Token stealing", "Access to unauthorized objects or data", "XSS attacks", "SQL injection"],
        "correctAnswer": 1,
        "explanation": "IDOR lets attackers manipulate input to access unauthorized resources by changing IDs in requests."
      },
      {
        "id": "cybersec-2-12",
        "question": "What is the purpose of the 'Proxy' tool in Burp Suite?",
        "options": ["Modify client-server traffic in real time", "Brute-force passwords", "Encode/Decode data", "Scan for vulnerabilities"],
        "correctAnswer": 0,
        "explanation": "Burp's Proxy intercepts and allows editing of requests/responses between the browser and target server."
      },
      {
        "id": "cybersec-2-13",
        "question": "Which Burp Suite tool can be used to analyze randomness in tokens?",
        "options": ["Intruder", "Decoder", "Sequencer", "Repeater"],
        "correctAnswer": 2,
        "explanation": "Sequencer analyzes the randomness and predictability of session tokens."
      },
      {
        "id": "cybersec-2-14",
        "question": "What is the main risk with improper CORS configuration?",
        "options": ["SQL injection", "Cross-origin data theft", "Buffer overflow", "Password reuse"],
        "correctAnswer": 1,
        "explanation": "Incorrect CORS settings can allow unauthorized sites to access sensitive APIs."
      },
      {
        "id": "cybersec-2-15",
        "question": "What does a red team focus on in cybersecurity?",
        "options": ["Defending systems", "Monitoring networks", "Simulating attacks", "Creating policies"],
        "correctAnswer": 2,
        "explanation": "Red teams simulate real-world attacks to test and improve security measures."
      },
      {
        "id": "cybersec-2-16",
        "question": "What role does a blue team play in cybersecurity?",
        "options": ["Build attack tools", "Develop malware", "Detect and defend against attacks", "Penetration testing"],
        "correctAnswer": 2,
        "explanation": "Blue teams are responsible for detecting, responding to, and mitigating attacks in real-time."
      },
      {
        "id": "cybersec-2-17",
        "question": "Which of the following best describes an OS Command Injection attack?",
        "options": ["Exploiting database queries", "Injecting scripts into browsers", "Executing shell commands via web inputs", "Phishing emails"],
        "correctAnswer": 2,
        "explanation": "OS Command Injection allows execution of arbitrary system commands on the host via unsanitized inputs."
      },
      {
        "id": "cybersec-2-18",
        "question": "What vulnerability is associated with insecure or manipulated JSON Web Tokens (JWTs)?",
        "options": ["XSS", "Broken Authentication", "Clickjacking", "SQL Injection"],
        "correctAnswer": 1,
        "explanation": "Weak or manipulated JWTs can lead to broken authentication and unauthorized access."
      },
      {
        "id": "cybersec-2-19",
        "question": "Which vulnerability is related to misconfigured or vulnerable GraphQL APIs?",
        "options": ["Field overexposure", "SQL Injection", "CSRF", "IDOR"],
        "correctAnswer": 0,
        "explanation": "Exposing too many fields or not validating queries can lead to data leakage in GraphQL APIs."
      },
      {
        "id": "cybersec-2-20",
        "question": "What is the role of OAuth 2.0 in web applications?",
        "options": ["Authentication method", "Authorization framework", "Password encryption", "Firewall configuration"],
        "correctAnswer": 1,
        "explanation": "OAuth 2.0 is an authorization protocol that lets users grant limited access to their resources without sharing credentials."
      }
    ]
  }
  
  // Add more weeks following similar pattern
];
