import { FaCss3Alt, FaHtml5, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { title } from "process";
export const SkillList = [
  {
    title: "ReactJS",
    icon: FaReact,
    color: "text-sky-400",
    isShow: true,
  },
  {
    title: "VueJS",
    icon: SiVuedotjs,
    color: "text-green-500",
    isShow: true,
  },
  {
    title: "Laravel",
    icon: FaLaravel,
    color: "text-rose-500",
    isShow: true,
  },
  {
    title: "PHP",
    icon: FaPhp,
    color: "text-purple-700",
    isShow: true,
  },
  {
    title: "HTML",
    icon: FaHtml5,
    color: "text-orange-600",
    isShow: true,
  },
  {
    title: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-500",
    isShow: true,
  },
  {
    title: "Git",
    icon: AiOutlineGithub,
    color: "",
    isShow: true,
  },
  {
    title: "NextJS",
    icon: SiNextdotjs,
    color: "",
    isShow: true,
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
    color: "text-sky-400",
    isShow: true,
  },
  {
    title: "Bootstrap",
    icon: SiBootstrap,
    color: "text-purple-500",
    isShow: true,
  },
  {
    title: "Javascript",
    icon: SiJavascript,
    color: "text-yellow-300",
    isShow: true,
  },
];

export const SocialMedia = [
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
