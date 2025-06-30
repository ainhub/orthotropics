"use client";
import { useState } from "react";
import BlogCard from "./blog-card";

interface Blogs {
  slug: string;
  shortDescription: string;
  title: string;
}
interface BlogProps {
  news_data: Blogs[];
}

const NewsSection = ({ news_data }: BlogProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news_data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(news_data.length / itemsPerPage);
  const ScrollIntoItemsSection = () => {
    const ItemsSection = document.getElementById("news_section");
    setTimeout(() => {
      ItemsSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    ScrollIntoItemsSection();
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    ScrollIntoItemsSection();
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {currentItems.map((data) => (
          <BlogCard
            key={data.slug}
            url={data.slug}
            excerpt={data.shortDescription}
            title={data.title}
          />
        ))}
      </div>
      <div className="inline-flex justify-center items-center mt-16 w-full">
        <div className="inline-flex items-center justify-center md:gap-10 gap-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`bg-brand-lightGreen-100 text-white px-6 py-2 md:text-base text-sm rounded-3xl inline-flex items-center gap-2 transition-all duration-300 group ${
              currentPage === 1 ? "opacity-20" : "opacity-100 "
            }`}
          >
            {" "}
            <span
              className={`material-symbols-outlined rotate-180 ${
                currentPage === 1
                  ? ""
                  : "group-hover:-translate-x-2 duration-300 transition-transform"
              } `}
            >
              arrow_forward
            </span>
            Previous{" "}
          </button>
          <p
            className={`${
              news_data.length <= itemsPerPage
                ? "hidden"
                : "w-full text-center text-xl text-brand-lightGreen-100 block"
            }`}
          >
            {currentPage}/{totalPages}
          </p>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages ? "opacity-20" : "opacity-100 "
            } bg-brand-lightGreen-100 text-white px-6 py-2 md:text-base text-sm rounded-3xl inline-flex items-center gap-2 transition-all duration-300 group`}
          >
            Next{" "}
            <span
              className={`material-symbols-outlined  ${
                currentPage === totalPages
                  ? ""
                  : "group-hover:translate-x-2 transition-transform duration-300"
              }`}
            >
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default NewsSection;
