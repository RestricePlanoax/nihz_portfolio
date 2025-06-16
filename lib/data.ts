import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/bits-png-2.png";
import rmtdevImg from "@/public/bits-png-2.png";
import wordanalyticsImg from "@/public/bits-png-2.png";

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
    title: "SDE Intern @ LV Prasad Eye Institute",
    location: "Hyderabad, Telangana",
    description:
"During my internship, I enhanced the front-end usability and accessibility of patient assessment tools, developed a responsive design system for clinical applications to ensure seamless cross-device compatibility, and built a real-time analysis tool for monitoring dry-eye patient data." ,
icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - July 2024",
  },
  {
    title: "SDE Intern @ Swecha",
    location: "Hyderabad, Telangana",
    description:
"I designed intuitive user interfaces in Figma and brought them to life by building educational tools with the Tauri and Electron frameworks, then optimized a custom Linux distribution for low-spec hardware to ensure under-resourced students could access and benefit from these applications.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2022- July 2022",
  }
] as const;

export const projectsData = [
  {
    title: "A Study on Fake News Detection using ML",
    description:
"This work blends deep learning with classic algorithms and smart text features to spot fake news. Tested on a wide range of articles, it reliably flags false stories with strong accuracy.",
    tags: ["Machine Learning", "Python"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Empirical Software Engineering",
    description:
"Logistic Regression proved the best bug predictor on NASA’s defect datasets—85%, 74%, and 92% accuracy—and offers a simple, reliable boost to software quality.",
    tags: ["Machine Learning", "Python"],
    imageUrl: rmtdevImg,
  },
  {
    title: "What Does Explainable AI Really Mean?",
    description:
"This study surveys explainable-AI techniques and lays out a simple three-step framework—setting context, generating explanations, and presenting them—to help you choose the right method.",
    tags:["Machine Learning", "Python"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Artificial Intelligence",
  "Machine Learning",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "PostgreSQL",
  "Figma",
  "Electron"
] as const;
