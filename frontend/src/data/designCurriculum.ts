export interface Resource {
  id: string;
  title: string;
  type: "video" | "article" | "documentation";
  url: string;
}

export interface CurriculumTaskData {
  id: string;
  title: string;
  description: string;
  type: "video" | "assignment" | "reading";
  resources?: Resource[];
}

export interface CurriculumWeekData {
  id: number;
  title: string;
  tasks: CurriculumTaskData[];
  resources: Resource[];
}

export const designCurriculum: CurriculumWeekData[] = [
  {
    id: 1,
    title: "Design Foundations",
    tasks: [
      {
        id: "1-1",
        title: "Explore Figma & Canva",
        description: "Play around with core features in both tools to understand their interfaces and capabilities.",
        type: "assignment",
      },
      {
        id: "1-2",
        title: "Mini-task: TeamWars",
        description: "Engage in a fun team-based design challenge using either Canva or Figma.",
        type: "assignment",
      },
    ],
    resources: [
      { id: "1-resource-1", title: "Figma Basics - Video", type: "video", url: "https://youtu.be/ezldKx-jPag?si=B2Ts7Wly-xtLBITR" },
      { id: "1-resource-2", title: "Figma Basics - Playlist", type: "video", url: "https://youtube.com/playlist?list=PLXDU_eVOJTx6zk5MDarIs0asNoZqlRG23&si=jXvmRcdH-tx1FQFi" },
      { id: "1-resource-3", title: "Figma Advanced", type: "video", url: "https://youtu.be/31wzhvz0vsw?si=T49Mobu_qTJ9cOvv" },
      { id: "1-resource-4", title: "Canva Basics", type: "video", url: "https://www.youtube.com/watch?v=Llnmf5BXLBA" },
      { id: "1-resource-5", title: "Canva for Students - Playlist", type: "video", url: "https://www.youtube.com/playlist?list=PLATYfhN6gQz9_rE-vkyUDNiM-M9vH-klX" },
      { id: "1-resource-6", title: "Canva Advanced", type: "video", url: "https://www.youtube.com/watch?v=O1rMZkk7fBE" },
    ],
  },
  {
    id: 2,
    title: "Graphic Design: Canva and Adobe Illustrator Basics",
    tasks: [
      { id: "2-1", title: "Design a Poster using Canva", description: "Create an eye-catching poster for an event or theme of your choice using Canva.", type: "assignment" },
      { id: "2-2", title: "Create an Instagram Carousel Post", description: "Design a multi-slide Instagram carousel post focusing on a consistent visual theme.", type: "assignment" },
      { id: "2-3", title: "Learn Adobe Illustrator Basics", description: "Get introduced to Adobe Illustrator and its core features used for vector design.", type: "video" },
      { id: "2-4", title: "Practice Logo Design in Illustrator", description: "Create a simple logo using Illustrator tools and techniques learned.", type: "assignment" }
    ],
    resources: [
      {
        id: "2-resource-1",
        title: "Adobe Illustrator for Beginners | FREE COURSE (Envato Tuts)",
        type: "video",
        url: "https://www.youtube.com/watch?v=Ib8UBwu3yGA"
      },
      {
        id: "2-resource-2",
        title: "Illustrator Full Course Tutorial (6+ Hours)",
        type: "video",
        url: "https://www.youtube.com/watch?v=3RTqLQ1MaQU"
      },
      {
        id: "2-resource-3",
        title: "Learn Illustrator in 5 MINUTES!",
        type: "video",
        url: "https://www.youtube.com/watch?v=3GzumUieDPY"
      },
      {
        id: "2-resource-4",
        title: "Practice Repo: Adobe Illustrator for Beginners",
        type: "documentation",
        url: "https://github.com/tutsplus/adobe-illustrator-for-beginners"
      }
    ]
  },
  {
    id: 3,
    title: "UI Components and Prototyping",
    tasks: [
      { id: "3-1", title: "Design buttons and forms", description: "Learn to design interactive UI components like buttons, input fields, and forms.", type: "assignment" },
      { id: "3-2", title: "Create reusable components", description: "Master the creation and usage of reusable components and variants in Figma.", type: "video" },
      { id: "3-3", title: "Learn prototyping in Figma", description: "Understand how to create interactive prototypes to simulate user flows.", type: "video" },
      { id: "3-4", title: "Prototype a mobile app screen", description: "Build an interactive prototype for a mobile application screen in Figma.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 4,
    title: "Design Systems and Collaboration",
    tasks: [
      { id: "4-1", title: "Understand design systems", description: "Learn the importance and structure of design systems for consistent and scalable design.", type: "reading" },
      { id: "4-2", title: "Create a mini design system", description: "Develop a small-scale design system including style guides and components.", type: "assignment" },
      { id: "4-3", title: "Collaborate on a Figma project", description: "Practice collaborative design workflows using Figma's real-time collaboration features.", type: "video" },
      { id: "4-4", title: "Design a multi-page website", description: "Design a complete multi-page website based on a given brief, applying all learned principles.", type: "assignment" }
    ],
    resources: [],
  },
  {
    id: 5,
    title: "Final Design Project",
    tasks: [
      { id: "5-1", title: "Plan a full app design", description: "Develop a detailed plan for designing a complete mobile application, including user flows and wireframes.", type: "assignment" },
      { id: "5-2", title: "Create wireframes", description: "Translate your app plan into low-fidelity wireframes.", type: "assignment" },
      { id: "5-3", title: "Design high-fidelity screens", description: "Create detailed, pixel-perfect high-fidelity screens for your application.", type: "assignment" },
      { id: "5-4", title: "Present design portfolio", description: "Prepare and present a portfolio showcasing your design process and final project.", type: "video" }
    ],
    resources: [],
  }
]; 