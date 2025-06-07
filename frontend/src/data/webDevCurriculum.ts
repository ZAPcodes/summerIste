export interface Task {
  id: string;
  title: string;
  resources?: { id: string; title: string; type: string; url: string; }[];
}

export interface WeekData {
  id: number;
  title: string;
  tasks: Task[];
  resources: { id: string; title: string; type: string; url: string; }[];
}

export const webDevCurriculum: WeekData[] = [
  {
    id: 1,
    title: "Web Development Fundamentals (HTML, CSS & Networking)",
    tasks: [
      { id: "1-1", title: "Basic Networking & How the Internet Works" },
      { id: "1-2", title: "HTML & CSS Deep Dive" },
      { id: "1-3", title: "JavaScript Basics (Variables, data types, functions)" },
      { id: "1-4", title: "Version Control with Git & GitHub" },
      { id: "1-5", title: "Build and host a personal portfolio webpage" },
      { id: "1-6", title: "Set up GitHub repo, commit changes, push project" }
    ],
    resources: [
      { id: "resource-1-1", title: "Basic Networking & How the Internet Works (Video)", type: "video", url: "https://youtu.be/aRUhd1Wd3Sw" },
      { id: "resource-1-2", title: "How the Internet Works (Video)", type: "video", url: "https://youtu.be/ofHYRdWQESo" },
      { id: "resource-1-3", title: "HTML & CSS Deep Dive (Video)", type: "video", url: "https://youtu.be/G3e-cpL7ofc" },
      { id: "resource-1-4", title: "JavaScript Basics (Playlist - Complete till 13th Video)", type: "playlist", url: "https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&si=8HQ-SEDnjEu6cAs5" },
      { id: "resource-1-5", title: "Version Control with Git & GitHub (Video)", type: "video", url: "https://youtu.be/Oaj3RBIoGFc" }
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    tasks: [
      { id: "2-1", title: "Complete the JavaScript Playlist" },
      { id: "2-2", title: "Arrays, objects, loops, conditions, higher-order functions" },
      { id: "2-3", title: "Mini Project: To-Do List App with localStorage support" }
    ],
    resources: [
      { id: "resource-2-1", title: "JavaScript Playlist (Complete)", type: "playlist", url: "https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37" }
    ],
  },
  {
    id: 3,
    title: "Frontend with React + Tailwind",
    tasks: [
      { id: "3-1", title: "React Basics: JSX, components, props, state, useState, useEffect" },
      { id: "3-2", title: "JavaScript integration in React: Component logic, API calls" },
      { id: "3-3", title: "Responsive UI with Tailwind CSS" },
      { id: "3-4", title: "Build a Movie Search App using OMDB API" },
      { id: "3-5", title: "Responsive layout using Tailwind CSS" }
    ],
    resources: [
      { id: "resource-3-1", title: "JavaScript integration in React: Component logic, API calls (Video)", type: "video", url: "https://youtu.be/CgkZ7MvWUAA" },
      { id: "resource-3-2", title: "Responsive UI with Tailwind CSS (Video)", type: "video", url: "https://youtu.be/6biMWgD6_JY" }
    ],
  },
  {
    id: 4,
    title: "Backend with Node.js & Express",
    tasks: [
      { id: "4-1", title: "Node.js basics, npm, file system" },
      { id: "4-2", title: "Express.js: Routes, middleware, request/response flow" },
      { id: "4-3", title: "REST API design + JSON handling" },
      { id: "4-4", title: "Create a RESTful blog API with CRUD endpoints" },
      { id: "4-5", title: "Test endpoints using Postman or curl" }
    ],
    resources: [
      { id: "resource-4-1", title: "REST API design + JSON handling (Playlist - Complete till 18th Video)", type: "playlist", url: "https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&si=XstqQ8LuzRIrBrwr" }
    ],
  },
  {
    id: 5,
    title: "Capstone Project + Deployment",
    tasks: [
      { id: "5-1", title: "Combine React frontend + Express backend + cloud DB" },
      { id: "5-2", title: "Capstone Ideas: Blog, Task Manager, Weather Dashboard, Habit Tracker" },
      { id: "5-3", title: "Deployment: Vercel/Netlify for frontend, Render/Railway for backend" },
      { id: "5-4", title: "Add environment variables and learn GitHub deployment workflow" },
      { id: "5-5", title: "Build and deploy your full-stack app" },
      { id: "5-6", title: "Add it to your GitHub + Portfolio" },
      { id: "5-7", title: "Write a proper README" }
    ],
    resources: [],
  }
]; 