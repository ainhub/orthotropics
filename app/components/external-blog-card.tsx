import Image from "next/image";
import PoundIcon from "./icons/pound";
import CalendarIcon from "./icons/calendar";
import ClockIcon from "./icons/clock";
import Link from "next/link";
import { generateReadingTime } from "../utils/readingTime";

interface CardProps {
  slug: string;

  image?: {
    src: string;
    alt: string;
  } | null;
  body?: string;
  title: string;
  excerpt: string;
  authorName?: string;
  price?: string;
  date?: string;
}

const ExternalBlogCard = ({
  slug,
  image,
  body,
  title,
  excerpt,
  authorName,
  price,
  date,
}: CardProps) => {
  return (
    <>
      <Link href={slug} target="_blank" rel="noreferrer">
        <div className="rounded-2xl bg-brand-light-400 overflow-hidden">
          <Image
            className="w-full h-72 object-cover object-center"
            src={image?.src || ""}
            alt={image?.alt || title}
            width={300}
            height={100}
          />
          <div className="p-6 flex flex-col gap-3 text-primary-blue">
            {body && (
              <div className="flex items-center gap-2">
                <ClockIcon classNames="fill-brand-lightGreen-100" />
                <span className="text-sm text-brand-lightGreen-200">
                  {generateReadingTime(body)}
                </span>
              </div>
            )}
            {price && (
              <div className="flex items-center gap-2">
                <PoundIcon classNames="h-6 w-6" />
                <span className="text-sm text-brand-lightGreen-200">
                  {price}
                </span>
              </div>
            )}
            {date && (
              <div className="flex items-center gap-2">
                <CalendarIcon classNames="h-6 w-6" />
                <span className="text-sm text-brand-lightGreen-200">
                  {date}
                </span>
              </div>
            )}
            <h4 className="text-xl font-semibold text-brand-lightGreen-100">
              {title}
            </h4>
            <p className="text-base text-brand-lightGreen-200 flex-1">
              {excerpt}
            </p>
            {authorName && (
              <p className="text-base text-brand-lightGreen-100">
                By <strong>{authorName}</strong>
              </p>
            )}
          </div>
        </div>
      </Link>
      {/* {type === "external" ? (
        <a href={slug} target="_blank" rel="noreferrer">
          <div className="rounded-2xl bg-primary-lightsky overflow-hidden">
            {image ? (
              <Image
                className="w-full h-60 object-cover object-center"
                src={image?.src || ""}
                alt={image?.alt || title}
                width={300}
                height={100}
              />
            ) : (
              <></>
            )}
            <div className="p-6 flex flex-col gap-3 text-primary-blue">
              {body && (
                <div className="flex items-center gap-2">
                  <ClockIcon classNames="fill-primary-blue" />
                  <span className="text-sm text-primary-blue/90">
                    {generateReadingTime(body)}
                  </span>
                </div>
              )}
              {price && (
                <div className="flex items-center gap-2">
                  <PoundIcon classNames="text-xl" />
                  <span className="text-sm text-primary-blue/90">{price}</span>
                </div>
              )}
              {date && (
                <div className="flex items-center gap-2">
                  <CalendarIcon classNames="" />
                  <span className="text-sm text-primary-blue/90">{date}</span>
                </div>
              )}
              <h4 className="text-xl font-semibold">{title}</h4>
              <p className="text-base text-primary-blue/90 flex-1">{excerpt}</p>
              {authorName && (
                <p className="text-base">
                  By <strong>{authorName}</strong>
                </p>
              )}
            </div>
          </div>
        </a>
      ) : (
        <Link href={`/blog/${slug}`}>
          <div className="rounded-2xl bg-primary-lightsky overflow-hidden">
            <Image
              className="w-full h-60 object-cover object-center"
              src={image?.src || ""}
              alt={image?.alt || title}
              width={300}
              height={100}
            />
            <div className="p-6 flex flex-col gap-3 text-primary-blue">
              {body && (
                <div className="flex items-center gap-2">
                  <ClockIcon classNames="fill-primary-blue" />
                  <span className="text-sm text-primary-blue/90">
                    {generateReadingTime(body)}
                  </span>
                </div>
              )}
              <h4 className="text-xl font-semibold">{title}</h4>
              <p className="text-base text-primary-blue/90 flex-1">{excerpt}</p>
              <p className="text-base">
                By <strong>{authorName}</strong>
              </p>
            </div>
          </div>
        </Link>
      )} */}
    </>
  );
};

export default ExternalBlogCard;
