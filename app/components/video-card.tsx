"use client";

import Image from "next/image";
import PlayIcon from "./icons/play";

interface VideoCardProps {
  openModal: (url: string) => void;
  thumbnail: string;
  title: string;
  videoUrl: string;
}
const VideoCard = ({
  openModal,
  thumbnail,
  title,
  videoUrl,
}: VideoCardProps) => {
  const openVideoModal = () => {
    openModal(videoUrl);
  };

  return (
    <div
      className="flex flex-col gap-4 items-center text-center group"
      role="button"
      onClick={openVideoModal}
    >
      <div className="w-full rounded-3xl overflow-hidden bg-brand-light-500 bg-opacity-20 mix-blend-luminosity relative">
        <Image src={thumbnail} width={600} height={337} alt={title} />
        <PlayIcon classNames="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 fill-white hidden group-hover:inline-block transition-all" />
      </div>
      <p className="text-brand-light-400 font-semibold text-2xl leading-28.8 group-hover:text-brand-green-light transition-all duration-100">
        {title}
      </p>
    </div>
  );
};

export default VideoCard;
