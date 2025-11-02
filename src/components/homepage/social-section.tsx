import { cn } from "@/utils/format";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Button } from "@/components/ui/button";

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
            className="p-3 flex lg:flex-row flex-col items-center gap-3 rounded-lg border"
          >
            <div
              className={cn(
                item.bg_color,
                "rounded-lg lg:w-fit lg:h-full w-full h-fit flex aspect-square items-center justify-center"
              )}
            >
              <item.icon className="text-white size-10" />
            </div>
            <div>
              <h5 className="font-semibold lg:block hidden">{item.title}</h5>
              <Button variant={"outline"} size={"sm"} asChild>
                <Link href={item.link}>Follow</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
