"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaPhp,
  FaLaravel,
  FaJs,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";


interface SkillItemProps {
  skill: {
    name: string;
    icon: React.ElementType;
    color: string;
    textColor: string;
  };
  itemVariants: Variants;
}

const SkillCard = ({ skill, itemVariants }: SkillItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group p-3 sm:p-6 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-start gap-2 sm:gap-4 cursor-pointer overflow-hidden transform-gpu min-w-[140px] sm:min-w-[200px] hover:scale-[1.02] transition-transform duration-200 ease-out"
      style={{
        backgroundColor: isHovered ? skill.color : "transparent",
        color: isHovered ? skill.textColor : undefined,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Icon */}
      <Icon
        className={`w-10 h-10 sm:w-16 sm:h-16 transition-all duration-300 ${
          isHovered ? "grayscale-0" : "grayscale"
        }`}
        aria-hidden="true"
        style={{ color: isHovered ? skill.textColor : undefined }}
      />

      {/* Skill Name */}
      <h4 className="text-base sm:text-xl font-semibold whitespace-nowrap">{skill.name}</h4>
    </motion.div>
  );
};

export default function Skills() {
  const allSkills = [
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", textColor: "#000000" },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      textColor: "#FFFFFF",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      textColor: "#FFFFFF",
    },
    { name: "PHP", icon: FaPhp, color: "#777BB4", textColor: "#FFFFFF" },
    {
      name: "Laravel",
      icon: FaLaravel,
      color: "#FF2D20",
      textColor: "#FFFFFF",
    },
    {
      name: "MERN Stack",
      icon: FaServer,
      color: "#4CAF50",
      textColor: "#FFFFFF",
    },
  ];

  // Prioritize MERN, Next.js, Laravel, PHP, JS, TS
  const prioritizedSkillNames = [
    "MERN Stack",
    "Next.js",
    "Laravel",
    "PHP",
    "JavaScript",
    "TypeScript",
  ];

  const coreSkills = allSkills.filter((skill) =>
    prioritizedSkillNames.includes(skill.name)
  );


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-12"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4"
        >
          My Skills
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12"
        >
          I&apos;m passionate about crafting robust and engaging web solutions
          using a diverse set of technologies. Here are some of my core
          proficiencies that drive my work:
        </motion.p>

        {/* Grid for Core Skills - Always 3x2 on larger screens for 6 skills */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {coreSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
