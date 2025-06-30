export const parseContentfulImage = (image: any) => {
  if (!image || !image.fields || !image.fields.file || !image.fields.file.url) {
    return null;
  }
  return {
    src: `https:${image.fields.file.url}`,
    alt: image.fields.title || "",
  };
};
