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
    "weekId": 2,
    "title": "Data Handling and Visualization Quiz",
    "timeLimit": 20,
    "passingScore": 70,
    "questions": [
      {
        "id": "aiml-2-1",
        "question": "Which of these is a valid method to drop missing values in a Pandas DataFrame?",
        "options": ["remove()", "dropna()", "deleteNull()", "clear()"],
        "correctAnswer": 1,
        "explanation": "The `dropna()` method is used to remove rows or columns containing missing values."
      },
      {
        "id": "aiml-2-2",
        "question": "What is the role of `fillna()` in data preprocessing?",
        "options": [
          "Removes all rows",
          "Fills missing values with specified data",
          "Plots the data",
          "Normalizes the data"
        ],
        "correctAnswer": 1,
        "explanation": "`fillna()` is used to fill missing values with a specific value, like mean or median."
      },
      {
        "id": "aiml-2-3",
        "question": "Which function in Pandas is used to check for missing values?",
        "options": ["isnull()", "isempty()", "checknull()", "detect_missing()"],
        "correctAnswer": 0,
        "explanation": "`isnull()` returns a boolean same-sized object indicating if the values are missing."
      },
      {
        "id": "aiml-2-4",
        "question": "Which of the following best describes the use of `groupby()` in Pandas?",
        "options": [
          "To sort data",
          "To perform operations like sum/mean by grouping rows by column values",
          "To plot graphs",
          "To drop duplicates"
        ],
        "correctAnswer": 1,
        "explanation": "`groupby()` groups data based on a column and performs aggregate functions like sum, mean, etc."
      },
      {
        "id": "aiml-2-5",
        "question": "What does the method `.describe()` in Pandas return?",
        "options": [
          "Only mean of all values",
          "Basic summary statistics like mean, std, min, and max",
          "Plots the histogram",
          "Drops duplicate values"
        ],
        "correctAnswer": 1,
        "explanation": "`.describe()` returns descriptive statistics including count, mean, std deviation, min, and max."
      },
      {
        "id": "aiml-2-6",
        "question": "In a Linear Regression model, what does the slope represent?",
        "options": [
          "Intercept value",
          "The rate at which the dependent variable changes with the independent variable",
          "The residual error",
          "The threshold value"
        ],
        "correctAnswer": 1,
        "explanation": "The slope indicates how much the dependent variable is expected to increase when the independent variable increases by one unit."
      },
      {
        "id": "aiml-2-7",
        "question": "Which of the following is NOT an assumption of linear regression?",
        "options": [
          "Linearity",
          "Homoscedasticity",
          "Multicollinearity",
          "Dependent variable should be categorical"
        ],
        "correctAnswer": 3,
        "explanation": "Linear regression requires the dependent variable to be continuous, not categorical."
      },
      {
        "id": "aiml-2-8",
        "question": "Why is feature scaling important before linear regression?",
        "options": [
          "It improves visualization",
          "It helps convergence in optimization algorithms and ensures fair weighting of features",
          "It makes data cleaner",
          "It reduces number of features"
        ],
        "correctAnswer": 1,
        "explanation": "Scaling ensures all features contribute equally and allows gradient descent to converge faster."
      },
      {
        "id": "aiml-2-9",
        "question": "Of the circumstances below, for which one is feature scaling particularly helpful?",
        "options": [
          "Feature scaling is helpful when one feature is much larger (or smaller) than another feature.",
          "Feature scaling is helpful when all the features in the original data (before scaling is applied) range from 0 to 1.",
          "Feature scaling is only required for classification problems.",
          "Feature scaling is never needed if you use decision trees."
        ],
        "correctAnswer": 0,
        "explanation": "Feature scaling is especially useful when features have vastly different magnitudes, to ensure equal importance."
      },
      {
        "id": "aiml-2-10",
        "question": "You are helping a grocery store predict its revenue and have data on items sold per week and price per item. What could be a useful engineered feature?",
        "options": [
          "For each product, calculate the number of items sold times price per item.",
          "For each product, calculate the number of items sold divided by the price per item.",
          "For each product, calculate the square root of the number of items sold.",
          "For each product, use the total number of products in the store as a new feature."
        ],
        "correctAnswer": 0,
        "explanation": "Revenue is calculated as the product of quantity sold and price per item, making it a valuable engineered feature."
      }
    ]
  },
  {
    "weekId": 3,
    "title": "Core ML Algorithms Quiz",
    "timeLimit": 20,
    "passingScore": 70,
    "questions": [
      {
        "id": "aiml-3-1",
        "question": "What is the key idea behind Decision Trees?",
        "options": [
          "Random guessing",
          "Sequential prediction",
          "Splitting data based on feature values",
          "Combining multiple trees"
        ],
        "correctAnswer": 2,
        "explanation": "Decision Trees work by splitting data based on feature values to make decisions."
      },
      {
        "id": "aiml-3-2",
        "question": "Which metric is commonly used to decide a split in a Decision Tree?",
        "options": ["Mean Absolute Error", "Gini Impurity", "R-squared", "Euclidean distance"],
        "correctAnswer": 1,
        "explanation": "Gini Impurity is used in classification trees to measure how often a randomly chosen element would be incorrectly labeled."
      },
      {
        "id": "aiml-3-3",
        "question": "What problem can occur if a decision tree is too deep?",
        "options": ["Underfitting", "Overfitting", "Low variance", "High bias"],
        "correctAnswer": 1,
        "explanation": "A very deep tree can overfit the training data and perform poorly on unseen data."
      },
      {
        "id": "aiml-3-4",
        "question": "What is K in K-Nearest Neighbors (KNN)?",
        "options": [
          "Number of features",
          "Number of classes",
          "Number of neighbors to consider for voting",
          "The depth of the tree"
        ],
        "correctAnswer": 2,
        "explanation": "K defines how many nearby points to consider when making a prediction."
      },
      {
        "id": "aiml-3-5",
        "question": "Which distance metric is most commonly used in KNN?",
        "options": ["Cosine similarity", "Manhattan distance", "Euclidean distance", "Chebyshev distance"],
        "correctAnswer": 2,
        "explanation": "Euclidean distance is the default metric used in KNN for calculating the distance between data points."
      },
      {
        "id": "aiml-3-6",
        "question": "Why is KNN considered a lazy learner?",
        "options": [
          "It memorizes the model weights",
          "It doesn’t perform computation until prediction time",
          "It builds the model during training",
          "It only works with small datasets"
        ],
        "correctAnswer": 1,
        "explanation": "KNN stores all training data and only performs computations during prediction, hence it's a lazy learner."
      },
      {
        "id": "aiml-3-7",
        "question": "What is the goal of Support Vector Machines (SVM)?",
        "options": [
          "Minimize variance",
          "Maximize the margin between classes",
          "Reduce the number of features",
          "Build decision trees"
        ],
        "correctAnswer": 1,
        "explanation": "SVM aims to find a hyperplane that maximizes the margin between different classes."
      },
      {
        "id": "aiml-3-8",
        "question": "Which kernel is commonly used to handle non-linearly separable data in SVM?",
        "options": ["Linear", "Sigmoid", "Polynomial", "Radial Basis Function (RBF)"],
        "correctAnswer": 3,
        "explanation": "RBF is a popular kernel in SVM that helps separate non-linear data by mapping it to higher dimensions."
      },
      {
        "id": "aiml-3-9",
        "question": "In SVM, what does the regularization parameter C control?",
        "options": [
          "The number of clusters",
          "The kernel width",
          "The trade-off between misclassification and margin width",
          "The number of features used"
        ],
        "correctAnswer": 2,
        "explanation": "C controls the trade-off between achieving a low error on training data and maintaining a large margin."
      },
      {
        "id": "aiml-3-10",
        "question": "What happens if the value of C is too large in an SVM model?",
        "options": [
          "The model underfits",
          "The model becomes more tolerant to misclassification",
          "The model may overfit to noise in the training data",
          "The margin becomes wider"
        ],
        "correctAnswer": 2,
        "explanation": "A high C encourages the model to classify all training examples correctly, which can lead to overfitting."
      }
    ]
  },
  {
    "weekId": 4,
    "title": "Neural Networks and Model Evaluation Quiz",
    "timeLimit": 20,
    "passingScore": 70,
    "questions": [
      {
        "id": "aiml-4-1",
        "question": "What is the main purpose of the activation function in a neural network?",
        "options": [
          "To normalize the weights",
          "To add bias",
          "To introduce non-linearity into the model",
          "To initialize the weights"
        ],
        "correctAnswer": 2,
        "explanation": "Activation functions introduce non-linearity, enabling the network to learn complex patterns."
      },
      {
        "id": "aiml-4-2",
        "question": "Which activation function is most commonly used in hidden layers of deep networks?",
        "options": ["Sigmoid", "Softmax", "Tanh", "ReLU"],
        "correctAnswer": 3,
        "explanation": "ReLU (Rectified Linear Unit) is widely used due to its efficiency and reduced vanishing gradient issues."
      },
      {
        "id": "aiml-4-3",
        "question": "In backpropagation, what does the gradient represent?",
        "options": [
          "The number of neurons in a layer",
          "The learning rate",
          "The change in output relative to weights",
          "The input error"
        ],
        "correctAnswer": 2,
        "explanation": "The gradient tells us how much the loss would change with respect to small changes in weights."
      },
      {
        "id": "aiml-4-4",
        "question": "What issue does the vanishing gradient problem cause in deep networks?",
        "options": [
          "Faster convergence",
          "Memory overload",
          "Weights update too aggressively",
          "Gradients become too small, preventing learning"
        ],
        "correctAnswer": 3,
        "explanation": "Very small gradients in early layers cause slow or no learning, a common problem in deep networks."
      },
      {
        "id": "aiml-4-5",
        "question": "In a neural network layer with weights W = [[0.2, -0.4], [0.7, 0.1]], input X = [1.0, 2.0], and bias B = [0.1, -0.2], what is the output after applying the ReLU activation?",
        "options": [
          "[1.7, 0.0]",
          "[1.7, -0.4]",
          "[0.7, 0.0]",
          "[1.3, 0.2]"
        ],
        "correctAnswer": 0,
        "explanation": "First, compute WX + B: [[0.2*1 + 0.7*2 + 0.1], [-0.4*1 + 0.1*2 - 0.2]] = [1.7, -0.4]. Applying ReLU(x)=max(0,x) -> [max(0,1.7),max(0,−0.4)] gives [1.7, 0.0]."
      },
      {
        "id": "aiml-4-6",
        "question": "What does a low bias and high variance model indicate?",
        "options": [
          "Underfitting",
          "Overfitting",
          "Balanced model",
          "Unsupervised learning"
        ],
        "correctAnswer": 1,
        "explanation": "Overfitting occurs when the model memorizes the training data and fails to generalize well to new data."
      },
      {
        "id": "aiml-4-7",
        "question": "Which evaluation metric is best suited for imbalanced classification problems?",
        "options": ["Accuracy", "Precision", "Recall", "F1 Score"],
        "correctAnswer": 3,
        "explanation": "F1 Score balances both precision and recall, making it more effective when class imbalance exists."
      },
      {
        "id": "aiml-4-8",
        "question": "Which of the following is NOT a step in the backpropagation process?",
        "options": [
          "Forward pass",
          "Loss computation",
          "Weight update",
          "Data shuffling"
        ],
        "correctAnswer": 3,
        "explanation": "While data shuffling is useful in training, it is not part of the backpropagation step."
      },
      {
        "id": "aiml-4-9",
        "question": "Which technique is used to mitigate overfitting in neural networks?",
        "options": [
          "Increasing the learning rate",
          "Using dropout layers",
          "Reducing training data",
          "Removing hidden layers"
        ],
        "correctAnswer": 1,
        "explanation": "Dropout randomly deactivates neurons during training, helping prevent overfitting by promoting robustness."
      },
      {
        "id": "aiml-4-10",
        "question": "Why is the softmax function used in the output layer of a classification neural network?",
        "options": [
          "To normalize the input",
          "To make outputs binary",
          "To convert outputs into probabilities",
          "To reduce model complexity"
        ],
        "correctAnswer": 2,
        "explanation": "Softmax converts raw scores into probabilities, which is useful for multi-class classification."
      }
    ]
  }  
  // Continue with weeks 3-6 following similar pattern
];
