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
},
{
  "weekId": 2,
  "title": "Illustrator Basics & Logo Design Quiz",
  "timeLimit": 20,
  "passingScore": 70,
  "questions": [
    {
      "id": "design-2-1",
      "question": "Which of these best describes a situation where you should avoid using a raster image?",
      "options": [
        "Designing a photo collage",
        "Editing high-resolution photographs",
        "Creating a logo that will be printed on a variety of sizes",
        "Posting a screenshot on social media"
      ],
      "correctAnswer": 2,
      "explanation": "Raster images lose clarity when scaled, so vector graphics are better for logos that need to stay sharp at all sizes."
    },
    {
      "id": "design-2-2",
      "question": "In Illustrator, what does the Control Panel at the top typically reflect?",
      "options": [
        "A list of installed fonts",
        "General workspace layout settings",
        "Options related to the currently selected tool or object",
        "Recent files opened"
      ],
      "correctAnswer": 2,
      "explanation": "The Control Panel is dynamic and shows contextual options based on the selected tool or object."
    },
    {
      "id": "design-2-3",
      "question": "You want to move a single anchor point without affecting the rest of the shape. Which tool will help you do this?",
      "options": [
        "Selection Tool",
        "Direct Selection Tool",
        "Magic Wand Tool",
        "Lasso Tool"
      ],
      "correctAnswer": 1,
      "explanation": "The Direct Selection Tool lets you select and modify individual anchor points on a path."
    },
    {
      "id": "design-2-4",
      "question": "While refining your logo sketch in Illustrator, you decide to adjust a curved path. Which tool should you choose to smooth the curve by manipulating its handles?",
      "options": [
        "Convert Anchor Point Tool",
        "Add Anchor Point Tool",
        "Line Segment Tool",
        "Eraser Tool"
      ],
      "correctAnswer": 0,
      "explanation": "The Convert Anchor Point Tool lets you control the handles of anchor points for precision curves."
    },
    {
      "id": "design-2-5",
      "question": "Which tool would be most helpful if you want to draw a quick circle or ellipse in your logo design?",
      "options": [
        "Ellipse Tool",
        "Pencil Tool",
        "Rectangle Tool",
        "Type Tool"
      ],
      "correctAnswer": 0,
      "explanation": "The Ellipse Tool is designed specifically for drawing circular and oval shapes easily."
    },
    {
      "id": "design-2-6",
      "question": "Which of these type tools would you use if you want your text to follow the curve of a logo symbol?",
      "options": [
        "Area Type Tool",
        "Type on a Path Tool",
        "Type Tool",
        "Point Type Tool"
      ],
      "correctAnswer": 1,
      "explanation": "Type on a Path Tool allows you to flow text along curved paths or shapes — perfect for curved logo text."
    },
    {
      "id": "design-2-7",
      "question": "You’re selecting multiple non-contiguous shapes in your design to change their color at once. Which Illustrator tool helps you do that quickly based on attributes?",
      "options": [
        "Selection Tool",
        "Direct Selection Tool",
        "Magic Wand Tool",
        "Pen Tool"
      ],
      "correctAnswer": 2,
      "explanation": "The Magic Wand Tool selects objects that share similar attributes, such as fill color or stroke weight."
    },
    {
      "id": "design-2-8",
      "question": "Which step in the logo design process ensures your logo maintains clarity whether it's printed on a business card or blown up on a billboard?",
      "options": [
        "Sketching multiple ideas",
        "Vectorizing your design",
        "Choosing a color palette",
        "Researching brand values"
      ],
      "correctAnswer": 1,
      "explanation": "Vectorizing your design ensures scalability without losing quality, a crucial trait for logos."
    },
    {
      "id": "design-2-9",
      "question": "You’re working on a logo and want to create multiple concepts with different fonts and alignments in a single file. What Illustrator feature would best support this workflow?",
      "options": [
        "Swatches panel",
        "Artboards",
        "Layers",
        "Guides"
      ],
      "correctAnswer": 1,
      "explanation": "Artboards allow you to design multiple layouts or versions side by side within the same file."
    },
    {
      "id": "design-2-10",
      "question": "You're at the stage of choosing a logo style. A brand wants an icon-based symbol without text. Which type fits this best?",
      "options": [
        "Wordmark",
        "Lettermark",
        "Abstract mark",
        "Combination mark"
      ],
      "correctAnswer": 2,
      "explanation": "An abstract mark uses shapes or forms to represent the brand without relying on text."
    }
  ]
}
  // Add more weeks following similar pattern
];
