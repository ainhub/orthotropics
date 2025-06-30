import Link from "next/link";

interface BlogProps {
  title: string;
  excerpt: string;
  url: string;
}

const BlogCard = ({ title, excerpt, url }: BlogProps) => {
  return (
    <div className="select-none h-full flex flex-col justify-between gap-16 rounded-2xl bg-brand-light-400 py-8 px-10">
      <div className="flex flex-col gap-4">
        <h5 className="text-brand-lightGreen-100 font-source-sans font-semibold text-2.5xl leading-33.6">
          {title}
        </h5>
        <p className="text-xl leading-7 text-brand-lightGreen-100 flex-1">
          {excerpt}
        </p>
      </div>
      <Link
        href={url}
        className="bg-brand-lightGreen-100 w-10 h-10 rounded-full shrink-0 inline-flex items-center justify-center text-brand-light-400"
      >
        <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
    </div>
  );
};

export default BlogCard;
