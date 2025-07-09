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
  timeLimit: number;
  passingScore: number;
  questions: QuizQuestion[];
  domain?: string;
}

export const dsaQuizzes: WeekQuiz[] = [
  {
    "weekId": 1,
    "title": "Week 1 Quiz - Programming Basics and Arrays",
    "timeLimit": 20,
    "passingScore": 70,
    "questions": [
      {
        "id": "1",
        "question": "What is an array?",
        "options": [
          "A variable that holds a single value",
          "A collection of elements of the same type stored at contiguous memory locations",
          "A function that returns multiple values",
          "A type of loop used to repeat a block of code"
        ],
        "correctAnswer": 1,
        "explanation": "An array stores multiple elements of the same type in contiguous memory."
      },
      {
        "id": "2",
        "question": "What is the time complexity of bubble sort in the worst case?",
        "options": ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        "correctAnswer": 2,
        "explanation": "Bubble sort compares adjacent pairs, resulting in O(n²) in the worst case."
      },
      {
        "id": "3",
        "question": "Which data structure is ideal for dynamically resizing arrays?",
        "options": ["Static array", "Linked list", "Dynamic array", "Queue"],
        "correctAnswer": 2,
        "explanation": "Dynamic arrays can grow or shrink in size as needed during runtime."
      },
      {
        "id": "4",
        "question": "What does a 2D array represent?",
        "options": [
          "A single list of elements",
          "A table or grid of elements with rows and columns",
          "A collection of unrelated elements",
          "An array that stores strings only"
        ],
        "correctAnswer": 1,
        "explanation": "A 2D array is like a table with rows and columns of elements."
      },
      {
        "id": "5",
        "question": "Which sorting algorithm maintains the order of equal elements?",
        "options": [
          "Quick sort",
          "Heap sort",
          "Merge sort",
          "Selection sort"
        ],
        "correctAnswer": 2,
        "explanation": "Merge sort is a stable sort that preserves the order of equal elements."
      },
      {
        "id": "6",
        "question": "What is the best-case time complexity of linear search?",
        "options": ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        "correctAnswer": 2,
        "explanation": "If the element is found at the first position, linear search completes in O(1)."
      },
      {
        "id": "7",
        "question": "In binary search, what must be true about the array?",
        "options": [
          "It should contain only integers",
          "It must be sorted",
          "It must have even number of elements",
          "It must contain unique values"
        ],
        "correctAnswer": 1,
        "explanation": "Binary search only works on sorted arrays."
      },
      {
        "id": "8",
        "question": "What is the main idea behind selection sort?",
        "options": [
          "Divide the array into halves recursively",
          "Move the largest element to the end repeatedly",
          "Select the smallest element and place it at the correct position",
          "Compare adjacent elements and swap them"
        ],
        "correctAnswer": 2,
        "explanation": "Selection sort repeatedly finds the minimum and places it at the start."
      },
      {
        "id": "9",
        "question": "Which operation is typically used to insert an element at the end of a dynamic list?",
        "options": [
          "insertEnd()",
          "addLast()",
          "append()",
          "pushLast()"
        ],
        "correctAnswer": 2,
        "explanation": "Appending adds an element to the end of a list in most programming environments."
      },
      {
        "id": "10",
        "question": "What is the purpose of a search algorithm?",
        "options": [
          "To sort the data",
          "To delete elements from a data structure",
          "To find the location or presence of an element",
          "To convert data types"
        ],
        "correctAnswer": 2,
        "explanation": "Search algorithms locate an element in a collection of data."
      }
    ]
  },
  {
    "weekId": 2,
    "title": "Week 2 Quiz - Recursion, Sorting, Strings, and Stacks/Queues",
    "timeLimit": 20,
    "passingScore": 70,
    "questions": [
      {
        "id": "1",
        "question": "Which of the following problems is best solved using recursion?",
        "options": [
          "Calculating the average of an array",
          "Checking if a number is prime",
          "Traversing a tree structure",
          "Finding the maximum of two numbers"
        ],
        "correctAnswer": 2,
        "explanation": "Recursive traversal is ideal for hierarchical data like trees."
      },
      {
        "id": "2",
        "question": "Quick Sort performs worst when the pivot element divides the array into:",
        "options": [
          "Two equal halves",
          "One part with all elements and one empty",
          "One part with odd numbers and one with even numbers",
          "Sorted subarrays"
        ],
        "correctAnswer": 1,
        "explanation": "Worst case happens when pivot causes highly unbalanced partitioning."
      },
      {
        "id": "3",
        "question": "Which of the following operations is *not* typically supported by a stack?",
        "options": [
          "push()",
          "peek()",
          "enqueue()",
          "pop()"
        ],
        "correctAnswer": 2,
        "explanation": "enqueue() is a queue operation, not a stack operation."
      },
      {
        "id": "4",
        "question": "What is the auxiliary space complexity of merge sort?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correctAnswer": 2,
        "explanation": "Merge sort requires additional O(n) space to merge arrays."
      },
      {
        "id": "5",
        "question": "Which of the following statements about recursion is FALSE?",
        "options": [
          "Every recursive function must have a base case",
          "Recursive solutions are always more efficient than iterative ones",
          "Recursion uses function call stack",
          "A recursive function can call itself with modified parameters"
        ],
        "correctAnswer": 1,
        "explanation": "Recursion is elegant but not always more efficient than iteration."
      },
      {
        "id": "6",
        "question": "You are given a string. Which approach is best for checking if it's a palindrome?",
        "options": [
          "Use a stack to compare characters from both ends",
          "Sort the string and compare it to the reverse",
          "Use a queue to insert each character",
          "Use merge sort to rearrange it"
        ],
        "correctAnswer": 0,
        "explanation": "Stack can be used to compare the first and last characters efficiently."
      },
      {
        "id": "7",
        "question": "Which of the following algorithms is *not* stable by default?",
        "options": [
          "Merge Sort",
          "Insertion Sort",
          "Bubble Sort",
          "Quick Sort"
        ],
        "correctAnswer": 3,
        "explanation": "Quick Sort is not stable unless specifically modified to be so."
      },
      {
        "id": "8",
        "question": "If a queue is implemented using a circular array, how do you detect it is full?",
        "options": [
          "front == rear",
          "(rear + 1) % size == front",
          "rear == size",
          "rear == -1"
        ],
        "correctAnswer": 1,
        "explanation": "In a circular queue, this condition indicates the buffer is full."
      },
      {
        "id": "9",
        "question": "Which of these recursive functions has exponential time complexity?",
        "options": [
          "Binary Search",
          "Tower of Hanoi",
          "Factorial",
          "Linear Search"
        ],
        "correctAnswer": 1,
        "explanation": "Tower of Hanoi follows 2^n time complexity due to its branching recursion."
      },
      {
        "id": "10",
        "question": "What does the following logic compute? reverse(reverse(S)) == S",
        "options": [
          "String is a palindrome",
          "String is empty",
          "Nothing can be concluded",
          "String remains unchanged after double reverse"
        ],
        "correctAnswer": 3,
        "explanation": "Reversing a reversed string gives back the original string."
      }
    ]
  },
  {
    "weekId": 3,
    "title": "Week 3 Quiz – Pointers and Linked Lists",
    "timeLimit": 20,
    "passingScore": 70,
    "questions": [
      {
        "id": "1",
        "question": "What does a pointer in C/C++ store?",
        "options": [
          "The value of a variable",
          "The memory address of a variable",
          "The type of a variable",
          "The name of a variable"
        ],
        "correctAnswer": 1,
        "explanation": "A pointer holds the memory address of another variable."
      },
      {
        "id": "2",
        "question": "What is the correct way to pass an array to a function using pointers?",
        "options": [
          "int arr[]",
          "int *arr",
          "int arr[10]",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "All are syntactically valid ways; arrays decay to pointers when passed to functions."
      },
      {
        "id": "3",
        "question": "What will happen if you dereference a NULL pointer?",
        "options": [
          "It prints 0",
          "It accesses random memory",
          "It causes a segmentation fault",
          "It creates a new memory address"
        ],
        "correctAnswer": 2,
        "explanation": "Dereferencing a NULL pointer leads to undefined behavior and usually crashes the program."
      },
      {
        "id": "4",
        "question": "What is the time complexity to reverse a singly linked list iteratively?",
        "options": [
          "O(1)",
          "O(n log n)",
          "O(n)",
          "O(n²)"
        ],
        "correctAnswer": 2,
        "explanation": "Each node is visited once while adjusting links; hence, linear time."
      },
      {
        "id": "5",
        "question": "In a singly linked list, which operation is inefficient compared to an array?",
        "options": [
          "Insertion at beginning",
          "Insertion at end (without tail)",
          "Deletion at head",
          "Traversal"
        ],
        "correctAnswer": 1,
        "explanation": "Without a tail pointer, inserting at the end requires traversal, unlike arrays."
      },
      {
        "id": "6",
        "question": "Which of these operations is more efficient in a doubly linked list than a singly linked list?",
        "options": [
          "Insertion at head",
          "Deletion of a given node",
          "Traversing forward",
          "Appending at end"
        ],
        "correctAnswer": 1,
        "explanation": "In DLL, deleting a given node is more efficient as you can go backward using the previous pointer."
      },
      {
        "id": "7",
        "question": "In a singly linked list with 'n' nodes, how many pointers (next references) are there in total?",
        "options": [
          "n",
          "n - 1",
          "n + 1",
          "2n"
        ],
        "correctAnswer": 1,
        "explanation": "Each node (except the last) points to the next node, so there are (n - 1) next pointers in total."
      },
      {
        "id": "8",
        "question": "What does the following code snippet do?\n`Node* temp = head; while(temp != NULL) { temp = temp->next; }`",
        "options": [
          "Deletes the linked list",
          "Finds the middle node",
          "Traverses the linked list",
          "Creates a loop"
        ],
        "correctAnswer": 2,
        "explanation": "It simply traverses from head to the end of the list."
      },
      {
        "id": "9",
        "question": "What is the primary difference between a pointer and a reference in C++?",
        "options": [
          "References can be reassigned, pointers can't",
          "Pointers are safer than references",
          "References cannot be NULL, while pointers can",
          "There is no difference"
        ],
        "correctAnswer": 2,
        "explanation": "Unlike pointers, references must be initialized and cannot be NULL."
      },
      {
        "id": "10",
        "question": "You are given a singly linked list. Which of the following operations requires O(n) time in the worst case?",
        "options": [
          "Insertion at the beginning",
          "Insertion at the end",
          "Deletion from the front",
          "Checking if list is empty"
        ],
        "correctAnswer": 1,
        "explanation": "Insertion at the end requires traversal if there is no tail pointer."
      }
    ]
  },
{
  "weekId": 4,
  "title": "Week 4 Quiz – Trees and Heaps",
  "timeLimit": 20,
  "passingScore": 70,
  "questions": [
    {
      "id": "1",
      "question": "In a binary tree, what is the maximum number of nodes at level 'l'?",
      "options": [
        "2^l",
        "2^l - 1",
        "2^(l-1)",
        "l^2"
      ],
      "correctAnswer": 2,
      "explanation": "At level l (1-indexed), a binary tree can have at most 2^(l-1) nodes."
    },
    {
      "id": "2",
      "question": "Which of the following is NOT true for a min-heap?",
      "options": [
        "The root is the smallest element",
        "It is a complete binary tree",
        "In-order traversal gives sorted order",
        "Each parent is less than or equal to its children"
      ],
      "correctAnswer": 2,
      "explanation": "In-order traversal of a min-heap does not necessarily give sorted order."
    },
    {
      "id": "3",
      "question": "What is the time complexity to insert an element into a binary max-heap of size n?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "correctAnswer": 2,
      "explanation": "Insertion in a heap takes O(log n) due to heapify-up operation."
    },
    {
      "id": "4",
      "question": "Which traversal of a binary search tree (BST) gives the nodes in ascending order?",
      "options": [
        "Pre-order",
        "Post-order",
        "In-order",
        "Level-order"
      ],
      "correctAnswer": 2,
      "explanation": "In-order traversal of BST gives sorted order of elements."
    },
    {
      "id": "5",
      "question": "What is the height of a complete binary tree with 'n' nodes?",
      "options": [
        "n",
        "log₂(n + 1)",
        "log₂n",
        "sqrt(n)"
      ],
      "correctAnswer": 2,
      "explanation": "Height of a complete binary tree is floor(log₂n)."
    },
    {
      "id": "6",
      "question": "In a binary tree, the number of null pointers is always:",
      "options": [
        "Equal to number of nodes",
        "One less than number of nodes",
        "One more than number of nodes",
        "Twice the number of nodes"
      ],
      "correctAnswer": 2,
      "explanation": "A binary tree with n nodes has (n + 1) null pointers."
    },
    {
      "id": "7",
      "question": "Which of the following is true for a binary search tree?",
      "options": [
        "Left child is always smaller, right child is always greater",
        "Every node has exactly two children",
        "It is always balanced",
        "In-order traversal gives descending order"
      ],
      "correctAnswer": 0,
      "explanation": "BST property: left subtree < root < right subtree."
    },
    {
      "id": "8",
      "question": "What is the number of edges in a full binary tree with 'n' internal nodes?",
      "options": [
        "n",
        "n - 1",
        "2n",
        "2n + 1"
      ],
      "correctAnswer": 2,
      "explanation": "In a full binary tree, the number of edges is 2n because each internal node has exactly two children."
    },
    {
      "id": "9",
      "question": "In a heap, which operation requires the most time in the worst case?",
      "options": [
        "Find minimum",
        "Insert",
        "Delete root",
        "Heapify"
      ],
      "correctAnswer": 2,
      "explanation": "Deleting the root requires O(log n) time due to heapify-down operation."
    },
    {
      "id": "10",
      "question": "Which property distinguishes a binary tree from a binary heap?",
      "options": [
        "Heap is always complete",
        "Tree has no duplicates",
        "Heap is balanced and sorted",
        "Binary tree has fixed depth"
      ],
      "correctAnswer": 0,
      "explanation": "A binary heap is always a complete binary tree, while a general binary tree does not follow that constraint."
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
