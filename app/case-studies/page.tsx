import type { Metadata } from "next";
import contentfulClient from "@/util/contentful/contentfulClient";
import { parseContentfulContentImage } from "@/util/contentful/parseContentfulImage";
import { CaseStudySkeleton } from "@/util/contentful/types/caseStudies";
import ImageGallery from "../components/ImageGallery";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "Case Studies - Orthotropics",
  description:
    "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
  alternates: {
    canonical: `${process.env.BASE_URL}/case-studies`,
  },
  keywords: ["Orthotropics", "orthodontics", "Mike Mew"],
  openGraph: {
    title: "Case Studies - Orthotropics",
    images: [`${process.env.BASE_URL}/images/ogimage.png`],
    description:
      "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
    type: "website",
    url: `${process.env.BASE_URL}/case-studies`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "Orthotropics",
  },
};

const fetchCaseStudies = async () => {
  const contentful = contentfulClient({ preview: false });
  const pages = await contentful.getEntries<CaseStudySkeleton>({
    content_type: "caseStudies",
    order: ["sys.createdAt"],
  });
  return pages.items;
};

const CaseStudies = async () => {
  const caseStudies = await fetchCaseStudies();

  let caseStudiesImageData: any = [];

  if (caseStudies.length) {
    caseStudies.forEach((caseStudy) => {
      const description = caseStudy.fields.title;
      const image = parseContentfulContentImage(caseStudy.fields.image);
      caseStudiesImageData.push({
        description: description,
        original: image?.src as string,
        thumbnail: `https:${image?.src}?w=300&h=300&fit=thumb`,
        originalAlt: image?.alt as string,
        thumbnailAlt: image?.alt as string,
      });
    });
  }

  return (
    <div className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ImageGallery items={caseStudiesImageData} />
      </div>
    </div>
  );
};

export default CaseStudies;
