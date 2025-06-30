import { PageSkeleton } from "@/util/contentful/types";
import { EntryLink } from "contentful";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string | undefined;
  featureList: any;
  guidanceTitle: string | undefined;
  url: string | undefined;
}

const FeatureCard = ({
  title,
  description,
  featureList,
  guidanceTitle,
  url,
}: CardProps) => {
  return (
    <div className="bg-brand-light-100 rounded-2xl p-8 flex flex-col gap-16">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-4.5xl leading-44 text-brand-lightGreen-100">
          {title}
        </h3>
        <p className="text-xl text-brand-lightGreen-100 leading-[30px]">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        {featureList?.map((feature: PageSkeleton, index: number) => (
          <Link
            key={index}
            href={feature.fields.slug?.toString()}
            className="flex items-center gap-4 group text-brand-lightGreen-100 text-2xl leading-[26.4px] font-semibold"
          >
            <span className="shrink-0 w-10 h-10 rounded-full bg-brand-green-dark rounded-full inline-flex items-center justify-center material-symbols-outlined text-brand-light-400">
              <span className="group-hover:translate-x-0.5 transition-all">
                arrow_forward
              </span>
            </span>
            <span className="underline">
              {feature.fields.title?.toString()}
            </span>
          </Link>
        ))}
      </div>
      <Link
        href={url || ""}
        className="flex items-center gap-2 text-brand-dark-500 text-xl leading-[30px] group"
      >
        <span className="underline underline-offset-4">{guidanceTitle}</span>
        {url ? '<span className="material-symbols-outlined group-hover:translate-x-1 transition-all">arrow_forward</span>' : ''}
        
      </Link>
    </div>
  );
};

export default FeatureCard;
