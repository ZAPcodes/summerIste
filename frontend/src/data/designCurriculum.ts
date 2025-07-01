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
    title: "Merch Design",
    tasks: [
      {
        id: "3-1",
        title: "Mug Design with Canva",
        description: "Learn how to design custom mugs using Canva's design tools and templates.",
        type: "video"
      },
      {
        id: "3-2",
        title: "T-Shirt Design with Canva x AI",
        description: "Explore the use of AI in Canva to design creative and trendy T-shirts.",
        type: "video"
      },
      {
        id: "3-3",
        title: "Custom Hoodie Design with Canva",
        description: "Understand how to create unique hoodie designs suitable for print-on-demand.",
        type: "video"
      }
    ],
    resources: [
      {
        id: "3-resource-1",
        title: "Mug Design with Canva",
        url: "https://youtu.be/KyiReVUPEQE?si=jwlg02ewtArcOIsr",
        type: "video"
      },
      {
        id: "3-resource-2",
        title: "T-Shirt design with Canva x AI",
        url: "https://youtu.be/6iFHeN7rwD0?si=LzdR1XDdsQ4kCMLT",
        type: "video"
      },
      {
        id: "3-resource-3",
        title: "Custom Hoodie Design with Canva",
        url: "https://youtu.be/P8961WkBCU8?si=7neLvjt6aLZskOwl",
        type: "video"
      }
    ]
  },
  {
    "id": 4,
    "title": "Premiere Pro Basics",
    "tasks": [
      {
        "id": "4-1",
        "title": "Premiere Pro Beginner Tutorial",
        "description": "Get started with Adobe Premiere Pro by learning the basic tools, layout, and editing workflow.",
        "type": "video"
      },
      {
        "id": "4-2",
        "title": "Complete Premiere Pro Tutorial",
        "description": "Understand the full process of editing videos in Premiere Pro with a step-by-step tutorial for beginners.",
        "type": "video"
      }
    ],
    resources: [
      {
        id: "4-resource-1",
        title: "Premiere Pro Beginner Tutorial",
        url: "https://m.youtube.com/watch?v=eCsM0r3RNc4&pp=ygUNcHJlbWllcmUgcHJvIA%3D%3D",
        type: "video"
      },
      {
        id: "4-resource-2",
        title: "Complete Premiere Pro Tutorial",
        url: "https://m.youtube.com/watch?v=oLMdXC_B1vQ&pp=ygUVcHJlbWllcmUgcHJvIHR1dG9yaWFs",
        type: "video"
      }
    ]
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