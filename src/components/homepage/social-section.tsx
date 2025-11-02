"use client";
import { cn } from "@/utils/format";

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import React, { RefObject, useRef } from "react";
import { useHover } from "usehooks-ts";

export default function SocialSection() {
  const SocialMedia = [
    {
      title: "Github",
      link: "https://github.com/ihda06",
      icon: AiOutlineGithub,
      bg_color: "bg-black",
    },

    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ihda06/",
      icon: AiOutlineLinkedin,
      bg_color: "bg-blue-800",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/ihda.anwari/",
      icon: AiOutlineInstagram,
      bg_color: "bg-gradient-to-br from-pink-600 to-violet-500",
    },
  ];

  return (
    <div className="space-y-3">
      <h3 className="tracking-widest text-gray-500">Contact</h3>

      <div className="grid grid-cols-3 text-start gap-3">
        {SocialMedia.map((item) => (
          <SocialCard
            key={item.title}
            title={item.title}
            link={item.link}
            bg_color={item.bg_color}
          >
            <item.icon className="text-white lg:size-10 size-5" />
          </SocialCard>
        ))}
      </div>
    </div>
  );
}

const SocialCard = ({
  title,
  link,
  children,
  bg_color,
}: {
  title: string;
  link: string;
  children: React.ReactNode;
  bg_color: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(cardRef as RefObject<HTMLElement>);
  return (
    <div
      ref={cardRef}
      onClick={() => window.open(link, "_blank")}
      className={cn(
        bg_color,
        "rounded-lg relative cursor-pointer lg:p-2 p-1 flex aspect-square items-center justify-center"
      )}
    >
      {children}
      <div
        className={cn(
          "lg:text-sm hidden lg:block animate-bounce absolute -bottom-7 left-0 right-0 text-center transition-all duration-300 ease-in-out",
          isHover
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        {title}
      </div>
    </div>
  );
};
