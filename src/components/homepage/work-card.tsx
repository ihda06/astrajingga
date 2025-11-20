"use client";

import { Work } from "@/types/projects";
import Image from "next/image";

import Link from "next/link";

import { motion, useTransform, useScroll } from "motion/react";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/navigation";

import { cn, dayjs } from "@/utils/format";
import { useRef, RefObject } from "react";

const duration = (startDate: string, endDate?: string) => {
  if (!endDate) {
    return dayjs().diff(dayjs(startDate), "month");
  }
  const duration = dayjs(endDate).diff(dayjs(startDate), "month");

  return duration > 0 ? duration : 1;
};
export default function WorkCard({
  id,
  title,
  company,
  image,
  startDate,
  endDate,
  targetScale,
  achievements,
  short_description,
  stacks,
  index,
}: Work & {
  index: number;
  targetScale: number;
}) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  // Each card tracks its own scroll progress
  const { scrollYProgress } = useScroll({
    target: cardRef as RefObject<HTMLDivElement>,
    offset: ["start end", "end start"],
  });

  // Scale from initial size to full size (1) as card comes forward
  // Cards behind start smaller and scale up as they move forward
  const scale = useTransform(scrollYProgress, [0, 1], [targetScale, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <div
      ref={cardRef}
      className="sticky w-full  lg:px-24 px-4"
      style={{
        top: `${index * 20 + 180}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          scale,
          y,
        }}
      >
        <div className="space-y-3 relative backdrop-blur-lg bg-linear-to-r from-sky-50/40 via-emerald-50/40 to-amber-50/40 border shadow-inner p-6 w-full rounded-xl">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <div
                className={cn(
                  "sm:hidden bg-white rounded-lg shadow-md p-3 flex justify-center items-center"
                )}
              >
                <Image
                  src={image}
                  width={20}
                  height={20}
                  alt={`${company?.name || ""} logo`}
                  loading="lazy"
                  sizes="20px"
                  style={{
                    width: "20px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="-space-y-1">
                <h1 className="text-base font-bold">{title}</h1>
                {company?.link ? (
                  <Link
                    href={company?.link}
                    className="text-base block font-bold text-gray-500"
                  >
                    {company?.name}
                  </Link>
                ) : (
                  <span className="text-base block font-bold text-gray-500">
                    {company?.name}
                  </span>
                )}
              </div>
            </div>
            <div className="text-end">
              <h1 className="text-sm">{dayjs(startDate).format("YYYY")}</h1>
              <h1 className="text-xs text-gray-500">
                {duration(startDate, endDate)}
                &nbsp;Months
              </h1>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-9">
            <div className="lg:w-4/6 w-full flex flex-col justify-between gap-3 ">
              <div className=" space-y-3">
                <div className="text-xs text-justify text-ellipsis">
                  {short_description}
                </div>

                <dl className="space-y-1">
                  <dt className="text-xs font-bold">Achievement</dt>
                  <dd className="text-xs">
                    <ul className="list-decimal">
                      {achievements?.map((achievement) => (
                        <li key={achievement} className="ml-4">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className="">
                <Link
                  href={`/experience/${id}`}
                  className="text-sm px-3 py-1 border hover:bg-slate-50 duration-300 bg-white lg:rounded-full lg:inline text-center rounded-lg w-full shadow"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="space-y-3 lg:inline hidden lg:w-2/6 ">
              <div
                onClick={() => {
                  router.push(`/experience/${id}`);
                }}
                className="flex cursor-pointer w-full relative hover:scale-[1.02] bg-white hover:shadow-2xl duration-300 items-center justify-center rounded-lg border shadow-lg h-48"
              >
                <div className={cn("flex items-center")}>
                  <Image
                    src={image}
                    width={150}
                    height={150}
                    alt={`${company?.name || ""} logo`}
                    loading="lazy"
                    sizes="(max-width: 768px) 100px, 150px"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
              <Marquee
                direction="left"
                speed={25}
                className="[&_.rfm-child]:mx-1 py-1 w-full"
                autoFill
              >
                {stacks.map((stack) => (
                  <div
                    key={stack}
                    className="text-sm px-3 py-1 bg-white lg:rounded-full lg:inline block text-center rounded-lg w-full shadow"
                  >
                    {stack}
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
