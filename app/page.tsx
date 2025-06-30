import contentfulClient from "@/util/contentful/contentfulClient";
import Banner from "./components/banner";
import BlogSection from "./components/blog-section";
//import Features from "./components/features";
import FeaturesDad from "./components/featurs-dad";
//import VideosSection from "./components/videos";
import { PageSkeleton } from "@/util/contentful/types";

interface Blogs {
  slug: string;
  shortDescription: string;
  title: string;
}

const fetchPagesWithFeatures = async () => {
  const contentful = contentfulClient({ preview: false });
  const pages = await contentful.getEntries<PageSkeleton>({
    content_type: "pages",
    order: ["sys.createdAt"],
    limit: 500,
  });
  return pages.items;
};

const fetchBlogs = async (): Promise<Blogs[]> => {
  const contentful = contentfulClient({ preview: false });
  const blogs = await contentful.getEntries<PageSkeleton>({
    content_type: "pages",
    order: ["-sys.createdAt"],
    "fields.category.sys.contentType.sys.id": "categories",
    "fields.category.fields.slug": "news",
    limit: 7,
  });

  return blogs.items.map((item) => ({
    slug: item.fields.slug,
    shortDescription: item.fields.shortDescription
      ? item.fields.shortDescription
      : "",
    title: item.fields.title,
  }));
};

export default async function Home() {
  const pages = await fetchPagesWithFeatures();
  const blogs = await fetchBlogs();

  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    image: `${process.env.BASE_URL}/images/ogimage.png`,
    name: "The International Association of Facial Growth Guidance (Orthotropics®) - Orthotropic",
    url: process.env.BASE_URL,
    logo: `${process.env.BASE_URL}/images/ogimage.png`,
    description:
      "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
    sameAs: [
      "http://www.facebook.com/Orthotropics",
      "https://twitter.com/Orthotropics",
      "http://www.youtube.com/Orthotropics",
      "http://www.linkedin.com/in/orthotropics",
      "http://www.reddit.com/user/Orthotropics",
    ],
    email: "info@orthotropics.com",
    telephone: "+44 20 8660 3695",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      {/*<Features pages={pages} />*/}
      <FeaturesDad pages={pages} />
      {/*<VideosSection />
      <Banner
        anchorTitle="Become a member"
        anchorUrl="/register"
        anchorVariant="yellow"
        backgroundColor="brand-light-400"
        hasLogo
        title="Join the International Association of Facial Growth Guidance"
        variant="dark"
      />
      <BlogSection slides={blogs} />*/}
     {/* <Banner
        anchorTitle="Find a practitioner"
        anchorUrl="/find-orthotropics"
        anchorVariant="yellow"
        backgroundColor="transparent"
        hasLogo
        title="Find an Orthotropics practitioner near you"
        variant="light"
      />*/}
    </>
  );
}
