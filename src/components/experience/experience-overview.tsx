"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceOverviewProps {
  description: string;
}

export default function ExperienceOverview({
  description,
}: ExperienceOverviewProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="border-sky-100/60 shadow-sm hover:shadow-md transition-shadow bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-600">
            <Briefcase className="size-5" />
            Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-justify text-base text-gray-700 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

