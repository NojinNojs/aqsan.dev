"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

export function CardContainer({ children, className, ...props }: CardContainerProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn("", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
