"use client";

import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { sendGTMEvent } from "@next/third-parties/google";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ResumeLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="/resume.pdf"
      className={cn(
        "group relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300",
        "font-bold text-lg",
        "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        sendGTMEvent({
          event: "download_resume",
          fileName: "resume.pdf",
        });
      }}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      <DocumentTextIcon
        className={cn(
          "size-5 transition-all duration-300",
          "text-gray-400 group-hover:text-emerald-600"
        )}
        aria-hidden="true"
      />
      <span className="relative">
        My Resume
        <motion.span
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600"
          animate={isHovered ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </span>
      <motion.span
        className="ml-auto text-emerald-600"
        initial={{ opacity: 0, x: -5 }}
        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      >
        →
      </motion.span>
    </motion.a>
  );
}
