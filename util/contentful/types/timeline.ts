import { EntryFieldTypes } from "contentful";
import { PageSkeleton } from "./pages";

export type TimelineSkeleton = {
  contentTypeId: "timeline";
  fields: {
    title: EntryFieldTypes.Text;
    posts: EntryFieldTypes.EntryLink<PageSkeleton>[];
  };
};
