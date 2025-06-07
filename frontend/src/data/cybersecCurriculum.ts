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
          { id: "3-1-resource-1", title: "Encoding vs. Encryption vs. Hashing", type: "article", url: "https://www.baeldung.com/cs/encoding-encryption-hashing" },
          { id: "3-1-resource-2", title: "CTF Cryptography for Beginners", type: "article", url: "https://charcharbinks.com/post/ctf_crypto_for_beginners/" },
          { id: "3-1-resource-3", title: "CyberChef Tool", type: "documentation", url: "https://gchq.github.io/CyberChef/" },
          { id: "3-1-resource-4", title: "Cryptii", type: "documentation", url: "https://cryptii.com/" },
          { id: "3-1-resource-5", title: "TryHackMe: Encryption - Crypto 101", type: "documentation", url: "https://tryhackme.com/room/encryptioncrypto101" }
        ]
      },
      {
        id: "3-2",
        title: "Understand classical ciphers",
        description: "Study common classical ciphers like Caesar cipher and Vigenere cipher.",
        type: "video",
        resources: [
          { id: "3-2-resource-1", title: "Practical Cryptography: Classical Ciphers", type: "documentation", url: "http://practicalcryptography.com/ciphers/classical-era/" },
          { id: "3-2-resource-2", title: "Crypto Corner: Vigenère Cipher", type: "documentation", url: "https://crypto.interactive-maths.com/vigenegravere-cipher.html" },
          { id: "3-2-resource-3", title: "dCode Cipher Tools", type: "documentation", url: "https://www.dcode.fr/en" },
          { id: "3-2-resource-4", title: "CrypTool Online", type: "documentation", url: "https://www.cryptool.org/en/cto/" },
          { id: "3-2-resource-5", title: "Khan Academy: Cryptography", type: "video", url: "https://www.khanacademy.org/computing/computer-science/cryptography" }
        ]
      },
      {
        id: "3-3",
        title: "Use base encodings",
        description: "Practice with various base encodings such as Base64, Base32, and Base16.",
        type: "assignment",
        resources: [
          { id: "3-3-resource-1", title: "Base64 Encoding Explained", type: "article", url: "https://medium.com/swlh/base64-encoding-explained-e0a7a22ce9df" },
          { id: "3-3-resource-2", title: "Base Encoding Guide", type: "documentation", url: "https://cryptii.com/pipes/base64-to-base32" },
          { id: "3-3-resource-3", title: "Linux Command Line Encoding Tools", type: "article", url: "https://linuxhint.com/bash_base64_encode_decode/" },
          { id: "3-3-resource-4", title: "CyberChef Base Encoding Operations", type: "documentation", url: "https://gchq.github.io/CyberChef/#recipe=To_Base64('A-Za-z0-9%2B/%3D')" },
          { id: "3-3-resource-5", title: "PicoCTF Base Encoding Challenges", type: "documentation", url: "https://play.picoctf.org/practice" }
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
          { id: "3-4-resource-5", title: "PicoCTF RSA Challenges Walkthrough", type: "documentation", url: "https://github.com/Dvd848/CTFs/blob/master/2019_picoCTF/Mind_your_Ps_and_Qs.md" }
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
          { id: "3-5-resource-5", title: "TryHackMe: Steganography Room", type: "documentation", url: "https://tryhackme.com/room/ccstego" }
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
    id: 4,
    title: "Reverse Engineering and OSINT",
    tasks: [
      {
        id: "4-1",
        title: "Perform dynamic analysis",
        description: "Learn techniques for analyzing software during its execution.",
        type: "video",
        resources: [
          { id: "4-1-resource-1", title: "GDB Tutorial", type: "documentation", url: "https://www.cs.umd.edu/~srhuang/teaching/cmsc212/gdb-tutorial-handout.pdf" },
          { id: "4-1-resource-2", title: "Dynamic Analysis with GDB", type: "article", url: "https://www.cyberwiredtraining.net/blog/gdb-for-reverse-engineering-in-ctfs" },
          { id: "4-1-resource-3", title: "Introduction to Dynamic Analysis", type: "article", url: "https://0x00sec.org/t/re-guide-for-beginners-methodology-and-tools/2242" },
          { id: "4-1-resource-4", title: "TryHackMe: Intro to x86-64", type: "documentation", url: "https://tryhackme.com/room/introtox8664" },
          { id: "4-1-resource-5", title: "LiveOverflow Binary Exploitation", type: "video", url: "https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN" }
        ]
      },
      {
        id: "4-2",
        title: "Reverse engineer C binaries",
        description: "Practice disassembling and analyzing compiled C programs.",
        type: "assignment",
        resources: [
          { id: "4-2-resource-1", title: "Ghidra Documentation", type: "documentation", url: "https://ghidra-sre.org/CheatSheet.html" },
          { id: "4-2-resource-2", title: "Reverse Engineering for Beginners", type: "documentation", url: "https://beginners.re/" },
          { id: "4-2-resource-3", title: "Practical Binary Analysis", type: "documentation", url: "https://practicalbinaryanalysis.com/" },
          { id: "4-2-resource-4", title: "CTF Wiki: Reverse Engineering", type: "documentation", url: "https://ctf-wiki.org/reverse/introduction/introduction/" },
          { id: "4-2-resource-5", title: "Challenges.re", type: "documentation", url: "https://challenges.re/" }
        ]
      },
      {
        id: "4-3",
        title: "Use OSINT tools",
        description: "Explore Open-Source Intelligence (OSINT) tools for gathering information.",
        type: "video",
        resources: [
          { id: "4-3-resource-1", title: "OSINT Framework", type: "documentation", url: "https://osintframework.com/" },
          { id: "4-3-resource-2", title: "OSINT Techniques", type: "documentation", url: "https://www.osinttechniques.com/osint-tools.html" },
          { id: "4-3-resource-3", title: "OSINT CTF Beginner Roadmap", type: "article", url: "https://xelessaway.medium.com/@techmindxperts/osint-ctf-beginner-roadmap-191d1601e48f" },
          { id: "4-3-resource-4", title: "The Beginner's Guide to OSINT", type: "article", url: "https://medium.com/@techmindxperts/the-beginners-guide-to-open-source-intelligence-osint-techniques-and-tools-6a91b9c37ee1" },
          { id: "4-3-resource-5", title: "OSINT Tools and Techniques", type: "video", url: "https://www.youtube.com/playlist?list=PLT3EmOikjcyYMMNpS3J5SsI1JD6tq5V7t" }
        ]
      },
      {
        id: "4-4",
        title: "Solve picoCTF challenges",
        description: "Apply reverse engineering and OSINT skills to solve CTF problems.",
        type: "assignment",
        resources: [
          { id: "4-4-resource-1", title: "PicoCTF Reverse Engineering Challenges", type: "documentation", url: "https://play.picoctf.org/practice" },
          { id: "4-4-resource-2", title: "PicoCTF 2024 Reverse Engineering Challenges Writeup", type: "documentation", url: "https://hackmd.io/@tahaafarooq/picoctf-2024-reverse-engineering" },
          { id: "4-4-resource-3", title: "Crackmes.one", type: "documentation", url: "https://crackmes.one/" },
          { id: "4-4-resource-4", title: "Trace Labs CTF", type: "documentation", url: "https://www.tracelabs.org/" },
          { id: "4-4-resource-5", title: "HackTheBox OSINT Challenges", type: "documentation", url: "https://app.hackthebox.com/challenges" }
        ]
      }
    ],
    resources: [
      { id: "4-main-resource-1", title: "x86 Assembly Guide", type: "documentation", url: "https://www.cs.virginia.edu/~evans/cs216/guides/x86.html" },
      { id: "4-main-resource-2", title: "OSINT Tools Cheat Sheet", type: "documentation", url: "https://inteltechniques.com/links.html" },
      { id: "4-main-resource-3", title: "Reverse Engineering Cheat Sheet", type: "documentation", url: "https://www.cyberwiredtraining.net/blog/reverse-engineering-cheat-sheet" },
      { id: "4-main-resource-4", title: "Binary Exploitation by LiveOverflow", type: "video", url: "https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN" },
      { id: "4-main-resource-5", title: "OSINT Curious Project", type: "documentation", url: "https://osintcurio.us/" }
    ]
  },
  {
    id: 5,
    title: "Forensics and Binary Exploitation",
    tasks: [
      {
        id: "5-1",
        title: "Analyze PCAP with Wireshark",
        description: "Learn to analyze network traffic captures using Wireshark for forensic investigations.",
        type: "video",
        resources: [
          { id: "5-1-resource-1", title: "Wireshark User's Guide", type: "documentation", url: "https://www.wireshark.org/docs/wsug_html_chunked/" },
          { id: "5-1-resource-2", title: "Wireshark Display Filters", type: "documentation", url: "https://wiki.wireshark.org/DisplayFilters" },
          { id: "5-1-resource-3", title: "Network Forensics with Wireshark", type: "article", url: "https://medium.com/@magesh007/wireshark-the-basics-tryhackme-writeup-2b80efa5de9b" },
          { id: "5-1-resource-4", title: "CTF 101: Wireshark", type: "documentation", url: "https://ctf101.org/forensics/what-is-wireshark/" },
          { id: "5-1-resource-5", title: "Practical Packet Analysis", type: "video", url: "https://www.youtube.com/watch?v=8Crc1QmQwc0" }
        ]
      },
      {
        id: "5-2",
        title: "Perform memory dump analysis",
        description: "Understand how to analyze memory dumps for forensic purposes.",
        type: "assignment",
        resources: [
          { id: "5-2-resource-1", title: "Volatility Documentation", type: "documentation", url: "https://github.com/volatilityfoundation/volatility/wiki" },
          { id: "5-2-resource-2", title: "Memory Forensics with Volatility", type: "video", url: "https://www.youtube.com/watch?v=dB5852eAgpc" },
          { id: "5-2-resource-3", title: "The Art of Memory Forensics", type: "documentation", url: "https://www.memoryanalysis.net/amf" },
          { id: "5-2-resource-4", title: "SANS Memory Forensics Cheat Sheet", type: "documentation", url: "https://www.sans.org/blog/memory-forensics-cheat-sheet/" },
          { id: "5-2-resource-5", title: "Memory Samples for Practice", type: "documentation", url: "https://github.com/volatilityfoundation/volatility/wiki/Memory-Samples" }
        ]
      },
      {
        id: "5-3",
        title: "Learn buffer overflow basics",
        description: "Grasp the concept of buffer overflows and how to exploit them.",
        type: "video",
        resources: [
          { id: "5-3-resource-1", title: "Buffer Overflow Attack Explained", type: "video", url: "https://www.youtube.com/watch?v=1S0aBV-Waeo" },
          { id: "5-3-resource-2", title: "LiveOverflow Buffer Overflow Series", type: "video", url: "https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN" },
          { id: "5-3-resource-3", title: "Buffer Overflow Practice", type: "documentation", url: "https://github.com/justinsteven/dostackbufferoverflowgood" },
          { id: "5-3-resource-4", title: "Exploit Development Learning Path", type: "documentation", url: "https://www.offensive-security.com/metasploit-unleashed/exploit-development/" },
          { id: "5-3-resource-5", title: "Smashing The Stack For Fun And Profit", type: "article", url: "http://www-inst.eecs.berkeley.edu/~cs161/fa08/papers/stack_smashing.pdf" }
        ]
      },
      {
        id: "5-4",
        title: "Solve picoCTF challenges",
        description: "Solve CTF challenges involving forensics and binary exploitation.",
        type: "assignment",
        resources: [
          { id: "5-4-resource-1", title: "PicoCTF Forensics Challenges", type: "documentation", url: "https://play.picoctf.org/practice" },
          { id: "5-4-resource-2", title: "PicoCTF Binary Exploitation Challenges", type: "documentation", url: "https://play.picoctf.org/practice" },
          { id: "5-4-resource-3", title: "Forensics CTF Challenges on CTFlearn", type: "documentation", url: "https://ctflearn.com/challenge/1/browse" },
          { id: "5-4-resource-4", title: "Pwnable.kr", type: "documentation", url: "https://pwnable.kr/" },
          { id: "5-4-resource-5", title: "MemLabs", type: "documentation", url: "https://github.com/stuxnet999/MemLabs" }
        ]
      },
      {
        id: "5-5",
        title: "Participate in mini CTF event",
        description: "Engage in a practical mini Capture The Flag event to apply learned skills.",
        type: "assignment",
        resources: [
          { id: "5-5-resource-1", title: "CTF Field Guide", type: "documentation", url: "https://trailofbits.github.io/ctf/" },
          { id: "5-5-resource-2", title: "CTF Time", type: "documentation", url: "https://ctftime.org/writeups" },
          { id: "5-5-resource-3", title: "CTF 101", type: "documentation", url: "https://ctf101.org/" },
          { id: "5-5-resource-4", title: "How to Approach CTF Challenges", type: "video", url: "https://www.youtube.com/watch?v=Lus7aNf2xDg" },
          { id: "5-5-resource-5", title: "Effective CTF Team Strategies", type: "article", url: "https://medium.com/@teambi0s/how-to-get-started-in-ctf-complete-beginners-guide-5ab3eba7781c" }
        ]
      }
    ],
    resources: [
      { id: "5-main-resource-1", title: "Wireshark Cheat Sheet", type: "documentation", url: "https://www.comparitech.com/net-admin/wireshark-cheat-sheet/" },
      { id: "5-main-resource-2", title: "Volatility Cheat Sheet", type: "documentation", url: "https://downloads.volatilityfoundation.org/releases/2.4/CheatSheet_v2.4.pdf" },
      { id: "5-main-resource-3", title: "Binary Exploitation Cheat Sheet", type: "documentation", url: "https://ir0nstone.gitbook.io/notes/types/stack/introduction" },
      { id: "5-main-resource-4", title: "TryHackMe Forensics Path", type: "documentation", url: "https://tryhackme.com/path-action/forensics/join" },
      { id: "5-main-resource-5", title: "PCAPs for Practice", type: "documentation", url: "https://www.malware-traffic-analysis.net/training-exercises.html" }
    ]
  }
]; 