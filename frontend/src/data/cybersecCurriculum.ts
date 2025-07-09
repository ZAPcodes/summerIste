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
      {
        id: "1-1",
        title: "Learn Linux terminal basics",
        description: "Understand essential Linux commands and navigating the terminal.",
        type: "video",
        resources: [
          { id: "1-1-resource-1", title: "PwnCollege Linux Luminarium: Hello Hackers", type: "documentation", url: "https://pwn.college/linux-luminarium/hello/" },
          { id: "1-1-resource-2", title: "Introduction to Linux - Full Course for Beginners", type: "video", url: "https://www.youtube.com/watch?v=sWbUDq4S6Y8" },
          { id: "1-1-resource-3", title: "Linux Command Line Tutorial For Beginners", type: "video", url: "https://www.youtube.com/watch?v=2PGnYjbYuUo" },
          { id: "1-1-resource-4", title: "Linux Survival Module 1", type: "documentation", url: "https://linuxsurvival.com/linux-tutorial-introduction/" }
        ]
      },
      {
        id: "1-2",
        title: "Understand file systems and permissions",
        description: "Learn about Linux file system hierarchy and managing file/directory permissions.",
        type: "reading",
        resources: [
          { id: "1-2-resource-1", title: "PwnCollege Linux Luminarium: Pondering Paths", type: "documentation", url: "https://pwn.college/linux-luminarium/paths/" },
          { id: "1-2-resource-2", title: "Linux Journey: Grasshopper - File System", type: "article", url: "https://linuxjourney.com/lesson/filesystem-hierarchy" },
          { id: "1-2-resource-3", title: "Linux File System Explained", type: "video", url: "https://www.youtube.com/watch?v=HbgzrKJvDRw" },
          { id: "1-2-resource-4", title: "Linux File System Hierarchy Standard", type: "documentation", url: "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html" },
          { id: "1-2-resource-5", title: "Linux Permissions Explained", type: "article", url: "https://www.redhat.com/sysadmin/linux-file-permissions-explained" }
        ]
      },
      {
        id: "1-3",
        title: "Write basic bash scripts",
        description: "Develop simple automation scripts using Bash scripting.",
        type: "assignment",
        resources: [
          { id: "1-3-resource-1", title: "Bash Scripting Tutorial for Beginners", type: "video", url: "https://www.youtube.com/watch?v=tK9Oc6AEnR4" },
          { id: "1-3-resource-2", title: "Bash Scripting Cheat Sheet", type: "documentation", url: "https://devhints.io/bash" },
          { id: "1-3-resource-3", title: "Shell Scripting Tutorial", type: "documentation", url: "https://www.shellscript.sh/" },
          { id: "1-3-resource-4", title: "Bash Academy", type: "documentation", url: "https://guide.bash.academy/" },
          { id: "1-3-resource-5", title: "Linux Shell Scripting Tutorial", type: "documentation", url: "https://bash.cyberciti.biz/guide/Main_Page" }
        ]
      },
      {
        id: "1-4",
        title: "Use CTF tools",
        description: "Familiarize yourself with common Capture The Flag (CTF) tools.",
        type: "video",
        resources: [
          { id: "1-4-resource-1", title: "CTF 101: Basic Tools", type: "article", url: "https://ctf101.org/forensics/what-are-tools/" },
          { id: "1-4-resource-2", title: "PicoCTF Learning Resources", type: "documentation", url: "https://picoctf.org/resources.html" },
          { id: "1-4-resource-3", title: "CTF Tools Tutorial", type: "video", url: "https://www.youtube.com/watch?v=Lus7aNf2xDg" },
          { id: "1-4-resource-4", title: "CTF Field Guide: Forensics", type: "documentation", url: "https://trailofbits.github.io/ctf/forensics/" },
          { id: "1-4-resource-5", title: "Introduction to CTF Tools", type: "video", url: "https://www.youtube.com/watch?v=Uv0-G1-fTAg" }
        ]
      },
      {
        id: "1-5",
        title: "Solve picoCTF challenges",
        description: "Practice solving beginner-friendly CTF challenges on picoCTF.",
        type: "assignment",
        resources: [
          { id: "1-5-resource-1", title: "PicoCTF Getting Started Guide", type: "documentation", url: "https://picoctf.org/get_started.html" },
          { id: "1-5-resource-2", title: "PicoCTF Practice Challenges", type: "documentation", url: "https://play.picoctf.org/practice" },
          { id: "1-5-resource-3", title: "PicoCTF Walkthrough - General Skills", type: "article", url: "https://medium.com/@bidyasahu6005/picoctf-challenges-walkthrough-general-skills-b213fcb9d5e4" },
          { id: "1-5-resource-4", title: "PicoCTF Video Tutorials", type: "video", url: "https://www.youtube.com/playlist?list=PLJ_vkrXdcgH-lYlRV8O-kef2zWvoy79yP" },
          { id: "1-5-resource-5", title: "CTF Field Guide", type: "documentation", url: "https://trailofbits.github.io/ctf/" }
        ]
      }
    ],
    resources: [
      { id: "1-main-resource-1", title: "PwnCollege Linux Luminarium", type: "documentation", url: "https://pwn.college/linux-luminarium" },
      { id: "1-main-resource-2", title: "Linux Journey", type: "documentation", url: "https://linuxjourney.com/" },
      { id: "1-main-resource-3", title: "Linux Survival", type: "documentation", url: "https://linuxsurvival.com/" },
      { id: "1-main-resource-4", title: "Linux Command Cheat Sheet", type: "documentation", url: "https://www.linuxtrainingacademy.com/linux-commands-cheat-sheet/" },
      { id: "1-main-resource-5", title: "PicoCTF", type: "documentation", url: "https://picoctf.org/" }
    ]
  },
  {
    id: 2,
    title: "Web Exploitation",
    tasks: [
      {
        id: "2-1",
        title: "Learn HTTP basics",
        description: "Understand the fundamentals of Hypertext Transfer Protocol (HTTP) and its methods.",
        type: "reading",
        resources: [
          { id: "2-1-resource-1", title: "Mozilla Developer Network: HTTP Basics", type: "documentation", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP" },
          { id: "2-1-resource-2", title: "HTTP: The Protocol Every Web Developer Must Know", type: "article", url: "https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know--net-16150" },
          { id: "2-1-resource-3", title: "Web Exploitation Learning Guide", type: "documentation", url: "https://picoctf.org/learning_guides/Book-3-Web-Exploitation.pdf" },
          { id: "2-1-resource-4", title: "HTTP Status Codes Cheat Sheet", type: "documentation", url: "https://www.restapitutorial.com/httpstatuscodes.html" },
          { id: "2-1-resource-5", title: "TryHackMe: Web Fundamentals", type: "documentation", url: "https://tryhackme.com/room/webfundamentals" }
        ]
      },
      {
        id: "2-2",
        title: "Understand HTML and JavaScript for CTFs",
        description: "Learn how HTML and JavaScript are used in web applications and common vulnerabilities.",
        type: "video",
        resources: [
          { id: "2-2-resource-1", title: "Mozilla Developer Network: HTML Basics", type: "documentation", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" },
          { id: "2-2-resource-2", title: "Mozilla Developer Network: JavaScript Basics", type: "documentation", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" },
          { id: "2-2-resource-3", title: "Chrome DevTools Documentation", type: "documentation", url: "https://developer.chrome.com/docs/devtools/" },
          { id: "2-2-resource-4", title: "CTF101: Web Exploitation Overview", type: "documentation", url: "https://ctf101.org/web-exploitation/overview/" },
          { id: "2-2-resource-5", title: "Web Security Academy Learning Path", type: "video", url: "https://www.youtube.com/playlist?list=PLuyTk2_mYISLaZC4fVqDuW_hOk0dd5rlf" }
        ]
      },
      {
        id: "2-3",
        title: "Exploit XSS vulnerabilities",
        description: "Learn to identify and exploit Cross-Site Scripting (XSS) vulnerabilities.",
        type: "assignment",
        resources: [
          { id: "2-3-resource-1", title: "PortSwigger: Cross-site scripting", type: "documentation", url: "https://portswigger.net/web-security/cross-site-scripting" },
          { id: "2-3-resource-2", title: "OWASP XSS Prevention Cheat Sheet", type: "documentation", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
          { id: "2-3-resource-3", title: "XSS Game", type: "documentation", url: "https://xss-game.appspot.com/" },
          { id: "2-3-resource-4", title: "TryHackMe: XSS", type: "documentation", url: "https://tryhackme.com/room/xss" },
          { id: "2-3-resource-5", title: "Exploiting Web Applications with XSS", type: "article", url: "https://medium.com/@zerodayfreak/exploiting-web-applications-with-cross-site-scripting-xss-a-practical-guide-941137258b80" }
        ]
      },
      {
        id: "2-4",
        title: "Perform simple SQL injection",
        description: "Understand and practice basic SQL injection attacks to compromise databases.",
        type: "assignment",
        resources: [
          { id: "2-4-resource-1", title: "PortSwigger: SQL Injection", type: "documentation", url: "https://portswigger.net/web-security/sql-injection" },
          { id: "2-4-resource-2", title: "OWASP SQL Injection Prevention Cheat Sheet", type: "documentation", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
          { id: "2-4-resource-3", title: "SQL Injection Tutorial", type: "documentation", url: "https://www.w3schools.com/sql/sql_injection.asp" },
          { id: "2-4-resource-4", title: "TryHackMe: SQL Injection", type: "documentation", url: "https://tryhackme.com/room/sqlinjectionlm" },
          { id: "2-4-resource-5", title: "SQLi Lab", type: "documentation", url: "https://github.com/Audi-1/sqli-labs" }
        ]
      },
      {
        id: "2-5",
        title: "Solve picoCTF challenges",
        description: "Apply web exploitation techniques to solve picoCTF challenges.",
        type: "assignment",
        resources: [
          { id: "2-5-resource-1", title: "PicoCTF Web Exploitation Challenges", type: "documentation", url: "https://play.picoctf.org/practice" },
          { id: "2-5-resource-2", title: "picoCTF - Easy Web Challenges - Live Walkthrough", type: "video", url: "https://www.youtube.com/watch?v=mMwGZLcDk7U" },
          { id: "2-5-resource-3", title: "PortSwigger Web Security Academy", type: "documentation", url: "https://portswigger.net/web-security" },
          { id: "2-5-resource-4", title: "DVWA (Damn Vulnerable Web Application)", type: "documentation", url: "https://github.com/digininja/DVWA" },
          { id: "2-5-resource-5", title: "WebGoat", type: "documentation", url: "https://owasp.org/www-project-webgoat/" }
        ]
      }
    ],
    resources: [
      { id: "2-main-resource-1", title: "OWASP Top Ten", type: "documentation", url: "https://owasp.org/www-project-top-ten/" },
      { id: "2-main-resource-2", title: "TryHackMe Web Fundamentals Path", type: "documentation", url: "https://tryhackme.com/path/outline/web" },
      { id: "2-main-resource-3", title: "Burp Suite Documentation", type: "documentation", url: "https://portswigger.net/burp/documentation/desktop" },
      { id: "2-main-resource-4", title: "Web Application Hacker's Handbook", type: "documentation", url: "https://portswigger.net/web-security/web-application-hackers-handbook" },
      { id: "2-main-resource-5", title: "HackTricks: Web Pentesting Methodology", type: "documentation", url: "https://book.hacktricks.xyz/pentesting/pentesting-web" }
    ]
  },
  {
    id: 3,
    title: "Cryptography and Steganography",
    tasks: [
      {
        id: "3-1",
        title: "Learn encoding vs encryption",
        description: "Differentiate between data encoding and encryption techniques.",
        type: "reading",
        resources: [
          { id: "3-1-resource-1", title: "CTF Cryptography for Beginners", type: "article", url: "https://charcharbinks.com/post/ctf_crypto_for_beginners/" },
          { id: "3-1-resource-2", title: "CyberChef Tool", type: "documentation", url: "https://gchq.github.io/CyberChef/" },
          { id: "3-1-resource-3", title: "Cryptii", type: "documentation", url: "https://cryptii.com/" },
          { id: "3-1-resource-4", title: "TryHackMe: Encryption - Crypto 101", type: "documentation", url: "https://tryhackme.com/room/encryptioncrypto101" }
        ]
      },
      {
        id: "3-2",
        title: "Understand classical ciphers",
        description: "Study common classical ciphers like Caesar cipher and Vigenere cipher.",
        type: "video",
        resources: [
          { id: "3-2-resource-1", title: "Crypto Corner: Vigenère Cipher", type: "documentation", url: "https://crypto.interactive-maths.com/vigenegravere-cipher.html" },
          { id: "3-2-resource-2", title: "dCode Cipher Tools", type: "documentation", url: "https://www.dcode.fr/en" },
          { id: "3-2-resource-3", title: "CrypTool Online", type: "documentation", url: "https://www.cryptool.org/en/cto/" },
          { id: "3-2-resource-4", title: "Khan Academy: Cryptography", type: "video", url: "https://www.khanacademy.org/computing/computer-science/cryptography" }
        ]
      },
      {
        id: "3-3",
        title: "Use base encodings",
        description: "Practice with various base encodings such as Base64, Base32, and Base16.",
        type: "assignment",
        resources: [
          { id: "3-3-resource-1", title: "Base Encoding Guide", type: "documentation", url: "https://cryptii.com/pipes/base64-to-base32" },
          { id: "3-3-resource-2", title: "Linux Command Line Encoding Tools", type: "article", url: "https://linuxhint.com/bash_base64_encode_decode/" },
          { id: "3-3-resource-3", title: "CyberChef Base Encoding Operations", type: "documentation", url: "https://gchq.github.io/CyberChef/#recipe=To_Base64('A-Za-z0-9%2B/%3D')" },
          { id: "3-3-resource-4", title: "PicoCTF Base Encoding Challenges", type: "documentation", url: "https://play.picoctf.org/practice" }
        ]
      },
      {
        id: "3-4",
        title: "Explore RSA basics",
        description: "Understand the fundamental concepts of the RSA public-key cryptosystem.",
        type: "video",
        resources: [
          { id: "3-4-resource-1", title: "RSA Algorithm Explained", type: "article", url: "https://www.di-mgt.com.au/rsa_alg.html" },
          { id: "3-4-resource-2", title: "RSA CTF Tool", type: "documentation", url: "https://github.com/RsaCtfTool/RsaCtfTool" },
          { id: "3-4-resource-3", title: "Crypto Hack: RSA Challenges", type: "documentation", url: "https://cryptohack.org/challenges/rsa/" },
          { id: "3-4-resource-4", title: "Understanding RSA Cryptography", type: "video", url: "https://www.youtube.com/watch?v=wXB-V_Keiu8" },
        ]
      },
      {
        id: "3-5",
        title: "Use steganography tools",
        description: "Learn to use tools for hiding data within other files.",
        type: "assignment",
        resources: [
          { id: "3-5-resource-1", title: "Steganography - A list of useful tools and resources", type: "article", url: "https://0xrick.github.io/lists/stego/" },
          { id: "3-5-resource-2", title: "Steghide Tutorial", type: "documentation", url: "https://www.kali.org/tools/steghide/" },
          { id: "3-5-resource-3", title: "StegOnline", type: "documentation", url: "https://stegonline.georgeom.net/upload" },
          { id: "3-5-resource-4", title: "Digital Invisible Ink Toolkit", type: "documentation", url: "https://diit.sourceforge.net/" },
        ]
      },
      {
        id: "3-6",
        title: "Solve picoCTF challenges",
        description: "Solve CTF challenges related to cryptography and steganography.",
        type: "assignment",
        resources: [
          { id: "3-6-resource-1", title: "CryptoHack", type: "documentation", url: "https://cryptohack.org/" },
          { id: "3-6-resource-2", title: "PicoCTF Cryptography Challenges", type: "documentation", url: "https://play.picoctf.org/practice" },
          { id: "3-6-resource-3", title: "Cryptopals Crypto Challenges", type: "documentation", url: "https://cryptopals.com/" },
          { id: "3-6-resource-4", title: "Root Me: Steganography Challenges", type: "documentation", url: "https://www.root-me.org/en/Challenges/Steganography/" },
          { id: "3-6-resource-5", title: "CTFlearn Cryptography Section", type: "documentation", url: "https://ctflearn.com/challenge/1/browse" }
        ]
      }
    ],
    resources: [
      { id: "3-main-resource-1", title: "Crypto101", type: "article", url: "https://www.crypto101.io/" },
      { id: "3-main-resource-2", title: "CyberChef Documentation", type: "documentation", url: "https://github.com/gchq/CyberChef/wiki" },
      { id: "3-main-resource-3", title: "Handbook of Applied Cryptography", type: "documentation", url: "https://cacr.uwaterloo.ca/hac/" },
      { id: "3-main-resource-4", title: "Steganography Tools Cheat Sheet", type: "documentation", url: "https://pequalsnp-team.github.io/cheatsheet/steganography-101" },
      { id: "3-main-resource-5", title: "Cryptography Crash Course", type: "video", url: "https://www.youtube.com/watch?v=jhXCTbFnK8o" }
    ]
  },
  {
    "id": 4,
    "title": "Reverse Engineering and OSINT",
    "tasks": [
      {
        "id": "4-1",
        "title": "Learn Reverse Engineering Basics",
        "description": "Understand the fundamental concepts and methodologies of reverse engineering.",
        "type": "reading",
        "resources": [
          { "id": "4-1-resource-1", "title": "Introduction · Reverse Engineering", "type": "article", "url": "https://0xinfection.github.io/reversing/" },
          { "id": "4-1-resource-2", "title": "How To Start Reverse Engineering — A Guide", "type": "article", "url": "https://medium.com/@arkaghosh08/how-to-start-reverse-engineering-a-guide-b50b6c8112cf" },
          { "id": "4-1-resource-3", "title": "Reverse Engineering 101 - Malware Unicorn", "type": "documentation", "url": "https://malwareunicorn.org/workshops/re101.html" },
          { "id": "4-1-resource-4", "title": "Reverse engineering - Wikipedia", "type": "documentation", "url": "https://en.wikipedia.org/wiki/Reverse_engineering" }
        ]
      },
      {
        "id": "4-2",
        "title": "Explore Reverse Engineering Tools",
        "description": "Familiarize with common tools used in reverse engineering.",
        "type": "reading",
        "resources": [
          { "id": "4-2-resource-1", "title": "Best Reverse Engineering Tools - Apriorit", "type": "article", "url": "https://www.apriorit.com/dev-blog/366-software-reverse-engineering-tools" },
          { "id": "4-2-resource-2", "title": "IDA Pro", "type": "documentation", "url": "https://www.hex-rays.com/products/ida/" },
          { "id": "4-2-resource-3", "title": "Ghidra is a software reverse engineering (SRE) framework", "type": "documentation", "url": "https://github.com/NationalSecurityAgency/ghidra" },
          { "id": "4-2-resource-4", "title": "Binary Ninja", "type": "documentation", "url": "https://binary.ninja/" }
        ]
      },
      {
        "id": "4-3",
        "title": "Understand OSINT Techniques",
        "description": "Learn various techniques for gathering open-source intelligence.",
        "type": "reading",
        "resources": [
          { "id": "4-3-resource-1", "title": "OSINT Techniques - Home", "type": "article", "url": "https://www.osinttechniques.com/" },
          { "id": "4-3-resource-2", "title": "Open-Source Intelligence (OSINT) | Techniques & Tools - Imperva", "type": "article", "url": "https://www.imperva.com/learn/application-security/open-source-intelligence-osint/" },
          { "id": "4-3-resource-3", "title": "OSINT Techniques - Elevating Open Source Data Gathering And ...", "type": "article", "url": "https://www.neotas.com/osint-techniques/" },
          { "id": "4-3-resource-4", "title": "The Beginner's Guide to Open-Source Intelligence (OSINT) - Medium", "type": "article", "url": "https://medium.com/@techmindxperts/the-beginners-guide-to-open-source-intelligence-osint-techniques-and-tools-6a91b9c37ee1" }
        ]
      },
      {
        "id": "4-4",
        "title": "Explore OSINT Tools",
        "description": "Familiarize with common tools used in open-source intelligence.",
        "type": "reading",
        "resources": [
          { "id": "4-4-resource-1", "title": "OSINT Framework", "type": "documentation", "url": "https://osintframework.com/" },
          { "id": "4-4-resource-2", "title": "Top 15 OSINT Tools for Expert Intelligence Gathering", "type": "article", "url": "https://www.recordedfuture.com/threat-intelligence-101/tools-and-technologies/osint-tools" },
          { "id": "4-4-resource-3", "title": "Epieos, the ultimate OSINT tool", "type": "documentation", "url": "https://epieos.com/" },
          { "id": "4-4-resource-4", "title": "FREE TOOLS | OSINT Combine | NexusXplore", "type": "documentation", "url": "https://www.osintcombine.com/tools" }
        ]
      }
    ],
    "resources": [
      { "id": "4-main-resource-1", "title": "Self-Learning Reverse Engineering in 2022 - YouTube", "type": "video", "url": "https://www.youtube.com/watch?v=gPsYkV7-yJk" },
      { "id": "4-main-resource-2", "title": "Open-Source Intelligence (OSINT) in 5 Hours - Full Course - YouTube", "type": "video", "url": "https://www.youtube.com/watch?v=qwA6MmbeGNo" },
      { "id": "4-main-resource-3", "title": "List of awesome reverse engineering resources - GitHub", "type": "documentation", "url": "https://github.com/wtsxDev/reverse-engineering" },
      { "id": "4-main-resource-4", "title": "OSINT: Common Tools and How to use them Safely - BU", "type": "documentation", "url": "https://www.bu.edu/tech/files/2020/08/BU-Security-Camp-2020-OSINT.pdf" }
    ]
  },
  {
    "id": 5,
    "title": "Binary Exploitation",
    "tasks": [
      {
        "id": "5-1",
        "title": "Learn Binary Exploitation Basics",
        "description": "Understand the fundamental concepts and methodologies of binary exploitation.",
        "type": "reading",
        "resources": [
          { "id": "5-1-resource-1", "title": "Intro to Binary Exploitation Skill Path - HTB Academy", "type": "article", "url": "https://academy.hackthebox.com/path/preview/intro-to-binary-exploitation" },
          { "id": "5-1-resource-2", "title": "Binary Exploitation - CTF 101", "type": "article", "url": "https://ctf101.org/binary-exploitation/overview/" },
          { "id": "5-1-resource-3", "title": "[PDF] Binary Exploitation - picoCTF", "type": "documentation", "url": "https://picoctf.org/learning_guides/Book-5-Binary-Exploitation.pdf" },
          { "id": "5-1-resource-4", "title": "Delving into Binary Exploitation: A Beginner's Guide", "type": "article", "url": "https://medium.com/fmisec/delving-into-binary-exploitation-a-beginners-guide-63b0cc8058d5" }
        ]
      },
      {
        "id": "5-2",
        "title": "Understand Binary Exploitation Techniques",
        "description": "Study common binary exploitation techniques like buffer overflows and format string vulnerabilities.",
        "type": "reading",
        "resources": [
          { "id": "5-2-resource-1", "title": "Binary Exploitation Techniques - With Real World Examples", "type": "article", "url": "https://www.secquest.co.uk/white-papers/binary-exploitation-techniques" },
          { "id": "5-2-resource-2", "title": "The most popular binary exploitation techniques | Infosec", "type": "article", "url": "https://www.infosecinstitute.com/resources/vulnerabilities/binary-exploitation-techniques/" },
          { "id": "5-2-resource-3", "title": "Under the EDR Radar: Mastering Binary Exploitation Techniques", "type": "article", "url": "https://cymulate.com/blog/binary-exploitation/" }
        ]
      },
      {
        "id": "5-3",
        "title": "Explore Binary Exploitation Tools",
        "description": "Familiarize with common tools used in binary exploitation.",
        "type": "assignment",
        "resources": [
          { "id": "5-3-resource-1", "title": "binary-exploitation - GitHub Topics (tools section)", "type": "documentation", "url": "https://github.com/topics/binary-exploitation" },
          { "id": "5-3-resource-2", "title": "Binary Exploitation - CTF 101 (tools section)", "type": "documentation", "url": "https://ctf101.org/binary-exploitation/overview/" },
          { "id": "5-3-resource-3", "title": "nightmare - intro to binary exploitation / reverse engineering course", "type": "documentation", "url": "https://www.sysnet.ucsd.edu/~abellon/brain/computer/security/binary-exploitation" }
        ]
      },
      {
        "id": "5-4",
        "title": "Practice with Binary Exploitation CTF Challenges",
        "description": "Engage in Capture The Flag challenges related to binary exploitation.",
        "type": "assignment",
        "resources": [
          { "id": "5-4-resource-1", "title": "Binary Exploitation - Level 1 - Hack The Box CTF", "type": "documentation", "url": "https://ctf.hackthebox.com/pack/binary-exploitation-level-1" },
          { "id": "5-4-resource-2", "title": "Binary Exploits 1 - CTF Field Guide", "type": "documentation", "url": "https://trailofbits.github.io/ctf/exploits/binary1.html" },
          { "id": "5-4-resource-3", "title": "BINARY EXPLOITATION - YouTube (CTF playlist)", "type": "video", "url": "https://www.youtube.com/playlist?list=PL1H1sBF1VAKVg451vJ-rx0y_ZuQMHPamH" }
        ]
      }
    ],
    "resources": [
      { "id": "5-main-resource-1", "title": "How to Learn Binary Exploitation Roadmap", "type": "article", "url": "https://www.hoppersroppers.org/roadmap/training/pwning.html" },
      { "id": "5-main-resource-2", "title": "Intro to Binary Exploitation (Pwn) - YouTube", "type": "video", "url": "https://www.youtube.com/playlist?list=PLHUKi1UlEgOIc07Rfk2Jgb5fZbxDPec94" },
      { "id": "5-main-resource-3", "title": "Introduction to Binary Exploitation (PWN) - CyberHub", "type": "article", "url": "https://cyberhub.sa/posts/6556" }
    ]
  }  
]; 