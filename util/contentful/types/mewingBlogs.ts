import { EntryFieldTypes } from "contentful";

export type MewingBlogSkeleton = {
  contentTypeId: "blog";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    excerpt: EntryFieldTypes.Text;
    body: EntryFieldTypes.Text;
    heroImage?: EntryFieldTypes.AssetLink;
  };
};
