import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ExperiencesSection from "@/components/homepage/experiences-section";
import { SkillList } from "@/const/common";

import SocialSection from "@/components/homepage/social-section";
import { cn } from "@/utils/format";

export default function Home() {
  return (
    <div className="w-full">
      <div className="h-screen w-full text-center flex flex-col gap-6 items-center justify-center">
        <Image src="/logo.png" width={100} height={100} alt="logo" />
        <div className="bg-slate-100 rounded-full p-2 text-xs uppercase font-medium">
          <span className="animate-pulse bg-emerald-600 rounded-full size-3 inline-block mr-2"></span>
          Open to Work
        </div>
        <p className="tracking-widest text-gray-500">
          Hello there! I&apos;m Ihda Anwari
        </p>
        <h1 className={cn("lg:text-xl text-sm ")}>
          Started from Bootcamp{" "}
          <a
            href="https://goto-impact.org/generasi-gigih/"
            className="font-bold text-emerald-500 hover:text-lg lg:hover:text-2xl duration-300"
          >
            Generasi Gigih
          </a>
          &nbsp;by GoTo Foundation in Frontend Developer Track, I am Frontend
          Developer enthusiast with a Digital Business background at{" "}
          <a
            href="https://www.unpad.ac.id/"
            className="font-bold text-yellow-500 hover:text-lg lg:hover:text-2xl duration-300"
          >
            Padjadjaran University.
          </a>
          &nbsp;Passionate about merging technology with business objectives, I
          specialize in crafting frontend solutions that drive user engagement
          and align with strategic goals.
        </h1>
        <div className="flex gap-3 text-xs justify-center">
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
      </div>
      <ExperiencesSection />
    </div>
  );
}
