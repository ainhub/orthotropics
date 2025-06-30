"use client";

import { useState } from "react";
import VideoModal from "./modal/video-modal";
import VideoCard from "./video-card";

const VideosSection = () => {
  const [selectedEmbedUrl, setEmbedUrl] = useState<string | null>(null);

  const openModal = (url: string) => {
    setEmbedUrl(url);
  };
  return (
    <>
      <section className="py-24 bg-brand-lightGreen-100">
        <div className="mx-auto w-full flex flex-col gap-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-brand-light-400 font-semibold text-4.5xl leading-44">
            Dental practitioners on Orthotropics
          </h2>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-16">
            <VideoCard
              thumbnail="/images/video-thumb-1.jpeg"
              title="Dr. Victor Avis explains Orthotropics"
              videoUrl="https://www.youtube.com/embed/0rGcYgP9vLI?width=640&height=360&autoplay=1&origin=https%3A%2F%2Forthotropics.com"
              openModal={(url) => openModal(url)}
            />
            <VideoCard
              thumbnail="/images/video-thumb-2.png"
              title="Orthotropics by Indianapolis dentists Dr. Marla Wilson & Dr. Gordon Klockow"
              videoUrl="https://www.youtube.com/embed/2Rflh3ZN1as?width=640&height=360&autoplay=1&origin=https%3A%2F%2Forthotropics.com"
              openModal={(url) => openModal(url)}
            />
          </div>
        </div>
      </section>
      {selectedEmbedUrl && (
        <VideoModal
          closeModal={() => setEmbedUrl(null)}
          embedUrl={selectedEmbedUrl}
        />
      )}
    </>
  );
};

export default VideosSection;
