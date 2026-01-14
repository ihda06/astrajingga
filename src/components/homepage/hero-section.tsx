"use client";

import { RefObject, useRef, useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { SkillList } from "@/const/common";
import SocialSection from "@/components/homepage/social-section";
import { cn } from "@/utils/format";
import Link from "next/link";
import AnimatedBackground from "./animated-background";

import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, FolderGit2, Zap, ArrowRight, Mail } from "lucide-react";

// Animated counter component
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

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
      className="relative min-h-screen w-full text-center flex flex-col gap-6 lg:gap-10 items-center justify-center overflow-hidden py-8 lg:py-0"
      aria-label="Introduction"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content Container */}
      <div className="relative lg:px-24 z-20 w-full flex flex-col gap-6 lg:gap-10 items-center justify-center px-4">
        {/* Profile Image - Now visible on mobile too */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Glowing Ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400 blur-xl opacity-50"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Profile Image */}
          <div className="relative rounded-full p-1 bg-gradient-to-r from-emerald-300 via-sky-300 to-amber-300">
            <div className="rounded-full bg-white p-1">
              <Image
                src="/logo.png"
                width={120}
                height={120}
                alt="Ihda Anwari - Frontend Engineer"
                priority
                sizes="120px"
                className="rounded-full lg:w-[150px] lg:h-[150px] w-[100px] h-[100px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full px-4 py-2 text-xs uppercase font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/30"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="bg-emerald-300 rounded-full size-2.5 inline-block"
            />
            <span className="text-white">Open to Work</span>
          </motion.div>
        </motion.div>

        {/* Value-First Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-gray-800 via-emerald-600 to-sky-600 bg-clip-text text-transparent">
              Building Digital Experiences
            </span>
            <br />
            <span className="text-gray-800">That Drive Business Results</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-base lg:text-xl text-gray-600 font-medium"
          >
            React & Next.js Specialist • 3+ Years Experience
          </motion.p>
        </motion.div>

        {/* Punchy Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-2xl px-4"
        >
          I craft high-performance web interfaces that convert visitors into
          customers. From startups to enterprises, I bring your vision to life
          with clean code and pixel-perfect designs.
        </motion.p>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 lg:gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex flex-col items-center gap-1 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-lg shadow-emerald-100/50"
          >
            <div className="flex items-center gap-2 text-emerald-600">
              <Briefcase className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="text-xl lg:text-3xl font-bold">
                <AnimatedCounter value={3} suffix="+" />
              </span>
            </div>
            <span className="text-xs lg:text-sm text-gray-600 font-medium">
              Years Experience
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex flex-col items-center gap-1 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-sky-100 shadow-lg shadow-sky-100/50"
          >
            <div className="flex items-center gap-2 text-sky-600">
              <FolderGit2 className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="text-xl lg:text-3xl font-bold">
                <AnimatedCounter value={10} suffix="+" />
              </span>
            </div>
            <span className="text-xs lg:text-sm text-gray-600 font-medium">
              Projects Delivered
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex flex-col items-center gap-1 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-amber-100 shadow-lg shadow-amber-100/50"
          >
            <div className="flex items-center gap-2 text-amber-600">
              <Zap className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="text-xl lg:text-3xl font-bold">
                <AnimatedCounter value={100} suffix="%" />
              </span>
            </div>
            <span className="text-xs lg:text-sm text-gray-600 font-medium">
              On-time Delivery
            </span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full max-w-md px-4"
        >
          {/* Primary CTA */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1"
          >
            <Link
              href="mailto:ihdaanwari@gmail.com"
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 lg:py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-semibold shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Let&apos;s Work Together</span>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1"
          >
            <Link
              href="#work-experiences"
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 lg:py-4 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 text-emerald-700 rounded-full font-semibold hover:border-emerald-400 hover:bg-emerald-50/50 transition-all duration-300"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Location & Role Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex gap-2 text-xs items-center justify-center flex-wrap"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-50/80 border border-gray-200/50 shadow-sm backdrop-blur-sm"
          >
            <MapPinIcon className="size-3.5 text-gray-500" />
            <span className="font-medium text-gray-600">
              Bandung, Indonesia
            </span>
          </motion.div>
        </motion.div>

        {/* Skills Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="w-full max-w-4xl overflow-hidden"
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
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm gap-2 flex items-center shadow-sm border border-gray-100/60 hover:border-emerald-200/80 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span className={cn(item.color || "text-gray-600")}>
                  <item.icon />
                </span>
                <span className="font-medium text-gray-600">{item.title}</span>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>

        {/* Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <SocialSection />
        </motion.div>
      </div>
    </motion.section>
  );
}
