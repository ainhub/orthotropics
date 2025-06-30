import { EntryFieldTypes } from "contentful";

export type CategorySkeleton = {
  contentTypeId: "categories";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
};