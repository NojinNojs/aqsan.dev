"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A%0A*Message:*%0A${formData.message}`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setIsSubmitting(false);
    toast.success("Form submitted successfully! Opening WhatsApp...");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="relative container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12"
        >
          Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Feel free to reach out through any of these channels. I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Halo,%20saya%20tertarik%20bikin%20website%20🙂`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
                <span>Follow on GitHub</span>
              </a>

              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 