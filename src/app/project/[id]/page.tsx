"use client";
import { use } from "react";

import { projects } from "@/const/projects";
import { motion } from "motion/react";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { generateStructuredData } from "@/lib/metadata";
import { useEffect } from "react";

export default function DetailProjectsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = use(props.params);
  const { id } = params;
  const router = useRouter();
  const info = projects.find((exp) => exp.id === Number(id));

  useEffect(() => {
    if (info) {
      const structuredData = generateStructuredData("CreativeWork", {
        name: info.title,
        description:
          info.description || `${info.title} - A project by Ihda Anwari`,
        image: `${
          process.env.NEXT_PUBLIC_BASE_URL || "https://ihda-anwari.vercel.app"
        }${info.image}`,
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
    return <div>Not Found</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        gap: "1.5rem",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "9rem",
        paddingBottom: "9rem",
        paddingLeft: "6rem",
        paddingRight: "6rem",
        overflow: "auto",
      }}
    >
      <button
        onClick={() => {
          router.back();
        }}
        className="fixed top-4 left-4 p-2 z-10 rounded-full cursor-pointer hover:bg-white duration-300"
        aria-label="Go back to previous page"
      >
        <ArrowLeftIcon className="size-6" />
      </button>
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">{info.title}</h1>
            <small className="text-gray-500">
              {new Date(info.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </small>
          </div>
          <div className="flex gap-3">
            <Link
              href={info.link?.liveLink || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-200 rounded-full duration-300 p-2"
              aria-label={`View ${info.title} live project`}
            >
              <ArrowTopRightOnSquareIcon className="size-6 " />
            </Link>
            <Link
              href={info.link?.githubLink || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-200 rounded-full duration-300 p-2"
              aria-label={`View ${info.title} on GitHub`}
            >
              <GitHubLogoIcon className="size-6 " />
            </Link>
          </div>
        </div>
        <p>{info.description}</p>
        <div className="pt-3 grid lg:grid-cols-3 grid-cols-1 gap-2">
          <div className="">
            <h4 className="font-bold">Released</h4>
            <span className="text-xs">
              {new Date(info.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </span>
          </div>
          <div className="">
            <h4 className="font-bold">Skills</h4>
            <ul className="list-decimal text-sm ml-5">
              {info.skills?.map((res, i) => (
                <li key={i} className="text-justify">
                  {res}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h4 className="font-bold">Tools</h4>
            <ul className="list-decimal text-sm ml-5">
              {info.stacks?.map((res, i) => (
                <li key={i} className="text-justify">
                  {res}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* todo make slide show */}
    </motion.div>
  );
}
