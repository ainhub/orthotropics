import type { Metadata } from "next";
import moment from "moment";
import contentfulClient from "@/util/contentful/contentfulClient";
import { EventSkeleton } from "@/util/contentful/types/events";
import EventPage from "../components/event-page";

const fetchEvents = async () => {
  const contentful = contentfulClient({ preview: false });
  const data = await contentful.getEntries<EventSkeleton>({
    content_type: "events",
    order: ["fields.startDate"],
    limit: 500,
  });

  if (data.items.length) {
    return data.items;
  }
};

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const events = await fetchEvents();

    let title = "";

    if (events?.length) {
      const firstDate = moment(events[0].fields.startDate).format(
        "MMMM DD YYYY"
      );
      const lastDate = moment(
        events[events.length - 1].fields.startDate
      ).format("MMMM DD YYYY");
      title = `Events from ${firstDate} - ${lastDate} - Orthotropics`;
    } else {
      title = "Events - Orthotropics";
    }

    return {
      title: title,
      metadataBase: new URL(process.env.BASE_URL as string),
      description:
        "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
      keywords: [
        "Orthotropics",
        "orthodontics",
        "Mike Mew",
        "Orthotropics events",
      ],
      alternates: {
        canonical: `${process.env.BASE_URL}/events`,
      },
      openGraph: {
        title: title,
        images: [`${process.env.BASE_URL}/images/ogimage.png`],
        description:
          "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
        type: "website",
        url: `${process.env.BASE_URL}/events`,
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

const Events = async () => {
  const events = await fetchEvents();

  return (
    <div className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <EventPage events={events} />
      </div>
    </div>
  );
};

export default Events;
