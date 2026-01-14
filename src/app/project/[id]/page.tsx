"use client";
import { use, useEffect } from "react";

import { projects } from "@/const/projects";
import { motion } from "motion/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { generateStructuredData } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Lightbulb } from "lucide-react";
import { dayjs } from "@/utils/format";
import ProjectStatusBadge from "@/components/project/project-status-badge";
import ProjectGallery from "@/components/project/project-gallery";
import Header from "@/components/layouts/header";
import Show from "@/components/utils/Show";
import { useMediaQuery } from "usehooks-ts";

export default function DetailProjectsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = use(props.params);
  const { id } = params;
  const router = useRouter();
  const info = projects.find((exp) => exp.id === Number(id));
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (info) {
      const mainImage =
        info.images && info.images.length > 0 ? info.images[0] : info.image;
      const structuredData = generateStructuredData("CreativeWork", {
        name: info.title,
        description:
          info.description || `${info.title} - A project by Ihda Anwari`,
        image: `${
          process.env.NEXT_PUBLIC_BASE_URL || "https://ihda-anwari.vercel.app"
        }${mainImage}`,
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [info]);

  if (!info) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button onClick={() => router.back()} variant="outline">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "12px 6px 12px 12px",
        }}
      >
        <Show when={!isMobile}>
          <Header
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Project", href: "/#projects" },
              { name: info.title, href: `/project/${info.id}` },
            ]}
          />
        </Show>

        <div className="z-30 flex flex-col gap-6 mt-6">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="relative overflow-hidden border-emerald-100/60 shadow-lg">
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src={
                    info.images && info.images.length > 0
                      ? info.images[0]
                      : info.image
                  }
                  alt={info.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <ProjectStatusBadge status={info.status} />
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {info.title}
                      </h1>
                      <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="size-4" />
                          <span>
                            Released: {dayjs(info.date).format("MMMM YYYY")}
                          </span>
                        </div>
                        {info.lastUpdated && (
                          <div className="flex items-center gap-1.5">
                            <Calendar className="size-4" />
                            <span>
                              Updated:{" "}
                              {dayjs(info.lastUpdated).format("MMMM YYYY")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {info.link?.liveLink && (
                        <Button
                          asChild
                          variant="secondary"
                          size="lg"
                          disabled={info.status !== "active"}
                          className="bg-white/90 hover:bg-white text-gray-900"
                        >
                          <Link
                            href={info.link.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${info.title} live project`}
                          >
                            <ExternalLink className="size-4 mr-2" />
                            View Project
                          </Link>
                        </Button>
                      )}
                      {info.link?.githubLink && (
                        <Button
                          asChild
                          variant="secondary"
                          size="lg"
                          className="bg-white/90 hover:bg-white text-gray-900"
                        >
                          <Link
                            href={info.link.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${info.title} on GitHub`}
                          >
                            <GitHubLogoIcon className="size-4 mr-2" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-amber-100/60 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-emerald-600">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Takeaways Section */}
          {info.keyTakeaways && info.keyTakeaways.length > 0 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <Card className="border-amber-100/60 shadow-sm bg-linear-to-br from-amber-50/50 to-yellow-50/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="size-5 text-amber-600" />
                    <CardTitle className="text-amber-700">
                      Key Takeaways
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Important lessons and insights from this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {info.keyTakeaways.map((takeaway, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="shrink-0 mt-1.5 size-2 rounded-full bg-amber-500" />
                        <span className="flex-1">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Skills & Technologies */}
          {(info.skills || info.stacks) && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                {info.skills && info.skills.length > 0 && (
                  <Card className="border-emerald-100/60 shadow-sm bg-white">
                    <CardHeader>
                      <CardTitle className="text-emerald-600">Skills</CardTitle>
                      <CardDescription>
                        Skills developed and utilized in this project
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {info.skills.map((skill, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <span className="size-1.5 rounded-full bg-emerald-500" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {info.stacks && info.stacks.length > 0 && (
                  <Card className="border-emerald-100/60 shadow-sm bg-white">
                    <CardHeader>
                      <CardTitle className="text-emerald-600">
                        Technologies
                      </CardTitle>
                      <CardDescription>
                        Technologies and tools used in this project
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {info.stacks.map((stack) => (
                          <Badge
                            key={stack}
                            variant="secondary"
                            className="text-sm font-normal bg-emerald-50 text-emerald-700 border-emerald-200"
                          >
                            {stack}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </motion.div>
          )}

          {/* Image Gallery */}
          {info.images && info.images.length > 0 && (
            <ProjectGallery images={info.images} projectTitle={info.title} />
          )}
        </div>
      </motion.div>
    </article>
  );
}
