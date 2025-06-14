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

export const designQuizzes: WeekQuiz[] = [
  {
  "weekId": 1,
  "title": "Design Foundations Quiz Canva & Figma",
  "timeLimit": 20,
  "passingScore": 70,
  "questions": [
    {
      "id": "design-1-1",
      "question": "What is the primary use of Figma?",
      "options": [
        "Video editing",
        "UI/UX design and prototyping",
        "Photo editing",
        "Presentation design"
      ],
      "correctAnswer": 1,
      "explanation": "Figma is a collaborative design tool mainly used for UI/UX design, wireframing, and prototyping interfaces."
    },
    {
      "id": "design-1-2",
      "question": "Which of the following features is unique to Figma among design tools?",
      "options": [
        "Offline editing",
        "Multi-user real-time collaboration",
        "Raster-based editing",
        "Layer masking"
      ],
      "correctAnswer": 1,
      "explanation": "Figma allows multiple users to edit the same file simultaneously in real-time, making collaboration seamless."
    },
    {
      "id": "design-1-3",
      "question": "In Canva, what is the main purpose of a 'Brand Kit'?",
      "options": [
        "To store photos",
        "To create animations",
        "To save brand logos, colors, and fonts",
        "To export videos"
      ],
      "correctAnswer": 2,
      "explanation": "The Brand Kit helps maintain visual consistency by saving your brand logos, colors, and fonts for easy reuse."
    },
    {
      "id": "design-1-4",
      "question": "Which design principle involves distributing visual weight equally across a layout?",
      "options": ["Contrast", "Balance", "Hierarchy", "Proximity"],
      "correctAnswer": 1,
      "explanation": "Balance ensures that no one part of the design feels heavier than another, creating visual harmony."
    },
    {
      "id": "design-1-5",
      "question": "What is the difference between a frame and a group in Figma?",
      "options": [
        "A frame is a type of component; a group is not",
        "Groups can contain frames; frames cannot contain groups",
        "Frames act like containers with layout controls, while groups are basic collections of layers",
        "They are interchangeable and have the same functions"
      ],
      "correctAnswer": 2,
      "explanation": "Frames provide layout and responsive design features, while groups are used simply to organize layers."
    },
    {
      "id": "design-1-6",
      "question": "Which tool allows you to design presentations, social media posts, and videos quickly using templates?",
      "options": ["Figma", "Canva", "Photoshop", "Blender"],
      "correctAnswer": 1,
      "explanation": "Canva offers thousands of templates for fast design creation, especially for non-designers."
    },
    {
      "id": "design-1-7",
      "question": "What does 'prototype' refer to in Figma?",
      "options": [
        "A final published website",
        "A coded application",
        "An interactive mockup showing navigation and flow",
        "A collection of design templates"
      ],
      "correctAnswer": 2,
      "explanation": "A prototype in Figma simulates user interactions to test the flow and usability of the design."
    },
    {
      "id": "design-1-8",
      "question": "What is kerning in typography?",
      "options": [
        "The space between lines",
        "The vertical size of text",
        "The spacing between characters",
        "The typeface thickness"
      ],
      "correctAnswer": 2,
      "explanation": "Kerning refers to the adjustment of space between individual characters for better visual appeal."
    },
    {
      "id": "design-1-9",
      "question": "Which Canva feature helps ensure alignment of elements?",
      "options": [
        "Smart Guides and Gridlines",
        "Animations",
        "Export settings",
        "Template Locking"
      ],
      "correctAnswer": 0,
      "explanation": "Canva provides smart guides and gridlines to help align and distribute design elements evenly."
    },
    {
      "id": "design-1-10",
      "question": "What is the purpose of 'Auto Layout' in Figma?",
      "options": [
        "To automatically export designs",
        "To fix alignment issues manually",
        "To create responsive and dynamic layouts",
        "To change file formats"
      ],
      "correctAnswer": 2,
      "explanation": "Auto Layout in Figma allows elements to adjust automatically based on content and screen size."
    }
  ]
}
     
  // Add more weeks following similar pattern
];
