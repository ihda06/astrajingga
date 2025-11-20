import { Blog } from "@/types/blog";
import dayjs from "dayjs";
import Image from "next/image";
import { FaComments, FaHeart } from "react-icons/fa";

export default function BlogCard({
  title,
  cover_image,
  description,
  reading_time_minutes,
  created_at,
  comments_count,
  public_reactions_count,
}: Blog) {
  // Blur data URL for placeholder
  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

  return (
    <article className="w-full bg-white space-y-3 p-4 border h-full flex flex-col rounded-lg">
      <div className="w-full h-48 relative flex items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={cover_image}
          alt={title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover"
          quality={85}
        />
      </div>

      <div className="flex flex-col flex-1 justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex-1">
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">
            {reading_time_minutes} minutes read |{" "}
            {dayjs(created_at).format("DD/MM/YYYY")}
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <FaComments className="text-gray-500" size={10} />
              <span className="text-xs text-gray-500">{comments_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaHeart className="text-red-500" size={10} />
              <span className="text-xs text-gray-500">
                {public_reactions_count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
