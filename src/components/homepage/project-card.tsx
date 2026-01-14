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
      {/* Mobile compact horizontal card */}
      <Link
        href={`/project/${props.id}`}
        className="md:hidden block"
        aria-label={`View details for ${props.title}`}
      >
        <Card className="group bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-md hover:bg-white transition-all duration-200 border-border/50">
          <div className="flex items-center gap-3 p-3">
            {/* Compact thumbnail */}
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted/50">
              <Image
                src={displayImage}
                alt={props.title}
                fill
                loading="lazy"
                sizes="80px"
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="object-cover transition-transform duration-200 group-hover:scale-105"
                quality={75}
              />
              {props.status !== "active" && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-[10px] font-medium text-white uppercase tracking-wide">
                    {props.status === "dead" ? "Dead" : "Inactive"}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 py-0.5">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-sm leading-tight line-clamp-1">
                  {props.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[11px] text-muted-foreground">
                  {dayjs(props.date).format("MMM YYYY")}
                </span>
                {limitedStacks.length > 0 && (
                  <>
                    <span className="text-muted-foreground/50">•</span>
                    {limitedStacks.map((stack) => (
                      <Badge
                        key={stack}
                        variant="secondary"
                        className="text-[10px] py-0 px-1.5 h-4 font-normal"
                      >
                        {stack}
                      </Badge>
                    ))}
                  </>
                )}
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {props.description}
              </p>
            </div>

            {/* Arrow indicator */}
            <FaArrowRight className="h-3 w-3 text-muted-foreground/50 flex-shrink-0 group-hover:text-foreground transition-colors" />
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
