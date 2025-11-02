import Show from "@/components/utils/Show";
import { blogDetail, getBlogViews } from "@/server/actions/blog";
import MarkdownBase from "@/components/ui/MarkdownBase";
import Divider from "@/components/ui/Divider";
import { FaEye, FaHeart, FaTag } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id } = params;
  const blog = await blogDetail(id);
  const views = await getBlogViews(params.id);

  if (!blog) {
    return (
      <div>
        <h1>Blog Not Found</h1>
        <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex">
        <Link href="/blog">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 cursor-pointer items-center"
          >
            <ChevronLeft className="size-4" />
            Back
          </Button>
        </Link>
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{blog.title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">
              {blog.readable_publish_date}
            </p>
            <span className="text-gray-500">•</span>
            <p className="text-sm text-gray-500">
              {blog.reading_time_minutes} minutes read
            </p>
            <span className="text-gray-500">•</span>
            {blog.tag_list.split(",").map((tag) => (
              <div
                key={tag}
                className="text-sm flex items-center gap-2 text-gray-500 rounded-full px-2 py-1 bg-gray-100"
              >
                <FaTag className="size-2 text-gray-500" />
                <span className="text-xs">{tag}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <FaEye className="size-4 text-blue-500" /> <span>{views}</span>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <AiOutlineComment className="size-4 text-cyan-500" />{" "}
              <span>{blog.comments_count}</span>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <FaHeart className="size-4 text-red-500" />{" "}
              <span>{blog.positive_reactions_count}</span>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="w-full h-96">
        <Image
          src={blog.cover_image}
          alt={blog.title}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <Show when={!!blog.body_markdown}>
          <MarkdownBase>{blog.body_markdown}</MarkdownBase>
        </Show>
      </div>
    </div>
  );
}
