import type { Metadata } from "next";
import contentfulClient from "@/util/contentful/contentfulClient";
import { PageSkeleton } from "@/util/contentful/types";
import DescriptionCard from "../components/description-card";
import Banner from "../components/banner";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "Education - Orthotropics",
  description: "Educational information about Orthotropics.",
  alternates: {
    canonical: `${process.env.BASE_URL}/education`,
  },
  keywords: ["Orthotropics", "orthodontics", "Mike Mew"],
  openGraph: {
    title: "Education - Orthotropics",
    images: [`${process.env.BASE_URL}/images/ogimage.png`],
    description: "Educational information about Orthotropics.",
    type: "website",
    url: `${process.env.BASE_URL}/education`,
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

const Education = async () => {
  const pages = await fetchPages();
  const educationPages = pages?.filter((page: any) => {
    return page.fields.category.fields.slug === "education";
  });
  return (
    <>
      <section className="bg-white py-24">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {educationPages?.map((page: any) => (
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

export default Education;
