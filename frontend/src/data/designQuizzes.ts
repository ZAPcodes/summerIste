
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

export const designQuizzes: WeekQuiz[] = [
  {
    weekId: 1,
    title: "Design Foundations Quiz",
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: "design-1-1",
        question: "What is the primary purpose of Figma?",
        options: [
          "Video editing",
          "UI/UX design and prototyping",
          "Photo manipulation",
          "3D modeling"
        ],
        correctAnswer: 1,
        explanation: "Figma is primarily used for UI/UX design, prototyping, and collaborative design work."
      },
      {
        id: "design-1-2",
        question: "Which design principle refers to the visual weight distribution in a design?",
        options: ["Contrast", "Balance", "Unity", "Emphasis"],
        correctAnswer: 1,
        explanation: "Balance refers to the distribution of visual weight in a design, creating stability and harmony."
      },
      {
        id: "design-1-3",
        question: "What does UI stand for?",
        options: ["User Interface", "Universal Integration", "Unified Input", "User Interaction"],
        correctAnswer: 0,
        explanation: "UI stands for User Interface, which is the visual elements users interact with in digital products."
      },
      {
        id: "design-1-4",
        question: "What is the main advantage of using vector graphics?",
        options: [
          "Smaller file sizes",
          "Better photo quality",
          "Scalability without quality loss",
          "Faster loading times"
        ],
        correctAnswer: 2,
        explanation: "Vector graphics can be scaled to any size without losing quality because they're made of mathematical paths."
      },
      {
        id: "design-1-5",
        question: "What is a wireframe in design?",
        options: [
          "A 3D model",
          "A basic structural blueprint of a page",
          "A color palette",
          "A font selection"
        ],
        correctAnswer: 1,
        explanation: "A wireframe is a basic structural blueprint that shows the layout and functionality of a page or screen."
      },
      {
        id: "design-1-6",
        question: "Which color model is typically used for digital displays?",
        options: ["CMYK", "RGB", "HSB", "LAB"],
        correctAnswer: 1,
        explanation: "RGB (Red, Green, Blue) is the color model used for digital displays and screens."
      },
      {
        id: "design-1-7",
        question: "What is kerning in typography?",
        options: [
          "The space between lines",
          "The space between individual characters",
          "The size of the font",
          "The weight of the font"
        ],
        correctAnswer: 1,
        explanation: "Kerning is the adjustment of space between individual characters in a font."
      },
      {
        id: "design-1-8",
        question: "What does UX stand for?",
        options: ["User Experience", "Universal Exchange", "User Extension", "Unified Experience"],
        correctAnswer: 0,
        explanation: "UX stands for User Experience, which encompasses all aspects of a user's interaction with a product."
      },
      {
        id: "design-1-9",
        question: "Which design principle creates visual interest and draws attention?",
        options: ["Unity", "Balance", "Contrast", "Proximity"],
        correctAnswer: 2,
        explanation: "Contrast creates visual interest by making elements stand out and draws the viewer's attention."
      },
      {
        id: "design-1-10",
        question: "What is a style guide in design?",
        options: [
          "A tutorial for beginners",
          "A document defining design standards and rules",
          "A collection of design templates",
          "A software manual"
        ],
        correctAnswer: 1,
        explanation: "A style guide is a document that defines design standards, rules, and guidelines for consistent visual identity."
      }
    ]
  }
  // Add more weeks following similar pattern
];
