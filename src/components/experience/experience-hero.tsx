"use client";

import { Work } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Briefcase,
  Building2,
  ExternalLink,
} from "lucide-react";
import dayjs from "dayjs";

interface ExperienceHeroProps {
  experience: Work;
  durationMonths: number;
}

export default function ExperienceHero({
  experience,
  durationMonths,
}: ExperienceHeroProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Card className="relative backdrop-blur-lg bg-linear-to-r from-sky-50 via-white to-amber-50 border-emerald-100/60 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-100/20 via-transparent to-sky-100/20 pointer-events-none" />
        <CardHeader className="relative">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            {/* Company Logo */}
            <div className="shrink-0">
              <div className="size-32 lg:size-40 p-4 lg:p-6 rounded-xl bg-white/90 backdrop-blur-sm border-2 border-emerald-200 shadow-lg flex items-center justify-center hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group">
                <Image
                  src={experience.image}
                  alt={`${experience.company?.name || ""} company logo`}
                  width={160}
                  height={160}
                  sizes="160px"
                  priority
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Title and Info */}
            <div className="flex-1 space-y-3">
              <div>
                <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-2">
                  {experience.title}
                </CardTitle>
                {experience.position && (
                  <CardDescription className="text-lg text-emerald-600 font-semibold">
                    {experience.position}
                  </CardDescription>
                )}
                {experience.company?.name && (
                  <div className="flex items-center gap-2 mt-2">
                    <Building2 className="size-4 text-gray-500" />
                    <span className="text-base text-gray-600 font-medium">
                      {experience.company.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm">
                {experience.location && (
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <MapPin className="size-4 text-emerald-500" />
                    <span>{experience.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Calendar className="size-4 text-sky-500" />
                  <span>
                    {dayjs(experience.startDate).format("MMM YYYY")} -{" "}
                    {experience.endDate && dayjs(experience.endDate).isValid()
                      ? dayjs(experience.endDate).format("MMM YYYY")
                      : "Present"}
                  </span>
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-emerald-100 text-emerald-700 border-emerald-200"
                  >
                    {durationMonths} months
                  </Badge>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Briefcase className="size-4 text-amber-500" />
                  <span>{experience.type}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            {experience.company?.link && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"
              >
                <Link
                  href={experience.company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${experience.company.name} website`}
                >
                  <ExternalLink className="size-4 mr-2" />
                  Visit Company
                </Link>
              </Button>
            )}
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
