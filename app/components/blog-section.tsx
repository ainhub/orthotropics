import Link from "next/link";
import Carousel from "./carousel";

interface Blogprops {
  title: string;
  shortDescription: string;
  slug: string;
}
interface BlogSectionProps {
  slides: Blogprops[];
}

const BlogSection = ({ slides }: BlogSectionProps) => {
  return (
    <section className="py-24">
      <div className="mx-auto w-full flex items-center justify-between gap-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4.5xl leading-44 text-brand-lightGreen-100 font-semibold">
          Latest news and blogs
        </h2>
        <Link
          href="/news"
          className="inline-flex items-center gap-2 group text-lg text-brand-dark-500"
        >
          View all
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-all">
            arrow_forward
          </span>
        </Link>
      </div>
      <Carousel slides={slides} />
    </section>
  );
};

export default BlogSection;
