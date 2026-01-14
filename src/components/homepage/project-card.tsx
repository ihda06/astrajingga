import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { dayjs } from "@/utils/format";

export default function ProjectCard({ ...props }: Project) {
  // Blur data URL for placeholder
  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

  const displayImage =
    props.images && props.images.length > 0 ? props.images[0] : props.image;

  const limitedStacks = props.stacks?.slice(0, 2) || [];

  return (
    <>
      {/* Mobile vertical grid card */}
      <Link
        href={`/project/${props.id}`}
        className="md:hidden block h-full"
        aria-label={`View details for ${props.title}`}
      >
        <Card className="group bg-white h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/40">
          {/* Attractive image section */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-muted/30 to-muted/60">
            <Image
              src={displayImage}
              alt={props.title}
              fill
              loading="lazy"
              sizes="50vw"
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              quality={80}
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Status badge */}
            {props.status !== "active" && (
              <div className="absolute top-2 right-2">
                <Badge
                  variant="outline"
                  className={`text-[10px] backdrop-blur-sm ${
                    props.status === "dead"
                      ? "text-orange-600 bg-orange-500/20 border-orange-400/50"
                      : "text-gray-600 bg-gray-500/20 border-gray-400/50"
                  }`}
                >
                  {props.status === "dead" ? "Dead" : "Inactive"}
                </Badge>
              </div>
            )}

            {/* Active indicator dot */}
            {props.status === "active" && (
              <div className="absolute top-2 left-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 animate-pulse" />
              </div>
            )}
          </div>

          {/* Content section */}
          <div className="flex-1 flex flex-col p-3 gap-2">
            {/* Title */}
            <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {props.title}
            </h3>

            {/* Date and stacks */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] text-muted-foreground font-medium">
                {dayjs(props.date).format("MMM YYYY")}
              </span>
              {limitedStacks.length > 0 && (
                <>
                  <span className="text-muted-foreground/40">•</span>
                  {limitedStacks.slice(0, 1).map((stack) => (
                    <Badge
                      key={stack}
                      variant="secondary"
                      className="text-[9px] py-0 px-1.5 h-4 font-medium bg-primary/10 text-primary border-0"
                    >
                      {stack}
                    </Badge>
                  ))}
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
              {props.description}
            </p>

            {/* View details hint */}
            <div className="mt-auto pt-2 flex items-center gap-1 text-[10px] font-medium text-primary/70 group-hover:text-primary transition-colors">
              <span>View details</span>
              <FaArrowRight className="h-2.5 w-2.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Card>
      </Link>

      {/* Desktop full card (existing layout) */}
      <Card className="hidden md:flex group bg-white h-full flex-col overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative w-full h-48 overflow-hidden bg-muted/50">
          <Image
            src={displayImage}
            alt={props.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            quality={85}
          />
          {props.status !== "active" && (
            <div className="absolute top-2 right-2">
              <Badge
                variant="outline"
                className={`text-xs ${
                  props.status === "dead"
                    ? "text-orange-500 bg-orange-500/10 border-orange-500"
                    : "text-gray-500 bg-gray-500/10 border-gray-500"
                }`}
              >
                {props.status === "dead" ? "Dead" : "Inactive"}
              </Badge>
            </div>
          )}
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg leading-tight">
              {props.title}
            </CardTitle>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {dayjs(props.date).format("MMM YYYY")}
            </span>
          </div>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {props.description}
          </p>
          {props.stacks && props.stacks.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {props.stacks.map((stack) => (
                <Badge
                  key={stack}
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {stack}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-2 pt-4">
          <ButtonLink
            href={`/project/${props.id}`}
            variant="default"
            size="sm"
            className="w-full gap-2"
            aria-label={`View details for ${props.title}`}
          >
            <span>View Details</span>
            <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </ButtonLink>
          <div className="flex gap-2">
            <ButtonLink
              href={props.link?.liveLink || "#"}
              disabled={props.status !== "active"}
              variant="outline"
              size="sm"
              className="flex-1 gap-2"
              aria-label={`View ${props.title} project`}
            >
              <FaArrowUpRightFromSquare
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
              <span>View Project</span>
            </ButtonLink>
            <ButtonLink
              href={props.link?.githubLink || "#"}
              variant="outline"
              size="sm"
              className="flex-1 gap-2"
              aria-label={`View ${props.title} on GitHub`}
              disabled={
                !props.link?.githubLink || props.link?.githubLink === null
              }
            >
              <FaGithub className="h-3.5 w-3.5" aria-hidden="true" />
              <span>GitHub</span>
            </ButtonLink>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
