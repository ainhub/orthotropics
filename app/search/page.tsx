import { Metadata } from "next";
import contentfulClient from "@/util/contentful/contentfulClient";
import { PageSkeleton } from "@/util/contentful/types";
import NewsSection from "../components/news-section";

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> => {
  return {
    title: `Results for "${searchParams?.query}" - Orthotropics`,
    metadataBase: new URL(process.env.BASE_URL as string),
    description: `Showing results for "${searchParams?.query}" - Orthotropics`,
    keywords: ["Orthotropics", "orthodontics", "Mike Mew"],
    alternates: {
      canonical: `${process.env.BASE_URL}/search?query=${searchParams?.query}`,
    },
    openGraph: {
      title: `Results for "${searchParams?.query}" - Orthotropics`,
      images: [`${process.env.BASE_URL}/images/ogimage.png`],
      description: `Showing results for "${searchParams?.query}" - Orthotropics`,
      type: "website",
      url: `${process.env.BASE_URL}/search?query=${searchParams?.query}`,
    },
    twitter: {
      card: "summary_large_image",
      creator: "Orthotropics",
    },
  };
};

const fetchItems = async (query: string) => {
  const contentful = contentfulClient({ preview: false });
  const pages = await contentful.getEntries<PageSkeleton>({
    content_type: "pages",
    limit: 500,
    "fields.title[match]": query,
  });
  return pages.items.map((item) => ({
    slug: item.fields.slug,
    shortDescription: item.fields.shortDescription
      ? item.fields.shortDescription
      : "",
    title: item.fields.title,
  }));
};

const Search = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const items = await fetchItems(searchParams?.query as string);

  return (
    <section className="bg-white py-24">
      {items.length ? (
        <NewsSection news_data={items} />
      ) : (
        <div className="w-full px-5 text-center">
          <h4 className="text-brand-lightGreen-100 font-semibold text-2xl">
            No results for &quot;{searchParams?.query}&quot;
          </h4>
        </div>
      )}
    </section>
  );
};

export default Search;
