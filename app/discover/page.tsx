import contentfulClient from "@/util/contentful/contentfulClient";
import { PageSkeleton } from "@/util/contentful/types";
import type { Metadata } from "next";
import Banner from "../components/banner";
import DescriptionCard from "../components/description-card";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "Discover - Orthotropics",
  description: "Practical guidance about Orthotropics.",
  alternates: {
    canonical: `${process.env.BASE_URL}/discover`,
  },
  keywords: ["Orthotropics", "orthodontics", "Mike Mew"],
  openGraph: {
    title: "Discover - Orthotropics",
    images: [`${process.env.BASE_URL}/images/ogimage.png`],
    description: "Practical guidance about Orthotropics.",
    type: "website",
    url: `${process.env.BASE_URL}/discover`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "Orthotropics",
  },
};

const fetchPages = async () => {
  const contentful = contentfulClient({ preview: false });
  const pages = await contentful.getEntries<PageSkeleton>({
    content_type: "pages",
    order: ["sys.createdAt"],
  });
  return pages.items;
};

const Discover = async () => {
  const pages = await fetchPages();
  const discoverPages = pages?.filter((page: any) => {
    return page.fields.category.fields.slug === "discover";
  });

  return (
    <>
      <section className="bg-white py-24">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {discoverPages?.map((page: any) => (
            <DescriptionCard
              key={page?.fields.slug}
              title={page?.fields.title}
              description={page?.fields.shortDescription}
              link={page?.fields.slug}
            />
          ))}
        </div>
      </section>
      <Banner
        anchorTitle="Find a practitioner"
        anchorUrl="/find-orthotropics"
        anchorVariant="yellow"
        backgroundColor="white"
        hasLogo={false}
        title="Find an Orthotropics practitioner near you"
        variant="darker"
      />
    </>
  );
};

export default Discover;
