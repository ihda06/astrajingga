import axios from "axios";
import { Blog, BlogDetail, BlogDetailAuthenticated } from "@/types/blog";

export async function getBlogs() {
  try {
    const blogs = await axios.get<Blog[]>(
      "https://dev.to/api/articles?username=ihda06"
    );
    return blogs.data;
  } catch {
    // Return empty array as fallback instead of throwing
    return [];
  }
}

export async function blogDetail(id: string) {
  try {
    const blog = await axios.get<BlogDetail>(
      `https://dev.to/api/articles/${id}`
    );
    return blog.data;
  } catch {
    // Return null as fallback instead of throwing
    return null;
  }
}

export async function getBlogViews(id: string) {
  try {
    const views = await axios.get<BlogDetailAuthenticated[]>(
      `https://dev.to/api/articles/me`,
      {
        headers: {
          "api-key": process.env.DEV_TO_API_KEY,
        },
      }
    );
    const article = views.data.find((article) => article.id === Number(id));
    return article?.page_views_count || 0;
  } catch {
    // Return 0 as fallback instead of throwing
    return 0;
  }
}
