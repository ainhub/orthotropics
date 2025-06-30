import type { Metadata } from "next";
import contentfulClient from "@/util/contentful/contentfulClient";
import Banner from "../components/banner";
import { ProductSkeleton } from "@/util/contentful/types/products";
import ProductCard from "../components/product-card";
import { parseImage } from "../utils/contentfulImage";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "Shop - Orthotropics",
  description: "Shop Orthotropics products from our official site.",
  alternates: {
    canonical: `${process.env.BASE_URL}/shop`,
  },
  keywords: [
    "Orthotropics",
    "orthodontics",
    "Mike Mew",
    "Shop Orthotropics",
    "Shop orthotropics products",
  ],
  openGraph: {
    title: "Shop - Orthotropics",
    images: [`${process.env.BASE_URL}/images/ogimage.png`],
    description: "Shop Orthotropics products from our official site.",
    type: "website",
    url: `${process.env.BASE_URL}/shop`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "Orthotropics",
  },
};

const fetchProducts = async () => {
  const contentful = contentfulClient({ preview: false });
  const data = await contentful.getEntries<ProductSkeleton>({
    content_type: "products",
    order: ["sys.createdAt"],
  });
  return data.items.reverse();
};

const Shop = async () => {
  const products = await fetchProducts();
  return (
    <div className="py-24 bg-white">
      <section className="w-full">
        <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {products.map((product: any) => (
            <ProductCard
              key={product.fields.slug}
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
          ))}
        </div>
      </section>
      <Banner
        anchorTitle="Click here"
        anchorUrl="https://docs.google.com/forms/d/e/1FAIpQLSceDW0nc3AjRNpyo2bDqnCiW9XINzdUjN0bvaYHbg4rUkbXIw/viewform?usp=sharing"
        anchorVariant="yellow"
        backgroundColor="transparent"
        hasLogo={false}
        title="Suggest a product for our upcoming Mewing Shop!"
        variant="darker"
      />
    </div>
  );
};

export default Shop;
