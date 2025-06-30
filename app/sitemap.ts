import contentfulClient from "@/util/contentful/contentfulClient";
import { PageSkeleton } from "@/util/contentful/types";
import { EventSkeleton } from "@/util/contentful/types/events";
import { ProductSkeleton } from "@/util/contentful/types/products";

export default async function sitemap() {
  const baseUrl = process.env.BASE_URL;
  const contentful = contentfulClient({ preview: false });

  const pages = await contentful
    .getEntries<PageSkeleton>({
      content_type: "pages",
      order: ["sys.createdAt"],
      limit: 500,
    })
    .then((data) => {
      return data.items;
    })
    .catch(() => {
      return null;
    });

  const events = await contentful
    .getEntries<EventSkeleton>({
      content_type: "events",
      order: ["sys.createdAt"],
      limit: 500,
    })
    .then((data) => {
      return data.items;
    })
    .catch(() => {
      return null;
    });

  const products = await contentful
    .getEntries<ProductSkeleton>({
      content_type: "products",
      order: ["sys.createdAt"],
      limit: 500,
    })
    .then((data) => {
      return data.items;
    })
    .catch(() => {
      return null;
    });

  const dynamicPages: any = pages?.map((page: any) => {
    return {
      url: `${baseUrl}/${page?.fields.slug}`,
      changeFrequency: "weekly",
      lastModified: page.sys.updatedAt,
      priority: 1,
    };
  });

  const dynamicEvents: any = events?.map((event: any) => {
    return {
      url: `${baseUrl}/event/${event?.fields.slug}`,
      changeFrequency: "weekly",
      lastModified: event.sys.updatedAt,
      priority: 0.8,
    };
  });

  const dynamicProducts: any = products?.map((product: any) => {
    return {
      url: `${baseUrl}/shop-item/${product?.fields.slug}`,
      changeFrequency: "weekly",
      lastModified: product.sys.updatedAt,
      priority: 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/discover`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/education`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/mewing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/science`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/timeline`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/themightyme`,
      lastModified: new Date(),
    },
    ...dynamicPages,
    ...dynamicEvents,
    ...dynamicProducts,
  ];
}
