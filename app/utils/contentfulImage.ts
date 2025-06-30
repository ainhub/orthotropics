import { parseDoc } from "@/util/contentful/parseContentfulDoc";
import { parseContentfulContentImage } from "@/util/contentful/parseContentfulImage";

export const parseImage = (image: any) => {
  const img = parseContentfulContentImage(image);
  const renderedImage = {
    alt: img?.alt,
    src: `https:${img?.src}`,
  };
  return renderedImage;
}

export const parseDocument = (document: any) => {
  const doc = parseDoc(document);
  const renderedDocument = {
    url: `https:${doc?.url}`,
    name: doc?.fileName
  }

  return renderedDocument;
}