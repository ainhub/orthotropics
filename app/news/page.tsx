import { Metadata } from "next";
import contentfulClient from "@/util/contentful/contentfulClient";
import { PageSkeleton } from "@/util/contentful/types";
import NewsSection from "../components/news-section";

interface Blogs {
  slug: string;
  shortDescription: string;
  title: string;
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "News - Orthotropics",
  description: "News about Orthotropics.",
  alternates: {
    canonical: `${process.env.BASE_URL}/news`,
  },
  keywords: ["Orthotropics", "orthodontics", "Mike Mew"],
  openGraph: {
    title: "News - Orthotropics",
    images: [`${process.env.BASE_URL}/images/ogimage.png`],
    description: "News about Orthotropics.",
    type: "website",
    url: `${process.env.BASE_URL}/news`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "Orthotropics",
  },
};

const fetchBlogs = async (): Promise<Blogs[]> => {
  const contentful = contentfulClient({ preview: false });
  const blogs = await contentful.getEntries<PageSkeleton>({
    content_type: "pages",
    order: ["-sys.createdAt"],
    "fields.category.sys.contentType.sys.id": "categories",
    "fields.category.fields.slug": "news",
  });

  return blogs.items.map((item) => ({
    slug: item.fields.slug,
    shortDescription: item.fields.shortDescription
      ? item.fields.shortDescription
      : "",
    title: item.fields.title,
  }));
};

const News = async () => {
  const blogs = await fetchBlogs();
  return (
    <>
      <section className="bg-white py-24" id="news_section">
        <NewsSection news_data={blogs} />
      </section>
    </>
  );
};

export default News;
