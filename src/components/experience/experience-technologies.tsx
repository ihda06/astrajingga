"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";
import { Stack } from "@/types/projects";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiVite,
  SiNuxtdotjs,
  SiAirtable,
  SiOracle,
  SiJest,
} from "react-icons/si";
import { ComponentType } from "react";

// Stack icon mapping
const stackIcons: Record<Stack, ComponentType<{ className?: string }>> = {
  [Stack.REACT]: FaReact,
  [Stack.NEXT_JS]: SiNextdotjs,
  [Stack.TAILWIND]: SiTailwindcss,
  [Stack.CSS]: FaCss3Alt,
  [Stack.VITE]: SiVite,
  [Stack.NUXT]: SiNuxtdotjs,
  [Stack.VUE]: SiVuedotjs,
  [Stack.AIRTABLE]: SiAirtable,
  [Stack.ORACLE]: SiOracle,
  [Stack.JEST]: SiJest,
};

// Stack color mapping
const stackColors: Record<Stack, string> = {
  [Stack.REACT]: "text-sky-400",
  [Stack.NEXT_JS]: "text-black fill-black dark:text-gray-100",
  [Stack.TAILWIND]: "text-sky-500",
  [Stack.CSS]: "text-blue-500",
  [Stack.VITE]: "text-purple-500",
  [Stack.NUXT]: "text-green-600",
  [Stack.VUE]: "text-green-500",
  [Stack.AIRTABLE]: "text-orange-500",
  [Stack.ORACLE]: "text-red-600",
  [Stack.JEST]: "text-red-700",
};

interface ExperienceTechnologiesProps {
  stacks: Stack[];
}

export default function ExperienceTechnologies({
  stacks,
}: ExperienceTechnologiesProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="border-sky-100/60 bg-linear-to-br from-sky-50/30 to-white shadow-sm hover:shadow-md transition-shadow h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sky-700">
            <Code className="size-5" />
            Technologies & Tools
          </CardTitle>
          <CardDescription>
            Stack and frameworks used in this role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {stacks.map((stack, i) => {
              const IconComponent = stackIcons[stack];
              const iconColor = stackColors[stack] || "text-gray-600";

              return (
                <Badge
                  key={i}
                  variant="outline"
                  className="text-xs font-medium border-sky-200 bg-sky-50/70 text-sky-700 hover:bg-sky-100 hover:border-sky-300 hover:scale-105 transition-all cursor-default flex items-center gap-1.5"
                >
                  {IconComponent && (
                    <IconComponent className={`size-3.5 ${iconColor}`} />
                  )}
                  {stack}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
