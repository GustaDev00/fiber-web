import type { MetadataRoute } from "next";
import C from "@/constants";
import listPosts from "@/api/list-posts";

export const revalidate = 60;
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { services } = C.data;
  const posts = await listPosts();

  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/uber-uns/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/dienstleistungen/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...services.map((service) => ({
      url: `${process.env.NEXT_PUBLIC_URL}${service.link}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    {
      url: `${process.env.NEXT_PUBLIC_URL}/blog/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...posts.map((post) => ({
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.json.link}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
