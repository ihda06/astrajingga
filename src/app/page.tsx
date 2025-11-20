import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ExperiencesSection from "@/components/homepage/experiences-section";
import { SkillList } from "@/const/common";

import SocialSection from "@/components/homepage/social-section";
import { cn } from "@/utils/format";
import { Metadata } from "next";
import ProjectExperiencesSection from "@/components/homepage/project-experiences-section";
import Link from "next/link";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import HomeLayout from "@/components/layouts/HomeLayout";
import { generateMetadata, generateStructuredData } from "@/lib/metadata";

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
        <section
          className="h-screen w-full text-center flex flex-col gap-10 items-center justify-center"
          aria-label="Introduction"
        >
          <div className="flex lg:flex-row flex-col w-full justify-between">
            <div className="flex gap-3 text-xs items-center justify-center">
              <div className="flex items-center gap-1">
                <MapPinIcon className="size-4" />
                <span>Bandung</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>Software Engineer</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>Bachelor of Economics</span>
              </div>
            </div>
            <div className="bg-slate-100 lg:flex hidden rounded-full p-2 mr-9 text-xs uppercase font-medium items-center justify-center gap-2">
              <span className="animate-pulse bg-emerald-600 rounded-full size-3 inline-block"></span>
              Open to Work
            </div>
          </div>
          <div className="grid lg:grid-cols-[2fr_1fr] grid-cols-1 gap-2">
            <div className="text-center lg:text-start flex flex-col lg:justify-center lg:items-start justify-start items-center gap-4">
              <h1 className="tracking-widest font-extrabold lg:text-4xl text-2xl">
                Hello there! I&apos;m Ihda Anwari
              </h1>
              <TypingText
                text={[
                  "3-Year Frontend Engineer",
                  "React & Next.js Expert",
                  "Building High-Performance Web Interfaces with AI Integration",
                ]}
              />
              <p className={cn(" text-sm text-gray-500")}>
                Started from Bootcamp{" "}
                <Link
                  href="https://goto-impact.org/generasi-gigih/"
                  className="font-bold text-emerald-500 hover:text-lg lg:hover:text-2xl duration-300"
                >
                  Generasi Gigih
                </Link>
                &nbsp;by GoTo Foundation in Frontend Developer Track, I am
                Frontend Developer enthusiast with a Digital Business background
                at{" "}
                <Link
                  href="https://www.unpad.ac.id/"
                  className="font-bold text-yellow-500 hover:text-lg lg:hover:text-2xl duration-300"
                >
                  Padjadjaran University.
                </Link>
                &nbsp;Passionate about merging technology with business
                objectives, I specialize in crafting frontend solutions that
                drive user engagement and align with strategic goals.
              </p>
            </div>
            <div className="hidden lg:flex flex-col items-end justify-center gap-4 ">
              <Image
                src="/logo.png"
                width={200}
                height={200}
                alt="Ihda Anwari - Frontend Engineer"
                priority
                sizes="200px"
              />
            </div>
          </div>

          <div className="w-[90%] overflow-hidden">
            <Marquee
              direction="left"
              speed={25}
              className="[&_.rfm-child]:mx-1 py-1 "
              autoFill
            >
              {SkillList.map((item, idx) => (
                <div
                  className="px-4 py-2 rounded-full bg-white text-lg gap-2 flex items-center shadow-lg"
                  key={idx}
                >
                  <span className={item.color}>
                    <item.icon />
                  </span>
                  <span className="font-semibold text-neutral-500">
                    {item.title}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>

          <SocialSection />
        </section>
        <ExperiencesSection />
        <ProjectExperiencesSection />
      </HomeLayout>
    </>
  );
}
