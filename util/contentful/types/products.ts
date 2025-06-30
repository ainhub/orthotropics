import { EntryFieldTypes } from "contentful";

export type ProductSkeleton = {
  contentTypeId: "products";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    inStock: EntryFieldTypes.Boolean;
    description?: EntryFieldTypes.RichText;
    currency: EntryFieldTypes.Text;
    price1: EntryFieldTypes.Number;
    price2?: EntryFieldTypes.Number;
    productId: EntryFieldTypes.Text;
    sizes?: EntryFieldTypes.Text;
  };
};
