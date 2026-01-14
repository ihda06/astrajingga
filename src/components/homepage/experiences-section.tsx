"use client";

import { experiences } from "@/const/projects";
import WorkCard from "@/components/homepage/work-card";

export default function ExperiencesSection() {
  return (
    <section
      id="work-experiences"
      className="py-5 relative"
      aria-label="Work Experiences"
    >
      <div className="sticky top-24 md:top-14 flex flex-col gap-2 items-center justify-center z-0 bg-transparent pb-4">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2">
          Work Experiences
        </h2>
        <p className="text-muted-foreground text-sm lg:text-base">
          My professional journey and career milestones
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center">
        {experiences.map((work, idx) => {
          // Calculate initial scale: first card (idx=0) is behind (smallest)
          // Last card is at front (full size 1.0)
          // Cards scale up as they come forward
          const initialScale = 1 - (experiences.length - 1 - idx) * 0.05;
          return (
            <WorkCard
              key={work.title + idx}
              {...work}
              index={idx}
              targetScale={initialScale}
            />
          );
        })}
      </div>
    </section>
  );
}
