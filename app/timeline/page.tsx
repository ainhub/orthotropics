import type { Metadata } from "next";
import dynamic from "next/dynamic";
import contentfulClient from "@/util/contentful/contentfulClient";
import { PageSkeleton, TimelineSkeleton } from "@/util/contentful/types";
import { parseImage } from "../utils/contentfulImage";

const TimelineComponent = dynamic(() => import("../components/timeline"), {
  ssr: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "Timeline - Orthotropics",
  description:
    "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
  alternates: {
    canonical: `${process.env.BASE_URL}/timeline`,
  },
  keywords: ["Orthotropics", "orthodontics", "Mike Mew"],
  openGraph: {
    title: "Timeline - Orthotropics",
    images: [`${process.env.BASE_URL}/images/ogimage.png`],
    description:
      "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
    type: "website",
    url: `${process.env.BASE_URL}/timeline`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "Orthotropics",
  },
};

const fetchTimeline = async () => {
  const contentful = contentfulClient({ preview: false });
  const timeline = await contentful.getEntries<TimelineSkeleton>({
    content_type: "timeline",
    order: ["sys.createdAt"],
  });
  return timeline.items;
};

const Timeline = async () => {
  const timeline = await fetchTimeline();
  const reversedTimeline = timeline.reverse();
  let timelineItems: any = [];

  reversedTimeline.forEach((element) => {
    let timelineObject: any = {
      title: element.fields.title,
      items: [],
    };
    const title = element.fields.title;
    const items: PageSkeleton[] = element.fields.posts;
    if (items?.length) {
      items.forEach((item: PageSkeleton) => {
        timelineObject.items.push({
          cardTitle: item.fields.title,
          media: item.fields.metaImage
            ? {
                type: "IMAGE",
                source: {
                  url: parseImage(item.fields.metaImage).src,
                },
              }
            : {
                type: "IMAGE",
                source: {
                  url: "/images/orthotropics-backdrop.png",
                },
              },
          slug: item.fields.slug,
        });
      });
    }
    timelineItems.push(timelineObject);
  });

  return (
    <div className="bg-white">
      <TimelineComponent items={timelineItems} />
    </div>
  );
};

export default Timeline;
