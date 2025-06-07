export interface Resource {
  id: string;
  title: string;
  type: "video" | "article" | "documentation";
  url: string;
}

export interface CurriculumTaskData {
  id: string;
  title: string;
  description?: string; // Add description as it's present in some other curriculum files
  type?: "video" | "assignment" | "reading"; // Add type as it's present in some other curriculum files
  resources?: Resource[];
}

export interface CurriculumWeekData {
  id: number;
  title: string;
  tasks: CurriculumTaskData[];
  resources: Resource[]; // Change to Resource[]
}

export const aimlCurriculum: CurriculumWeekData[] = [
  {
    id: 1,
    title: "AI and Python Fundamentals",
    tasks: [
      { id: "1-1", title: "Learn AI core concepts", description: "Understand the fundamental principles and applications of Artificial Intelligence.", type: "reading" },
      { id: "1-2", title: "Master Python basics", description: "Gain proficiency in Python programming language, essential for AI and ML.", type: "video" },
      { id: "1-3", title: "Use NumPy and Pandas", description: "Learn to use NumPy for numerical operations and Pandas for data manipulation.", type: "assignment" },
      { id: "1-4", title: "Understand ML math foundations", description: "Grasp the mathematical concepts underlying Machine Learning algorithms.", type: "reading" },
      { id: "1-5", title: "Explore ML libraries", description: "Discover and understand popular Machine Learning libraries like Scikit-learn, TensorFlow, and PyTorch.", type: "video" }
    ],
    resources: [
      { id: "1-resource-1", title: "Python for ML", type: "video", url: "https://www.youtube.com/watch?app=desktop&v=7eh4d6sabA0&t=640s" },
      { id: "1-resource-2", title: "NumPy Tutorial", type: "video", url: "https://youtu.be/QUT1VHiLmmI?si=oHvKXETBFXFcwLfW" },
      { id: "1-resource-3", title: "Pandas Tutorial", type: "video", url: "https://youtu.be/vmEHCJofslg?si=lzeBhdk94JTdAhU" },
      { id: "1-resource-4", title: "Linear Algebra (3Blue1Brown)", type: "video", url: "https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&feature=shared" },
      { id: "1-resource-5", title: "Calculus (3Blue1Brown)", type: "video", url: "https://m.youtube.com/watch?v=WUvTyaaNkzM&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
      { id: "1-resource-6", title: "Probability Theory (MIT OCW)", type: "documentation", url: "https://ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/" },
      { id: "1-resource-7", title: "Intro to Scikit-learn", type: "video", url: "https://www.youtube.com/watch?v=-IvNzmrcyUM" }
    ],
  },
  {
    id: 2,
    title: "Data Handling and Visualization",
    tasks: [
      { id: "2-1", title: "Clean and preprocess data", description: "Learn techniques for cleaning raw data and preparing it for analysis.", type: "assignment" },
      { id: "2-2", title: "Visualize data", description: "Master data visualization using libraries like Matplotlib and Seaborn to gain insights.", type: "video" },
      { id: "2-3", title: "Perform feature engineering", description: "Understand how to create new features from existing data to improve model performance.", type: "reading" },
      { id: "2-4", title: "Implement regression and classification models", description: "Apply basic regression and classification algorithms to solve real-world problems.", type: "assignment" }
    ],
    resources: [
      { id: "2-resource-1", title: "Data Preprocessing Techniques", type: "video", url: "https://youtube.com/playlist?list=PLfP3JxW-T70HkhNxdgZeApdpiOfL6KAQE&si=CVu9Bv0SQbHuoEPl" },
      { id: "2-resource-2", title: "Matplotlib Tutorial", type: "video", url: "https://youtu.be/3Xc3CA655Y4?si=PMqyJFOUl_DF0MfN" },
      { id: "2-resource-3", title: "Seaborn Tutorial", type: "video", url: "https://youtu.be/ooqXQ37XHMM?si=zf8VqNsIGGoFHO5v" },
      { id: "2-resource-4", title: "Andrew Ng ML (Weeks 1 & 2)", type: "documentation", url: "https://www.coursera.org/learn/machine-learning?specialization=machine-learning-introduction" },
      { id: "2-resource-5", title: "Linear Regression from Scratch", type: "video", url: "https://youtu.be/VmbA0pi2cRQ?si=MfBl_YphuFN8OVno" },
      { id: "2-resource-6", title: "Logistic Regression (Coursera)", type: "documentation", url: "https://www.coursera.org/learn/machine-learning-with-python/home/week/4" }
    ],
  },
  {
    id: 3,
    title: "Regression Techniques",
    tasks: [
      { id: "3-1", title: "Build regression models", description: "Construct and evaluate various regression models such as Linear and Logistic Regression.", type: "assignment" },
      { id: "3-2", title: "Use evaluation metrics", description: "Learn and apply metrics like R-squared, MSE, RMSE, and accuracy to assess model performance.", type: "reading" },
      { id: "3-3", title: "Perform cross-validation", description: "Understand and implement cross-validation techniques to ensure model robustness.", type: "video" }
    ],
    resources: [],
  },
  {
    id: 4,
    title: "Classification and Deep Learning",
    tasks: [
      { id: "4-1", title: "Learn neural networks", description: "Explore the basics of neural networks, including their architecture and functioning.", type: "video" },
      { id: "4-2", title: "Tune hyperparameters", description: "Learn techniques for optimizing model performance by tuning hyperparameters.", type: "assignment" },
      { id: "4-3", title: "Build classification models", description: "Develop and implement advanced classification models using deep learning frameworks.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 5,
    title: "Deep Learning Specialization",
    tasks: [
      { id: "5-1", title: "Build CNNs", description: "Construct Convolutional Neural Networks for image recognition and computer vision tasks.", type: "assignment" },
      { id: "5-2", title: "Implement YOLO object detection", description: "Learn to use YOLO (You Only Look Once) for real-time object detection.", type: "video" },
      { id: "5-3", title: "Learn text preprocessing", description: "Understand techniques for cleaning and preparing text data for Natural Language Processing (NLP).", type: "reading" },
      { id: "5-4", title: "Perform sentiment analysis", description: "Apply NLP techniques to perform sentiment analysis on text data.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 6,
    title: "AI Capstone Project",
    tasks: [
      { id: "6-1", title: "Build a CV or NLP project", description: "Develop a complete computer vision or natural language processing project.", type: "assignment" },
      { id: "6-2", title: "Deploy as a web app", description: "Learn to deploy your AI/ML models as a web application.", type: "video" },
      { id: "6-3", title: "Present model architecture", description: "Prepare and present the architecture, methodology, and results of your capstone project.", type: "reading" }
    ],
    resources: [],
  }
]; 