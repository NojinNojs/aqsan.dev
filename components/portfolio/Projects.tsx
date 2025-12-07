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
    demoUrl: "https://17tambah8.vercel.app",
    techStack: ["Next.js (TypeScript)", "Tailwind CSS", "Framer Motion"],
    status: "Solo project"
  }  
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-white dark:bg-black">
      {/* Monochrome Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 backdrop-blur-md text-black dark:text-white shadow-sm">
              My Portfolio
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-black dark:text-white drop-shadow-sm"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-black/60 dark:text-white/60 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
