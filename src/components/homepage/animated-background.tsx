"use client";

import { motion } from "motion/react";
import { useRef } from "react";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating shapes configuration
  const shapes = [
    {
      size: 200,
      x: "10%",
      y: "20%",
      duration: 20,
      delay: 0,
      bgColor: "bg-emerald-300",
    },
    {
      size: 150,
      x: "80%",
      y: "60%",
      duration: 25,
      delay: 2,
      bgColor: "bg-sky-300",
    },
    {
      size: 180,
      x: "50%",
      y: "80%",
      duration: 18,
      delay: 4,
      bgColor: "bg-yellow-300",
    },
    {
      size: 120,
      x: "20%",
      y: "70%",
      duration: 22,
      delay: 1,
      bgColor: "bg-emerald-300",
    },
    {
      size: 160,
      x: "70%",
      y: "30%",
      duration: 24,
      delay: 3,
      bgColor: "bg-sky-300",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-1"
      aria-hidden="true"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-50/50 via-sky-50/30 to-yellow-50/40" />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-linear-to-br from-emerald-200/20 to-transparent blur-3xl" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-bl from-sky-200/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-yellow-200/20 to-transparent blur-3xl" />
      </div>

      {/* Floating Shapes */}
      {shapes.map((shape, idx) => (
        <motion.div
          key={idx}
          className={`absolute rounded-full opacity-20 blur-2xl ${shape.bgColor}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-linear-to-r from-emerald-400/10 to-sky-400/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-linear-to-r from-yellow-400/10 to-emerald-400/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
