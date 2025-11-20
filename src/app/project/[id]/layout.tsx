import React from "react";
import { Metadata } from "next";
import { projects } from "@/const/projects";
import { generateMetadata as createMetadata } from "@/lib/metadata";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    return createMetadata({
      title: "Project Not Found",
      description: "The project you're looking for doesn't exist.",
    });
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://ihda-anwari.vercel.app";
  const projectUrl = `${baseUrl}/project/${params.id}`;
  const imageUrl = `${baseUrl}${project.image}`;

  return createMetadata({
    title: project.title,
    description:
      project.description || `${project.title} - A project by Ihda Anwari`,
    image: imageUrl,
    url: projectUrl,
    type: "website",
    tags: project.stacks?.map((s) => s.toString()) || [],
  });
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
