"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Moment – Personal Finance App",
    description:
      "A full-stack financial management platform with transaction tracking, account management, and ML-powered smart categorization.",
    image: "/images/money-management-moment.png",
    githubUrl: "https://github.com/NojinNojs/moment",
    demoUrl: "https://money-management-moment.vercel.app/",
    techStack: [
      "React (TypeScript)",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express",
      "Python",
      "FastAPI",
    ],
    status: "Collaborative team project, production-ready frontend/backend",
  },
  {
    title: "Aroma Coffee – Coffee Shop Landing Page",
    description:
      "A clean and elegant coffee shop landing page built with Next.js and GSAP. Showcases animated sections, menu highlights, and responsive design using a warm and professional color palette.",
    image: "/images/aroma-coffee.png",
    githubUrl: "https://github.com/NojinNojs/aroma-coffee",
    demoUrl: "https://aqsan-aroma-coffee.vercel.app",
    techStack: ["Next.js (TypeScript)", "Tailwind CSS", "GSAP"],
    status: "Solo dummy project focused on UI/UX and animation",
  },
  {
    title: "17 Plus 8 Demands",
    description: "An interactive landing page that visualizes 17 short-term and 8 long-term public demands with countdown timers, progress tracking, and expandable sections. Built to showcase dynamic layouts, smooth animations, and responsive UI using a bold color scheme.",
    image: "/images/17tambah8.png",
    githubUrl: null,
    demoUrl: "https://17plus8.vercel.app",
    techStack: ["Next.js (TypeScript)", "Tailwind CSS", "Framer Motion"],
    status: "Solo project"
  }  
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-black/60 dark:text-white/60 max-w-2xl mx-auto text-lg"
          >
            Explore my latest work and personal projects. Each project is a
            unique journey of problem-solving and innovation.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`grid grid-cols-1 gap-8 ${projects.length > 1 ? 'md:grid-cols-2 lg:grid-cols-2 mx-auto max-w-5xl' : 'max-w-2xl mx-auto'}`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
