import { Project } from "@/types/projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { dayjs } from "@/utils/format";

export default function ProjectCard({ ...props }: Project) {
  // Blur data URL for placeholder
  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

  return (
    <Card className="group bg-white h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative w-full h-48 overflow-hidden bg-muted/50">
        <Image
          src={props.image}
          alt={props.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          quality={85}
        />
        {!props.isActive && (
          <div className="absolute top-2 right-2">
            <Badge
              variant="outline"
              className="text-xs text-red-500 bg-red-500/10 border-red-500"
            >
              Inactive
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-tight">{props.title}</CardTitle>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {dayjs(props.date).format("MMM YYYY")}
          </span>
        </div>
        {props.company?.name && (
          <CardDescription className="text-xs">
            {props.company.name}
          </CardDescription>
        )}
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
      <CardFooter className="flex gap-2 pt-4">
        <Button
          type="button"
          onClick={() => window.open(props.link?.liveLink || "#")}
          disabled={!props.isActive}
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
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 gap-2"
          aria-label={`View ${props.title} on GitHub`}
          disabled={!props.link?.githubLink || props.link?.githubLink === null}
          onClick={() => window.open(props.link?.githubLink || "#")}
          type="button"
        >
          <FaGithub className="h-3.5 w-3.5" aria-hidden="true" />
          <span>GitHub</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
