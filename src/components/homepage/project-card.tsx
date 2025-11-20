import { cn } from "@/lib/utils";
import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ProjectCard({ ...props }: Project) {
  // Blur data URL for placeholder
  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

  return (
    <article className="p-6 h-full flex flex-col bg-white border rounded-xl hover:-translate-y-4 shadow-md hover:shadow-lg duration-300 ease-in-out transition-transform gap-6">
      <div className="text-center h-52 relative">
        <Image
          src={props.image}
          alt={props.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-contain rounded-lg"
          quality={85}
        />
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{props.title}</h3>
          <span className="text-sm text-gray-500">{props.startDate}</span>
        </div>
        <div className="flex gap-1.5">
          {!props.isActive && (
            <div className="p-1.5 rounded-lg bg-red-200 border border-red-800 text-xs">
              Inactive
            </div>
          )}
          {props.stacks?.map((stack) => {
            return (
              <div
                key={stack}
                className="p-1.5 rounded-lg bg-neutral-200 border border-slate-800 text-xs"
              >
                {stack}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-xs">{props.description}</p>
      </div>
      <div className="flex gap-2 text-sm">
        <button
          type="button"
          onClick={() => window.open(props.link?.liveLink || "#")}
          disabled={!props.isActive}
          aria-label={`View ${props.title} project`}
          className={cn(
            "p-3 flex gap-2 items-center bg-slate-100 rounded-full hover:bg-slate-200 duration-300",
            props.isActive
              ? ""
              : "cursor-not-allowed bg-slate-50 hover:bg-slate-50"
          )}
        >
          <FaArrowUpRightFromSquare
            className={cn(
              "text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out",
              props.isActive ? "" : "text-gray-400"
            )}
            aria-hidden="true"
          />
          <span className={cn(props.isActive ? "" : "text-gray-400")}>
            View Project
          </span>
        </button>

        <Link
          href={props.link?.githubLink || "#"}
          aria-label={`View ${props.title} on GitHub`}
          className="p-3 flex gap-2 items-center bg-slate-100 rounded-full hover:bg-slate-200 duration-300"
        >
          <FaGithub
            className="text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out"
            aria-hidden="true"
          />
          <span>GitHub</span>
        </Link>
      </div>
    </article>
  );
}
