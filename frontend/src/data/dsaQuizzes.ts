export const dsaQuizzes = [
  {
    weekId: 1,
    title: "Week 1 Quiz - Language Basics and Arrays",
    timeLimit: 30,
    passingScore: 70,
    questions: [
      {
        id: "1",
        question: "Which of the following is the correct way to declare an array in C++?",
        options: [
          "int arr[10];",
          "array<int> arr[10];",
          "int arr = new array[10];",
          "declare arr as int[10];"
        ],
        correctAnswer: 0,
        explanation: "In C++, arrays are declared using the syntax: datatype arrayname[size];"
      },
      {
        id: "2",
        question: "What is the time complexity of bubble sort?",
        options: [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(1)"
        ],
        correctAnswer: 2,
        explanation: "Bubble sort has a time complexity of O(n²) in the worst and average cases."
      },
      {
        id: "3",
        question: "Which STL container should be used for dynamic arrays in C++?",
        options: [
          "array",
          "vector",
          "list",
          "stack"
        ],
        correctAnswer: 1,
        explanation: "std::vector is the STL container that provides dynamic array functionality."
      },
      {
        id: "4",
        question: "What is the correct way to access the first element of a 2D array arr?",
        options: [
          "arr[1][1]",
          "arr[0][0]",
          "arr.first()",
          "arr(0,0)"
        ],
        correctAnswer: 1,
        explanation: "Arrays in most programming languages are 0-indexed, so the first element is at [0][0]."
      },
      {
        id: "5",
        question: "Which sorting algorithm is stable?",
        options: [
          "Quick sort",
          "Heap sort",
          "Merge sort",
          "Selection sort"
        ],
        correctAnswer: 2,
        explanation: "Merge sort is a stable sorting algorithm that maintains the relative order of equal elements."
      }
    ]
  },
  {
    weekId: 2,
    title: "Week 2 Quiz - Recursion and Linear Data Structures",
    timeLimit: 30,
    passingScore: 70,
    questions: [
      {
        id: "1",
        question: "What is the base case in recursion?",
        options: [
          "The first function call",
          "The condition that stops the recursion",
          "The recursive call itself",
          "The return statement"
        ],
        correctAnswer: 1,
        explanation: "The base case is the condition that stops the recursion from continuing indefinitely."
      },
      {
        id: "2",
        question: "Which data structure follows LIFO principle?",
        options: [
          "Queue",
          "Array",
          "Stack",
          "Linked List"
        ],
        correctAnswer: 2,
        explanation: "Stack follows Last In First Out (LIFO) principle."
      },
      {
        id: "3",
        question: "What is the time complexity of quicksort in the average case?",
        options: [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        correctAnswer: 1,
        explanation: "Quicksort has an average time complexity of O(n log n)."
      },
      {
        id: "4",
        question: "Which operation is not efficient in a queue?",
        options: [
          "Enqueue",
          "Dequeue", 
          "Access middle element",
          "Check if empty"
        ],
        correctAnswer: 2,
        explanation: "Accessing the middle element in a queue requires O(n) time, making it inefficient."
      },
      {
        id: "5",
        question: "What happens if a recursive function doesn't have a base case?",
        options: [
          "It returns 0",
          "It causes infinite recursion",
          "It throws an error immediately",
          "It executes once"
        ],
        correctAnswer: 1,
        explanation: "Without a base case, recursive function will call itself indefinitely, causing stack overflow."
      }
    ]
  },
  {
    weekId: 3,
    title: "Week 3 Quiz - Pointers and Linked Lists",
    timeLimit: 30,
    passingScore: 70,
    questions: [
      {
        id: "1",
        question: "What does a pointer store?",
        options: [
          "A value",
          "A memory address",
          "A function",
          "A data type"
        ],
        correctAnswer: 1,
        explanation: "A pointer stores the memory address of another variable."
      },
      {
        id: "2",
        question: "What is the advantage of a doubly linked list over a singly linked list?",
        options: [
          "Uses less memory",
          "Faster insertion",
          "Can traverse in both directions",
          "Simpler implementation"
        ],
        correctAnswer: 2,
        explanation: "Doubly linked lists can be traversed in both forward and backward directions."
      },
      {
        id: "3",
        question: "What is the time complexity of inserting at the beginning of a linked list?",
        options: [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        correctAnswer: 0,
        explanation: "Inserting at the beginning of a linked list takes constant time O(1)."
      },
      {
        id: "4",
        question: "What happens when you dereference a NULL pointer?",
        options: [
          "Returns 0",
          "Segmentation fault",
          "Compiler error",
          "Returns garbage value"
        ],
        correctAnswer: 1,
        explanation: "Dereferencing a NULL pointer causes a segmentation fault at runtime."
      },
      {
        id: "5",
        question: "How do you reverse a singly linked list?",
        options: [
          "Swap values of nodes",
          "Change the next pointers",
          "Create a new list",
          "Use recursion only"
        ],
        correctAnswer: 1,
        explanation: "To reverse a singly linked list, you change the direction of next pointers."
      }
    ]
  },
  {
    weekId: 4,
    title: "Week 4 Quiz - Trees and Heaps",
    timeLimit: 30,
    passingScore: 70,
    questions: [
      {
        id: "1",
        question: "What is the maximum number of children a node can have in a binary tree?",
        options: [
          "1",
          "2", 
          "3",
          "Unlimited"
        ],
        correctAnswer: 1,
        explanation: "In a binary tree, each node can have at most 2 children (left and right)."
      },
      {
        id: "2",
        question: "Which traversal visits the root node first?",
        options: [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        correctAnswer: 1,
        explanation: "Preorder traversal visits the root node first, then left subtree, then right subtree."
      },
      {
        id: "3",
        question: "What property must a max heap satisfy?",
        options: [
          "Parent ≤ Children",
          "Parent ≥ Children",
          "Left child ≤ Right child",
          "All leaves at same level"
        ],
        correctAnswer: 1,
        explanation: "In a max heap, every parent node must be greater than or equal to its children."
      },
      {
        id: "4",
        question: "What is the time complexity of search in a balanced BST?",
        options: [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        correctAnswer: 1,
        explanation: "Search in a balanced BST takes O(log n) time due to the tree's height."
      },
      {
        id: "5",
        question: "Which operation has O(log n) time complexity in a heap?",
        options: [
          "Find maximum",
          "Insert",
          "Build heap",
          "Search arbitrary element"
        ],
        correctAnswer: 1,
        explanation: "Insert operation in a heap takes O(log n) time to maintain heap property."
      }
    ]
  },
  {
    weekId: 5,
    title: "Week 5 Quiz - Graphs and Hashing",
    timeLimit: 30,
    passingScore: 70,
    questions: [
      {
        id: "1",
        question: "Which graph representation is more space efficient for sparse graphs?",
        options: [
          "Adjacency Matrix",
          "Adjacency List",
          "Edge List",
          "Incidence Matrix"
        ],
        correctAnswer: 1,
        explanation: "Adjacency list is more space efficient for sparse graphs as it only stores existing edges."
      },
      {
        id: "2",
        question: "What does DFS use for implementation?",
        options: [
          "Queue",
          "Stack",
          "Priority Queue",
          "Array"
        ],
        correctAnswer: 1,
        explanation: "DFS uses a stack (either explicit or implicit through recursion) for implementation."
      },
      {
        id: "3",
        question: "Which algorithm is used for finding shortest path in unweighted graphs?",
        options: [
          "DFS",
          "BFS",
          "Dijkstra's",
          "Floyd-Warshall"
        ],
        correctAnswer: 1,
        explanation: "BFS finds shortest path in unweighted graphs as it explores nodes level by level."
      },
      {
        id: "4",
        question: "What is the time complexity of BFS?",
        options: [
          "O(V)",
          "O(E)",
          "O(V + E)",
          "O(V * E)"
        ],
        correctAnswer: 2,
        explanation: "BFS has time complexity O(V + E) where V is vertices and E is edges."
      },
      {
        id: "5",
        question: "In which scenario would you prefer DFS over BFS?",
        options: [
          "Finding shortest path",
          "Topological sorting",
          "Level order traversal",
          "Finding minimum spanning tree"
        ],
        correctAnswer: 1,
        explanation: "DFS is preferred for topological sorting as it naturally explores deeper paths first."
      }
    ]
  },
  {
    weekId: 6,
    title: "Week 6 Quiz - Dynamic Programming and Backtracking",
    timeLimit: 30,
    passingScore: 70,
    questions: [
      {
        id: "1",
        question: "What is the most important factor in competitive programming?",
        options: [
          "Writing clean code",
          "Time and space optimization",
          "Using advanced algorithms",
          "Commenting thoroughly"
        ],
        correctAnswer: 1,
        explanation: "In competitive programming, time and space optimization are crucial due to strict constraints."
      },
      {
        id: "2",
        question: "Which technique is most useful for solving dynamic programming problems?",
        options: [
          "Greedy approach",
          "Divide and conquer",
          "Memoization",
          "Backtracking"
        ],
        correctAnswer: 2,
        explanation: "Memoization (storing results of subproblems) is key to efficient DP solutions."
      },
      {
        id: "3",
        question: "What should you do first when encountering a new problem?",
        options: [
          "Start coding immediately",
          "Understand the problem constraints",
          "Look for similar problems",
          "Choose a programming language"
        ],
        correctAnswer: 1,
        explanation: "Understanding problem constraints helps determine the appropriate algorithm and complexity."
      },
      {
        id: "4",
        question: "Which data structure is most versatile for competitive programming?",
        options: [
          "Array",
          "Stack",
          "HashMap/Map",
          "Tree"
        ],
        correctAnswer: 2,
        explanation: "HashMap/Map provides O(1) average lookup and is useful in many competitive programming scenarios."
      },
      {
        id: "5",
        question: "What is the key to improving problem-solving skills?",
        options: [
          "Memorizing algorithms",
          "Regular practice",
          "Reading editorials only",
          "Using fastest language"
        ],
        correctAnswer: 1,
        explanation: "Regular practice across diverse problems helps develop pattern recognition and problem-solving intuition."
      }
    ]
  }
];
