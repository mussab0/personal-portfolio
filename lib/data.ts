import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer (On-site & Remote)",
    location: "KarimApps",
    description:
      "I've been working at KarimApps for over 4 years. Started on-site and currently working remotely as a full-stack developer. I contributed to many projects using React, React Native, Next.js, InertiaJs and Laravel.",
    icon: React.createElement(LuBriefcase),
    date: "2021 - Present",
  },
  {
    title: "Full-Stack Developer (Part-Time, Remote)",
    location: "MyPromax",
    description:
      "Worked remotely as a part-time full-stack developer for 1.5 years. Built several client applications using React, VueJS, InertiaJs and Laravel.",
    icon: React.createElement(LuBriefcase),
    date: "2023 - 2024",
  },
  {
    title: "UI/UX Designer (Part-Time, Remote)",
    location: "NextWys",
    description:
      "Worked remotely as a UI/UX designer for 1 year, designing modern and user-friendly interfaces using Figma and Adobe XD.",
    icon: React.createElement(LuBriefcase),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "React Native",
  "Laravel",
  "Tailwind CSS",
  "MySQL",
  "Firebase",
  "Git",
  "Framer Motion",
  "Figma",
  "Adobe XD",
  "AI Integration",
  "OpenAI",
  "Google Gemini",
  "DeepSeek"
] as const;

