import { MetadataRoute } from "next";
import { getBlogs } from "@/server/actions/blog";
import { projects, experiences } from "@/const/projects";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ihda-anwari.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blog posts
  const blogs = await getBlogs();
  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: blog.edited_at || blog.published_at || new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Get all projects
  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Get all experiences
  const experienceEntries: MetadataRoute.Sitemap = experiences.map((exp) => ({
    url: `${baseUrl}/experience/${exp.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...blogEntries, ...projectEntries, ...experienceEntries];
}

