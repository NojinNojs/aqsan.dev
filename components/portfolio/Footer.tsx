"use client"

import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { handleSmoothScroll } from "@/lib/utils"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      href: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
      icon: Github,
      label: "View my projects on GitHub",
      desc: "Check out my code repositories",
    },
    {
      name: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
      icon: Linkedin,
      label: "Connect with me on LinkedIn",
      desc: "Connect professionally",
    },
    {
      name: "Email",
      href: process.env.NEXT_PUBLIC_EMAIL_URL || "#",
      icon: Mail,
      label: "Send me an email",
      desc: "Get in touch",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "project", href: "#project" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Info */}
          <div>
            <a
              href="#"
              onClick={handleSmoothScroll}
              className="text-2xl font-bold tracking-tight mb-2 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm"
            >
              aqsan.dev
            </a>
            <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xs mb-4">
              Full Stack Web Developer specializing in modern web technologies. Building digital solutions for businesses and individuals.
            </p>
            <address className="not-italic flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Indonesia</span>
            </address>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="border border-black dark:border-white text-black dark:text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:opacity-80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                aria-label="Go to contact section"
              >
                Let&apos;s collaborate
                <svg aria-hidden="true" width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0-4-4m4 4-4 4"/></svg>
              </button>
            </motion.a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="space-y-2">
            <h3 className="text-base font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={handleSmoothScroll}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold mb-2">Development</h3>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700 dark:text-gray-300">
                <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} className="inline-block">
                  Web Development
                </motion.span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold mb-2">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <li key={social.name} className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="flex items-center gap-3"
                    >
                      <Icon className="w-5 h-5 mt-0.5" aria-hidden="true" />
                      <div>
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="text-sm font-medium text-black dark:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm"
                        >
                          {social.name}
                        </Link>
                        <div className="text-xs text-gray-700 dark:text-gray-300">{social.desc}</div>
                      </div>
                    </motion.div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-700 dark:text-gray-300">
          <div>© {currentYear} aqsan.dev. All rights reserved.</div>
          <div>Built with passion and precision</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
