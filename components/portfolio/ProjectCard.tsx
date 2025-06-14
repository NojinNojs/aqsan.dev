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
  githubUrl: string
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
      whileHover={{ y: -5 }}
      className={cn("group h-full", className)}
      {...props}
    >
      <Card className="relative overflow-hidden border border-black/5 dark:border-white/5 bg-white dark:bg-black hover:border-black/10 dark:hover:border-white/10 hover:shadow-xl dark:hover:shadow-white/5 transition-all duration-500 flex flex-col h-full">
        {/* Image Section with Overlay */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <Badge
              variant="secondary"
              className="text-xs font-medium px-2 py-1 backdrop-blur-sm bg-white/90 dark:bg-black/90 text-black dark:text-white border border-black/10 dark:border-white/10"
            >
              <Calendar className="w-3 h-3 mr-1" />
              {status}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-6 flex-grow">
          <div className="space-y-4">
            {/* Title and Description */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-black dark:text-white group-hover:text-black/90 dark:group-hover:text-white/90 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-black/60 dark:text-white/60 uppercase tracking-wider">
                <Code2 className="w-3.5 h-3.5" />
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        {/* Enhanced Button Section */}
        <CardFooter className="p-6 pt-0">
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 group/button border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all duration-300"
              asChild
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 transition-transform duration-300 group-hover/button:rotate-12" />
                <span className="font-medium text-sm">View Code</span>
              </a>
            </Button>

            {demoUrl ? (
              <Button
                size="sm"
                className="flex-1 group/button bg-black hover:bg-black/90 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black transition-all duration-300 shadow-sm hover:shadow-md"
                asChild
              >
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  <span className="font-medium text-sm">Live Demo</span>
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                disabled
                className="flex-1 bg-black/10 dark:bg-white/10 text-black/40 dark:text-white/40 cursor-not-allowed"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1" />
                <span className="font-medium text-sm">Coming Soon</span>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
