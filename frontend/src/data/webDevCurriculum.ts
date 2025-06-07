export interface Task {
  id: string;
  title: string;
}

export interface WeekData {
  id: number;
  title: string;
  tasks: Task[];
  resources: string[];
}

export const webDevCurriculum: WeekData[] = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    tasks: [
      { id: "1-1", title: "Learn HTML basics" },
      { id: "1-2", title: "Understand CSS styling" },
      { id: "1-3", title: "Create a basic HTML page with CSS" },
      { id: "1-4", title: "Explore responsive design principles" },
      { id: "1-5", title: "Set up a GitHub repository" }
    ],
    resources: [
      "https://youtu.be/aRUhd1Wd3Sw",
      "https://youtu.be/oIHYRdWQESo",
      "https://youtu.be/G3e-cpL7ofc",
      "https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2v-tRC5Q37&si=8HQ-SEDniEu6cAs5",
      "https://youtu.be/Qaj3RBloGFc"
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript and DOM",
    tasks: [
      { id: "2-1", title: "Learn advanced JavaScript concepts" },
      { id: "2-2", title: "Build a To-Do List app with localStorage" }
    ],
    resources: [
      "https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2v-tRC5Q37"
    ],
  },
  {
    id: 3,
    title: "React and Tailwind CSS",
    tasks: [
      { id: "3-1", title: "Learn React basics" },
      { id: "3-2", title: "Integrate JavaScript logic in React" },
      { id: "3-3", title: "Create responsive UI with Tailwind CSS" },
      { id: "3-4", title: "Build a Movie Search app" }
    ],
    resources: [
      "https://youtu.be/CqkZ7MvWUA",
      "https://youtu.be/6biMWgD6_JY"
    ],
  },
  {
    id: 4,
    title: "Backend with Node.js and Express",
    tasks: [
      { id: "4-1", title: "Learn Node.js basics and npm" },
      { id: "4-2", title: "Understand Express.js" },
      { id: "4-3", title: "Design a REST API" },
      { id: "4-4", title: "Create a RESTful blog API" }
    ],
    resources: [
      "https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&si=XstqQ8LuzRIrBrwr"
    ],
  },
  {
    id: 5,
    title: "Full-Stack Capstone and Deployment",
    tasks: [
      { id: "5-1", title: "Build a full-stack app" },
      { id: "5-2", title: "Deploy frontend to Vercel or Netlify" },
      { id: "5-3", title: "Deploy backend to Render or Railway" },
    ],
    resources: [],
  }
]; 