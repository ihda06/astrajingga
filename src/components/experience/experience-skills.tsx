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
import { Award } from "lucide-react";

interface ExperienceSkillsProps {
  skills: string[];
}

export default function ExperienceSkills({ skills }: ExperienceSkillsProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="border-emerald-100/60 bg-linear-to-br from-emerald-50/30 to-white shadow-sm hover:shadow-md transition-shadow h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-700">
            <Award className="size-5" />
            Skills Developed
          </CardTitle>
          <CardDescription>
            Key competencies gained during this role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-xs font-medium border-emerald-200 bg-emerald-50/70 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300 hover:scale-105 transition-all cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

