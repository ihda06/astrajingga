import { cn } from "@/utils/format";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

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
          <div
            key={item.title}
            className="p-3 lg:w-[200px] flex flex-col justify-between gap-3 rounded-lg border"
          >
            <div className="space-y-1 ">
              <div className="flex">
                <div className={cn(item.bg_color, "p-2 rounded-lg")}>
                  <item.icon className="text-white size-6" />
                </div>
              </div>
              <h5 className="font-semibold">{item.title}</h5>
            </div>
            <Link
              href={item.link}
              className="py-2 px-4 lg:text-sm text-xs rounded-full border shadow self-baseline"
            >
              Follow
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
