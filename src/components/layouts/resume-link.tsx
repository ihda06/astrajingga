"use client";

import { LinkIcon } from "@heroicons/react/16/solid";
import { sendGTMEvent } from "@next/third-parties/google";
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
      onClick={() => {
        sendGTMEvent({
          event: "download_resume",
          value: "download_resume",
        });
      }}
    >
      <span>My Resume</span>

      <motion.div
        variants={variants}
        animate={isHovered ? "visible" : "hidden"}
        style={{
          width: "1rem",
          height: "1rem",
          display: "inline-block",
          marginLeft: "0.25rem",
        }}
      >
        <LinkIcon />
      </motion.div>
    </a>
  );
}
