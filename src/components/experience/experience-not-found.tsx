"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ExperienceNotFound() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center min-h-screen"
    >
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Not Found</CardTitle>
          <CardDescription>
            The experience you&apos;re looking for doesn&apos;t exist.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button onClick={() => router.back()} variant="outline">
            Go Back
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
