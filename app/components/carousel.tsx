"use client";

import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import BlogCard from "./blog-card";

interface BlogProps {
  slug: string;
  shortDescription: string;
  title: string;
}
type slideTypes = BlogProps;

interface CarouselProps {
  slides: slideTypes[];
  options?: {
    align: "left" | "center" | "right";
    dragFree?: boolean;
    containScroll: string | boolean;
  };
}

const Carousel = ({ slides }: CarouselProps) => {
  const [carouselRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="relative w-full max-w-min mx-auto">
        <div className="embla py-16" ref={carouselRef}>
          <div className="embla__container w-full" role="list">
            {slides.map((slide, index) => (
              <div
                className="embla__slide md:min-w-96 max-w-full"
                role="listitem"
                key={index}
              >
                <BlogCard
                  title={slide.title}
                  url={slide.slug}
                  excerpt={slide.shortDescription}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 lg:px-10 sm:px-6 px-4">
          <button
            onClick={scrollPrev}
            type="button"
            className="shrink-0 w-10 h-10 text-brand-dark-200 rounded-full bg-brand-light-400 focus:outline-none inline-flex items-center justify-center p-2"
          >
            <span className="material-symbols-outlined -scale-x-100">
              arrow_forward
            </span>
          </button>
          <button
            onClick={scrollNext}
            type="button"
            className="shrink-0 w-10 h-10 text-brand-dark-200 rounded-full bg-brand-light-400 focus:outline-none inline-flex items-center justify-center p-2"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
