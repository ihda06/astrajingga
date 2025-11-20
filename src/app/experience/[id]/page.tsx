"use client";
import { use, useEffect } from "react";

import { experiences } from "@/const/projects";
import { motion } from "motion/react";
import Header from "@/components/layouts/header";
import dayjs from "dayjs";

import ExperienceHero from "@/components/experience/experience-hero";
import ExperienceOverview from "@/components/experience/experience-overview";
import ExperienceResponsibilities from "@/components/experience/experience-responsibilities";
import ExperienceSkills from "@/components/experience/experience-skills";
import ExperienceTechnologies from "@/components/experience/experience-technologies";
import ExperienceDocumentation from "@/components/experience/experience-documentation";
import ExperienceNotFound from "@/components/experience/experience-not-found";

export default function DetailExperiencePage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = use(props.params);
  const { id } = params;

  const info = experiences.find((exp) => exp.id === Number(id));

  // Generate structured data for SEO using OrganizationRole schema
  useEffect(() => {
    if (info) {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL || "https://ihda-anwari.vercel.app";

      // Create OrganizationRole structured data (more appropriate than JobPosting)
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "OrganizationRole",
        roleName: info.title,
        description: info.description || info.short_description || "",
        startDate: info.startDate,
        endDate: info.endDate || undefined,
        identifier: {
          "@type": "PropertyValue",
          name: "Ihda Anwari Portfolio",
          value: `experience-${info.id}`,
        },
        numberedPosition: info.id,
        roleCategory: info.type,
        skills: info.skills?.join(", ") || "",
        workLocation: info.location
          ? {
              "@type": "Place",
              name: info.location,
            }
          : undefined,
        organization: info.company?.name
          ? {
              "@type": "Organization",
              name: info.company.name,
              url: info.company.link || undefined,
            }
          : undefined,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${baseUrl}/experience/${info.id}`,
        },
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        const existingScript = document.querySelector(
          'script[type="application/ld+json"]'
        );
        if (
          existingScript &&
          existingScript.textContent?.includes(`experience-${info.id}`)
        ) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [info]);

  if (!info) {
    return <ExperienceNotFound />;
  }

  const durationMonths =
    info.endDate && dayjs(info.endDate).isValid()
      ? dayjs(info.endDate).diff(dayjs(info.startDate), "month")
      : dayjs().diff(dayjs(info.startDate), "month");

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
        <Header
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Experience", href: "/#experiences" },
            {
              name: `${info.title} at ${info.company?.name}`,
              href: `/experience/${info.id}`,
            },
          ]}
        />

        <div className="z-30 flex flex-col gap-6 mt-6">
          <ExperienceHero experience={info} durationMonths={durationMonths} />

          <ExperienceOverview description={info.description} />

          {info.responsibilities && info.responsibilities.length > 0 && (
            <ExperienceResponsibilities
              responsibilities={info.responsibilities}
            />
          )}

          {(info.skills || info.stacks) && (
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              {info.skills && info.skills.length > 0 && (
                <ExperienceSkills skills={info.skills} />
              )}

              {info.stacks && info.stacks.length > 0 && (
                <ExperienceTechnologies stacks={info.stacks} />
              )}
            </div>
          )}

          {info.images && info.images.length > 0 && (
            <ExperienceDocumentation
              images={info.images}
              experienceTitle={info.title}
              companyName={info.company?.name}
            />
          )}
        </div>
      </motion.div>
    </article>
  );
}
