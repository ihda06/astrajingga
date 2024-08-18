"use client";

import { experiences } from "@/const/projects";
import { motion } from "framer-motion";

import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layouts/header";
import dayjs from "dayjs";

export default function DetailExperiencePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const info = experiences.find((exp) => exp.id === Number(id));
  if (!info) {
    return <div>Not Found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      className="flex w-full flex-col justify-between p-12"
    >
      <Header />

      <div className="z-30 flex flex-col gap-6 divide-y  mt-6">
        <div className="block gap-3 lg:flex justify-between items-end">
          <div className="flex lg:block justify-center">
            <div className="size-36 p-4 rounded-lg bg-slate-100 border flex items-center justify-center">
              <Image
                src={info.image}
                alt="company logo"
                width={100}
                height={100}
              ></Image>
            </div>
          </div>

          <div className="flex-1 justify-between flex items-center">
            <div>
              <h1 className="text-3xl font-bold">{info.title}</h1>
              <p>{info.position}</p>
            </div>
            <div>
              <Link
                href={info.company?.link || ""}
                className="p-2 rounded-full hover:bg-gray-200 duration-300 block"
              >
                <BuildingOffice2Icon className="size-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-3 space-y-3">
          <h4 className="tracking-[.2em] text-sm text-gray-500 uppercase">
            Overview
          </h4>
          <p className="text-justify text-sm">{info.description}</p>
        </div>
        <div className="pt-3 space-y-3">
          <h4 className="tracking-[.2em] text-sm text-gray-500 uppercase">
            Job Responsibilities
          </h4>
          <ul className="list-decimal text-sm ml-5">
            {info.responsibilities?.map((res, i) => (
              <li key={i} className="text-justify">
                {res}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-3 grid lg:grid-cols-3 grid-cols-1 gap-2">
          <div>
            <h4 className="font-bold">Timeline</h4>
            <span className="text-xs">
              {dayjs(info.startDate, "DD/MM/YYYY").format("MMM YYYY")} -{" "}
              {dayjs(info.endDate, "DD/MM/YYYY").isValid() && info.endDate
                ? dayjs(info.endDate, "DD/MM/YYYY").format("MMM YYYY")
                : "Present"}
            </span>
          </div>
          <div>
            <h4 className="font-bold">Skills</h4>
            <ul className="list-decimal text-sm ml-5">
              {info.skills?.map((res, i) => (
                <li key={i} className="text-justify">
                  {res}
                </li>
              ))}
            </ul>
          </div>
          <div>
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
        <div className="pt-3 flex flex-col gap-3">
          <h4 className="tracking-[.2em] text-sm text-gray-500 uppercase">
            Documentation
          </h4>
          {info.images?.map((img, i) => (
            <div
              className="w-full lg:h-[550px] md:h-[250px] h-[150px] relative"
              key={i}
            >
              <Image
                key={i}
                src={img}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                alt="documentation"
                fill
                className="object-contain"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
