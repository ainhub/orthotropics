import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import moment from "moment";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import contentfulClient from "@/util/contentful/contentfulClient";
import { parseImage } from "@/app/utils/contentfulImage";
import { EventSkeleton } from "@/util/contentful/types/events";
import Anchor from "@/app/components/anchor";
import AddToCalendar from "@/app/components/add-to-calendar";

const fetchEvent = async (slug: string) => {
  const contentful = contentfulClient({ preview: false });
  const data = await contentful
    .getEntries<EventSkeleton>({
      content_type: "events",
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
    const event = await fetchEvent(params.slug);

    if (!event) {
      return {
        title: "Event Not Found",
        description: "The event you're looking for doesn't exist.",
      };
    }
    return {
      title: `${event.fields.title} - Orthotropics`,
      metadataBase: new URL(process.env.BASE_URL as string),
      description: event.fields.shortDescription,
      keywords: [
        "Orthotropics",
        "orthodontics",
        "Mike Mew",
        "event",
        "Orthotropics event",
        event.fields.title,
      ],
      alternates: {
        canonical: `${process.env.BASE_URL}/event/${params.slug}`,
      },
      openGraph: {
        title: `${event.fields.title} - Orthotropics`,
        images: [
          event?.fields.metaImage
            ? parseImage(event.fields.metaImage).src
            : event.fields.banner
            ? parseImage(event.fields.banner).src
            : `${process.env.BASE_URL}/images/ogimage.png`,
        ],
        description: event.fields.shortDescription,
        type: "website",
        url: `${process.env.BASE_URL}/event/${params.slug}`,
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

export default async function EventDetails({
  params,
}: {
  params: { slug: string };
}) {
  const event = await fetchEvent(params.slug);

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

  if (!event) {
    notFound();
  }

  let calendarLinks = {
    google: "",
    icalendar: "",
    outlook365: "",
    outlooklive: "",
  };

  if (event) {
    calendarLinks = {
      google: event.fields.googleCalendarLink.content[0].content[1].data.uri,
      icalendar: event.fields.iCalenderLink.content[0].content[1].data.uri,
      outlook365: event.fields.outlook365Link.content[0].content[1].data.uri,
      outlooklive: event.fields.outlookLiveLink.content[0].content[1].data.uri,
    };
  }

  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-5">
              <span className="font-light text-neutral-800 text-base">
                {`${moment(event.fields.startDate).format(
                  "Do MMMM YYYY @ h:mm a"
                )} - ${moment(event.fields.endDate).format(
                  "Do MMMM YYYY @ h:mm a"
                )}`}
              </span>
              <AddToCalendar links={calendarLinks} />
            </div>
            {event.fields.banner && (
              <Image
                src={parseImage(event.fields.banner).src}
                alt={parseImage(event.fields.banner).alt as string}
                width={800}
                height={400}
                className="w-full md:max-w-3xl h-auto"
              />
            )}
          </div>
          {event?.fields.body && (
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
              {documentToReactComponents(event?.fields.body, options)}
            </div>
          )}

          <div className="flex max-w-full items-center gap-4 flex-wrap">
            {event.fields.flyerLink && (
              <Anchor
                link={event.fields.flyerLink}
                text="Download Flyer"
                variant="light-green"
              />
            )}

            {event.fields.registerLink && (
              <Anchor
                link={event.fields.registerLink}
                text="Register Now"
                variant="yellow"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
