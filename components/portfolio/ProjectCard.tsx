"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectCardProps extends HTMLMotionProps<"div"> {
  title: string
  description: string
  image: string
  githubUrl: string | null
  demoUrl?: string
  techStack: string[]
  status: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  demoUrl,
  techStack,
  status,
  className,
  ...props
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={cn("group h-full relative", className)}
      {...props}
    >
      {/* Monochrome Gradient Border Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-black/10 via-black/5 to-black/10 dark:from-white/10 dark:via-white/5 dark:to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 group-hover:duration-200" />
      
      <Card className="relative h-full overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-xl shadow-lg transition-all duration-500 flex flex-col">
        {/* Glass Shine Effect - Pure White/Transparent */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent z-20 pointer-events-none" />

        {/* Image Section */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
            quality={85}
          />
          {/* Monochrome Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-500" />

          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            <Badge
              variant="secondary"
              className="text-xs font-medium px-3 py-1.5 backdrop-blur-md bg-white/80 dark:bg-black/80 text-black dark:text-white border border-black/10 dark:border-white/10 shadow-sm"
            >
              <Calendar className="w-3 h-3 mr-1.5" />
              {status}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-6 flex-grow flex flex-col gap-4 relative z-10">
          {/* Title and Description */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white group-hover:text-black/70 dark:group-hover:text-white/70 transition-all duration-300">
              {title}
            </h3>
            <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed line-clamp-3 font-medium">
              {description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-auto space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold text-black/50 dark:text-white/50 uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>

        {/* Enhanced Button Section */}
        <CardFooter className="p-6 pt-0 mt-auto relative z-10">
          <div className="grid grid-cols-2 gap-3 w-full">
            {githubUrl ? (
              <Button
                variant="outline"
                size="default"
                className="w-full group/button border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black backdrop-blur-sm transition-all duration-300 h-11"
                asChild
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4 transition-transform duration-300 group-hover/button:rotate-12" />
                  <span className="font-medium">Code</span>
                </a>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="default"
                disabled
                className="w-full opacity-50 cursor-not-allowed h-11 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10"
              >
                <Github className="w-4 h-4 mr-2" />
                <span className="font-medium">Private</span>
              </Button>
            )}

            {demoUrl ? (
              <Button
                size="default"
                className="w-full group/button bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-300 h-11 border-0 shadow-lg hover:shadow-xl"
                asChild
              >
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  <span className="font-medium">Live Demo</span>
                </a>
              </Button>
            ) : (
              <Button
                size="default"
                disabled
                className="w-full opacity-50 cursor-not-allowed h-11 bg-black/5 dark:bg-white/5"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span className="font-medium">Soon</span>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
