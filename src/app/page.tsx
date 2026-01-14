import ExperiencesSection from "@/components/homepage/experiences-section";
import ProjectExperiencesSection from "@/components/homepage/project-experiences-section";
import HeroSection from "@/components/homepage/hero-section";
import HomeLayout from "@/components/layouts/HomeLayout";
import { generateMetadata, generateStructuredData } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Home",
  description:
    "Frontend Engineer with 3+ years of experience specializing in React, Next.js, and modern web technologies. Building high-performance web interfaces with AI integration.",
  image: "/logo.png",
  type: "website",
});

export default function Home() {
  const structuredData = generateStructuredData("Person", {
    name: "Ihda Anwari",
    jobTitle: "Frontend Engineer",
    description:
      "Frontend Engineer with 3+ years of experience specializing in React, Next.js, and modern web technologies.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeLayout>
        <HeroSection />
        <ProjectExperiencesSection />
        <ExperiencesSection />
      </HomeLayout>
    </>
  );
}
