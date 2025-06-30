"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import useOnclickOutside from "react-cool-onclickoutside";
import { Entry } from "contentful";
import CalendarComponent from "./calendar";
import { EventSkeleton } from "@/util/contentful/types/events";
import { parseImage } from "../utils/contentfulImage";

interface EventPageProps {
  events: Entry<EventSkeleton, undefined, string>[] | undefined;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventPage = ({ events }: EventPageProps) => {
  const [filteredEvents, setFilteredEvents] = useState<
    Entry<EventSkeleton, undefined, string>[] | undefined
  >([]);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [noEventsMessage, setNoEventsMessage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("Upcoming");
  const [showResetButton, setShowResetButton] = useState<boolean>(false);

  const clickOutside = useOnclickOutside(() => {
    setDropdownOpen(false);
  });

  const filterEvents = () => {
    const filtered: any = events?.filter(
      (event: any) => event.fields.startDate > moment().format()
    );

    if (filtered?.length) {
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
      setNoEventsMessage("There are no upcoming events.");
    }
  };

  const fetchTodaysEvents = () => {
    const formattedDate = moment(new Date()).format("YYYY-MM-DD");
    const updatedEvents: any = events?.filter((event: any) =>
      event.fields.startDate.includes(formattedDate)
    );
    setFilteredEvents(updatedEvents);
    if (!updatedEvents.length) {
      setNoEventsMessage("There are no events today");
    } else {
      setNoEventsMessage(null);
    }
    setShowResetButton(true);
  };

  const resetFilters = () => {
    filterEvents();
    setSelectedDate("Upcoming");
    setShowResetButton(false);
    setNoEventsMessage(null);
  };

  const handleDayUpdate = (day: Value) => {
    const formattedDate = moment(new Date(day as Date)).format("YYYY-MM-DD");
    const updatedEvents: any = events?.filter((event: any) =>
      event.fields.startDate.includes(formattedDate)
    );
    setSelectedDate(
      moment(new Date(day as Date))
        .format("MMMM DD, YYYY")
        .toString()
    );
    setFilteredEvents(updatedEvents);
    if (!updatedEvents.length) {
      setNoEventsMessage(
        `There are no events on ${moment(new Date(day as Date))
          .format("MMMM DD, YYYY")
          .toString()}`
      );
    } else {
      setNoEventsMessage(null);
    }
    setShowResetButton(true);
  };

  useEffect(() => {
    filterEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="text-brand-lightGreen-100 font-semibold inline-flex items-center gap-2 border border-brand-lightGreen-100 py-2 px-4 text-sm rounded hover:text-white hover:bg-brand-lightGreen-100 transition-all"
          onClick={fetchTodaysEvents}
        >
          Today
        </button>
        <div className="relative" ref={clickOutside}>
          <div
            className="flex items-center gap-1"
            role="button"
            onClick={() => setDropdownOpen((value) => !value)}
          >
            <h2 className="font-semibold text-3xl text-brand-lightGreen-100">
              {selectedDate}
            </h2>
            <span
              className={`material-symbols-outlined transition-all text-brand-lightGreen-100 ${
                isDropdownOpen ? "-rotate-180" : ""
              }`}
            >
              keyboard_arrow_down
            </span>
          </div>
          {isDropdownOpen && (
            <CalendarComponent
              classNames="absolute md:min-w-80 min-w-64 md:left-0 right-0 top-12"
              updateDay={handleDayUpdate}
            />
          )}
        </div>
        {showResetButton && (
          <button
            type="button"
            className="text-brand-lightGreen-100 font-medium text-sm hover:underline"
            onClick={resetFilters}
          >
            Reset
          </button>
        )}
      </div>

      <div className="flex flex-col gap-10 w-full py-20">
        {noEventsMessage && (
          <div className="w-full rounded-lg bg-brand-lightGreen-50 p-4 text-center">
            <p className="text-brand-lightGreen-100 font-medium text-lg">
              {noEventsMessage}
            </p>
          </div>
        )}
        {noEventsMessage === "There are no upcoming events." && (
          <h3 className="text-3xl font-semibold text-neutral-900">
            Latest Past Events
          </h3>
        )}
        {filteredEvents?.map((event: any, index: number) => (
          <div key={index} className="flex flex-col">
            <p className="flex items-center text-neutral-800 after:content-[''] after:bg-neutral-700 font-medium text-lg after:block after:h-px after:ml-5 after:flex-auto">
              {moment(event.fields.startDate).format("MMMM YYYY")}
            </p>
            <div className="w-full py-8 flex items-start justify-around md:gap-16 gap-4">
              <div className="flex flex-col gap-2 items-center text-center">
                <span className="uppercase text-sm text-gray-500 font-semibold">
                  {moment(event.fields.startDate).format("ddd")}
                </span>
                <span className="font-semibold text-neutral-800 text-2xl">
                  {moment(event.fields.startDate).format("DD")}
                </span>
              </div>
              <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-5">
                <Image
                  priority={true}
                  src={parseImage(event.fields.banner).src}
                  alt={parseImage(event.fields.banner).alt as string}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="md:order-first col-span-2 flex flex-col gap-3">
                  <span className="font-light text-neutral-800 text-base">
                    {`${moment(event.fields.startDate).format(
                      "Do MMMM YYYY @ h:mm a"
                    )} - ${moment(event.fields.endDate).format(
                      "Do MMMM YYYY @ h:mm a"
                    )}`}
                  </span>
                  <Link
                    href={`/event/${event.fields.slug}`}
                    className="hover:underline"
                  >
                    <h4 className="text-neutral-900 font-semibold text-2xl">
                      {event.fields.title}
                    </h4>
                  </Link>
                  <p className="text-base text-neutral-800 font-normal">
                    {event.fields.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventPage;
