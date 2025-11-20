"use client";

import { RefObject, useRef } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { SkillList } from "@/const/common";
import SocialSection from "@/components/homepage/social-section";
import { cn } from "@/utils/format";
import Link from "next/link";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import AnimatedBackground from "./animated-background";

import { motion, useScroll, useTransform } from "motion/react";
import { Mountain, Compass, TreePine, Sun } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef as RefObject<HTMLDivElement>,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative h-screen w-full text-center flex flex-col gap-12 items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content Container */}
      <div className="relative lg:px-24 z-20 w-full flex flex-col gap-12 items-center justify-center px-4">
        {/* Top Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex lg:flex-row flex-col w-full justify-between items-center gap-4"
        >
          <div className="flex gap-3 text-xs items-center justify-center flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50/60 border border-emerald-200/40 shadow-sm backdrop-blur-sm"
            >
              <MapPinIcon className="size-4 text-emerald-700" />
              <span className="font-medium text-emerald-800">Bandung</span>
            </motion.div>
            <span className="text-emerald-300">•</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-sky-50/60 border border-sky-200/40 shadow-sm backdrop-blur-sm"
            >
              <span className="font-medium text-sky-800">
                Software Engineer
              </span>
            </motion.div>
            <span className="text-emerald-300">•</span>
            <motion.div
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50/60 border border-amber-200/40 shadow-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-medium text-amber-800">
                Bachelor of Economics
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-linear-to-r from-emerald-700 to-emerald-800 lg:flex hidden rounded-full px-4 py-2 text-xs uppercase font-semibold items-center justify-center gap-2 shadow-lg shadow-emerald-800/30"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-emerald-300 rounded-full size-3 inline-block"
            />
            <span className="text-white">Open to Work</span>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[2fr_1fr] grid-cols-1 gap-8 w-full max-w-7xl">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center lg:text-start flex flex-col lg:justify-center lg:items-start justify-start items-center gap-6"
          >
            <h1 className="tracking-widest font-extrabold lg:text-5xl text-3xl relative">
              {/* Mountain Icon */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -left-8 -top-2 hidden lg:block"
              >
                <Mountain
                  className="w-6 h-6 text-emerald-500/40"
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* Sun Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -right-6 -top-1 hidden lg:block"
              >
                <Sun className="w-5 h-5 text-amber-500/40" strokeWidth={1.5} />
              </motion.div>

              <span className="text-gray-800">Hello there! I&apos;m </span>
              <span className="bg-linear-to-r from-gray-800 via-emerald-600 to-gray-800 bg-clip-text text-transparent">
                Ihda Anwari
              </span>
            </h1>

            <div className="lg:text-2xl text-xl font-semibold min-h-8">
              <TypingText
                text={[
                  "3-Year Frontend Engineer",
                  "React & Next.js Expert",
                  "Building High-Performance Web Interfaces with AI Integration",
                ]}
                textColors={[
                  "text-emerald-700",
                  "text-sky-700",
                  "text-amber-700",
                ]}
                className="font-bold"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className={cn(
                "text-sm lg:text-base text-gray-600 leading-relaxed max-w-2xl"
              )}
            >
              Started from Bootcamp{" "}
              <Link
                href="https://goto-impact.org/generasi-gigih/"
                className="font-semibold text-emerald-700 hover:text-emerald-800 underline decoration-1 decoration-emerald-300 hover:decoration-emerald-500 transition-all duration-300 relative group"
              >
                <span className="relative">
                  Generasi Gigih
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </Link>
              &nbsp;by GoTo Foundation in Frontend Developer Track, I am a
              Frontend Developer enthusiast with a Digital Business background
              at{" "}
              <Link
                href="https://www.unpad.ac.id/"
                className="font-semibold text-amber-700 hover:text-amber-800 underline decoration-1 decoration-amber-300 hover:decoration-amber-500 transition-all duration-300 relative group"
              >
                <span className="relative">
                  Padjadjaran University.
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </Link>
              &nbsp;Passionate about merging technology with business
              objectives, I specialize in crafting frontend solutions that drive
              user engagement and align with strategic goals. When I&apos;m not
              coding, you&apos;ll find me exploring mountain trails and
              connecting with nature.
            </motion.p>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:flex flex-col items-end justify-center gap-4 relative"
          >
            {/* Compass Icon - Top Right */}
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-8 -right-4"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Compass
                  className="w-8 h-8 text-sky-500/50"
                  strokeWidth={1.5}
                />
              </motion.div>
            </motion.div>

            {/* Tree Icon - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 right-2"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <TreePine
                  className="w-7 h-7 text-emerald-500/50"
                  strokeWidth={1.5}
                />
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative"
            >
              {/* Glowing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-linear-to-r from-sky-400 via-emerald-400 to-amber-400 blur-xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Pulse Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-300/60"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Image */}
              <div className="relative rounded-full p-0.5 bg-linear-to-r from-sky-200 via-emerald-200 to-amber-200">
                <div className="rounded-full bg-white p-1">
                  <Image
                    src="/logo.png"
                    width={200}
                    height={200}
                    alt="Ihda Anwari - Frontend Engineer"
                    priority
                    sizes="200px"
                    className="rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="w-[90%] overflow-hidden"
        >
          <Marquee
            direction="left"
            speed={25}
            className="[&_.rfm-child]:mx-2 py-2"
            autoFill
          >
            {SkillList.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm text-lg gap-2 flex items-center shadow-sm border border-emerald-100/60 hover:border-emerald-300/80 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span className={cn(item.color || "text-gray-600")}>
                  <item.icon />
                </span>
                <span className="font-semibold text-neutral-600">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>

        {/* Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <SocialSection />
        </motion.div>
      </div>
    </motion.section>
  );
}
