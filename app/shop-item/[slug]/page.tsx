import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import contentfulClient from "@/util/contentful/contentfulClient";
import { parseImage } from "@/app/utils/contentfulImage";
import { ProductSkeleton } from "@/util/contentful/types/products";
import ProductCard from "@/app/components/product-card";

const fetchItem = async (slug: string) => {
  const contentful = contentfulClient({ preview: false });
  const data = await contentful
    .getEntries<ProductSkeleton>({
      content_type: "products",
      "fields.slug": slug,
    })
    .then((data) => {
      return data.items[0];
    })
    .catch(() => {
      return undefined;
    });
  return data;
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  try {
    const product = await fetchItem(params.slug);

    if (!product) {
      return {
        title: "Product Not Found",
        description: "The product you're looking for doesn't exist.",
      };
    }
    return {
      title: `${product.fields.name} - Orthotropics`,
      metadataBase: new URL(process.env.BASE_URL as string),
      description: `Shop ${product.fields.name} only for ${product.fields.currency}${product.fields.price1} on Orthotropics`,
      keywords: [
        "Orthotropics",
        "orthodontics",
        "Mike Mew",
        "event",
        "Orthotropics event",
        product.fields.name,
      ],
      alternates: {
        canonical: `${process.env.BASE_URL}/shop-item/${params.slug}`,
      },
      openGraph: {
        title: `${product.fields.name} - Orthotropics`,
        images: [
          product.fields.image
            ? parseImage(product.fields.image).src
            : `${process.env.BASE_URL}/images/ogimage.png`,
        ],
        description: `Shop ${product.fields.name} only for ${product.fields.currency}${product.fields.price1} on Orthotropics`,
        type: "website",
        url: `${process.env.BASE_URL}/shop-item/${params.slug}`,
      },
      twitter: {
        card: "summary_large_image",
        creator: "Orthotropics",
      },
    };
  } catch (error) {
    return {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist",
    };
  }
};

export default async function ShopItemDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = await fetchItem(params.slug);

  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.title}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
          />
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        const product = node.data.target;
        return (
          <div className="md:max-w-sm">
            <ProductCard
              image={parseImage(product.fields.image).src}
              imageAlt={parseImage(product.fields.image).alt as string}
              title={product.fields.name}
              inStock={product.fields.inStock}
              sizes={product.fields.sizes}
              currency={product.fields.currency}
              price1={product.fields.price1}
              price2={product.fields.price2}
              productId={product.fields.productId}
              slug={product.fields.slug}
            />
          </div>
        );
      },
    },
  };

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white py-24">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {product?.fields.description && (
          <div
            className="
                w-full
                prose
                max-w-none
                prose-p:text-lg
                prose-p:text-brand-lightGreen-100
                prose-headings:font-semibold
                prose-headings:text-2xl
                prose-headings:leading-[26.4px]
                prose-headings:text-brand-lightGreen-100
                prose-strong:text-brand-lightGreen-100
                prose-strong:font-source-serif
                prose-strong:font-semibold
                prose-li:text-brand-lightGreen-100
                prose-li:text-lg
                prose-a:text-brand-lightGreen-100
                prose-a:underline-offset-2
                prose-a:font-source-serif
              "
          >
            {documentToReactComponents(product.fields.description, options)}
          </div>
        )}

        <div className="mt-8">
          <p className="text-center text-brand-lightGreen-200 text-sm font-semibold">
            Please note that orders outside of the United Kingdom may incur
            customs charges payable by the purchaser
          </p>
        </div>
      </div>
    </div>
  );
}
