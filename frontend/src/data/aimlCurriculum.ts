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
      { id: "2-1", title: "Visualize data", description: "Learn techniques for cleaning raw data and preparing it for analysis.", type: "video" },
      { id: "2-2", title: "Clean and preprocess", description: "Master data visualization using libraries like Matplotlib and Seaborn to gain insights.", type: "assignment" },
      { id: "2-3", title: "Perform feature engineering", description: "Understand how to create new features from existing data to improve model performance.", type: "reading" },
      { id: "2-4", title: "Implement regression and classification models", description: "Apply basic regression and classification algorithms to solve real-world problems.", type: "assignment" }
    ],
    resources: [
      { id: "2-resource-1", title: "Matplotlib Tutorial", type: "video", url: "https://youtu.be/3Xc3CA655Y4?si=PMqyJFOUl_DF0MfN" },
      { id: "2-resource-2", title: "Seaborn Tutorial", type: "video", url: "https://youtu.be/ooqXQ37XHMM?si=zf8VqNsIGGoFHO5v" },
      { id: "2-resource-3", title: "Data Preprocessing Techniques", type: "video", url: "https://youtube.com/playlist?list=PLfP3JxW-T70HkhNxdgZeApdpiOfL6KAQE&si=CVu9Bv0SQbHuoEPl" },
      { id: "2-resource-4", title: "Andrew Ng ML (Weeks 1 & 2)", type: "documentation", url: "https://www.coursera.org/learn/machine-learning?specialization=machine-learning-introduction" },
      { id: "2-resource-5", title: "Linear Regression from Scratch", type: "video", url: "https://youtu.be/VmbA0pi2cRQ?si=MfBl_YphuFN8OVno" },
      { id: "2-resource-6", title: "Logistic Regression (Coursera)", type: "documentation", url: "https://www.coursera.org/learn/machine-learning-with-python/home/week/4" }
    ],
  },
  {
    "id": 3,
    "title": "Core ML Algorithms",
    "tasks": [
      {
        "id": "3-1",
        "title": "Explore Foundational ML Resources",
        "description": "Strengthen your ML understanding through foundational courses and detailed articles.",
        "type": "reading",
        "resources": [
          {
            "id": "3-resource-10",
            "title": "Linear Regression — Detailed View (Towards Data Science)",
            "type": "article",
            "url": "https://towardsdatascience.com/linear-regression-detailed-view-ea73175f6e86"
          },
          {
            "id": "3-resource-11",
            "title": "Simple Linear Regression Tutorial (DataCamp)",
            "type": "article",
            "url": "https://www.datacamp.com/tutorial/simple-linear-regression"
          },
          {
            "id": "3-resource-12",
            "title": "Simple Linear Regression Tutorial (Scribbr)",
            "type": "article",
            "url": "https://www.scribbr.com/statistics/simple-linear-regression/"
          },
          {
            "id": "3-resource-13",
            "title": "Linear Regression Cheat Sheet (ML Cheatsheet)",
            "type": "documentation",
            "url": "https://ml-cheatsheet.readthedocs.io/en/latest/linear_regression.html"
          },
          {
            "id": "3-resource-14",
            "title": "Linear Regression Cheat Sheet (Codecademy)",
            "type": "documentation",
            "url": "https://www.codecademy.com/learn/linear-regression-mssp/modules/simple-linear-regression-mssp/cheatsheet"
          },
          {
            "id": "3-resource-15",
            "title": "Logistic Regression — Detailed Overview (Towards Data Science)",
            "type": "article",
            "url": "https://towardsdatascience.com/logistic-regression-detailed-overview-46c4da4303bc"
          }
        ]
      },
      {
        "id": "3-2",
        "title": "Learn Decision Trees and KNN",
        "description": "Explore how Decision Trees and K-Nearest Neighbors work and are implemented for classification.",
        "type": "video",
        "resources": [
          {
            "id": "3-resource-2",
            "title": "Decision and Classification Trees By StatQuest",
            "type": "video",
            "url": "https://youtu.be/_L39rN6gz7Y?si=smeXFmF7ZHLQeDQp"
          },
          {
            "id": "3-resource-3",
            "title": "K-nearest neighbors By StatQuest",
            "type": "video",
            "url": "https://youtu.be/HVXime0nQeI?si=rEqy64QG0mr1uCeK"
          },
          {
            "id": "3-resource-9",
            "title": "StatQuest YouTube Channel",
            "type": "video",
            "url": "https://www.youtube.com/@statquest"
          },
          {
            "id": "3-resource-1",
            "title": "Coursera ML with Python (Week 3)",
            "type": "documentation",
            "url": "https://www.coursera.org/learn/machine-learning-with-python/home/week/3"
          }
        ]
      },
      {
        "id": "3-3",
        "title": "Understand Support Vector Machines",
        "description": "Dive into SVM theory, practical implementation, and mathematical formulation.",
        "type": "reading",
        "resources": [
          {
            "id": "3-resource-4",
            "title": "SVM Guide for Beginners (Analytics Vidhya)",
            "type": "article",
            "url": "https://www.analyticsvidhya.com/blog/2021/10/support-vector-machinessvm-a-complete-guide-for-beginners/"
          },
          {
            "id": "3-resource-5",
            "title": "Implementing SVM From Scratch (Towards Data Science)",
            "type": "article",
            "url": "https://towardsdatascience.com/implementing-svm-from-scratch-784e4ad0bc6a/"
          },
          {
            "id": "3-resource-6",
            "title": "SVM Theory and Applications (ResearchGate)",
            "type": "documentation",
            "url": "https://www.researchgate.net/publication/221621494_Support_Vector_Machines_Theory_and_Applications"
          },
          {
            "id": "3-resource-7",
            "title": "Andrew Ng's SVM Notes (Stanford CS229)",
            "type": "documentation",
            "url": "https://see.stanford.edu/materials/aimlcs229/cs229-notes3.pdf"
          },
          {
            "id": "3-resource-8",
            "title": "Andrew Ng's Full ML Course (Stanford CS229)",
            "type": "video",
            "url": "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU"
          }
        ]
      }
    ],
    resources: []
  }
  ,
  {
    "id": 4,
    "title": "Neural Networks and Model Evaluation",
    "tasks": [
      {
        "id": "4-1",
        "title": "Learn Forward and Backward Propagation",
        "description": "Understand how neural networks compute and learn through forward and backward passes.",
        "type": "reading"
      },
      {
        "id": "4-2",
        "title": "Explore Neural Network Intuition and Implementation",
        "description": "Dive into tutorials and intuitive explanations of feed-forward networks and backpropagation.",
        "type": "video"
      },
      {
        "id": "4-3",
        "title": "Master Model Evaluation Techniques",
        "description": "Study common evaluation metrics and their significance in assessing ML model performance.",
        "type": "reading"
      }
    ],
    "resources": [
      {
        "id": "4-resource-1",
        "title": "Forward Propagation in Neural Networks (DataCamp)",
        "type": "article",
        "url": "https://www.datacamp.com/tutorial/forward-propagation-neural-networks"
      },
      {
        "id": "4-resource-2",
        "title": "Forward Propagation in Neural Networks (GeeksforGeeks)",
        "type": "article",
        "url": "https://www.geeksforgeeks.org/deep-learning/what-is-forward-propagation-in-neural-networks/"
      },
      {
        "id": "4-resource-3",
        "title": "Forward Propagation Blog (QuantInsti)",
        "type": "article",
        "url": "https://blog.quantinsti.com/forward-propagation-neural-networks/"
      },
      {
        "id": "4-resource-4",
        "title": "NLP Research Lab Example (DistrictDataLabs)",
        "type": "article",
        "url": "https://www.districtdatalabs.com/nlp-research-lab-part-3-forward-propagation-1"
      },
      {
        "id": "4-resource-5",
        "title": "Feed Forward NN Intuition (AnalyticsVidhya)",
        "type": "article",
        "url": "https://www.analyticsvidhya.com/blog/2021/10/feed-forward-neural-networks-intuition-on-forward-propagation/"
      },
      {
        "id": "4-resource-6",
        "title": "Video Explanation (YouTube)",
        "type": "video",
        "url": "https://youtu.be/aircAruvnKk?si=IONdBCAc7MOd9F5D"
      },
      {
        "id": "4-resource-7",
        "title": "CS231n Backpropagation Notes",
        "type": "documentation",
        "url": "https://cs231n.github.io/optimization-2/"
      },
      {
        "id": "4-resource-8",
        "title": "Step-by-Step Backpropagation Example (Matt Mazur)",
        "type": "article",
        "url": "https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/"
      },
      {
        "id": "4-resource-9",
        "title": "Backpropagation in Neural Networks (GeeksforGeeks)",
        "type": "article",
        "url": "https://www.geeksforgeeks.org/machine-learning/backpropagation-in-neural-network/"
      },
      {
        "id": "4-resource-10",
        "title": "Mastering Backpropagation (DataCamp)",
        "type": "article",
        "url": "https://www.datacamp.com/tutorial/mastering-backpropagation"
      },
      {
        "id": "4-resource-11",
        "title": "3Blue1Brown Deep Learning (Playlist)",
        "type": "video",
        "url": "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"
      },
      {
        "id": "4-resource-12",
        "title": "Stanford Full Explanation (YouTube)",
        "type": "video",
        "url": "https://www.youtube.com/watch?v=i94OvYb6noo"
      },
      {
        "id": "4-resource-13",
        "title": "Andrew Ng's Deep Learning Specialization (Playlist)",
        "type": "video",
        "url": "https://www.youtube.com/watch?v=CS4cs9xVecg&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0"
      },
      {
        "id": "4-resource-14",
        "title": "12 Important Metrics (Analytics Vidhya)",
        "type": "article",
        "url": "https://www.analyticsvidhya.com/blog/2019/08/11-important-model-evaluation-error-metrics/"
      },
      {
        "id": "4-resource-15",
        "title": "Evaluation Metrics Overview (GeeksforGeeks)",
        "type": "article",
        "url": "https://www.geeksforgeeks.org/metrics-for-machine-learning-model/"
      },
      {
        "id": "4-resource-16",
        "title": "Performance Metrics Guide (Neptune.ai)",
        "type": "documentation",
        "url": "https://neptune.ai/blog/performance-metrics-in-machine-learning-complete-guide"
      }
    ]
  },
  {
    id: 5,
    title: "Advanced Topics (CV or NLP Focus)",
    tasks: [
      {
        id: "5-1",
        title: "Explore Computer Vision Concepts",
        description: "Understand the foundations of computer vision using OpenCV and TensorFlow.",
        type: "reading"
      },
      {
        id: "5-2",
        title: "Learn Natural Language Processing Basics",
        description: "Dive into tokenization, text cleaning, and classic NLP pipelines.",
        type: "reading"
      },
      {
        id: "5-3",
        title: "Understand Overfitting and Regularization",
        description: "Explore the causes of overfitting and techniques to mitigate it using L1/L2 regularization.",
        type: "reading"
      }
    ],
    resources: [
      {
        id: "5-resource-1",
        title: "Computer Vision (GeeksforGeeks)",
        type: "article",
        url: "https://www.geeksforgeeks.org/computer-vision/"
      },
      {
        id: "5-resource-2",
        title: "Introduction to Computer Vision (IBM - Coursera)",
        type: "video",
        url: "https://www.coursera.org/learn/introduction-computer-vision-watson-opencv"
      },
      {
        id: "5-resource-3",
        title: "Computer Vision (TutorialsPoint)",
        type: "documentation",
        url: "https://www.tutorialspoint.com/computer-vision/index.htm"
      },
      {
        id: "5-resource-4",
        title: "Kaggle Learn - Computer Vision",
        type: "documentation",
        url: "https://www.kaggle.com/learn/computer-vision"
      },
      {
        id: "5-resource-5",
        title: "PyImageSearch Start Here Guide",
        type: "documentation",
        url: "https://pyimagesearch.com/start-here/"
      },
      {
        id: "5-resource-6",
        title: "NLP Tutorial (GeeksforGeeks)",
        type: "article",
        url: "https://www.geeksforgeeks.org/natural-language-processing-nlp-tutorial/"
      },
      {
        id: "5-resource-7",
        title: "NLP Resources - DeepLearning.AI",
        type: "documentation",
        url: "https://www.deeplearning.ai/resources/natural-language-processing/"
      },
      {
        id: "5-resource-8",
        title: "NLP Tutorial (TutorialsPoint)",
        type: "documentation",
        url: "https://www.tutorialspoint.com/natural_language_processing/index.htm"
      },
      {
        id: "5-resource-9",
        title: "Beginner’s Guide to NLP (DataCamp)",
        type: "article",
        url: "https://www.datacamp.com/blog/what-is-natural-language-processing"
      },
      {
        id: "5-resource-10",
        title: "NLP from Basics to Advance (Analytics Vidhya)",
        type: "article",
        url: "https://www.analyticsvidhya.com/blog/2022/01/nlp-tutorials-part-i-from-basics-to-advance/"
      },
      {
        id: "5-resource-11",
        title: "NLP Learning Path (IBM Developer)",
        type: "documentation",
        url: "https://developer.ibm.com/learningpaths/get-started-artificial-intelligence/next-steps/beginner-natural-language-processing"
      },
      {
        id: "5-resource-12",
        title: "Overfitting Explained (AWS)",
        type: "article",
        url: "https://aws.amazon.com/what-is/overfitting/"
      },
      {
        id: "5-resource-13",
        title: "Underfitting and Overfitting (GeeksforGeeks)",
        type: "article",
        url: "https://www.geeksforgeeks.org/underfitting-and-overfitting-in-machine-learning/"
      },
      {
        id: "5-resource-14",
        title: "Visual Guide to Overfitting (Reddit)",
        type: "article",
        url: "https://www.reddit.com/r/learnmachinelearning/comments/rlfkvk/what_is_overfitting_a_2minute_visual_guide/"
      },
      {
        id: "5-resource-15",
        title: "Regularization in ML (Simplilearn)",
        type: "article",
        url: "https://www.simplilearn.com/tutorials/machine-learning-tutorial/regularization-in-machine-learning"
      },
      {
        id: "5-resource-16",
        title: "L1 & L2 Regularization (GeeksforGeeks)",
        type: "article",
        url: "https://www.geeksforgeeks.org/overfitting-and-regularization-in-ml/"
      },
      {
        id: "5-resource-17",
        title: "L2 Regularization (Google Developers)",
        type: "documentation",
        url: "https://developers.google.com/machine-learning/crash-course/overfitting/regularization"
      },
      {
        id: "5-resource-18",
        title: "Regularization Guide (Dataquest)",
        type: "documentation",
        url: "https://www.dataquest.io/blog/regularization-in-machine-learning/"
      },
      {
        id: "5-resource-19",
        title: "Google ML Crash Course",
        type: "documentation",
        url: "https://developers.google.com/machine-learning/crash-course"
      }
    ]
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