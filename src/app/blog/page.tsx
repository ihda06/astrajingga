import { getBlogs } from "@/server/actions/blog";
import Link from "next/link";
import BlogCard from "./_components/BlogCard";
import MainHeader from "./_components/MainHeader";

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <>
      <MainHeader />
      <div aria-live="polite" aria-atomic="true">
        {blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          <>
            <span className="sr-only">
              Loaded {blogs.length} blog {blogs.length === 1 ? "post" : "posts"}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`}>
                  <BlogCard {...blog} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
