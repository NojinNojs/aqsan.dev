"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useRef } from "react"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24 overflow-hidden"
    >
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto"
      >
        {/* Headline - Always on top */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400"
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            style={{ y }}
            variants={itemVariants} 
            className="relative group"
          >
            <div className="relative w-full max-w-[320px] md:max-w-md aspect-[4/5] mx-auto overflow-hidden rounded-2xl shadow-2xl border border-black/10 dark:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/aqsan-about.png" 
                alt="Aqsan - Software Engineering Student"
                fill
                style={{ objectFit: "cover" }}
                className="grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-black/10 to-white/10 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6 md:space-y-8"
          >
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              My name is Aqsan, a vocational high school student majoring in Software Engineering. I&apos;m passionate about technology and deeply committed to learning and building through code. With a strong focus on web development, I strive to grow every day—not just as a developer, but as someone who brings value through digital solutions.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center md:justify-start"
            >
              <Link 
                href="https://www.cake.me/s--jLKv5z-d0caf2vujdIjXrQ--/mraffiaqsan" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black to-white blur-md opacity-70 group-hover:opacity-100 transition-all duration-300 z-0" />
                  <Button
                    size="lg"
                    className="relative z-10 rounded-full px-8 py-6 text-base font-semibold bg-white text-black border-2 border-black dark:bg-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-md"
                    aria-label="View Resume"
                  >
                    <span className="flex items-center">
                      <Download className="mr-2 h-5 w-5" />
                      View Resume
                    </span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
