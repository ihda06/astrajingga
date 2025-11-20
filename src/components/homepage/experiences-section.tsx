"use client";

import { experiences } from "@/const/projects";
import WorkCard from "@/components/homepage/work-card";
import { RefObject, useRef, useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

export default function ExperiencesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLDivElement>,
    offset: ["start start", "end end"],
  });

  const isMobileQuery = useMediaQuery("(max-width: 768px)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  return (
    <section ref={ref} className="py-5 relative" aria-label="Work Experiences">
      <h2
        className={cn(
          "tracking-[.2em] sticky text-sm text-gray-500 uppercase text-center",
          mounted && isMobileQuery ? "top-14" : "top-6"
        )}
      >
        Work Experiences
      </h2>
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
    </section>
  );
}
