export interface Resource {
  id: string;
  title: string;
  type: "video" | "article" | "documentation";
  url: string;
}

export interface TaskData {
  id: string;
  title: string;
  description: string;
  type: "video" | "assignment" | "reading";
  resources?: Resource[];
}

export interface WeekData {
  id: number;
  title: string;
  tasks: TaskData[];
  resources: Resource[];
}

export const dsaCurriculum: WeekData[] = [
  {
    id: 1,
    title: "Language Foundations + Arrays & Sorting",
    tasks: [
      { 
        id: "1-1", 
        title: "Learn C++ or Java basics", 
        description: "Master fundamental programming concepts", 
        type: "video",
        resources: [
          { id: "r1-1", title: "C++ Programming Tutorial", type: "video", url: "https://www.youtube.com/watch?v=EAR7De6Goz4" },
          { id: "r1-2", title: "Java Basics", type: "video", url: "https://www.youtube.com/watch?v=UmnCZ7-9yDY" }
        ]
      },
      { 
        id: "1-2", 
        title: "Use STL or Collections", 
        description: "Learn standard template library usage", 
        type: "video",
        resources: [
          { id: "r1-3", title: "STL Reference", type: "documentation", url: "https://cppreference.com/w/cpp/container" },
          { id: "r1-4", title: "STL in C++", type: "video", url: "https://www.youtube.com/watch?v=okhdtEk1iKk" },
          { id: "r1-5", title: "Collections in Java", type: "video", url: "https://www.youtube.com/watch?v=rzA7UJ-hQn4" }
        ]
      },
      { 
        id: "1-3", 
        title: "Work with 1D and 2D arrays", 
        description: "Learn Basics of Arrays", 
        type: "video",
        resources: [
          { id: "r1-6", title: "Arrays Basics", type: "video", url: "https://www.youtube.com/watch?v=8wmn7k1TTcI" },
          { id: "r1-7", title: "Vectors", type: "video", url: "https://www.youtube.com/watch?v=NWg38xWYzEg" }
        ]
      },
      { 
        id: "1-4", 
        title: "Code bubble sort, selection sort, and merge sort", 
        description: "Code bubble sort, selection sort, and merge sort", 
        type: "assignment"
      },
      { 
        id: "1-5", 
        title: "Code sequential search, binary search", 
        description: "Code sequential search, binary search", 
        type: "assignment"
      },
      { 
        id: "1-6", 
        title: "Solve 5 array problems on HackerRank", 
        description: "Solve 5 array problems on HackerRank", 
        type: "assignment"
      }
    ],
    resources: [],
  },
  {
    id: 2,
    title: "Recursion, Advanced Sorting algorithms and Linear Data Structures",
    tasks: [
      { 
        id: "2-1", 
        title: "Understand recursion", 
        description: "Learn recursive thinking and implementation", 
        type: "video",
        resources: [
          { id: "r2-1", title: "Recursion", type: "video", url: "https://youtu.be/M2uO2nMT0Bk?si=d4tz3uJpJ75xlUp1" }
        ]
      },
      { 
        id: "2-2", 
        title: "Implement advanced sorting(Code quick sort and heap sort)", 
        description: "Code quick sort and heap sort", 
        type: "assignment"
      },
      { 
        id: "2-3", 
        title: "Perform string manipulations", 
        description: "Practice string algorithms", 
        type: "video",
        resources: [
          { id: "r2-2", title: "String Manipulation Part 1", type: "video", url: "https://youtu.be/MOSjYaVymcU?si=ywfXAsk8VSA1kUpU" },
          { id: "r2-3", title: "String Manipulation Part 2", type: "video", url: "https://youtu.be/dSRFgEs3a6A?si=pzHFz9X5O7FIpkOD" }
        ]
      },
      { 
        id: "2-4", 
        title: "Use stacks and queues", 
        description: "Implement and use linear data structures", 
        type: "video",
        resources: [
          { id: "r2-4", title: "Stacks & Queues", type: "video", url: "https://youtu.be/tqQ5fTamIN4?si=95OuxFtbR-u7pBtm" }
        ]
      },
      { 
        id: "2-5", 
        title: "Practice shared recursion questions(Link in discord)", 
        description: "Practice shared recursion questions", 
        type: "assignment"
      },
      { 
        id: "2-6", 
        title: "Discuss iterative vs recursive", 
        description: "Compare different approaches", 
        type: "reading"
      },
      { 
        id: "2-7", 
        title: "Solve recursion and stack/queue problems", 
        description: "Solve recursion and stack/queue problems", 
        type: "assignment"
      }
    ],
    resources: [],
  },
  {
    id: 3,
    title: "Pointers and Linked Lists",
    tasks: [
      { 
        id: "3-1", 
        title: "Learn pointer basics", 
        description: "Understand memory addresses and pointers", 
        type: "video"
      },
      { 
        id: "3-2", 
        title: "Implement singly linked lists", 
        description: "Create and manipulate singly linked lists", 
        type: "assignment"
      },
      { 
        id: "3-3", 
        title: "Implement doubly linked lists", 
        description: "Build bidirectional linked lists", 
        type: "assignment"
      },
      { 
        id: "3-4", 
        title: "Solve reverse coding challenge", 
        description: "Reverse a linked list problem", 
        type: "assignment"
      },
      { 
        id: "3-5", 
        title: "Complete HackerRank linked list problems", 
        description: "Practice linked list algorithms", 
        type: "assignment"
      }
    ],
    resources: [],
  },
  {
    id: 4,
    title: "Trees and Heaps",
    tasks: [
      { 
        id: "4-1", 
        title: "Learn binary trees and BSTs", 
        description: "Understand tree data structures", 
        type: "video"
      },
      { 
        id: "4-2", 
        title: "Implement tree traversals", 
        description: "Code inorder, preorder, postorder traversals", 
        type: "assignment"
      },
      { 
        id: "4-3", 
        title: "Implement balanced BSTs", 
        description: "Understand AVL and Red-Black trees", 
        type: "assignment"
      },
      { 
        id: "4-4", 
        title: "Use heaps and priority queues", 
        description: "Implement heap data structure", 
        type: "assignment"
      },
      { 
        id: "4-5", 
        title: "Solve HackerRank tree problems", 
        description: "Practice tree algorithms", 
        type: "assignment"
      }
    ],
    resources: [],
  },
  {
    id: 5,
    title: "Graphs and Hashing",
    tasks: [
      { 
        id: "5-1", 
        title: "Learn graph representations", 
        description: "Adjacency matrix and list", 
        type: "video"
      },
      { 
        id: "5-2", 
        title: "Implement BFS and DFS", 
        description: "Traverse graphs", 
        type: "assignment"
      },
      { 
        id: "5-3", 
        title: "Use Dijkstra and Floyd-Warshall", 
        description: "Solve shortest path problems", 
        type: "assignment"
      },
      { 
        id: "5-4", 
        title: "Understand hashing and hash tables", 
        description: "Learn collision resolution techniques", 
        type: "video"
      },
      { 
        id: "5-5", 
        title: "Implement hash map", 
        description: "Build custom hash map", 
        type: "assignment"
      },
      { 
        id: "5-6", 
        title: "Solve HackerRank graph problems", 
        description: "Practice graph algorithms", 
        type: "assignment"
      }
    ],
    resources: [],
  },
  {
    id: 6,
    title: "Dynamic Programming and Backtracking",
    tasks: [
      { 
        id: "6-1", 
        title: "Learn dynamic programming principles", 
        description: "Understand overlapping subproblems and optimal substructure", 
        type: "video"
      },
      { 
        id: "6-2", 
        title: "Solve knapsack problem", 
        description: "Apply DP to classic problems", 
        type: "assignment"
      },
      { 
        id: "6-3", 
        title: "Understand backtracking", 
        description: "Explore recursive search techniques", 
        type: "video"
      },
      { 
        id: "6-4", 
        title: "Solve N-Queens problem", 
        description: "Implement backtracking algorithm", 
        type: "assignment"
      },
      { 
        id: "6-5", 
        title: "Complete HackerRank advanced problems", 
        description: "Practice DP and backtracking problems", 
        type: "assignment"
      }
    ],
    resources: [],
  },
]; 