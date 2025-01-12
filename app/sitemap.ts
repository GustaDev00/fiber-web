import type { MetadataRoute } from "next";
import C from "@/constants";

export const revalidate = 60;
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const { services } = C.data;

  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/uber-uns`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/dienstleistungen`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...services.map((service) => ({
      url: `${process.env.NEXT_PUBLIC_URL}${service.link}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
