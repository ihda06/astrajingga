"use client";

import { LinkIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

import { useState } from "react";

export default function ResumeLink() {
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    hidden: { opacity: 0, x: 5 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <a
      href="/resume.pdf"
      className="font-bold text-lg hover:underline flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>My Resume</span>

      <motion.div
        variants={variants}
        animate={isHovered ? "visible" : "hidden"}
        className="w-4 h-4 inline-block ml-1"
      >
        <LinkIcon />
      </motion.div>
    </a>
  );
}
