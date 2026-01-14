"use client";

import { projects } from "@/const/projects";

import { useRef } from "react";

import ProjectCard from "./project-card";

export default function ProjectExperiencesSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="py-12 lg:py-16 lg:px-24 px-4 relative"
      aria-label="Project Experiences"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            Project Experiences
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base">
            A collection of projects showcasing my development skills and
            experience
          </p>
        </div>
        <div className="grid gap-3 md:gap-6 lg:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((work, idx) => {
            return <ProjectCard key={work.title + idx} {...work} />;
          })}
        </div>
      </div>
    </section>
  );
}
