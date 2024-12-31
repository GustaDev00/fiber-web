import { Metadata } from "next";
import C from "@/constants";
import { ServicesTemplate } from "@/templates/services";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const { pages } = C;

  return pages.map(({ link }) => ({
    slug: link,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

  const { slug } = await params;
  const { pages } = C;
  const page = pages.find(({ link }) => link === slug);

  if (!page) {
    return {
      title: "Nicht gefunden",
      description: "Seite nicht gefunden",
    };
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      url: `${BASE_URL}/${slug}`,
      title: page.title,
      description: page.description,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/imgs/logo.png`,
          alt: "Fiber Web Logo",
        },
      ],
    },
    twitter: {
      title: page.title,
      description: page.description,
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const { pages } = C;
  const page = pages.find(({ link }) => link === slug);

  console.log("page2", page, slug);

  if (!page) {
    notFound();
    return null;
  }

  return <ServicesTemplate {...page} />;
};

export default Page;
