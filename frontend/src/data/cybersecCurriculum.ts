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

export const cybersecCurriculum: CurriculumWeekData[] = [
  {
    id: 1,
    title: "Linux and CTF Basics",
    tasks: [
      { id: "1-1", title: "Learn Linux terminal basics", description: "Understand essential Linux commands and navigating the terminal.", type: "video" },
      { id: "1-2", title: "Understand file systems and permissions", description: "Learn about Linux file system hierarchy and managing file/directory permissions.", type: "reading" },
      { id: "1-3", title: "Write basic bash scripts", description: "Develop simple automation scripts using Bash scripting.", type: "assignment" },
      { id: "1-4", title: "Use CTF tools", description: "Familiarize yourself with common Capture The Flag (CTF) tools.", type: "video" },
      { id: "1-5", title: "Solve picoCTF challenges", description: "Practice solving beginner-friendly CTF challenges on picoCTF.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 2,
    title: "Web Exploitation",
    tasks: [
      { id: "2-1", title: "Learn HTTP basics", description: "Understand the fundamentals of Hypertext Transfer Protocol (HTTP) and its methods.", type: "reading" },
      { id: "2-2", title: "Understand HTML and JavaScript for CTFs", description: "Learn how HTML and JavaScript are used in web applications and common vulnerabilities.", type: "video" },
      { id: "2-3", title: "Exploit XSS vulnerabilities", description: "Learn to identify and exploit Cross-Site Scripting (XSS) vulnerabilities.", type: "assignment" },
      { id: "2-4", title: "Perform simple SQL injection", description: "Understand and practice basic SQL injection attacks to compromise databases.", type: "assignment" },
      { id: "2-5", title: "Solve picoCTF challenges", description: "Apply web exploitation techniques to solve picoCTF challenges.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 3,
    title: "Cryptography and Steganography",
    tasks: [
      { id: "3-1", title: "Learn encoding vs encryption", description: "Differentiate between data encoding and encryption techniques.", type: "reading" },
      { id: "3-2", title: "Understand classical ciphers", description: "Study common classical ciphers like Caesar cipher and Vigenere cipher.", type: "video" },
      { id: "3-3", title: "Use base encodings", description: "Practice with various base encodings such as Base64, Base32, and Base16.", type: "assignment" },
      { id: "3-4", title: "Explore RSA basics", description: "Understand the fundamental concepts of the RSA public-key cryptosystem.", type: "video" },
      { id: "3-5", title: "Use steganography tools", description: "Learn to use tools for hiding data within other files.", type: "assignment" },
      { id: "3-6", title: "Solve picoCTF challenges", description: "Solve CTF challenges related to cryptography and steganography.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 4,
    title: "Reverse Engineering and OSINT",
    tasks: [
      { id: "4-1", title: "Perform dynamic analysis", description: "Learn techniques for analyzing software during its execution.", type: "video" },
      { id: "4-2", title: "Reverse engineer C binaries", description: "Practice disassembling and analyzing compiled C programs.", type: "assignment" },
      { id: "4-3", title: "Use OSINT tools", description: "Explore Open-Source Intelligence (OSINT) tools for gathering information.", type: "video" },
      { id: "4-4", title: "Solve picoCTF challenges", description: "Apply reverse engineering and OSINT skills to solve CTF problems.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 5,
    title: "Forensics and Binary Exploitation",
    tasks: [
      { id: "5-1", title: "Analyze PCAP with Wireshark", description: "Learn to analyze network traffic captures using Wireshark for forensic investigations.", type: "video" },
      { id: "5-2", title: "Perform memory dump analysis", description: "Understand how to analyze memory dumps for forensic purposes.", type: "assignment" },
      { id: "5-3", title: "Learn buffer overflow basics", description: "Grasp the concept of buffer overflows and how to exploit them.", type: "video" },
      { id: "5-4", title: "Solve picoCTF challenges", description: "Solve CTF challenges involving forensics and binary exploitation.", type: "assignment" },
      { id: "5-5", title: "Participate in mini CTF event", description: "Engage in a practical mini Capture The Flag event to apply learned skills.", type: "assignment" }
    ],
    resources: [],
  }
]; 