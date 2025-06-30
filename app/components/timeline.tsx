"use client";

import Image from "next/image";
import Link from "next/link";
import { Chrono } from "react-chrono";
import EyeIcon from "./icons/eye";

interface TimelineProps {
  items: {
    title: string;
    items: any;
  }[];
}

const TimelineComponent = ({ items }: TimelineProps) => {
  return (
    <Chrono
      slideShow
      slideItemDuration={4000}
      cardHeight={500}
      allowDynamicUpdate
      enableOutline
      scrollable
      enableQuickJump={false}
      enableLayoutSwitch={false}
      mode="VERTICAL_ALTERNATING"
      theme={{
        primary: "#1D4953",
        secondary: "white",
        cardBgColor: "white",
        cardForeColor: "#1D4953",
        titleColor: "#1D4953",
        titleColorActive: "#1D4953",
      }}
    >
      {items.map((item: any, index: number) => (
        <div
          className="w-full flex flex-col gap-4 bg-white relative"
          key={index}
        >
          <div className="w-full bg-white sticky -top-1 p-4 z-[1]">
            <h4 className="font-semibold text-xl text-brand-lightGreen-200">
              {item.title}
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-9 p-4">
            {item.items.map((detail: any) => (
              <Link
                key={detail.slug}
                className="w-full flex flex-col group gap-2"
                href={`/${detail.slug}`}
              >
                <div className="relative group">
                  <Image
                    src={detail.media.source.url}
                    width={400}
                    height={900}
                    alt={detail.cardTitle}
                    className="w-full object-cover object-center md:h-80 h-64"
                  />
                  <div className="absolute inset-0 bg-brand-lightGreen-100/90 hidden group-hover:flex items-center justify-center">
                    <EyeIcon classNames="w-6 fill-white" />
                  </div>
                </div>
                <h5 className="text-brand-lightGreen-100 font-source-sans font-medium text-lg group-hover:underline">
                  {detail.cardTitle}
                </h5>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Chrono>
  );
};

export default TimelineComponent;
