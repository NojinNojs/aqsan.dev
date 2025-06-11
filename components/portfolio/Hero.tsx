"use client"

import { Button } from "@/components/ui/button"
import { Zap, DollarSign, Award, MessageCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"

export default function Hero() {
  const benefits = [
    {
      icon: Zap,
      title: "Fast Development",
      description: "Rapid prototyping and efficient development cycles to bring your ideas to life quickly.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality. Transparent pricing with no hidden costs.",
    },
    {
      icon: Award,
      title: "High-Quality Results",
      description: "Clean, maintainable code following industry best practices and modern standards.",
    },
  ]

  const techStack = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]

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
                    words={["Student", "Problem Solver", "Web Developer"]}
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
                  Transforming ideas into powerful digital solutions. I create modern, scalable web applications that drive
                  business growth and deliver exceptional user experiences.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Key Benefits Section */}
          <motion.div variants={itemVariants} className="mt-4">
            <div className="text-center mb-8">
              <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Me?
              </motion.h3>
              <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
                I deliver value through efficient processes, competitive pricing, and unwavering commitment to quality.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group relative text-center p-6 rounded-lg border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-lg mb-4 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* CTA and Tech Stack */}
          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-8">
            <div className="text-center space-y-6">
              <Link href="#contact" className="w-full lg:w-auto">
                <Button
                  size="lg"
                  className="group w-full lg:w-auto rounded-lg px-8 py-6 text-base font-medium hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                  Let&apos;s Talk
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-4">Free consultation • Quick response • No commitment</p>
            </div>

            <div className="space-y-4 w-full max-w-2xl">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-center">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Availability Notice */}
          <motion.div variants={itemVariants} className="text-center space-y-4 pt-8 border-t">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                Available for new projects
              </span>
            </div>
            <p className="text-lg">
              Ready to start your next project?{" "}
              <Link href="#contact" className="font-semibold relative inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
                Let&apos;s discuss your vision
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30 group-hover:bg-primary/50 transition-colors"></span>
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
