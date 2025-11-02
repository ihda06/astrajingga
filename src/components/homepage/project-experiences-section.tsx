"use client";

import { projects } from "@/const/projects";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import ProjectCard from "./project-card";
import { useMediaQuery } from "usehooks-ts";

export default function ProjectExperiencesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobileQuery = useMediaQuery("(max-width: 768px)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  return (
    <div ref={ref} className="py-5 relative">
      <div
        className={cn(
          "tracking-[.2em] text-sm text-gray-500 uppercase text-center",
          mounted && isMobileQuery ? "top-14" : "top-6"
        )}
      >
        Project Experiences
      </div>
      <div
        className={cn(
          "mt-6 grid gap-3 items-center md:grid-cols-2 lg:grid-cols-3 grid-cols-1"
        )}
      >
        {projects.map((work, idx) => {
          return <ProjectCard key={work.title + idx} {...work}></ProjectCard>;
        })}
      </div>
    </div>
  );
}
