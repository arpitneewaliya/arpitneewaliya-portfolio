export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  isLive?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  description: string;
  tags?: string[];
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Languages & Core" | "DevOps & Tools";
  iconName: string;
}

export const PORTFOLIO_DATA = {
  name: "Arpit Neewaliya",
  nickname: "Arpit",
  title: "Full Stack Engineer & Web Developer",
  location: "Delhi, India",
  status: "Open to work / internships",
  bio: [
    "I'm a Full Stack AI Engineer passionate about crafting digital products where thoughtful design meets clean, scalable code.",
    "I build modern interfaces with Next.js, React, Tailwind, and Framer Motion, focusing on performance, usability, and delightful micro-interactions.",
    "Committed to building fast, maintainable code and seamless user experiences across web & backend systems."
  ],
  socials: {
    github: "https://github.com/arpitneewaliya",
    linkedin: "https://www.linkedin.com/in/arpitneewaliya/",
    twitter: "https://x.com/arpitneewaliya",
    email: "arpit.neewaliya@gmail.com",
    leetcode: "https://leetcode.com/u/arpitneewaliya/",
    codeforces: "https://codeforces.com/profile/arpitneewaliya",
    devto: "https://dev.to/arpitneewaliya",
    medium: "https://medium.com/@arpitneewaliya",
    resume: "/resume.pdf"
  },
  skills: [
    { name: "React", category: "Frontend", icon: "SiReact" },
    { name: "Next.js", category: "Frontend", icon: "RiNextjsFill" },
    { name: "TypeScript", category: "Languages & Core", icon: "SiTypescript" },
    { name: "JavaScript", category: "Languages & Core", icon: "IoLogoJavascript" },
    { name: "Tailwind CSS", category: "Frontend", icon: "SiTailwindcss" },
    { name: "Node.js", category: "Backend", icon: "SiNodedotjs" },
    { name: "Express.js", category: "Backend", icon: "SiExpress" },
    { name: "PostgreSQL", category: "Backend", icon: "SiPostgresql" },
    { name: "MongoDB", category: "Backend", icon: "SiMongodb" },
    { name: "AWS", category: "DevOps & Tools", icon: "FaAws" },
    { name: "Docker", category: "DevOps & Tools", icon: "FaDocker" },
    { name: "Linux", category: "DevOps & Tools", icon: "FaLinux" },
    { name: "Git", category: "DevOps & Tools", icon: "FaGitAlt" },
    { name: "Claude AI", category: "DevOps & Tools", icon: "SiClaude" },
  ],
  experiences: [
    {
      role: "Founding Engineer",
      company: "Monolith Digital",
      period: "2026 — Present",
      description: "Leading core frontend & full stack architecture. Designing modular UI design systems and high-throughput real-time web applications.",
      tags: ["Next.js", "React", "Node.js", "Tailwind CSS"]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Aether Media Group",
      period: "2025 — 2026",
      description: "Engineered responsive web applications and backend API integrations. Built interactive dashboards with real-time data streaming.",
      tags: ["TypeScript", "React", "PostgreSQL", "Express"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Stark Editorial Lab",
      period: "2024 — 2025",
      description: "Developed procedural UI components and optimized web vitals for editorial digital publications.",
      tags: ["React", "CSS", "UI/UX Design"]
    }
  ] as ExperienceItem[],
  projects: [
    {
      title: "Cerebral Earth",
      subtitle: "Mapified global event news visualizer",
      description: "A mapified news platform where users can visualize real-time major global events live on an interactive world map canvas.",
      tags: ["React", "Next.js", "Mapbox", "Tailwind CSS"],
      image: "/images/project_cerebral-earth.png",
      liveUrl: "https://cerebral-earth.vercel.app",
      githubUrl: "https://github.com/arpitneewaliya/cerebral-earth",
      isLive: true,
      metrics: "Live Interactive Visualizer"
    },
    {
      title: "Cinematica",
      subtitle: "Minimal movie & TV show organizer",
      description: "A modern, responsive, premium web application for discovering movies and TV shows and curating your personal viewing experience. Powered by the TMDb API, Clerk Authentication, and Neon PostgreSQL.",
      tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript", "Clerk"],
      image: "/images/project_cinematica.png",
      liveUrl: "https://cinematica-mu.vercel.app/",
      githubUrl: "https://github.com/arpitneewaliya/cinematica",
      isLive: true
    },
    {
      title: "Weather App",
      subtitle: "Real-time weather updates",
      description: "A weather app to get the weather information of any city in the world. It uses REST API to fetch the current weather.",
      tags: ["Node.js", "React", "Vite", "CSS", "Rest API"],
      image: "/images/project_weather.png",
      liveUrl: "https://arpitneewaliya.github.io/weather_app/",
      githubUrl: "https://github.com/arpitneewaliya/weather_app",
      isLive: true
    }
  ] as Project[]
};
