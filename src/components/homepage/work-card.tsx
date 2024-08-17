"use client";

import { Work } from "@/types/projects";
import Image from "next/image";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import Link from "next/link";
import cn from "@/utils/format";

import { useRouter } from "next/navigation";
import { MotionValue, motion, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";

dayjs.extend(CustomParseFormat);

const duration = (startDate: string, endDate?: string) => {
  if (!endDate) {
    return dayjs().diff(dayjs(startDate, "DD/MM/YYYY"), "month");
  }
  const duration = dayjs(endDate, "DD/MM/YYYY").diff(
    dayjs(startDate, "DD/MM/YYYY"),
    "month"
  );

  return duration > 0 ? duration : 1;
};
export default function WorkCard({
  id,
  title,
  company,
  image,
  startDate,
  endDate,
  progress,
  targetScale,
  achievements,
  short_description,
  stacks,
}: Work & {
  index: number;
  targetScale: number;
  progress: MotionValue<number>;
}) {
  const router = useRouter();

  const scale = useTransform(progress, [0, 1], [1, targetScale]);

  return (
    <div
      className="sticky w-full "
      style={{ top: `calc(-24px + ${id * 70}px)` }}
    >
      <motion.div style={{ scale }} className="flex justify-center">
        <div className="space-y-3 relative backdrop-blur-sm bg-white/30 border shadow-inner p-6 w-[80%] rounded-xl">
          <div className="flex justify-between">
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
            <div className="text-end">
              <h1 className="text-sm">
                {dayjs(startDate, "DD/MM/YYYY").format("YYYY")}
              </h1>
              <h1 className="text-xs text-gray-500">
                {duration(startDate, endDate)}
                &nbsp;Months
              </h1>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-9">
            <div className="w-4/6 hidden lg:flex lg:flex-col gap-3 lg:justify-between">
              <div className=" space-y-3">
                <div className="text-xs text-justify text-ellipsis">
                  {short_description}
                </div>

                <dl className="space-y-1">
                  <dt className="text-xs font-bold">Achievement</dt>
                  <dd className="text-xs">
                    {achievements?.map((achievement) => (
                      <li key={achievement} className="list-decimal">
                        {achievement}
                      </li>
                    ))}
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

            <div className="space-y-3 lg:w-2/6 ">
              <div
                onClick={() => {
                  router.push(`/experience/${id}`);
                }}
                className="flex cursor-pointer w-full relative hover:scale-[1.02] bg-white hover:shadow-2xl duration-300 items-center justify-center rounded-lg border shadow-lg h-48"
              >
                <div className={cn("flex items-center")}>
                  <Image
                    src={image}
                    width={100}
                    height={100}
                    alt={title}
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
