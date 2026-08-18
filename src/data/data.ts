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
  category: "Languages & Core" | "Frontend" | "Backend" | "AI & Data Science" | "DevOps & Tools";
  icon: string;
}

export interface BlogPost {
  title: string;
  date: string;
  description: string;
  image: string;
  platform: "Medium" | "Dev.to" | "Substack" | "Hashnode" | "Other";
  url: string;
  readTime?: string;
}

export const PORTFOLIO_DATA = {
  name: "Arpit Neewaliya",
  nickname: "Arpit Neewaliya",
  title: "Full Stack AI Engineer",
  location: "Delhi, India",
  status: "Open to work / internships",
  bio: [
    "I am a Full Stack AI Engineer passionate about creating digital products where thoughtful design meets clean and scalable code.",
    "I build modern interfaces using Next.js, React, Tailwind CSS & TypeScript, focusing on performance, usability and seamless user experiences.",
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
    { name: "TypeScript", category: "Languages & Core", icon: "SiTypescript" },
    { name: "JavaScript", category: "Languages & Core", icon: "IoLogoJavascript" },
    { name: "Python", category: "Languages & Core", icon: "SiPython" },
    { name: "Java", category: "Languages & Core", icon: "FaJava" },
    { name: "React", category: "Frontend", icon: "SiReact" },
    { name: "Next.js", category: "Frontend", icon: "RiNextjsFill" },
    { name: "Tailwind CSS", category: "Frontend", icon: "SiTailwindcss" },
    { name: "HTML5", category: "Frontend", icon: "FaHtml5" },
    { name: "CSS3", category: "Frontend", icon: "FaCss3Alt" },
    { name: "Vite", category: "Frontend", icon: "SiVite" },
    { name: "Node.js", category: "Backend", icon: "SiNodedotjs" },
    { name: "Express.js", category: "Backend", icon: "SiExpress" },
    { name: "PostgreSQL", category: "Backend", icon: "SiPostgresql" },
    { name: "MongoDB", category: "Backend", icon: "SiMongodb" },
    { name: "Supabase", category: "Backend", icon: "SiSupabase" },
    { name: "Prisma", category: "Backend", icon: "SiPrisma" },
    { name: "Claude AI", category: "AI & Data Science", icon: "SiClaude" },
    { name: "Hugging Face", category: "AI & Data Science", icon: "SiHuggingface" },
    { name: "Kaggle", category: "AI & Data Science", icon: "SiKaggle" },
    { name: "Jupyter", category: "AI & Data Science", icon: "SiJupyter" },
    { name: "AWS", category: "DevOps & Tools", icon: "FaAws" },
    { name: "Docker", category: "DevOps & Tools", icon: "FaDocker" },
    { name: "Linux", category: "DevOps & Tools", icon: "FaLinux" },
    { name: "Git", category: "DevOps & Tools", icon: "FaGitAlt" },
    { name: "Vercel", category: "DevOps & Tools", icon: "SiVercel" },
    { name: "Postman", category: "DevOps & Tools", icon: "SiPostman" },
  ] as SkillItem[],
  experiences: [
    {
      role: "Technical Intern",
      company: "DRDO (ADRDE)",
      period: "June 2026 — August 2026",
      description: "Fine-tuned a VLM for Drone Image Understanding and VQA. Used QLoRA fine-tuning approach for training the model.",
      tags: ["Python", "Transformers", "PyTorch", "Kaggle Notebooks"]
    },
    {
      role: "Technical Team Member",
      company: "AWS Student Builder Group - MAIT",
      period: "2026 — Present",
      description: "Built & designed the entire website for the AWS club. Collaborated with team members to create an engaging and interactive platform for AWS enthusiasts.",
      tags: ["TypeScript", "React", "PostgreSQL", "Express"]
    },
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
      title: "Zanshin Focus",
      subtitle: "All-in-one productivity app for deep focus.",
      description: "Zanshin Focus is a minimalist productivity web app that brings together a Pomodoro Timer, Task Manager, Habit Tracker, and Personal Journal alongside a distraction-free Focus Mode with ambient sounds. It helps you stay organized and consistently productive through clean, distraction-free tools designed to keep you in flow.",
      tags: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript", "Zustand"],
      image: "/images/project_zanshin-focus.png",
      liveUrl: "https://zanshin-focus.vercel.app/",
      githubUrl: "#",
      isLive: false
    }
  ] as Project[],
  blogs: [
    {
      title: "Introduction to VLMs",
      date: "July 2026",
      description: "Learn how Vision Language Models are transforming AI by enabling machines to see, understand, and reason like never before.",
      image: "/images/blog_vlm.png",
      platform: "Medium",
      url: "https://medium.com/@arpitneewaliya/introduction-to-vlms-979601fd1291?sharedUserId=arpitneewaliya",
      readTime: "5 min read"
    },
    {
      title: "Vision Transformers: How AI Learned to See Without Convolutions",
      date: "July 2026",
      description: "Explore how Vision Transformers are redefining the future of computer vision.",
      image: "/images/blog_vision-trans.webp",
      platform: "Medium",
      url: "https://medium.com/@arpitneewaliya/vision-transformers-how-ai-learned-to-see-without-convolutions-35ba9cce01c4?sharedUserId=arpitneewaliya",
      readTime: "4 min read"
    },
    {
      title: "What Actually Happens When You Send a Prompt to an LLM?",
      date: "August 2026",
      description: "Let us understand what happens when you send a prompt to an LLM.",
      image: "/images/blog_llm.webp",
      platform: "Medium",
      url: "https://medium.com/@arpitneewaliya/what-actually-happens-when-you-send-a-prompt-to-an-llm-d9f8ce33108f?sharedUserId=arpitneewaliya",
      readTime: "6 min read"
    },
    {
      title: "How I Fine-Tuned a Vision Language Model for Drone Image Understanding",
      date: "August 2026",
      description: "My journey for fine-tuning a Vision Language Model for Drone Image Understanding and Visual Question Answering.",
      image: "/images/blog_fine-tune.png",
      platform: "Medium",
      url: "https://medium.com/@arpitneewaliya/how-i-fine-tuned-a-vision-language-model-for-drone-image-understanding-ab3329d6c210",
      readTime: "4 min read"
    },
  ] as BlogPost[]
};
