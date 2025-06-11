"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import FeaturesSection from "@/components/ui/features-section"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="relative container mx-auto px-4 md:px-8 lg:px-12">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative min-h-[calc(100vh-120px)] flex flex-col justify-center max-w-7xl mx-auto py-12"
      >
        <div className="grid gap-12 md:gap-16">
          {/* Main Hero Content */}
          <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
              >
                <span className="relative inline-block group">
                  Aqsan
                  <span className="absolute bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-700 group-hover:w-full"></span>
                </span>
              </motion.h1>
              <div className="flex flex-col items-center md:items-start gap-4">
                <motion.div variants={itemVariants} className="text-xl md:text-2xl font-light text-muted-foreground tracking-wide">
                  <ContainerTextFlip
                    words={["Full Stack Developer", "Problem Solver", "Web Developer", "Photographer"]}
                    interval={3000}
                    className="bg-transparent shadow-none"
                    textClassName="text-primary"
                    animationDuration={1000}
                  />
                </motion.div>
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                >
                  Transforming ideas into powerful digital solutions by creating modern, scalable web applications that drive
                  business growth and delivering exceptional user experiences.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Key Benefits Section - Replaced with FeaturesSection */}
          <motion.div variants={itemVariants} className="mt-4">
            <div className="text-center mb-8">
              <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Me?
              </motion.h3>
              <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
                I deliver value through efficient processes, competitive pricing, and unwavering commitment to quality.
              </motion.p>
            </div>

            <FeaturesSection />
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="#contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="#project">View My Work</Link>
            </Button>
          </motion.div>

          {/* Availability Notice */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Currently available for freelance projects and collaborations
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
