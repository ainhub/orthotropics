import { EntryFieldTypes } from "contentful";

export type AuthorSkeleton = {
  contentTypeId: "author";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
};
