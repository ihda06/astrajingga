"use client";

import { experiences } from "@/const/projects";
import WorkCard from "@/components/homepage/work-card";
import { useRef } from "react";
import { useScroll } from "framer-motion";

export default function ExperiencesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={ref} className="py-5 relative">
      <h4 className="tracking-[.2em] sticky top-6 text-sm text-gray-500 uppercase text-center">
        Experiences
      </h4>
      <div className="space-y-6 mt-6 flex flex-col items-center">
        {experiences.map((work, idx) => {
          const targetScale = 1 - (experiences.length - idx) * 0.05;
          return (
            <WorkCard
              key={work.title + idx}
              {...work}
              index={idx}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </div>
  );
}
