import React from "react";
import { Metadata } from "next";
import { experiences } from "@/const/projects";
import { generateMetadata as createMetadata } from "@/lib/metadata";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const experience = experiences.find((exp) => exp.id === Number(params.id));

  if (!experience) {
    return createMetadata({
      title: "Experience Not Found",
      description: "The experience you're looking for doesn't exist.",
    });
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://ihda-anwari.vercel.app";
  const experienceUrl = `${baseUrl}/experience/${params.id}`;
  const imageUrl = `${baseUrl}${experience.image}`;

  const description =
    experience.short_description ||
    experience.description ||
    `${experience.title} at ${
      experience.company?.name || ""
    } - Work experience by Ihda Anwari`;

  return createMetadata({
    title: `${experience.title}${
      experience.company?.name ? ` at ${experience.company.name}` : ""
    }`,
    description,
    image: imageUrl,
    url: experienceUrl,
    type: "website",
    tags: experience.stacks?.map((s) => s.toString()) || [],
  });
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4 lg:px-24 space-y-6">{children}</div>;
}
