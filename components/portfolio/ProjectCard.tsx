"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectCardProps {
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
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -1 }}
      className={cn("group h-full", className)}
    >
      <Card className="relative overflow-hidden border border-black/5 dark:border-white/5 bg-white dark:bg-black hover:border-black/10 dark:hover:border-white/10 hover:shadow-sm dark:hover:shadow-white/5 transition-all duration-500 flex flex-col h-full">
        {/* Image Section with Overlay */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-[1.005]"
          />
          {/* Subtle overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Status Badge */}
          <div className="absolute top-2 right-2">
            <Badge
              variant="secondary"
              className={`text-xs font-medium px-1 py-0.5 backdrop-blur-sm ${
                status === "Completed"
                  ? "bg-green-100/90 text-green-800 border-green-200/50 dark:bg-green-900/90 dark:text-green-100 dark:border-green-800/50"
                  : "bg-yellow-100/90 text-yellow-800 border-yellow-200/50 dark:bg-yellow-900/90 dark:text-yellow-100 dark:border-yellow-800/50"
              }`}
            >
              <Calendar className="w-2 h-2 mr-0.5" />
              {status}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-3 flex-grow">
          <div className="space-y-1">
            {/* Title and Description */}
            <div className="space-y-0.5">
              <h3 className="text-base font-semibold tracking-tight text-black dark:text-white group-hover:text-black/90 dark:group-hover:text-white/90 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-black/70 dark:text-white/70 text-xs leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-0.5">
              <div className="flex items-center gap-0.5 text-xs font-semibold text-black/60 dark:text-white/60 uppercase tracking-wider">
                <Code2 className="w-2.5 h-2.5" />
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-0.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        {/* Enhanced Button Section */}
        <CardFooter className="p-3 pt-0">
          <div className="flex gap-1 w-full">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 group/button border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all duration-300 hover:scale-[1.002]"
              asChild
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1"
              >
                <Github className="w-2.5 h-2.5 transition-transform duration-300 group-hover/button:rotate-1" />
                <span className="font-medium text-xs">View Code</span>
              </a>
            </Button>

            {demoUrl ? (
              <Button
                size="sm"
                className="flex-1 group/button bg-black hover:bg-black/90 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black transition-all duration-300 hover:scale-[1.002] shadow-sm hover:shadow-md"
                asChild
              >
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1"
                >
                  <ExternalLink className="w-2.5 h-2.5 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  <span className="font-medium text-xs">Live Demo</span>
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                disabled
                className="flex-1 bg-black/10 dark:bg-white/10 text-black/40 dark:text-white/40 cursor-not-allowed"
              >
                <ExternalLink className="w-2.5 h-2.5 mr-0.5" />
                <span className="font-medium text-xs">Coming Soon</span>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
