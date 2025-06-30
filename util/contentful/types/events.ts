import { EntryFieldTypes } from "contentful";

export type EventSkeleton = {
  contentTypeId: "events";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    startDate: EntryFieldTypes.Date;
    endDate: EntryFieldTypes.Date;
    shortDescription: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    metaImage?: EntryFieldTypes.AssetLink;
    banner?: EntryFieldTypes.AssetLink;
    body: EntryFieldTypes.RichText;
    registerLink?: EntryFieldTypes.Text;
    flyerLink?: EntryFieldTypes.Text;
    googleCalendarLink: EntryFieldTypes.RichText;
    iCalenderLink: EntryFieldTypes.RichText;
    outlook365Link: EntryFieldTypes.RichText;
    outlookLiveLink: EntryFieldTypes.RichText;
  };
};
