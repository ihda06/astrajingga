"use client";

import { experiences, projects } from "@/const/projects";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import {
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function DetailProjectsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const router = useRouter();
  const info = projects.find((exp) => exp.id === Number(id));
  if (!info) {
    return <div>Not Found</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      className="absolute top-0 left-0 flex min-h-screen w-full gap-6 flex-col justify-between py-36 px-24 lg:px-60 overflow-auto"
    >
      <div
        onClick={() => {
          router.back();
        }}
        className="fixed top-4 left-4 p-2 z-10 rounded-full cursor-pointer hover:bg-white duration-300"
      >
        <ArrowLeftIcon className="size-6" />
      </div>
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">{info.title}</h1>
            <small className="text-gray-500">
              {info.startDate} - {info.endDate}
            </small>
          </div>
          <div className="flex gap-3">
            <Link
              href={info.link?.liveLink || ""}
              target="_blank"
              className="hover:bg-gray-200 rounded-full duration-300 p-2"
            >
              <ArrowTopRightOnSquareIcon className="size-6 " />
            </Link>
            <Link
              href={info.link?.liveLink || ""}
              target="_blank"
              className="hover:bg-gray-200 rounded-full duration-300 p-2"
            >
              <GitHubLogoIcon className="size-6 " />
            </Link>
          </div>
        </div>
        <p>{info.description}</p>
        <div className="pt-3 grid lg:grid-cols-3 grid-cols-1 gap-2">
          <div className="">
            <h4 className="font-bold">Timeline</h4>
            <span className="text-xs">
              {info.startDate} - {info.endDate || "Present"}
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
