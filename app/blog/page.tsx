import { type Metadata } from "next";
import listPosts from "@/api/list-posts";
import { BlogTemplate } from "@/templates/blog";

export const metadata: Metadata = {
  title: "Welche Art von Service suchen Sie heute?",
  description: "Finden Sie hier den Service, den Sie bei Büro im Flow benötigen",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_URL}/`,
    title: "Welche Art von Service suchen Sie heute?",
    description: "Finden Sie hier den Service, den Sie bei Büro im Flow benötigen",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/imgs/logo.png`,
        alt: "Büro im Flow Logo",
      },
    ],
  },
  twitter: {
    title: "Welche Art von Service suchen Sie heute?",
    description: "Finden Sie hier den Service, den Sie bei Büro im Flow benötigen",
  },
};

const Home = async () => {
  const data = await listPosts();

  // console.log(data);

  if (!data.length) return null;

  return <BlogTemplate values={data} />;
};

export default Home;
