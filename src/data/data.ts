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
  nickname: "Arpit",
  title: "Full Stack AI Engineer",
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
      title: "Weather App",
      subtitle: "Real-time weather updates",
      description: "A weather app to get the weather information of any city in the world. It uses REST API to fetch the current weather.",
      tags: ["Node.js", "React", "Vite", "CSS", "Rest API"],
      image: "/images/project_weather.png",
      liveUrl: "https://arpitneewaliya.github.io/weather_app/",
      githubUrl: "https://github.com/arpitneewaliya/weather_app",
      isLive: true
    }
  ] as Project[],
  blogs: [
    {
      title: "Paxio V1 Technical Blog",
      date: "June 2026",
      description: "This is a comprehensive technical blog about Paxio V1, the engineering problems encountered, how we tackled them and how the systems work.",
      image: "/images/blog_paxio.png",
      platform: "Medium",
      url: "https://medium.com/@arpitneewaliya",
      readTime: "6 min read"
    },
    {
      title: "Transformers Made Easy",
      date: "July 2026",
      description: "Talks about evolution of modern LLM architectures from basic Seq2Seq models and Seq2Seq with Attention to the Attention Is All You Need Transformer.",
      image: "/images/blog_transformer.png",
      platform: "Medium",
      url: "https://medium.com/@arpitneewaliya",
      readTime: "8 min read"
    },
    {
      title: "CEXs, DEXs, AMMs, Liquidity Pools, Prediction Markets",
      date: "July 2026",
      description: "A guide to centralized and decentralized exchanges, liquidity pools, AMMs, prediction markets, and the core mechanisms that power modern crypto trading.",
      image: "/images/blog_crypto.png",
      platform: "Medium",
      url: "https://medium.com/@arpitneewaliya",
      readTime: "10 min read"
    },
    {
      title: "Introduction to CNNs",
      date: "June 2026",
      description: "A comprehensive, beginner-friendly guide to Convolutional Neural Networks (CNNs) that explains their fundamental components including filters, padding, strides, and pooling layers and why they are vital for scaling computer vision tasks.",
      image: "/images/blog_cnn.png",
      platform: "Medium",
      url: "https://medium.com/@arpitneewaliya",
      readTime: "7 min read"
    },
    {
      title: "How do Blockchains Work 101",
      date: "May 2026",
      description: "Blockchain explains a decentralized system that removes control from governments and enables secure digital transactions like Bitcoin. It also introduces Ethereum, smart contracts, and Web3 for building trustless apps without intermediaries.",
      image: "/images/blog_blockchain.png",
      platform: "Medium",
      url: "https://medium.com/@arpitneewaliya",
      readTime: "5 min read"
    }
  ] as BlogPost[]
};
