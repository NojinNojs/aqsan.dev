"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
    <section id="about" className="relative container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            My name is Aqsan, a vocational high school student majoring in Software Engineering. I&apos;m passionate about technology and deeply committed to learning and building through code. With a strong focus on web development, I strive to grow every day—not just as a developer, but as someone who brings value through digital solutions.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="mailto:contact@aqsan.dev" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="group mt-6 rounded-lg px-8 py-6 text-base font-medium border border-black dark:border-white hover:opacity-80 transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2"
                aria-label="Download CV"
              >
                Download CV
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Image/Avatar */}
        <motion.div variants={itemVariants} className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-lg shadow-lg border border-black/10 dark:border-white/10">
            <Image
              src="/images/aqsan-about.png" 
              alt="Aqsan - Software Engineering Student"
              fill
              style={{ objectFit: "cover" }}
              className="grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}