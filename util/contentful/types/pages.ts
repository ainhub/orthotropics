import { EntryFieldTypes } from "contentful";
import { CategorySkeleton } from "./categories";
import { AuthorSkeleton } from "./author";

export type PageSkeleton = {
  contentTypeId: "pages";
  fields: {
    body: EntryFieldTypes.RichText;
    category: EntryFieldTypes.EntryLink<CategorySkeleton>;
    heroImage?: EntryFieldTypes.AssetLink;
    iframeUrl?: EntryFieldTypes.Text;
    keywords?: EntryFieldTypes.Text;
    metaDescription?: EntryFieldTypes.Text;
    metaImage?: EntryFieldTypes.AssetLink;
    metaTitle: EntryFieldTypes.Text;
    shortDescription?: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    publishedDate?: EntryFieldTypes.Date;
    author?: EntryFieldTypes.EntryLink<AuthorSkeleton>;
    pdf?: EntryFieldTypes.AssetLink;
  };
};
