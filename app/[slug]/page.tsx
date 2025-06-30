import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import moment from "moment";
import { BLOCKS } from "@contentful/rich-text-types";
import Banner from "../components/banner";
import Image from "next/image";
import contentfulClient from "@/util/contentful/contentfulClient";
import { PageSkeleton } from "@/util/contentful/types";
import { parseDocument, parseImage } from "@/app/utils/contentfulImage";

const fetchPage = async (slug: string) => {
  const contentful = contentfulClient({ preview: false });
  const data = await contentful
    .getEntries<PageSkeleton>({
      content_type: "pages",
      "fields.slug": slug,
    })
    .then((data) => {
      return data.items[0];
    })
    .catch(() => {
      return undefined;
    });
  return data;
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  try {
    const page = await fetchPage(params.slug);

    if (!page) {
      return {
        title: "Page Not Found",
        description: "The page you're looking for doesn't exist.",
      };
    }
    return {
      title: `${
        page.fields.metaTitle ? page.fields.metaTitle : page.fields.title
      } - Orthotropics`,
      metadataBase: new URL(process.env.BASE_URL as string),
      description: page.fields.metaDescription
        ? page.fields.metaDescription
        : "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
      keywords: page.fields.keywords
        ? [page.fields.keywords]
        : ["Orthotropics", "orthodontics", "Mike Mew"],
      alternates: {
        canonical: `${process.env.BASE_URL}/${params.slug}`,
      },
      openGraph: {
        title: `${
          page.fields.metaTitle ? page.fields.metaTitle : page.fields.title
        } - Orthotropics`,
        images: [
          page?.fields.metaImage
            ? parseImage(page.fields.metaImage).src
            : page.fields.heroImage
            ? parseImage(page.fields.heroImage).src
            : `${process.env.BASE_URL}/images/ogimage.png`,
        ],
        description: page.fields.metaDescription
          ? page.fields.metaDescription
          : "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
        type: "website",
        url: `${process.env.BASE_URL}/${params.slug}`,
      },
      twitter: {
        card: "summary_large_image",
        creator: "Orthotropics",
      },
    };
  } catch (error) {
    return {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist",
    };
  }
};

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const page: any = await fetchPage(params.slug);

  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.title}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
          />
        );
      },
    },
  };

  if (!page) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: page?.fields.title,
    image: page.fields.heroImage
      ? `${parseImage(page.fields.heroImage).src}?w=1200`
      : `${process.env.BASE_URL}/images/ogimage.png`,
    publisher: {
      "@type": "Organization",
      name: "Orthotropics",
      url: process.env.BASE_URL,
    },
    url: `${process.env.BASE_UR}/${params.slug}`,
    dateCreated: page?.sys.createdAt,
    datePublished: page?.sys.updatedAt,
    dateModified: page?.sys.updatedAt,
    description: page?.fields.metaDescription
      ? page?.fields.metaDescription
      : "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
    author: {
      "@type": "Person",
      name: page.fields.author
        ? page?.fields.author?.fields.name
        : "Orthotropics",
      image: null,
    },
    keywords: null,
    mainEntityOfPage: page?.fields.title,
    articleBody: documentToHtmlString(page?.fields.body),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {page?.fields.heroImage && (
            <Image
              src={parseImage(page?.fields.heroImage).src}
              alt={parseImage(page?.fields.heroImage).alt || ""}
              width={1100}
              height={300}
              className="w-full mb-4"
            />
          )}
          {page?.fields.publishedDate && (
            <div className="mx-auto w-full max-w-screen-xl inline-flex items-center text-brand-lightGreen-100 py-5">
              <p>{moment(page?.fields.publishedDate).format("MMM DD,YYYY")}</p>
              {/* {page?.fields.author && (
                <p>
                  {" "}
                  -- by{" "}
                  <Link
                    href={page?.fields.author.fields.slug}
                    className="hover:underline"
                  >
                    {page.fields.author.fields.name}
                  </Link>
                </p>
              )} */}
            </div>
          )}
          {page?.fields.pdf ? (
            <object
              data={`https://drive.google.com/viewerng/viewer?embedded=true&url=${
                parseDocument(page?.fields.pdf).url
              }`}
              type="application/pdf"
              className="aspect-[4/3] md:max-w-[800px] h-[500px] w-full"
            >
              <embed
                src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${
                  parseDocument(page?.fields.pdf).url
                }`}
                type="application/pdf"
              />
            </object>
          ) : (
            page?.fields.body && (
              <div
                className="
                w-full
                prose
                max-w-none
                prose-p:text-lg
                prose-p:text-brand-lightGreen-100
                prose-headings:font-semibold
                prose-headings:text-2xl
                prose-headings:leading-[26.4px]
                prose-headings:text-brand-lightGreen-100
                prose-strong:text-brand-lightGreen-100
                prose-strong:font-source-serif
                prose-strong:font-semibold
                prose-li:text-brand-lightGreen-100
                prose-li:text-lg
                prose-a:text-brand-lightGreen-100
                prose-a:underline-offset-2
                prose-a:font-source-serif
              "
              >
                {documentToReactComponents(page?.fields.body, options)}
                {page?.fields.iframeUrl && (
                  <iframe
                    src={page.fields.iframeUrl}
                    className="w-full border-0 md:aspect-video aspect-square rounded-2xl mt-8"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            )
          )}
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
}
