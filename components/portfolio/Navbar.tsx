"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "#", number: "01" },
  { name: "About", href: "#about", number: "02" },
  { name: "Skills", href: "#skills", number: "03" },
  { name: "Projects", href: "#projects", number: "04" },
  { name: "Contact", href: "#contact", number: "05" },
]

const socialLinks = [
  { 
    name: "GitHub", 
    href: process.env.NEXT_PUBLIC_GITHUB_URL, 
    icon: Github,
    color: "hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
  },
  { 
    name: "LinkedIn", 
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL, 
    icon: Linkedin,
    color: "hover:bg-[#0077B5] hover:text-white dark:hover:bg-[#0077B5] dark:hover:text-white"
  },
  { 
    name: "Email", 
    href: process.env.NEXT_PUBLIC_EMAIL_URL, 
    icon: Mail,
    color: "hover:bg-[#EA4335] hover:text-white dark:hover:bg-[#EA4335] dark:hover:text-white"
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100

      if (window.scrollY === 0) {
        setActiveSection("home")
        return
      }

      let currentActive = ""
      for (const item of navItems) {
        const id = item.href === "#" ? "home" : item.href.substring(1)
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentActive = id
            break
          }
        }
      }
      setActiveSection(currentActive)
    }

    window.addEventListener("scroll", handleScrollSpy)
    handleScrollSpy()
    return () => window.removeEventListener("scroll", handleScrollSpy)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else if (href && href.startsWith("#")) {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }
    setIsOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg border-b border-black/10 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <motion.a
            href="#"
            onClick={handleNavClick}
              className="text-xl font-bold tracking-tight text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm relative z-[60]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
          >
            {process.env.NEXT_PUBLIC_SITE_NAME}
            </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                      className="relative text-sm font-medium text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors group"
                  >
                    {item.name}
                      <motion.span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                        activeSection === (item.href === "#" ? "home" : item.href.substring(1))
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                        layoutId="activeSection"
                    />
                  </a>
                  </motion.li>
              ))}
            </ul>

              {/* Theme Toggle - Desktop */}
            {mounted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="h-9 w-9 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
                </motion.div>
            )}
          </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Theme Toggle - Mobile */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="h-9 w-9 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors relative z-[60]"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

              {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
                className="h-9 w-9 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors relative z-[60]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                  <Menu className="h-5 w-5" />
                </motion.div>
            </Button>
          </div>
        </div>
        </nav>
      </motion.header>

      {/* Full-Screen Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white dark:bg-black z-[55] md:hidden"
          >
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05)_76%,transparent_77%,transparent),linear-gradient(rgba(0,0,0,0.05)_24%,transparent_25%,transparent_26%,rgba(0,0,0,0.05)_27%,rgba(0,0,0,0.05)_74%,transparent_75%,transparent_76%,rgba(0,0,0,0.05)_77%,rgba(0,0,0,0.05))] bg-[length:50px_50px] dark:bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent),linear-gradient(rgba(255,255,255,0.05)_24%,transparent_25%,transparent_26%,rgba(255,255,255,0.05)_27%,rgba(255,255,255,0.05)_74%,transparent_75%,transparent_76%,rgba(255,255,255,0.05)_77%,rgba(255,255,255,0.05))]" />
            </div>

            {/* Prominent Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-[60] w-12 h-12 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
            </motion.button>

            <div className="flex flex-col h-full justify-center items-center px-8">
              {/* Navigation Links */}
              <nav className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-8"
                >
                  {navItems.map((item, index) => {
                    const isActive = activeSection === (item.href === "#" ? "home" : item.href.substring(1))
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.4 + index * 0.1,
                          duration: 0.6,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                        className="group"
                      >
                        <a href={item.href} onClick={handleNavClick} className="block relative">
                          <div className="flex items-center justify-center gap-4 group-hover:gap-6 transition-all duration-300">
                            <span className="text-sm font-mono text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors">
                              {item.number}
                            </span>
                            <span
                              className={`text-4xl md:text-5xl font-bold tracking-tight transition-all duration-300 ${
                                isActive
                                  ? "text-black dark:text-white scale-110"
                                  : "text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white group-hover:scale-105"
                              }`}
                            >
                              {item.name}
                            </span>
                          </div>

                          {/* Active state indicator */}
                          <motion.div
                            className={`h-0.5 bg-black dark:bg-white mt-2 mx-auto transition-all duration-300 ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                            initial={{ width: isActive ? "100%" : 0 }}
                            animate={{ width: isActive ? "100%" : 0 }}
                          />
                        </a>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </nav>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-center gap-8 mb-8"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-12 h-12 rounded-full border-2 border-black/30 dark:border-white/30 flex items-center justify-center group-hover:border-transparent transition-all duration-300 ${social.color}`}>
                        <Icon className="w-5 h-5 text-black/70 dark:text-white/70 group-hover:text-current transition-colors" />
                      </div>
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap text-black/70 dark:text-white/70"
                      >
                        {social.name}
                      </motion.span>
                    </motion.a>
                  )
                })}
              </motion.div>

              
            </div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  )
}
