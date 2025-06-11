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
    techStack: ["React (TypeScript)", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Python", "FastAPI"],
    status: "Collaborative team project, production-ready frontend/backend"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Explore my latest work and personal projects. Each project is a
            unique journey of problem-solving and innovation.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
