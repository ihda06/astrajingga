"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ExperienceResponsibilitiesProps {
  responsibilities: string[];
}

export default function ExperienceResponsibilities({
  responsibilities,
}: ExperienceResponsibilitiesProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="border-emerald-100/60 shadow-sm hover:shadow-md transition-shadow bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-600">
            <CheckCircle2 className="size-5" />
            Job Responsibilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {responsibilities.map((res, i) => (
              <li
                key={i}
                className="flex gap-3 text-base text-gray-700 leading-relaxed"
              >
                <div className="shrink-0 mt-1.5">
                  <div className="size-1.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-justify">{res}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

