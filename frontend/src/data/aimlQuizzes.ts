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

export const aimlQuizzes: WeekQuiz[] = [
  {
    "weekId": 1,
    "title": "AI and Python Foundations Quiz",
    "timeLimit": 20,
    "passingScore": 70,
    "questions": [
      {
        "id": "aiml-1-1",
        "question": "Which of the following Python data structures is most commonly used to represent labeled datasets?",
        "options": [
          "List",
          "Tuple",
          "Dictionary",
          "DataFrame"
        ],
        "correctAnswer": 3,
        "explanation": "DataFrames have tabular structure where each column has a label and each row represents a data point, allowing efficient manipulation, analysis, and processing of labeled datasets."
      },
      {
        "id": "aiml-1-2",
        "question": "Which of the following is considered good practice when working with datasets in Python for ML tasks?",
        "options": [
          "Using global variables to store datasets",
          "Performing transformations directly on raw files",
          "Using Jupyter magic commands inside model training loops",
          "Separating data loading, preprocessing, and modeling into modular code blocks"
        ],
        "correctAnswer": 3,
        "explanation": "Separating data loading, processing, and modeling improves code reusability and maintainability."
      },
      {
        "id": "aiml-1-3",
        "question": "What will be the output of the following NumPy operation?\n\n```python\nimport numpy as np\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[2, 0], [1, 2]])\nprint(np.dot(A, B))\n```",
        "options": [
          "[[4, 4], [10, 8]]",
          "[[4, 2], [6, 4]]",
          "[[2, 4], [2, 10]]",
          "[[6, 4], [10, 8]]"
        ],
        "correctAnswer": 0,
        "explanation": "Matrix multiplication: [[1*2 + 2*1, 1*0 + 2*2], [3*2 + 4*1, 3*0 + 4*2]] = [[4, 4], [10, 8]]"
      },
      {
        "id": "aiml-1-4",
        "question": "Which of the following Pandas operations would you use to get the number of missing values in each column of a DataFrame `df`?",
        "options": [
          "df.missing().sum()",
          "df.isnull().count()",
          "df.countna()",
          "df.isnull().sum()"
        ],
        "correctAnswer": 3,
        "explanation": "The method `df.isnull().sum()` returns the count of missing values column-wise."
      },
      {
        "id": "aiml-1-5",
        "question": "What is the difference between `.loc[]` and `.iloc[]` in Pandas?",
        "options": [
          ".loc[] is used for label-based indexing, .iloc[] is used for position-based indexing",
          ".iloc[] is faster than .loc[] and only works on strings",
          "They both perform the same operation",
          ".loc[] is used to slice by rows only, .iloc[] is for both rows and columns"
        ],
        "correctAnswer": 0,
        "explanation": ".loc[] accesses rows/columns by labels, while .iloc[] uses integer positions."
      },
      {
        "id": "aiml-1-6",
        "question": "Which method in Pandas would you use to apply a function to each row of a DataFrame?",
        "options": [
          "map()",
          "filter()",
          "apply()",
          "groupby()"
        ],
        "correctAnswer": 2,
        "explanation": "The apply() method in Python is primarily used to apply a function along an axis of a DataFrame or on the values of a Series."
      },
      {
        "id": "aiml-1-7",
        "question": "Which of the following is a correct statement about the Jacobian matrix?",
        "options": [
          "It represents the second-order partial derivatives of a scalar function",
          "It is only used in probability theory",
          "It maps a function from R^n to R^m by linear approximations via partial derivatives",
          "It is only defined for functions of a single variable"
        ],
        "correctAnswer": 2,
        "explanation": "The Jacobian matrix contains all first-order partial derivatives of a vector-valued function."
      },
      {
        "id": "aiml-1-8",
        "question": "What is the derivative of the sigmoid function σ(x) = 1 / (1 + e^(-x)) with respect to x?",
        "options": [
          "σ(x)",
          "σ(x)^2",
          "σ(x)(1 - σ(x))",
          "1 - σ(x)^2"
        ],
        "correctAnswer": 2,
        "explanation": "The derivative of the sigmoid is σ(x)(1 - σ(x)), which is used in backpropagation."
      },
      {
        "id": "aiml-1-9",
        "question": "In probability, what does the Law of Total Probability state?",
        "options": [
          "P(A ∪ B) = P(A) + P(B)",
          "P(A | B) = P(A ∩ B) / P(B)",
          "If {B₁, B₂, ..., Bₙ} is a partition of the sample space, then P(A) = Σ P(A | Bᵢ) P(Bᵢ)",
          "P(A ∩ B) = P(A) / P(B)"
        ],
        "correctAnswer": 2,
        "explanation": "The Law of Total Probability expands P(A) over mutually exclusive and exhaustive events Bᵢ."
      },
      {
        "id": "aiml-1-10",
        "question": "What does the eigenvalue decomposition of a square matrix represent in ML?",
        "options": [
          "The transpose of a matrix",
          "Matrix factorization into identity and diagonal",
          "Transformation of the matrix into a set of orthogonal axes",
          "Sum of rows and columns"
        ],
        "correctAnswer": 2,
        "explanation": "Eigenvalue decomposition effectively transforms the original matrix into a new coordinate system where the axes are aligned with the eigenvectors, and the scaling along each axis is determined by the corresponding eigenvalue. "
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
