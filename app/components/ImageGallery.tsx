"use client";

import ReactImageGallery from "react-image-gallery";

interface GalleryProps {
  items: any;
}

const ImageGallery = ({ items }: GalleryProps) => {
  return (
    <ReactImageGallery
      items={items}
      showNav={false}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay
    />
  );
};

export default ImageGallery;
