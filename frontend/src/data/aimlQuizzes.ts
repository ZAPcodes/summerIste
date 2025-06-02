
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

export const aimlQuizzes: WeekQuiz[] = [
  {
    weekId: 1,
    title: "AI and Python Fundamentals Quiz",
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: "aiml-1-1",
        question: "What is artificial intelligence?",
        options: [
          "A computer program that can think like humans",
          "The simulation of human intelligence in machines",
          "A type of robot",
          "Advanced computer graphics"
        ],
        correctAnswer: 1,
        explanation: "AI is the simulation of human intelligence processes by machines, especially computer systems."
      },
      {
        id: "aiml-1-2",
        question: "Which Python library is primarily used for numerical computing?",
        options: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
        correctAnswer: 1,
        explanation: "NumPy is the fundamental package for numerical computing in Python."
      },
      {
        id: "aiml-1-3",
        question: "What does ML stand for in the context of AI?",
        options: ["Machine Language", "Machine Learning", "Mathematical Logic", "Memory Load"],
        correctAnswer: 1,
        explanation: "ML stands for Machine Learning, a subset of AI that enables computers to learn without being explicitly programmed."
      },
      {
        id: "aiml-1-4",
        question: "Which of the following is NOT a type of machine learning?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Procedural Learning"],
        correctAnswer: 3,
        explanation: "Procedural Learning is not a recognized type of machine learning. The main types are supervised, unsupervised, and reinforcement learning."
      },
      {
        id: "aiml-1-5",
        question: "What is the primary purpose of Pandas in data science?",
        options: ["Data visualization", "Data manipulation and analysis", "Machine learning algorithms", "Web scraping"],
        correctAnswer: 1,
        explanation: "Pandas is primarily used for data manipulation and analysis, providing data structures like DataFrames."
      },
      {
        id: "aiml-1-6",
        question: "In Python, which operator is used for exponentiation?",
        options: ["^", "**", "exp()", "pow()"],
        correctAnswer: 1,
        explanation: "The ** operator is used for exponentiation in Python (e.g., 2**3 = 8)."
      },
      {
        id: "aiml-1-7",
        question: "What is a neural network inspired by?",
        options: ["Computer circuits", "The human brain", "Mathematical equations", "Database structures"],
        correctAnswer: 1,
        explanation: "Neural networks are inspired by the structure and function of biological neural networks in the human brain."
      },
      {
        id: "aiml-1-8",
        question: "Which Python data type is mutable?",
        options: ["Tuple", "String", "List", "Integer"],
        correctAnswer: 2,
        explanation: "Lists are mutable in Python, meaning their contents can be changed after creation."
      },
      {
        id: "aiml-1-9",
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Automated Program Integration", "Advanced Programming Instructions", "Application Process Integration"],
        correctAnswer: 0,
        explanation: "API stands for Application Programming Interface, which allows different software applications to communicate."
      },
      {
        id: "aiml-1-10",
        question: "Which of the following is a popular Python IDE?",
        options: ["Notepad", "PyCharm", "Calculator", "Browser"],
        correctAnswer: 1,
        explanation: "PyCharm is a popular Integrated Development Environment (IDE) specifically designed for Python programming."
      }
    ]
  },
  // Add more weeks here - for brevity showing just week 1
  {
    weekId: 2,
    title: "Data Handling and Visualization Quiz",
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: "aiml-2-1",
        question: "What is data preprocessing?",
        options: [
          "Creating new data",
          "Cleaning and preparing data for analysis",
          "Visualizing data",
          "Storing data in databases"
        ],
        correctAnswer: 1,
        explanation: "Data preprocessing involves cleaning, transforming, and preparing raw data for analysis."
      },
      // Add 9 more questions for week 2
      {
        id: "aiml-2-2",
        question: "Which library is commonly used for data visualization in Python?",
        options: ["NumPy", "Pandas", "Matplotlib", "Requests"],
        correctAnswer: 2,
        explanation: "Matplotlib is the primary library for creating static, animated, and interactive visualizations in Python."
      },
      {
        id: "aiml-2-3",
        question: "What is feature engineering?",
        options: [
          "Building software features",
          "Creating or modifying variables for machine learning",
          "Engineering physical features",
          "Testing software features"
        ],
        correctAnswer: 1,
        explanation: "Feature engineering is the process of creating or modifying variables (features) to improve machine learning model performance."
      },
      {
        id: "aiml-2-4",
        question: "What does NaN stand for in data analysis?",
        options: ["Not a Number", "New Analysis Node", "Null and Nil", "Numeric Analysis"],
        correctAnswer: 0,
        explanation: "NaN stands for 'Not a Number' and represents missing or undefined numerical values."
      },
      {
        id: "aiml-2-5",
        question: "Which method is used to remove missing values in Pandas?",
        options: ["remove()", "delete()", "dropna()", "clear()"],
        correctAnswer: 2,
        explanation: "The dropna() method is used to remove rows or columns with missing values in Pandas."
      },
      {
        id: "aiml-2-6",
        question: "What type of data visualization is best for showing relationships between two continuous variables?",
        options: ["Bar chart", "Pie chart", "Scatter plot", "Line chart"],
        correctAnswer: 2,
        explanation: "Scatter plots are ideal for showing relationships and correlations between two continuous variables."
      },
      {
        id: "aiml-2-7",
        question: "In supervised learning, what is the target variable also called?",
        options: ["Feature", "Label", "Input", "Parameter"],
        correctAnswer: 1,
        explanation: "In supervised learning, the target variable is also called a label or dependent variable."
      },
      {
        id: "aiml-2-8",
        question: "What is the purpose of data normalization?",
        options: [
          "To make data look normal",
          "To scale features to similar ranges",
          "To remove outliers",
          "To create new features"
        ],
        correctAnswer: 1,
        explanation: "Data normalization scales features to similar ranges, preventing features with larger scales from dominating the model."
      },
      {
        id: "aiml-2-9",
        question: "Which of these is NOT a measure of central tendency?",
        options: ["Mean", "Median", "Mode", "Range"],
        correctAnswer: 3,
        explanation: "Range is a measure of variability, not central tendency. Mean, median, and mode are measures of central tendency."
      },
      {
        id: "aiml-2-10",
        question: "What does EDA stand for in data science?",
        options: [
          "Exploratory Data Analysis",
          "Extended Data Application",
          "Experimental Data Assessment",
          "Electronic Data Analysis"
        ],
        correctAnswer: 0,
        explanation: "EDA stands for Exploratory Data Analysis, the process of analyzing datasets to summarize their main characteristics."
      }
    ]
  }
  // Continue with weeks 3-6 following similar pattern
];
