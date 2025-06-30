import { EntryFieldTypes } from "contentful";

export type CaseStudySkeleton = {
  contentTypeId: "caseStudies";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
};
